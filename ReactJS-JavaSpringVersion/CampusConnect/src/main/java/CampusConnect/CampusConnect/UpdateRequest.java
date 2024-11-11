package CampusConnect.CampusConnect;

public class UpdateRequest {
    private String email;
    private String bio;

    public UpdateRequest() {}


    public UpdateRequest(String email, String bio){
        this.email = email;
        this.bio = bio;

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


}


