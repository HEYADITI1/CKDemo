public class Calculator {

    //addition
    public double add(double a, double b) {
        return a + b;
    }

    //subtraction
    public double subtract(double a, double b) {
        return a - b;
    }

    //multiplication
    public double multiply(double a, double b) {
        return a * b;
    }

    //division
    public double divide(double a, double b) {
        if (b == 0) {
            System.out.println("Error: Cannot divide by zero!");
            return 0;
        }
        return a / b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println("Addition: " + calc.add(10, 5));
        System.out.println("Subtraction: " + calc.subtract(10, 5));
        System.out.println("Multiplication: " + calc.multiply(10, 5));
        System.out.println("Division: " + calc.divide(10, 5));
    }
}
