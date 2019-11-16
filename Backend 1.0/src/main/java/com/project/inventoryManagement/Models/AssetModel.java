package com.project.inventoryManagement.Models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@ToString(exclude = { "assigning"}) // and this
@Getter
@Setter
@Table(name = "asset")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class AssetModel implements Cloneable {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "asset_id", unique = true,length = 20)
    private String assetId;

    @Column(name = "assetCategory")      //use drop down menu  default other
    private String assetcategory;      //Laptop,PC,Projector,Furniture, Television, Sound system, CPU, Routers (mikes,sound systems,UPS,displays,water filters,others)

    @Column(name = "brandName")
    private String brandName;

    @Column(name = "boughtCompanyName")
    private String boughtCompanyName;

    @Column(name = "boughtCompanyAddress")   // newly added
    private String boughtCompanyAddress;

    @Column(name = "location")
    private String location;

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

    @Column(name = "quantity")        // newly added
    private int quantity;


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


    @JsonIgnore
    @OneToMany(mappedBy = "requestedAsset",fetch = FetchType.LAZY)                                          //(cascade = CascadeType.REMOVE, orphanRemoval=true) delete child entities
    private List<AssignModel> assigning;

    @JsonIgnore
    @OneToMany(mappedBy = "brokenAsset",cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Breakdown> breakdowns;

    /************empty Constructor***********/


    public AssetModel() {

    }

    public Object clone()throws CloneNotSupportedException{
        return super.clone();
    }

    /********Constructor for all********/


    /*******getters and setters***********/


}
