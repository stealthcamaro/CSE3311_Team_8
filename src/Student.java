package src;

public class Student {
    // Attributes (fields)
    private String username;    // username
    private int student_id;             // student school id
    private String student_email;       // student school email
    private String major;       // just one major for now

    // Constructor // assign login credentials
    public Student(String username, int id,String  email) {
        this.username = username;   
        this.student_id = id;               
        this.student_email = email;         
        this.major = new String("NONE"); 

    }

}
