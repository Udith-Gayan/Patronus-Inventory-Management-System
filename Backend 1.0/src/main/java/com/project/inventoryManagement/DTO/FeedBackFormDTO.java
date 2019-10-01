package com.project.inventoryManagement.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FeedBackFormDTO {
    public String email;
    public String fname;
    public String subject;
    public String message;

}
