package com.project.inventoryManagement.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ResetFormDTO {

    public  String resetEmail;
    public String newPassword;
    public String confirmNewPassword;
}
