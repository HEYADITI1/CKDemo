public class MathUtils {

    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    public static int min(int a, int b) {
        return (a < b) ? a : b;
    }

    public static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }

    public static void main(String[] args) {
        System.out.println("Max: " + MathUtils.max(10, 20));
        System.out.println("Min: " + MathUtils.min(10, 20));
        System.out.println("Average: " + MathUtils.average(10, 20, 30));
    }
}
