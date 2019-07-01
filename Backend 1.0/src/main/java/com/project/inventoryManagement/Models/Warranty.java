package com.project.inventoryManagement.Models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
public class Warranty implements Serializable {

    @Id
    private long wId;

    private Date buyingDate;
    private WarrantyPeriod warrantyPeriod;  // in years,months,days
    private String description;


}
