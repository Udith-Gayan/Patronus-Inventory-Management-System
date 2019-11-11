package com.project.inventoryManagement.Models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "employee_main")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "assign"})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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

    @Column(name = "location")
    private String location;

    @Column(name = "contactNo", unique = true,length = 10)
    private String contactNo;

    @Column(name = "status")
    private String status;

    @Column(name = "address")
    private String address;

    @Column(name = "unblocked", columnDefinition = "boolean default true")      //newly added
    private boolean unblocked;

    @Lob
    @Column(name = "img")
    private String img;
  //  private byte[] img;

    @JsonIgnore
    @OneToMany(mappedBy = "userAssigned", cascade=CascadeType.ALL,fetch = FetchType.LAZY)
    private List<AssignModel> assign;



    @JsonIgnore
    @OneToMany(mappedBy = "informedBy", fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Breakdown> reportedDamages;
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

    public boolean isUnblocked() {
        return unblocked;
    }

    public void setUnblocked(boolean unblocked) {
        this.unblocked = unblocked;
    }

    /*  public byte[] getImg() {
            return img;
        }

        public void setImg(byte[] img) {
            this.img = img;
        }
    */
    public List<AssignModel> getAssign() {
        return assign;
    }

    public void setAssign(List<AssignModel> assign) {
        this.assign = assign;
    }


    public List<Breakdown> getReportedDamages() {
        return reportedDamages;
    }

    public void setReportedDamages(List<Breakdown> reportedDamages) {
        this.reportedDamages = reportedDamages;
    }


    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
