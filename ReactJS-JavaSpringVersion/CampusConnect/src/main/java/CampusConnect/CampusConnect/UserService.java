package CampusConnect.CampusConnect;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Constructor-based injection
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void registerUser(RegisterRequest request) {
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setMavid(request.getMavid());
        user.setCollege(request.getCollege());
        user.setMajor(request.getMajor());
        user.setBio(request.getBio());
        user.setGradyear(request.getGradyear());


        //we know this saves the user 
            //but we dont how the backend chesk for success/failure
        userRepository.save(user); //this is were our user gets saved to the database

    }

    public User loginUser(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        
        // Check if user exists and the passwords match
        if (user != null && user.getPassword().equals(request.getPassword())) {
            // by default this doesnt have to do anything 
                //defualt is set success
            return user;
        }
        else{   //dont login
            return null;
        }

        //we need to figure out exactly whats being done by userrepository.save during a failure
        

        
        //return false; // Login failed
    }

    public boolean updateUser(UpdateRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        
        // Check if user exists and the passwords match
        if (user != null) {
            
            //System.out.println("User found --------------------------------- ");
            //System.out.println(user.getCollege());
            // by default this doesnt have to do anything 
            user.setBio(request.getBio());
            userRepository.save(user);
                //defualt is set success
            return true;
        }
        
        return false;
    }
}
