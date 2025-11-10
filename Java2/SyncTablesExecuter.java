import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class TablePrinter {
    private boolean turnOfTwo = true;

    synchronized void printTable(int num, boolean isTwo) {
        for (int i = 1; i <= 10; i++) {
            while (turnOfTwo != isTwo) {
                try {
                    wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }

            System.out.println(num + " x " + i + " = " + (num * i));

            turnOfTwo = !turnOfTwo;
            notifyAll();
        }
    }
}

public class SyncTablesExecuter {
    public static void main(String[] args) {
        TablePrinter printer = new TablePrinter();

        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(() -> printer.printTable(2, true));
        executor.submit(() -> printer.printTable(4, false));

        executor.shutdown();
    }
}
