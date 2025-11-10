public class NestedTryCatch {
    public static void main(String[] args) {
        try {
            int[] arr = new int[3];
            arr[0] = 10;

            try {
                int result = arr[0] / 0; // inner exception
            } catch (ArithmeticException e) {
                System.out.println("Inner Catch: Arithmetic Exception - " + e.getMessage());
            }

            arr[5] = 50; // outer exception 
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Outer Catch: Array Index Out Of Bounds - " + e.getMessage());
        }

        System.out.println("Program continues ");
    }
}
