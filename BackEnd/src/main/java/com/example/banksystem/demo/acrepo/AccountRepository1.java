package com.example.banksystem.demo.acrepo;
import com.example.banksystem.demo.acc.Account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository1 extends JpaRepository<Account, Long> {
    
   // Account findById(long id);
    
    void deleteById(long id);
    
    Account save(Account account);

	Optional<Account> findByAccountNumber(String accountNumber);

    
   // Account get(long id);
    
}
