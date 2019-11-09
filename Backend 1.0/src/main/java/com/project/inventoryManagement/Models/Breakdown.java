package com.project.inventoryManagement.Models;


import lombok.*;


import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;


@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
@Table(name = "breakdowns")
public class Breakdown implements Serializable {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "message")
    private String anyMessage;

    @Column(name = "complainedNic")    // newly added
    private String complainedNic;

    @Column(name = "assetId")    // newly added
    private String assetId;

    @Column(name = "warranty_status")
    private boolean warrantyStatus;

//    @Column(name = "approval_by_asset_manager")
//    private boolean isApprovedByAssetMananger;


    @Column(name = "is_released_by_am")
    private boolean releasedByAm;

//    @Column(name = "assigned_to_repair_manager")
//    private boolean isAssignedToRepairManager;

    @Column(name = "informed_date")
    private LocalDate informedDate;

    @Column(name = "am_touched")
    private boolean touchedByAssetManager;

    @ManyToOne(cascade= CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "informed_user_id", nullable = false, referencedColumnName = "employeeId")
    private EmployeeMainModel informedBy;

    @ManyToOne(cascade= CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "broken_asset_id", nullable = false, referencedColumnName = "id")
    private AssetModel brokenAsset;

}
