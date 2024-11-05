package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // Attempt authentication and log the request
            System.out.println("Attempting login for user: " + loginRequest.getEmail());
            System.out.println("Email: " + loginRequest.getEmail());
            System.out.println("Password: " + loginRequest.getPassword());
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

            // Set the authentication in the SecurityContext
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Fetch the authenticated user's details
            User user = userService.findUserByEmail(loginRequest.getEmail());
            System.out.println("Login successful for user: " + user.getEmail());

            // Return user details in response (excluding sensitive data like password)
            return ResponseEntity.ok().body(new UserResponse(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName()));
        } catch (AuthenticationException e) {
            System.out.println("Login failed for user: " + loginRequest.getEmail() + " - Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        if (!registerRequest.getEmail().endsWith("@mavs.uta.edu")) {
            return ResponseEntity.badRequest().body("Email must be from the school domain");
        }

        userService.registerUser(registerRequest);
        return ResponseEntity.ok().body("Registration successful");
    }
}
