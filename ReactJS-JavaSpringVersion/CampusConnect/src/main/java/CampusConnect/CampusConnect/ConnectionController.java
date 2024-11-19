package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

// ConnectionController.java
@RestController
@RequestMapping("/connections")
public class ConnectionController {

    @Autowired
    private ConnectionRepository connectionRepository;

    @PostMapping("/request")
    public ResponseEntity<?> sendConnectionRequest(@RequestParam int userId, @RequestParam int connectUserId) {
        System.out.println("userId: " + userId + ", connectUserId: " + connectUserId); // debug statement
        // Check if the connection already exists
        if (connectionRepository.existsByUserIdAndConnectedUserId(userId, connectUserId)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Connection request already sent");
        }

        Connection connection = new Connection();
        connection.setUserId(userId);
        connection.setConnectedUserId(connectUserId);
        connection.setStatus("pending");
        connection.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        connection.setUpdatedAt(new Timestamp(System.currentTimeMillis()));

        connectionRepository.save(connection);

        return ResponseEntity.ok("Connection request sent");
    }

    @PostMapping("/accept")
    public ResponseEntity<?> acceptConnectionRequest(@RequestParam int userId, @RequestParam int connectUserId) {
        Connection connection = connectionRepository.findByUserIdAndConnectedUserId(userId, connectUserId);

        if (connection == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Connection request not found");
        }

        connection.setStatus("accepted");
        connection.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
        connectionRepository.save(connection);

        return ResponseEntity.ok("Connection request accepted");
    }

}
