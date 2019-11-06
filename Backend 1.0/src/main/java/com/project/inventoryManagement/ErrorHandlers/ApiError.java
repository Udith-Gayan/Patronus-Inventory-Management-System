package com.project.inventoryManagement.ErrorHandlers;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.List;


public class ApiError extends Throwable {

    private HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private String debugMessage;
    private List<ApiSubError> subErrors;


    public ApiError() {
        timestamp = LocalDateTime.now();
    }

   public ApiError(HttpStatus status) {
        this();
        this.status = status;
    }


    public ApiError(String message) {
        this();

        this.message = message;

    }



    public ApiError ( String message, Throwable ex) {
        this();
        this.status = status;
        this.message = message;
        this.debugMessage = ex.getLocalizedMessage();

    }


    public ApiError handle() {
        return this;



    }
}
