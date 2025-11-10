import java.util.*;

class Customer {
    int id;
    String name;
    String email;

    // Constructor
    Customer(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Method to display customer details
    void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
    }
}

public class CustomerPOJO {
    public static void main(String[] args) {
        List<Customer> customers = new ArrayList<>();

        customers.add(new Customer(1, "Aditi", "aditi@gmail.com"));
        customers.add(new Customer(2, "Rahul", "rahul@gmail.com"));
        customers.add(new Customer(3, "Sneha", "sneha@gmail.com"));

        for (Customer c : customers) {
            c.display();
        }
    }
}
