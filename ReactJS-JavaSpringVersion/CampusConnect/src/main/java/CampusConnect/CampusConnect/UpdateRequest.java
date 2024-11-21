package CampusConnect.CampusConnect;

public class UpdateRequest {
    private String email;
    private String bio;
    private String connections;

    public UpdateRequest() {}


    public UpdateRequest(String email, String bio, String connections){
        this.email = email;
        this.bio = bio;
        this.connections = connections;

    }

    public String getEmail() {
        return email;

    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio){
        this.bio = bio;
    }

    public String getConnections() {
        return connections;
    }

    public void setConnections(String connections) {
        this.connections = connections;
    }


}


