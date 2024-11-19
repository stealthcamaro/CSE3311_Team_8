package CampusConnect.CampusConnect;

import org.springframework.data.jpa.repository.JpaRepository;

// ConnectionRepository.java
public interface ConnectionRepository extends JpaRepository<Connection, Integer> {
    boolean existsByUserIdAndConnectedUserId(int userId, int connectedUserId);
    Connection findByUserIdAndConnectedUserId(int userId, int connectUserId);
}

