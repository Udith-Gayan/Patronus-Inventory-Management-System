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

    @Column(name = "is_broken")
    private boolean broken;


    @JsonIgnore
    @OneToMany(mappedBy = "requestedAsset",cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)                                          //(cascade = CascadeType.REMOVE, orphanRemoval=true) delete child entities
    private List<AssignModel> assigning;

    @JsonIgnore
    @OneToMany(mappedBy = "brokenAsset",cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Breakdown> breakdowns;

    /************empty Constructor***********/


    public AssetModel() {

    }

    /********Constructor for all********/


    /*******getters and setters***********/


}
