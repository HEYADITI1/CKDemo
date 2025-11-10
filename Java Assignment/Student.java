public class Student {
    String name;
    int mark1, mark2, mark3;

    public Student(String name, int mark1, int mark2, int mark3) {
        this.name = name;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
    }

    public int getTotal() {
        return mark1 + mark2 + mark3;
    }

    public double getAverage() {
        return getTotal() / 3.0;
    }

    public void displayReport() {
        System.out.println("Student Name: " + name);
        System.out.println("Marks: " + mark1 + ", " + mark2 + ", " + mark3);
        System.out.println("Total Marks: " + getTotal());
        System.out.println("Average Marks: " + getAverage());
    }

    public static void main(String[] args) {
        Student s1 = new Student("Aditi", 85, 90, 88);
        s1.displayReport();
    }
}
