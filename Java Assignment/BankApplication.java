class BankAccount {
    private int accountNumber;
    private String holderName;
    private double balance;
    static int totalAccounts = 0;

    BankAccount(int accountNumber, String holderName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = initialBalance;
        totalAccounts++;
    }

    void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid deposit amount!");
            return;
        }
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Invalid withdrawal amount!");
            return;
        }
        if (amount > balance) {
            System.out.println("Insufficient balance!");
            return;
        }
        balance -= amount;
        System.out.println("Withdrawn: " + amount);
    }

    double getBalance() {
        return balance;
    }

    void showAccount() {
        System.out.println("Account[" + accountNumber + "] " + holderName + " → Balance: " + balance);
    }
}

public class BankApplication {
    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount(101, "Aditi", 5000);
        BankAccount acc2 = new BankAccount(102, "Rahul", 2000);

        acc1.deposit(1500);
        acc1.withdraw(700);
        acc1.showAccount();

        acc2.withdraw(2500);
        acc2.showAccount();

        System.out.println("Total Accounts Created: " + BankAccount.totalAccounts);
    }
}
