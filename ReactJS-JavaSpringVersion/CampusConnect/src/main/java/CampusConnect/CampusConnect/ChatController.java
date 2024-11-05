package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    // Endpoint to send a message with added exception handler
    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody ChatMessage chatMessage) {
        try {
            chatService.saveMessage(chatMessage);
            return ResponseEntity.ok("Message sent successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending message: " + e.getMessage());
        }
    }

    // Endpoint to get all messages for the authenticated user
    @GetMapping("/user")
    public ResponseEntity<List<ChatMessage>> getUserMessages(Authentication authentication) {
        Long userId = ((User) authentication.getPrincipal()).getId();
        List<ChatMessage> messages = chatService.getMessagesByUserId(userId);
        return ResponseEntity.ok(messages);
    }

    // ChatController.java

    @GetMapping("/messages/user/{userId}")
    public ResponseEntity<List<ChatMessage>> getUserMessages(@PathVariable Long userId) {
        List<ChatMessage> messages = chatService.getMessagesByUserId(userId);
        return ResponseEntity.ok(messages);
    }


    // Endpoint to get messages between two users
    @GetMapping("/messages/{senderId}/{recipientId}")
    public ResponseEntity<List<ChatMessage>> getMessagesBetweenUsers(
            @PathVariable Long senderId,
            @PathVariable Long recipientId) {
        List<ChatMessage> messages = chatService.getMessagesBetweenUsers(senderId, recipientId);
        return ResponseEntity.ok(messages);
    }

    @GetMapping("/test")
    public ResponseEntity<String> testConnection() {
        try {
            List<ChatMessage> messages = chatService.getAllMessages();
            return ResponseEntity.ok("Connection successful, retrieved messages: " + messages.size());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
}
