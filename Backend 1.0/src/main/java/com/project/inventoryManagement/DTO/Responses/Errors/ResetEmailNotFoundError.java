package com.project.inventoryManagement.DTO.Responses.Errors;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class ResetEmailNotFoundError {
    public boolean success;
    public int code;
    public String message;

}
