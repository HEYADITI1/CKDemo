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

class TableOfTwo extends Thread {
    private TablePrinter printer;

    TableOfTwo(TablePrinter printer) {
        this.printer = printer;
    }

    public void run() {
        printer.printTable(2, true);
    }
}

class TableOfFour extends Thread {
    private TablePrinter printer;

    TableOfFour(TablePrinter printer) {
        this.printer = printer;
    }

    public void run() {
        printer.printTable(4, false);
    }
}

public class SyncTables {
    public static void main(String[] args) {
        TablePrinter printer = new TablePrinter();

        Thread t1 = new TableOfTwo(printer);
        Thread t2 = new TableOfFour(printer);

        t1.start();
        t2.start();
    }
}
