package com.project.inventoryManagement.DTO;

import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Models.EmployeeMainModel;

import java.io.Serializable;
import java.time.LocalDate;

public class AssignDTO implements Serializable {

    public long id;
    public String requestType;
    public LocalDate requestMadeDate;
    public LocalDate beginDate;
    public LocalDate dueDate;
    public boolean isAssigned;
    public boolean isApprovedByAssetManager;
    public boolean isApprovedByDepartmentHead;

    public AssetModel requestedAsset;
    public EmployeeMainModel userAssigned;

    //Constructors

    public AssignDTO(AssignModel a){
        this.id = a.getId();
        this.requestType = a.getRequestType();
        this.requestMadeDate = a.getRequestMadeDate();
        this.beginDate = a.getBeginDate();
        this.dueDate = a.getDueDate();
        this.isAssigned = a.isAssigned();
        this.isApprovedByAssetManager = a.isApprovedByAssetManager();
        this.isApprovedByDepartmentHead = a.isApprovedByDepartmentHead();
        this.requestedAsset = a.getRequestedAsset();
        this.userAssigned = a.getUserAssigned();
    }

    public AssignDTO(long id, String requestType, LocalDate requestMadeDate, LocalDate beginDate, LocalDate dueDate, boolean isAssigned, boolean isApprovedByAssetManager, boolean isApprovedByDepartmentHead, AssetModel requestedAsset, EmployeeMainModel userAssigned) {
        this.id = id;
        this.requestType = requestType;
        this.requestMadeDate = requestMadeDate;
        this.beginDate = beginDate;
        this.dueDate = dueDate;
        this.isAssigned = isAssigned;
        this.isApprovedByAssetManager = isApprovedByAssetManager;
        this.isApprovedByDepartmentHead = isApprovedByDepartmentHead;
        this.requestedAsset = requestedAsset;
        this.userAssigned = userAssigned;
    }

    public AssignDTO() {
    }
}
