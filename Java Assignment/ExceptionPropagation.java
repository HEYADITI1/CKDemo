public class ExceptionPropagation {

    void m3() {
        int x = 10 / 0; 
    }

    void m2() {
        m3();
    }

    void m1() {
        try {
            m2();
        } catch (ArithmeticException e) {
            System.out.println("Exception caught in m1(): " + e);
        }
    }

    public static void main(String[] args) {
        ExceptionPropagation obj = new ExceptionPropagation();
        obj.m1();
        System.out.println("Program endes");
    }
}
