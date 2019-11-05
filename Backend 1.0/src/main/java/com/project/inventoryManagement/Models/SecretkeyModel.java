package com.project.inventoryManagement.Models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Secret_key")
public class SecretkeyModel {

    @Id
    @GeneratedValue
    private long id;

    @Column(name = "skey")
    private String skey;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

}
