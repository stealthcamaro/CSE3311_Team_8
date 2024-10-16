package CampusConnect.CampusConnect;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Optional: You can add custom query methods if needed, for example:
    User findByEmail(String email);
}
