package com.project.inventoryManagement.Service;

import com.project.inventoryManagement.components.EmailReceiverComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

//    @Autowired
//    public MailService(JavaMailSender javaMailSender) {
//        this.javaMailSender = javaMailSender;
//    }

    public void sendEmailWithAttachment(EmailReceiverComponent receiver,String mailSubject, String mailBody) throws MailException, MessagingException {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(receiver.getEmailAddress());
        helper.setSubject(mailSubject);
        helper.setText(mailBody);




//         /* This is for attachment. Attachement is placed at src-->Resources folder */
//        ClassPathResource classPathResource = new ClassPathResource("Attachment.pdf");
//        helper.addAttachment(classPathResource.getFilename(), classPathResource);

        javaMailSender.send(mimeMessage);
    }



}
