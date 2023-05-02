package com.example.banksystem.demo.acc;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.Id;



import com.example.banksystem.demo.acontrol.InsufficientBalanceException;

@Entity
public class Account {

	
	    @Id
	    @GeneratedValue
	    private Long id;
	    private String accountNumber;
	    private String customerName;
	    private double balance;
	    private String toAccount;

	    // Constructor
	    public Account(String accountNumber, String customerName, double balance,String toAccount) {
	    	super();
	        this.accountNumber = accountNumber;
	        this.customerName = customerName;
	        this.balance = balance;
	        this.toAccount=toAccount;
	    }
	    
	    public Account() {}

	    // Getters and setters
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getAccountNumber() {
	        return accountNumber;
	    }

	    public void setAccountNumber(String accountNumber) {
	        this.accountNumber = accountNumber;
	    }

	    public String getCustomerName() {
	        return customerName;
	    }

	    public void setCustomerName(String customerName) {
	        this.customerName = customerName;
	    }

	    public double getBalance() {
	        return balance;
	    }

	    public void setBalance(double balance) {
	        this.balance = balance;
	    }

	    // Methods for depositing, withdrawing, and transferring money
	    public void deposit(double amount) {
	        this.balance += amount;
	    }
	    
	   
	    
	    	
	    

	    public void withdraw(double amount) throws InsufficientBalanceException
	    {
	        if (this.balance < amount) {
	           throw new InsufficientBalanceException("insuffient Amount");
	        }
	        this.balance -= amount;
	    }

	   public void transfer(Account toAccount, double amount) throws InsufficientBalanceException {
	        this.withdraw(amount);
	        toAccount.deposit(amount);
	    }

	}



