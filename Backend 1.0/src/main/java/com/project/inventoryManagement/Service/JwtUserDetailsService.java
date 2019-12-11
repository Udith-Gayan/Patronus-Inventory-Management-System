package com.project.inventoryManagement.Service;

import com.project.inventoryManagement.Models.EmployeeMainModel;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import com.project.inventoryManagement.Repositories.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;



@Service
public class JwtUserDetailsService implements UserDetailsService {

    ///////////////
    // This part is for database demo
    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    private EmployeeMainRepository employeeMainRepository;
    //////////////



    // For data fetching from database

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // DaoUser user = userDao.findByUsername(username);
        EmployeeMainModel user = employeeMainRepository.findByEmail(username);  // email is passed as username here
        if (user == null) {
            throw new UsernameNotFoundException("User not found with usernameeeeee: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                new ArrayList<>());
    }
    ////////////////////////////////

    /////////////////////
    // For saving new users
    public EmployeeMainModel save(EmployeeMainModel user) {
//        DaoUser newUser = new DaoUser();
//        newUser.setUsername(user.getFirstname());
        System.out.println("line23");
        user.setPassword(bcryptEncoder.encode(user.getPassword()));     // set this in saving password for the real project
        System.out.println("line25: "+ user.getPassword());

        return employeeMainRepository.save(user);


    }


    ////////////////////
}

