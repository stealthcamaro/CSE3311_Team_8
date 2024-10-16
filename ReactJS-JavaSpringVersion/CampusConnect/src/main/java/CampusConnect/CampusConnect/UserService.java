package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(String email, String password, String mavID, String firstName, String lastName, String college, String major, String graduationYear) {
        // Check if the user already exists
        if (userRepository.findByEmail(email) != null) {
            throw new RuntimeException("User already exists with this email: " + email);
        }

        // Encrypt the password before saving
        String encryptedPassword = passwordEncoder.encode(password);

        // Create a new User object
        User user = new User();
        user.setEmail(email);
        user.setPassword(encryptedPassword); // Store encrypted password
        user.setMavID(mavID);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setCollege(college);
        user.setMajor(major);
        user.setGraduationYear(graduationYear);

        // Save user to the database
        return userRepository.save(user);
    }
}
