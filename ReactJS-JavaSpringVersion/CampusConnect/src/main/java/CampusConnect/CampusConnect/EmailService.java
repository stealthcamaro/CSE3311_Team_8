package CampusConnect.CampusConnect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);
    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendOtp(String toEmail, String otp) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("OTP Verification");
            message.setText("Your OTP code is: " + otp);
            mailSender.send(message);
            logger.info("OTP sent to {}", toEmail);
        } catch (Exception e) {
            logger.error("Failed to send OTP to {}: {}", toEmail, e.getMessage());
            throw new RuntimeException("Error sending OTP email");
        }
    }
}
