package com.project.inventoryManagement.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "deleted_employees")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "assign"})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class DeletedEmployeesModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long employeeId;

    @Column(name = "firstName")
    private String firstname;

    @Column(name = "lastName")
    private String lastname;

    @Column(name = "deleted_date")
    private LocalDate deletedDate;

    @Column(name = "nic",unique = true,nullable = false,length = 15)
    private String nic;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email", unique = true,length = 50)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "contactNo", unique = true,length = 10)
    private String contactNo;

    @Column(name = "status")
    private String status;

    @Column(name = "address")
    private String address;



    @Lob
    @Column(name = "img")
    private String img;
    //  private byte[] img;

    /*************************************************************************/

    // Standard getters and setters
}
