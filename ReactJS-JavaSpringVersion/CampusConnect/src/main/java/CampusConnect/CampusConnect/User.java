package CampusConnect.CampusConnect;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "first_name", nullable = false)  // Maps to first_name in the database
    private String firstName;

    @Column(name = "last_name", nullable = false)  // Maps to last_name in the database
    private String lastName;

    @Column(nullable = false, unique = true)
    private String mavid;  // Mav ID field

    @Column(nullable = true)
    private String college;

    @Column(nullable = false)
    private String major;

    @Column(name = "gradyear", nullable = false)
    private String gradYear;  // Graduation year field

    @Column(nullable = false)
    private String bio;

    @Column(nullable = false)
    private String connections;


    // Getters and Setters for all fields
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMavid() {
        return mavid;
    }

    public void setMavid(String mavid) {
        this.mavid = mavid;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getMajor() {
        return major;
    }

    public String getBio() {
        return bio;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getGradyear() {
        return gradYear;
    }

    public void setGradyear(String gradYear) {
        this.gradYear = gradYear;
    }

    public void setConnections(String connections) {
        this.connections = connections;
    }

    public String getConnections() {
        return connections;
    }
}
