package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    // Save a chat message to the database
    public ChatMessage saveMessage(ChatMessage chatMessage) {
        System.out.println("Message: " + chatMessage.getMessage());
        return chatMessageRepository.save(chatMessage);
    }

    // Retrieve all chat messages from the database
    public List<ChatMessage> getAllMessages() {
        return chatMessageRepository.findAll();
    }

    // Retrieve chat messages between two users (senderId and recipientId)
    public List<ChatMessage> getMessagesBetweenUsers(Long senderId, Long recipientId) {
        return chatMessageRepository.findBySenderIdAndRecipientId(senderId, recipientId);
    }
}
