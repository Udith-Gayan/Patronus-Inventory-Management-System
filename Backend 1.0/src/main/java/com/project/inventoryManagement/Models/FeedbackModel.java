package com.project.inventoryManagement.Models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "feedback")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class FeedbackModel {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "fname")
    private String fname;

    @Column(name = "email")
    private String email;

    @Column(name = "subject")
    private String subject;

    @Column(name = "message")
    private String message;

    @Column(name = "created_date")
    private LocalDate date;
}
