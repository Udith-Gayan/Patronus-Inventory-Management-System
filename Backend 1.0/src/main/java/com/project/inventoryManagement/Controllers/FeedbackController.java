package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.DTO.FeedBackFormDTO;
import com.project.inventoryManagement.Models.FeedbackModel;
import com.project.inventoryManagement.Repositories.FeedBackRepo;
import com.project.inventoryManagement.Service.MailService;
import com.project.inventoryManagement.components.EmailReceiverComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.time.LocalDate;

@RestController
@RequestMapping(value = "/feedback")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class FeedbackController {


    @Autowired
    FeedBackRepo feedBackRepo;

    @Autowired
    MailService mailService;


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Saving the feedback
    @PostMapping(path="/feedbackform")
    public int saveAndSendFeedbacks(@RequestBody FeedBackFormDTO form){

        // Sending email to asset Manager(ug.indraka@gmail.com)
        EmailReceiverComponent emailComponent = new EmailReceiverComponent("ug.indraka@gmail.com");  //asset manager is the receiver

        String subject = "FEEDBACK-" + form.getSubject();
        String message = "FeedBack sent by \"" + form.fname + "\" with \"" + form.getEmail() +"\" .\nMessage:\n\n     \""+ form.getMessage() + "\"\n\n" +
                "~~End of Message~~";

        try {
            mailService.sendEmailWithAttachment(emailComponent,subject,message);
            System.out.println("Messege sent successfully!!!");
        } catch (MessagingException e) {
            System.out.println("Error, feedback Not sent with error: " + e.getMessage());
        }

        // save in database
        FeedbackModel model = new FeedbackModel();

        model.setFname(form.fname);
        model.setEmail(form.getEmail());
        model.setSubject(form.getSubject());
        model.setMessage(form.getMessage());

        LocalDate nowDate =LocalDate.now();
        model.setDate(nowDate);

        try {
            feedBackRepo.save(model);
            return 100;
        }catch(Exception e){
            System.out.println("Error in  feedback saving to the database");
            return -1;
        }



    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Getting all feedbacks
    @GetMapping(path="/all")
    public Iterable<FeedbackModel> viewAlFeedbacks(){
        System.out.println("Request to get all feed backs came");
        return feedBackRepo.findAll();
    }


}


