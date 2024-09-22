package CampusConnect.CampusConnect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RegistrationController {
    private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);
    @Autowired
    private EmailService emailService;
    private Map<String, String> otpStorage = new HashMap<>(); // Temporary store for email and OTP

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Validate email format (consider using a regex or validation library)
        if (!isValidEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Invalid email format.");
        }

        // Generate OTP
        String otp = String.valueOf((int)(Math.random() * 900000) + 100000);
        otpStorage.put(user.getEmail(), otp);
        emailService.sendOtp(user.getEmail(), otp);

        return ResponseEntity.ok("OTP sent to email. Please verify.");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOtp(@RequestBody OtpVerificationRequest otpRequest) {
        String email = otpRequest.getEmail();
        String otp = otpRequest.getOtp();
        String storedOtp = otpStorage.get(email);

        if (storedOtp != null && storedOtp.equals(otp)) {
            otpStorage.remove(email); // OTP verified, remove from storage
            logger.info("OTP verified for {}", email);
            return ResponseEntity.ok("OTP verified successfully.");
        } else {
            logger.warn("Invalid OTP attempt for {}", email);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid OTP.");
        }
    }

    private boolean isValidEmail(String email) {
        // Basic email validation (consider a more robust regex)
        return email != null && email.matches("^[A-Za-z0-9._%+-]+@(mavs\\.uta\\.edu|uta\\.edu)$");
    }
}
