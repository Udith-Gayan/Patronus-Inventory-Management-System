package com.project.inventoryManagement.Models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "deleted_asset")
public class DeletedAssetModel {


    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "assetId", unique = true,length = 20)
    private String assetId;

    @Column(name = "assetCategory")      //use drop down menu  default other
    private String assetcategory;      //Laptop,PC,Projector,Furniture, Television, Sound system, CPU, Routers (mikes,sound systems,UPS,displays,water filters,others)

    @Column(name = "brandName")
    private String brandName;

    @Column(name = "deleted_date")
    private LocalDate deletedDate;

    @Column(name = "boughtCompanyName")
    private String boughtCompanyName;

    @Column(name = "boughtCompanyAddress")   // newly added
    private String boughtCompanyAddress;


    @Column(name = "buyingPrice")
    private double buyingPrice;

    @Column(name = "companyContact")
    private String companyContact;      // newly added

    @Column(name = "warrantyStatus")
    private String warrantyStatus;

    @Column(name = "yrs")
    private String yrs;        // newly added

    @Column(name = "months")           // newly added
    private String months;

    @Column(name = "days")        // newly added
    private String days;


    @Column(name = "boughtDate")
    private String boughtDate;

    @Column(name = "displaySize")
    private String displaySize;           // for displays and desktop computers

    @Column(name = "ram")
    private String ram;         // for desktops,laptops  use a drop box

    @Column(name = "capacity")
    private String capacity;    // for desktops,laptops  use a drop box

    @Column(name = "categoryTypes")
    private String categoryTypes ;        // newly added

    @Column(name = "description")
    private String description;

    @Column(name = "processor")
    private String processor;        //for desktops,laptops

    @Column(name = "is_broken")
    private boolean broken;

    // Getters and setters


}
