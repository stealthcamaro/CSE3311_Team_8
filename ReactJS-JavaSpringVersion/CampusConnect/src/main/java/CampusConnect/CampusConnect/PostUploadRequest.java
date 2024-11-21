package CampusConnect.CampusConnect;

public class PostUploadRequest {
    private String email;
    private String content;

    public PostUploadRequest() {}

    public PostUploadRequest(String email, String content) {
        this.email = email;
        this.content = content;
    }

    public String getEmail() {
        return email;
    }

    public String getContent() {
        return content;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
