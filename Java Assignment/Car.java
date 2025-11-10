public class Car {
    String model;
    double price;

    public Car(String model) {
        this.model = model;
        this.price = 0.0;
    }

    public Car(String model, double price) {
        this.model = model;
        this.price = price;
    }

    public void displayDetails() {
        System.out.println("Car Model: " + model);
        System.out.println("Car Price: ₹" + price);
    }

    public static void main(String[] args) {
        Car car1 = new Car("Maruti Swift");
        Car car2 = new Car("Hyundai Creta", 1250000.00);

        car1.displayDetails();
        car2.displayDetails();
    }
}
