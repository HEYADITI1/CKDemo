class InvalidPriceException extends Exception {
    InvalidPriceException(String msg) {
        super(msg);
    }
}

class Product {
    private int id;
    private String name;
    private double price;

    Product(int id, String name, double price) throws InvalidPriceException {
        if (price < 0)
            throw new InvalidPriceException("Price cannot be negative for product: " + name);
        this.id = id;
        this.name = name;
        this.price = price;
    }

    void display() {
        System.out.println("Product ID: " + id + ", Name: " + name + ", Price: ₹" + price);
    }
}

public class ProductCatalog {
    public static void main(String[] args) {
        try {
            Product p1 = new Product(1, "Laptop", 55000);
            Product p2 = new Product(2, "Mouse", 500);
            Product p3 = new Product(3, "Keyboard", 1200);

            p1.display();
            p2.display();
            p3.display();
        } catch (InvalidPriceException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
