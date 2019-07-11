package com.project.inventoryManagement.Models;


import javax.persistence.*;

@Entity
@Table(name = "asset")
public class AssetModel  {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "assetId", unique = true,length = 20)
    private String assetId;

    @Column(name = "assetCategory")
    private String assetCategory;

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



    /************empty Constructor***********/


    public AssetModel() {

    }

    /********Constructor for all********/

    public AssetModel(String assetId, String assetCategory, String brandName, String boughtCompanyName, double buyingPrice, String warrantyStatus, String boughtDate) {
        this.assetId = assetId;
        this.assetCategory = assetCategory;
        this.brandName = brandName;
        this.boughtCompanyName = boughtCompanyName;
        this.buyingPrice = buyingPrice;
        this.warrantyStatus = warrantyStatus;
        this.boughtDate = boughtDate;
    }

    /*******getters and setters***********/

    public String getAssetId() {
        return assetId;
    }

    public void setAssetId(String assetId) {
        this.assetId = assetId;
    }


    public String getAssetCategory() {
        return assetCategory;
    }

    public void setAssetCategory(String assetCategory) {
        this.assetCategory = assetCategory;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getBoughtCompanyName() {
        return boughtCompanyName;
    }

    public void setBoughtCompanyName(String boughtCompanyName) {
        this.boughtCompanyName = boughtCompanyName;
    }

    public double getBuyingPrice() {
        return buyingPrice;
    }

    public void setBuyingPrice(double buyingPrice) {
        this.buyingPrice = buyingPrice;
    }

    public String getWarrantyStatus() {
        return warrantyStatus;
    }

    public void setWarrantyStatus(String warrantyStatus) {
        this.warrantyStatus = warrantyStatus;
    }

    public String getBoughtDate() {
        return boughtDate;
    }

    public void setBoughtDate(String boughtDate) {
        this.boughtDate = boughtDate;
    }
}
