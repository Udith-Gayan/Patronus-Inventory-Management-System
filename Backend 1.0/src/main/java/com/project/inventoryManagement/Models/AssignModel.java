package com.project.inventoryManagement.Models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project.inventoryManagement.DTO.AssignDTO;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.io.Serializable;
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
    private String requestType;              // BOOKING, REQUEST for notifications and report generations

    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @Column(name = "request_made_date")
    private Date requestMadeDate;

    @Column(name = "begin_date")
    private Date beginDate;

    @Column(name = "due_date")
    private Date dueDate;

    @Column(name = "is_assigned")
    private boolean isAssigned;              // set true when a request is made, set false when rejected by anyone

    @Column(name = "is_approved_by_asset_manager")
    private boolean isApprovedByAssetManager;

    @Column(name = "is_approved_by_department_head")
    private boolean isApprovedByDepartmentHead;


    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "requested_asset_Id", nullable = false, referencedColumnName = "id")
    private AssetModel requestedAsset;



    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "assigned_user_id", nullable = false, referencedColumnName = "employeeId")
    private EmployeeMainModel userAssigned;
/////////////////////////////////////////////////////////////////////


    //Overiding Getters and setters

}
