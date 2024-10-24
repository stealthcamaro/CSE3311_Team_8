package CampusConnect.CampusConnect;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")  // Avoid using 'user' as table name
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String password;
    private String firstName;  // Add this field
    private String lastName;   // Add this field

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

    public String getFirstName() {  // Getter for firstName
        return firstName;
    }

    public void setFirstName(String firstName) {  // Setter for firstName
        this.firstName = firstName;
    }

    public String getLastName() {  // Getter for lastName
        return lastName;
    }

    public void setLastName(String lastName) {  // Setter for lastName
        this.lastName = lastName;
    }
}
