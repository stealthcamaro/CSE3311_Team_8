package CampusConnect.CampusConnect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    @Autowired
    // private PostRepository postRepository;
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // Create a new post
    // public Post createPost(Long userId, String content) {
    //     Post post = new Post();
    //     post.setUserId(userId);
    //     post.setContent(content);
    //     post.setCreatedAt(OffsetDateTime.now());
    //     return postRepository.save(post);
    // }

    public void postUpload(PostUploadRequest request){
        Post post = new Post();
        post.setEmail(request.getEmail());
        post.setContent(request.getContent());
        post.setCreatedAt(OffsetDateTime.now());

        postRepository.save(post);

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

    public List<Post> getPostsByEmail(String email) {
        return postRepository.findAllByEmail(email);
    }
}