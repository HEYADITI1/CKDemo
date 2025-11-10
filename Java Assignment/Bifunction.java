import java.util.function.BiFunction;

public class Bifunction {
    public static void main(String[] args) {
        BiFunction<Integer, Integer, Integer> sub = (a, b) -> a - b;
        System.out.println("Diff = " + sub.apply(30, 20));
    }
}
