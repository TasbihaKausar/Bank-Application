package com.example.banksystem.demo.acontrol;


public class InsufficientBalanceException extends Exception {

    public InsufficientBalanceException(String message) {
        super(message);
    }

}

