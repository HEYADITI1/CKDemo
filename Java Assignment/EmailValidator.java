
class InvalidEmailException extends Exception {
    public InvalidEmailException(String message) {
        super(message);
    }
}

public class EmailValidator {
    static void validateEmail(String email) throws InvalidEmailException {
        if (!email.contains("@")) {
            throw new InvalidEmailException("Invalid email: missing '@' symbol");
        } else {
            System.out.println("Valid email: " + email);
        }
    }

    public static void main(String[] args) {
        try {
            validateEmail("aditi@cloudkeeper.com");
            validateEmail("aditi.cloudkeeper.com");
            
        } catch (InvalidEmailException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}
