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
    private final PostService postService;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, UserService userService, PostService postService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.postService = postService;
    }

    //needs return an "ok" response to the front end -> use 'return ResponseEntity.ok().n=body(Body: "login Successful")'
    //the RequestBody LoginRequest class must match the json data being received from front end.
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        if (!loginRequest.getEmail().endsWith("@mavs.uta.edu")) {
            return ResponseEntity.badRequest().body("Email must be from the school domain");
        }
        User user = userService.loginUser(loginRequest);
        if(user != null){
            // send back important data for profile rendering
            // send back 
            //major 
            //Grad year
            //Biography
            String m = user.getMajor();
            System.out.println(m);

            return ResponseEntity.ok().body(user); 
        } /// returns an exception when a failure is reached
        else{
            return ResponseEntity.badRequest().body("Login failure");
        }
        
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        if (!registerRequest.getEmail().endsWith("@mavs.uta.edu")) {
            return ResponseEntity.badRequest().body("Email must be from the school domain");
        }

        userService.registerUser(registerRequest); /// returns an exception when a failure is reached
    
        return ResponseEntity.ok().body("Registration successful"); 
    }
    
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody UpdateRequest updateRequest) {
        System.out.println("Debug6");
        System.out.println(updateRequest.getConnections());
        userService.updateUser(updateRequest);
        System.out.println("Debug7 update succesfull");

        return ResponseEntity.ok().body("Update successful"); 
    }

    @PostMapping("/postU")
    public ResponseEntity<?> postU(@RequestBody PostUploadRequest postUploadRequest) {
        //System.out.println("ehehjdjd--------debug-------------");
        System.out.println(postUploadRequest.getEmail());
        System.out.println(postUploadRequest.getContent());

        postService.postUpload(postUploadRequest);

        return ResponseEntity.ok().body("Upload successful"); 
    }

    @PostMapping("/findConnection")
    public ResponseEntity<?> findConnection(@RequestBody FindConnectionRequest findConnectionRequest) {
       
       
        if(userService.findConnection(findConnectionRequest)){
            System.out.println("Debug5.55");
            return ResponseEntity.ok().body("Find successful"); 
        }
       

       return ResponseEntity.badRequest().body("Find failure");
    }

}

