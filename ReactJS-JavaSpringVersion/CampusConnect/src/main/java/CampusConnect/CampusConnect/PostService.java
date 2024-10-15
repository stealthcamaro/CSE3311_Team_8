package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    // Create a new post
    public Post createPost(Long userId, String content) {
        Post post = new Post();
        post.setUserId(userId);
        post.setContent(content);
        post.setCreatedAt(OffsetDateTime.now());
        return postRepository.save(post);
    }

    // Get all posts for a user
    public List<Post> getUserPosts(Long userId) {
        return postRepository.findAllByUserId(userId);
    }

    // Get all posts (for feed purposes)
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // Delete a post by its ID
    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }
}