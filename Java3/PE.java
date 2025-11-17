import java.util.*;
import java.util.stream.Collectors;

@FunctionalInterface
interface NumberRule {
    boolean apply(int n);
}

public class PE {
    public static void main(String[] args) {

        List<Integer> nums = Arrays.asList(3, 10, 15, 8, 21, 14, 7, 2, 11, 4);

        NumberRule isEven = (n) -> n % 2 == 0;

        NumberRule isPrime = (n) -> {
            if (n <= 1) return false;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) return false;
            }
            return true;
        };

        List<Integer> result = nums.stream()
                .filter(n -> isEven.apply(n) && isPrime.apply(n))
                .map(n -> n * n)
                .collect(Collectors.toList());

        Optional<Integer> firstValue = result.stream().findFirst();

        firstValue.ifPresentOrElse(
                v -> System.out.println("First squared number: " + v),
                () -> System.out.println("No matching number found")
        );
    }
}