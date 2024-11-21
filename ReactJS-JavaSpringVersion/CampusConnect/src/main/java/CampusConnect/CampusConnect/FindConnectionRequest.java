package CampusConnect.CampusConnect;

public class FindConnectionRequest {
    private String connectionEmail;

    FindConnectionRequest(){}

    FindConnectionRequest(String connectionEmail) {
        this.connectionEmail = connectionEmail;
    }

    public void setConnectionEmail(String connectionEmail){
        this.connectionEmail = connectionEmail;
    }

    public String getConnectionEmail() {
        return connectionEmail;
    }
}
