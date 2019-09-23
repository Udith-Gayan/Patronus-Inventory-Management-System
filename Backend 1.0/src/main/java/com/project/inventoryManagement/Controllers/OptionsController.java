package com.project.inventoryManagement.Controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class OptionsController {

    @RequestMapping(value = "*", method = {RequestMethod.OPTIONS})
    public ResponseEntity replyOkay(){
        System.out.println("Option Request came");
        return new ResponseEntity(HttpStatus.OK);
    }
}
