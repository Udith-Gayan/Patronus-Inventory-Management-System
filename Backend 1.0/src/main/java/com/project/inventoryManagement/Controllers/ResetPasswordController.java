package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.DTO.ResetFormDTO;
import com.project.inventoryManagement.DTO.Responses.Errors.ResetEmailNotFoundError;
import com.project.inventoryManagement.DTO.Responses.Success.ResetEmailSuccess;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import com.project.inventoryManagement.Service.MailService;
import com.project.inventoryManagement.components.EmailReceiverComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping(value = "/resetpassword")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ResetPasswordController {

    @Autowired
    private MailService mailService;

    @Autowired
    private PasswordEncoder bcryptEncoder;


    @Autowired
    EmployeeMainRepository empRepo;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // send mail
    @PostMapping(path="/sendmail")
    public Object sendWithAttachment(@RequestBody ResetFormDTO resetForm) throws MessagingException {





        /*
         * Creating a User with the help of User class that we have declared and setting
         * Email address of the sender.
         */



        System.out.println("Reset Form received: "+ resetForm.toString());

        // Checking if email is valid according to database

        if(!empRepo.existsByEmail(resetForm.getNewPassword())){

            ResetEmailNotFoundError errorObject = new ResetEmailNotFoundError(false,-1,"Unauthenticated Email");
             return errorObject;
        }




        EmailReceiverComponent emailReceiverComponent = new EmailReceiverComponent();

       /* Setting email body*/
        emailReceiverComponent.setEmailAddress(resetForm.getResetEmail()); //Receiver's email address
        String mailSubject = "Reset Password Confirmation";
        String mailBody = "Please follow the following link to confirm your request to change the password.\nClick : " +
                "http://localhost:8080/resetpassword/confirm/userbyemail/234f42c3c3c4c4c4v4vh8hgfgdf4dfkdweml443mlfm45mfr5fgrt55gt5gt5gt5tgtgttggtgg5gg5grg5to56go6hgbhko6ok6tk6kt?id=vf4v5vrrjvcvvvxccvcxc&"+
                "psd=" + resetForm.getNewPassword() + "&req=codegen@codgen.com&eml=" + resetForm.getResetEmail() + "&email=resetme.codegen@codegen.com";
               //password is as @param(psd) , email is as @param(eml)

        /*
         * Here we will call sendEmailWithAttachment() for Sending mail to the sender
         * that contains a attachment.
         */
        try {
            mailService.sendEmailWithAttachment(emailReceiverComponent,mailSubject,mailBody);
        } catch (MailException mailException) {
            System.out.println(mailException);
            System.out.println("Mail sending error occurred !!!");

        }

        ResetEmailSuccess successObject = new ResetEmailSuccess(true,100,"Email sent Successfully!!!");

        return successObject;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Confirm request

    @GetMapping(path="/confirm/userbyemail/234f42c3c3c4c4c4v4vh8hgfgdf4dfkdweml443mlfm45mfr5fgrt55gt5gt5gt5tgtgttggtgg5gg5grg5to56go6hgbhko6ok6tk6kt")
    @ResponseBody
    public String confirmAndUpdateDatabase(@RequestParam String eml, @RequestParam String psd){

        System.out.println("Received email is "+ eml + "  and password is "+ psd);


        String encodedPassword = bcryptEncoder.encode(psd);

        if(empRepo.updatePassword(eml,encodedPassword)){
            System.out.println("Successfully , Password updated the database.");
            return "Successfully updated the Password.\n" +
                    "Please login again with new password - " +
                    "<a href=\"http://localhost:4200/login\">http://localhost:4200/login</a>";
        } else {
            System.out.println("Error , Password NOT updated the database.");
            return "Update Failed.\n" +
                    "Please Try Again - " +
                    "<a href=\"http://localhost:4200/login\">http://localhost:4200/login</a>";
        }

    }

}
