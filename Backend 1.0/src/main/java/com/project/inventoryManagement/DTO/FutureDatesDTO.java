package com.project.inventoryManagement.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FutureDatesDTO {

    private LocalDate beginDate;
    private LocalDate dueDate;
}
