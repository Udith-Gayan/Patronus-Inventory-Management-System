package com.project.inventoryManagement.DTO.Responses.Success;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class ResetEmailSuccess {
    public boolean success;
    public int code;
    public String message;
}
