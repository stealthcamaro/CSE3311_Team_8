package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    // Endpoint to create a post
    // @PostMapping("/create")
    // public ResponseEntity<Post> createPost(@RequestBody PostRequest postRequest) {
    //     Post post = postService.createPost(postRequest.getUserId(), postRequest.getContent());
    //     return ResponseEntity.ok(post);
    // }

    // Endpoint to get all posts for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Post>> getUserPosts(@PathVariable Long userId) {
        List<Post> posts = postService.getUserPosts(userId);
        return ResponseEntity.ok(posts);
    }

    // Endpoint to get all posts for the feed
    @GetMapping("/feed")
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    // Endpoint to delete a post by ID
    @DeleteMapping("/delete/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable Long postId) {
        postService.deletePost(postId);
        return ResponseEntity.noContent().build();
    }

    // A simple request object to capture post data
    static class PostRequest {
        private Long userId;
        private String content;

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }
    }
}