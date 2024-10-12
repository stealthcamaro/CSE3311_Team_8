package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

//    // Endpoint to send a message
//    @PostMapping("/send")
//    public ResponseEntity<ChatMessage> sendMessage(@RequestBody ChatMessage chatMessage) {
//        ChatMessage savedMessage = chatService.saveMessage(chatMessage);
//        return ResponseEntity.ok(savedMessage);
//    }

    // Endpoint to send a message with added exception handler
    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestBody ChatMessage chatMessage) {
        try {
            // Your existing logic to save the message
            chatService.saveMessage(chatMessage);
            return ResponseEntity.ok("Message sent successfully");
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error sending message: " + e.getMessage());
        }
    }


    // Endpoint to get all messages (ensure you test this one)
    @GetMapping("/messages/all")  // changed from /messages to /messages/all
    public ResponseEntity<List<ChatMessage>> getAllMessages() {
        List<ChatMessage> messages = chatService.getAllMessages();
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
            // Example: Retrieve all messages
            List<ChatMessage> messages = chatService.getAllMessages(); // Assuming this method exists
            return ResponseEntity.ok("Connection successful, retrieved messages: " + messages.size());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }



}
