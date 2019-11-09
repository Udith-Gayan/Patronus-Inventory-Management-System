package com.project.inventoryManagement.Models;

import lombok.Getter;

import java.io.Serializable;

// This is class is required for creating a response containing the JWT to be returned to the user.

@Getter
public class JwtResponse implements Serializable {
    private static final long serialVersionUID = -8091879091924046844L;
    private final String token;
    private final String status;       // added
    private final String email;
    private final String nic;
    private final String firstname;
    private final String lastname;
    private final String img;
    private final String contactNo;
    private final boolean unblocked;

    public JwtResponse(String token, String status, String email, String nic, String firstname, String lastname, String img, String contactNo, boolean unblocked) {
        this.token = token;
        this.status = status;                    // added
        this.email = email;
        this.nic = nic;
        this.firstname = firstname;
        this.lastname = lastname;
        this.img = img;
        this.contactNo = contactNo;
        this.unblocked = unblocked;
    }

    public String getStatus() {
        return status;
    }

    public String getToken() {
        return this.token;
    }
}

