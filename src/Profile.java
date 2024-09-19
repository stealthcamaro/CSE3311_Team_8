package src;
public class Profile {          //contain everything connected to a users 'user profile'
    private String username;    // username
    private int student_id;             // student school id
    private String student_email;       // student school email
    private String major;       // just one major for now
    private Course courses;     // users course info     
    private Chat chat;          // users chats
    private int[] connections;   // users conections(friends/student_emails of friends)
    private String password;    // user-profile password
    

    // Constructor // assign login credentials
    public Profile(String username, int student_id, String  student_email, String password) {
        this.username = username;   
        this.student_id = student_id;               
        this.student_email = student_email;         
        this.major = new String("NONE"); 
        this.courses = null;
        this.chat = null;
        this.connections = new int[]{};
        this.password = password;
    }

    
  
}
