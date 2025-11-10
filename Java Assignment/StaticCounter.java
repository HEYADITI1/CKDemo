public class StaticCounter {
    static int count = 0;

    public StaticCounter() {
        count++;
    }

 
    public static void showCount() {
        System.out.println("Number of objects created: " + count);
    }

    public static void main(String[] args) {
        StaticCounter obj1 = new StaticCounter();
        StaticCounter obj2 = new StaticCounter();
        StaticCounter obj3 = new StaticCounter();

        StaticCounter.showCount();  
    }
}
