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

//JWTUserDetailsService implements the Spring Security UserDetailsService interface.
// It overrides the loadUserByUsername for fetching user details from the database using the username.
// The Spring Security Authentication Manager calls this method for getting the user details
// from the database when authenticating the user details provided by the user.

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


    /*
   // Hardcoded user credentials
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("javainuse".equals(username)) {
            return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

     */


    ///////////////////////////////
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

