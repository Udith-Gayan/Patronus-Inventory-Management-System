package com.project.inventoryManagement.Models;

import java.io.Serializable;

// This is class is required for creating a response containing the JWT to be returned to the user.

public class JwtResponse implements Serializable {
    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private final String status;       // added
    public JwtResponse(String jwttoken, String status) {
        this.jwttoken = jwttoken;
        this.status = status;                    // added
    }

    public String getStatus() {
        return status;
    }

    public String getToken() {
        return this.jwttoken;
    }
}

