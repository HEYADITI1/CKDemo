public class RethrowException {
    public static void main(String[] args) {
        try {
            method1();
        } catch (ArithmeticException e) {
            System.out.println("Handled again in main: " + e.getMessage());
        }
    }

    static void method1() {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught inside method1: " + e.getMessage());
            throw e; 
        }
    }
}
