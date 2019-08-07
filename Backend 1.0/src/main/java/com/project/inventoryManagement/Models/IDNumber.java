package com.project.inventoryManagement.Models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "id_number")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class IDNumber {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "asset_id_number")
    private int assetIdNumber;

    @Column(name = "employee_id_number")
    private int employeeIdNumber;
}
