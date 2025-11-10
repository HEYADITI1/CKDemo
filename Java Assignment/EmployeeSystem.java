import java.util.*;

class Employee {
    int id;
    String name;
    double baseSalary;

    Employee(int id, String name, double baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double calculateSalary() {
        return baseSalary;
    }

    void showInfo() {
        System.out.println("Employee: " + name + " | Salary: " + calculateSalary());
    }
}

class FullTimeEmployee extends Employee {
    FullTimeEmployee(int id, String name, double baseSalary) {
        super(id, name, baseSalary);
    }

    @Override
    double calculateSalary() {
        return baseSalary + 5000;
    }
}

class PartTimeEmployee extends Employee {
    PartTimeEmployee(int id, String name, double baseSalary) {
        super(id, name, baseSalary);
    }

    @Override
    double calculateSalary() {
        return baseSalary * 0.5;
    }
}

public class EmployeeSystem {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new FullTimeEmployee(1, "Aditi", 20000));
        employees.add(new PartTimeEmployee(2, "Rahul", 20000));
        employees.add(new FullTimeEmployee(3, "Sneha", 25000));

        for (Employee e : employees) {
            e.showInfo();
        }
    }
}
