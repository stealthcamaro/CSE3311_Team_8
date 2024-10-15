package CampusConnect.CampusConnect;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    // Optionally, add custom queries here
    List<Post> findAllByUserId(Long userId);
}