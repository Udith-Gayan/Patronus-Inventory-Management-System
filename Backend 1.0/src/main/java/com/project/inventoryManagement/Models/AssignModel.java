package com.project.inventoryManagement.Models;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "assign_model")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AssignModel implements Serializable {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "request_type")
    private String requestType;              // BOOK REQUEST for notifications and report generations


    @CreatedDate
    @Column(name = "request_made_date")
    private LocalDate requestMadeDate;

    @Column(name = "begin_date")
    private LocalDate beginDate;

    @Column(name = "due_date")
    private LocalDate dueDate;

    @Column(name = "date_dh_confirmed")
    private LocalDate dateDHConfirmed;

    @Column(name = "date_am_confirmed")
    private LocalDate dateAMConfirmed;


    @Column(name = "asset_id")      //newly added
    private String assetId;

    @Column(name = "requested_nic")      //newly added
    private String requestedNic;

    @Column(name = "description")      //newly added
    private String description;


    @Column(name = "is_assigned")
    private boolean isAssigned;              // set true when a request is made, set false when rejected by anyone

    @Column(name = "is_approved_by_asset_manager")
    private boolean isApprovedByAssetManager;

    @Column(name = "is_approved_by_department_head")
    private boolean isApprovedByDepartmentHead;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "requested_asset_Id", nullable = false, referencedColumnName = "id")
    private AssetModel requestedAsset;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assigned_user_id", nullable = false, referencedColumnName = "employeeId")
    private EmployeeMainModel userAssigned;


    @Column(name = "is_dh_touched" , columnDefinition = "boolean default false")         //   touch flag
    private boolean isDhTouched;

    @Column(name = "is_am_touched" , columnDefinition = "boolean default false")       //    touch flag
    private boolean isAmTouched;

    @Column(name = "returned" , columnDefinition = "boolean default false")
    private boolean returned;

    @Column(name = "issued" , columnDefinition = "boolean default false")
    private boolean issued;

/////////////////////////////////////////////////////////////////////


    // Overiding Getters and setters


    public void setRequestType(String request) {
        this.requestType = request;
    }
}
