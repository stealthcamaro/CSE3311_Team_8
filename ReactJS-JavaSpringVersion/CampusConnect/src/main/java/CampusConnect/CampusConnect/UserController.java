package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/search")
    public ResponseEntity<?> searchUserByEmail(@RequestParam String email) {
        User user = userRepository.findByEmail(email);  // Directly retrieve the User object

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/suggestions")
    public ResponseEntity<List<User>> getSuggestions(
            @RequestParam String major,
            @RequestParam String gradYear) {
        List<User> suggestions = userRepository.findByMajorAndGradYear(major, gradYear);
        return ResponseEntity.ok(suggestions);
    }

}
