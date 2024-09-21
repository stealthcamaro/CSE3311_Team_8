package CampusConnect.CampusConnect;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React
@RestController
    public class HelloController {
        @GetMapping("/hello")
        public String sayHello() {
            return "Hello, CampusConnect!";
        }
    }

