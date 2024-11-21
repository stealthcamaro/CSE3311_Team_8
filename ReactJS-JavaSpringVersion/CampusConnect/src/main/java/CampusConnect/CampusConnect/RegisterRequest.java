package CampusConnect.CampusConnect;

public class RegisterRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String mavid;
    private String college;
    private String major;
    private String gradyear;
    private String bio;
    private String connections;

    // Constructors
    public RegisterRequest() {}

    public RegisterRequest(String email, String password, String firstName, String lastName, String mavid, String college, String major, String gradyear, String bio, String connections) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mavid = mavid;
        this.college = college;
        this.major = major;
        this.bio = bio;
        this.gradyear = gradyear;
        this.connections = connections;
    }

    // Getters and Setters
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

    public String getBio() {
        return bio;
    }

    public void setBio(String bio){
        this.bio = bio;
    }


    public String getGradyear() {
        return gradyear;
    }

    public void setGradyear(String gradyear) {
        this.gradyear = gradyear;
    }

    public String getConnections() {
        return connections;
    }

    public void setConnections(String connections) {
        this.connections = connections;
    }
}
