package CampusConnect.CampusConnect;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "connections")
public class Connection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "connected_user_id", nullable = false)
    private Integer connectedUserId;

    @Column(name = "status", nullable = false)
    private String status; // "pending" or "accepted"

    @Column(name = "created_at", nullable = false, updatable = false)
    private Timestamp createdAt;

    @Column(name = "updated_at", nullable = false)
    private Timestamp updatedAt;

    // Default constructor
    public Connection() {}

    // Parameterized constructor
    public Connection(Integer userId, Integer connectedUserId, String status, Timestamp createdAt, Timestamp updatedAt) {
        this.userId = userId;
        this.connectedUserId = connectedUserId;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getConnectedUserId() {
        return connectedUserId;
    }

    public void setConnectedUserId(Integer connectedUserId) {
        this.connectedUserId = connectedUserId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Timestamp updatedAt) {
        this.updatedAt = updatedAt;
    }
}
