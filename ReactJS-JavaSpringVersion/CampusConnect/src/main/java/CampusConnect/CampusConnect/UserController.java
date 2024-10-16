package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    // Endpoint to register a new user
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserRequest userRequest) {
        User user = userService.registerUser(
                userRequest.getEmail(),
                userRequest.getPassword(),
                userRequest.getMavID(),
                userRequest.getFirstName(),
                userRequest.getLastName(),
                userRequest.getCollege(),
                userRequest.getMajor(),
                userRequest.getGraduationYear()
        );
        return ResponseEntity.ok(user);
    }
}
