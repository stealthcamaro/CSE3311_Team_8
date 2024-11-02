// package CampusConnect.CampusConnect;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;

// @Entity
// @Table(name = "users")
// public class User {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String email;
//     private String password; // Raw password, no encryption initially
//     private String mavID; // Updated field name
//     private String firstName; // Updated field name
//     private String lastName; // Updated field name
//     private String college;
//     private String major;
//     private String graduationYear; // Updated field name

//     // Getters and setters
//     // (Same as before, but include the new field names)
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public String getMavID() {
//         return mavID;
//     }

//     public void setMavID(String mavID) {
//         this.mavID = mavID;
//     }

//     public String getFirstName() {
//         return firstName;
//     }

//     public void setFirstName(String firstName) {
//         this.firstName = firstName;
//     }

//     public String getLastName() {
//         return lastName;
//     }

//     public void setLastName(String lastName) {
//         this.lastName = lastName;
//     }

//     public String getCollege() {
//         return college;
//     }

//     public void setCollege(String college) {
//         this.college = college;
//     }

//     public String getMajor() {
//         return major;
//     }

//     public void setMajor(String major) {
//         this.major = major;
//     }

//     public String getGraduationYear() {
//         return graduationYear;
//     }

//     public void setGraduationYear(String graduationYear) {
//         this.graduationYear = graduationYear;
//     }
// }


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

    @Column(nullable = false)
    private String college;

    @Column(nullable = false)
    private String major;

    @Column(name = "gradyear", nullable = false)
    private String gradyear;  // Graduation year field

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

    public void setMajor(String major) {
        this.major = major;
    }

    public String getGradyear() {
        return gradyear;
    }

    public void setGradyear(String gradyear) {
        this.gradyear = gradyear;
    }
}