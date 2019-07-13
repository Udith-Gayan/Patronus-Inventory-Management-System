package com.project.inventoryManagement.Models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@ToString
@Getter
@Setter
@Table(name = "asset")
public class AssetModel  {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "assetId", unique = true,length = 20)
    private String assetId;

    @Column(name = "assetCategory")      //use drop down menu  default other
    private String assetCategory;      //Laptop,PC,Projectors,furniture,mikes,sound systems,UPS,displays,water filters,others

    @Column(name = "brandName")
    private String brandName;

    @Column(name = "boughtCompanyName")
    private String boughtCompanyName;

    @Column(name = "buyingPrice")
    private double buyingPrice;

    @Column(name = "warrantyStatus")
    private String warrantyStatus;

    @Column(name = "boughtDate")
    private String boughtDate;

    @Column(name = "displaySize")
    private String displaySize;           // for displays and desktop computers

    @Column(name = "ram")
    private String ram;         // for desktops,laptops  use a drop box

    @Column(name = "capacity")
    private String capacity;    // for desktops,laptops  use a drop box

    @Column(name = "description")
    private String description;

    @Column(name = "processor")
    private String processor;        //for desktops,laptops

    /************empty Constructor***********/


    public AssetModel() {

    }

    /********Constructor for all********/


    /*******getters and setters***********/


}
