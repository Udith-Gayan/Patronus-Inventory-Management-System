package com.project.inventoryManagement.Models;

import java.io.Serializable;

public class LoginResponse implements Serializable {



    String status;
    String message;
    Object payload;

    public LoginResponse(Object user, String status, String message) {
        this.payload = user;
        this.status = status;
        this.message = message;

    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getPayload() {
        return payload;
    }

    public void setPayload(Object payload) {
        this.payload = payload;
    }
}
