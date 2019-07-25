package com.project.inventoryManagement.Models;



import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "employee_main")
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class EmployeeMainModel implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long employeeId;

    @Column(name = "firstName")
    private String firstname;

    @Column(name = "lastName")
    private String lastname;

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
    @Column(name = "image")
    private byte[] image;

    /*************************************************************************/
    //constructors

    //Getters and setters
    public long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(long employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getNic() { return nic; }

    public void setNic(String nic) { this.nic = nic; }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
