package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.DTO.ResetFormDTO;
import com.project.inventoryManagement.DTO.Responses.Errors.ResetEmailNotFoundError;
import com.project.inventoryManagement.DTO.Responses.Success.ResetEmailSuccess;
import com.project.inventoryManagement.Models.SecretkeyModel;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import com.project.inventoryManagement.Repositories.SecretkeyRepo;
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

    @Autowired
    SecretkeyRepo secretkeyRepo;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // send mail
    @PostMapping(path="/sendmail")
    public Object sendWithAttachment(@RequestBody ResetFormDTO resetForm) throws MessagingException {


        /******* 333 - AES decryption ***/
  /************************/
//        System.out.println("***********front Encrypted Password is:   "+ resetForm.getNewPassword());
//        String decryptedPsd = null;
//        try {
//            Field field = Class.forName("javax.crypto.JceSecurity").
//                    getDeclaredField("isRestricted");
//            field.setAccessible(true);
//            field.set(null, java.lang.Boolean.FALSE);
//            decryptedPsd = AESForCrossOrigin.decryptText(resetForm.getNewPassword(),"1234567890123456") ;
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//        //   String decryptedPsd = AESForCrossOrigin.decryptText(authenticationRequest.getPassword(),"1234567890123456") ;
//
//
//        System.out.println("***********Decryped Password is:   "+ decryptedPsd);
//        resetForm.setNewPassword(decryptedPsd);
/**********  333 - end ***************/

        System.out.println("Reset Form received: "+ resetForm.toString());


        /***********  Bellow part must be enable *****************************************/
        // Checking if email is valid according to database

        if(!empRepo.existsByEmail(resetForm.getNewPassword())){

            ResetEmailNotFoundError errorObject = new ResetEmailNotFoundError(false,-1,"Unauthenticated Email");
             return errorObject;
        }

       /****************************************************/
        /* Generating a random secret key */

        String  secretKey = randomAlphaNumeric(16); // 'calling a method defined at the bottom'



        System.out.println("generated secret String of 16 length: " + secretKey + "   legth= "+ secretKey.length());

        SecretkeyModel secretModel = new SecretkeyModel();
        secretModel.setSkey(secretKey);

        String encodedPassword = bcryptEncoder.encode(resetForm.getNewPassword());  // new
        secretModel.setPassword(encodedPassword); // new
        secretModel.setEmail(resetForm.getResetEmail()); // new


          secretkeyRepo.save(secretModel);
        System.out.println("Secret key saved to DB , Successful");


        /*************************************/

        /************ 455 AES*****************************************/

//        String encryptedEmail = null;
//        String encryptedPsd = null;
//        encryptedEmail = AES.encrypt(resetForm.getResetEmail(), secretKey);
//        encryptedPsd = AES.encrypt(resetForm.getNewPassword(), secretKey);
//          /* Encrypting the password and email using AES */
//
//        System.out.println("Encrypting.....");
//
//        System.out.println("Final encrypted email: " + encryptedEmail);
//        System.out.println("Final encrypted password: " + encryptedPsd);
//
//


        /************ 455 end**********************************/



        EmailReceiverComponent emailReceiverComponent = new EmailReceiverComponent();

       /* Setting email body*/
        emailReceiverComponent.setEmailAddress(resetForm.getResetEmail()); //Receiver's email address
        String mailSubject = "Reset Password Confirmation";
        String mailBody = "Please follow the following link to confirm your request to change the password.\nClick : " +
                "http://localhost:8080/resetpassword/confirm/userbyemail/234f42c3c3c4c4c4v4vh8hgfgdf4dfkdweml443mlfm45mfr5fgrt55gt5gt5gt5tgtgttggtgg5gg5grg5to56go6hgbhko6ok6tk6kt?id=vf4v5vrrjvcvvvxccvcxc&"+
                "sk="+ secretKey;
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
    public String confirmAndUpdateDatabase( @RequestParam String sk){

//        System.out.println("Received encrypted email is "+ eml + "  and encrypted password is "+ psd +  "  secret key is "+ sk);
//
//        /*Modifying the encryption with replacing  spaces with plus sign */
//        String newEml = eml.replaceAll(" ","+");
//        String newPsd = psd.replaceAll(" ","+");
//
//        System.out.println("Modifyied encrypted email is "+ newEml + "  and modyfied password is "+ newPsd +  "  secret key is "+ sk);

        /*******************************/

        String newPassword = null;
        String email = null;

        // Checking if secretkey exists in db

        if(secretkeyRepo.existsBySkey(sk)){
            System.out.println("secret key found on database.You can continue reseting");
            newPassword = secretkeyRepo.findBySkey(sk).getPassword();
            email = secretkeyRepo.findBySkey(sk).getEmail();
            secretkeyRepo.deleteAll();
            System.out.println("Secret key deleted from database.");
        }else{
            System.out.println("No secret key DB.return without reseting");
            secretkeyRepo.deleteAll();
            System.out.println("Secret key deleted from database. by error method");
            return "Unauthorized resetting. Reset Failed !!! ";
        }



        /*********************************/
//        // Decryting email and password using the secretkey
//        String decryptedEmail = AES.decrypt(newEml,sk);
//        String decryptedPsd = AES.decrypt(newPsd,sk);
//
//
//
//        System.out.println("decrypted email: "+ decryptedEmail);
//        System.out.println("decrypted password: "+ decryptedPsd);

        /***************************************/



//        String encodedPassword = bcryptEncoder.encode(decryptedPsd);



        if(empRepo.updatePassword(email,newPassword)!=0){
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



//        return " Successfulllllllllllll!!";

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Method for generating alpha numeric strings of given length

    private static final String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstvuxyz";  // This is alphanumeric set to choose characters from
    public static String randomAlphaNumeric(int count) {
        StringBuilder builder = new StringBuilder();
        while (count-- != 0) {
            int character = (int)(Math.random()*ALPHA_NUMERIC_STRING.length());
            builder.append(ALPHA_NUMERIC_STRING.charAt(character));
        }
        return builder.toString();
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
