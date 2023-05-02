package com.example.banksystem.demo.acontrol;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.banksystem.demo.acc.Account;
import com.example.banksystem.demo.acrepo.AccountRepository1;
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class AccountController {
    
    @Autowired
    private AccountRepository1 accountRepository;

    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Account account) {
        return accountRepository.save(account);
    }
    
    
//    @GetMapping("/accounts/{id}")
//    public double getBalance(@PathVariable Long id) throws ResourceNotFoundException {
//        Account account = accountRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Account not found for this id :: " + id));
//        return account.getBalance();
//    }
    
    
    @GetMapping("/accounts/{accountNumber}")
    public Account getBalanceByAccountNumber(@PathVariable String accountNumber) throws ResourceNotFoundException {
        Account account = accountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found for this account number :: " + accountNumber));
        return account;
    }



    
    
    @PutMapping("/accounts/{accountNumber}/withdraw/{amount}")
    public Account withdraw(@PathVariable String accountNumber, @PathVariable double amount) throws InsufficientBalanceException, ResourceNotFoundException {
        Optional<Account> optionalAccount = accountRepository.findByAccountNumber(accountNumber);
        if (optionalAccount.isPresent()) {
            Account account = optionalAccount.get();
            if (account.getBalance() < amount) {
                throw new InsufficientBalanceException("Insufficient balance in account " + account.getAccountNumber());
            } else {
                account.setBalance(account.getBalance() - amount);
                return accountRepository.save(account);
            }
        } else {
            throw new ResourceNotFoundException("Account not found account number " + accountNumber);
        }
    }

    
//    @DeleteMapping("/accounts/{id}")
//    public void deleteAccount(@PathVariable Long id) throws ResourceNotFoundException {
//        Optional<Account> optionalAccount = accountRepository.findById(id);
//        if (optionalAccount.isPresent()) {
//            Account account = optionalAccount.get();
//            accountRepository.delete(account);
//        } else {
//            throw new ResourceNotFoundException("Account not found with id " + id);
//        }
//    }
    
   // @CrossOrigin(origins = "http://localhost:4200/delete")
    @GetMapping("/accounts/delete/{accountNumber}")
    public void deleteAccountByNumber(@PathVariable String accountNumber) throws ResourceNotFoundException {
        Optional<Account> optionalAccount = accountRepository.findByAccountNumber(accountNumber);
        if (optionalAccount.isPresent()) {
            Account account = optionalAccount.get();
            accountRepository.delete(account);
        } else {
            throw new ResourceNotFoundException("Account not found with account number " + accountNumber);
        }
    }
    
    




    @PutMapping("/accounts/{accountNumber}/deposit/{amount}")
    public Account deposit(@PathVariable String accountNumber, @PathVariable double amount) throws ResourceNotFoundException {
        Optional<Account> optionalAccount = accountRepository.findByAccountNumber(accountNumber);
        if (optionalAccount.isPresent()) {
            Account account = optionalAccount.get();
            account.setBalance(account.getBalance() + amount);
            return accountRepository.save(account);
        } else {
            throw new ResourceNotFoundException("Account not found with Account Number " + accountNumber);
        }
    }


   @PutMapping("/accounts/{accountNumber}/transfer/{toAccount}/{amount}")
    public void transfer(@PathVariable String accountNumber, @PathVariable String toAccount, @PathVariable double amount) throws InsufficientBalanceException, ResourceNotFoundException {
        Optional<Account> optionalFromAccount = accountRepository.findByAccountNumber(accountNumber);
        Optional<Account> optionalToAccount = accountRepository.findByAccountNumber(toAccount);
        if (optionalFromAccount.isPresent() && optionalToAccount.isPresent()) {
            Account fromAccount = optionalFromAccount.get();
            Account toAccount1 = optionalToAccount.get();
            if (fromAccount.getBalance() < amount) {
                throw new InsufficientBalanceException("Insufficient balance in account " + fromAccount.getAccountNumber());
            } else {
                fromAccount.setBalance(fromAccount.getBalance() - amount);
                toAccount1.setBalance(toAccount1.getBalance() + amount);
                accountRepository.save(fromAccount);
                accountRepository.save(toAccount1);
            }
        } else {
            throw new ResourceNotFoundException("Account(s) not found");
        }
    }



}

