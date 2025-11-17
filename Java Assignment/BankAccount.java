public class BankAccount {
    String accountNumber;
    String holderName;
    double balance;

    public BankAccount(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + holderName);
        System.out.println("Balance: ₹" + balance);
    }

    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount("123456789", "Aditi Bhadoria", 25000.50);
        
        acc1.displayDetails();
    }
}
