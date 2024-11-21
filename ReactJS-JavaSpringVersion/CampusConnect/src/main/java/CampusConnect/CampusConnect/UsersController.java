// package CampusConnect.CampusConnect;

// public class UsersController {
    
// }


package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UserService userService;

    // Endpoint to create a post
    // @PostMapping("/create")
    // public ResponseEntity<Post> createPost(@RequestBody PostRequest postRequest) {
    //     Post post = postService.createPost(postRequest.getUserId(), postRequest.getContent());
    //     return ResponseEntity.ok(post);
    // }

    // Endpoint to get all posts for a user
    // @GetMapping("/user/{userId}")
    // public ResponseEntity<List<Post>> getUserPosts(@PathVariable Long userId) {
    //     List<Post> posts = userService.getUserPosts(userId);
    //     return ResponseEntity.ok(posts);
    // }

    // Endpoint to get all posts for the feed
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }


    // A simple request object to capture post data
    // static class PostRequest {
    //     private Long userId;
    //     private String content;

    //     public Long getUserId() {
    //         return userId;
    //     }

    //     public void setUserId(Long userId) {
    //         this.userId = userId;
    //     }

    //     public String getContent() {
    //         return content;
    //     }

    //     public void setContent(String content) {
    //         this.content = content;
    //     }
    // }
}
