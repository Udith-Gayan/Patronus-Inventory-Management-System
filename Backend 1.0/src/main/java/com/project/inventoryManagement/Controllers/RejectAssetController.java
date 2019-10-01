package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.DTO.RequestConfirmationDTO;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping(value = "/assign/reject")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class RejectAssetController {


    @Autowired
    AssignRepo assignRepo;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Reject by Department Head
    @PostMapping("/departmenthead")
    public ResponseEntity<AssignModel> rejectByDepartmentHead(@RequestBody RequestConfirmationDTO req){
        System.out.println("Reject by Department head, this id: "+ req.getId());

        Optional<AssignModel> assignModelOptional = assignRepo.findById(req.id);

        if(assignModelOptional.isPresent()){
            System.out.println("DH reject model found in table. Updating to confirm ");

            // Assigning updated date
//            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
//            Date nowdate = new Date();
//            dateFormat.format(nowdate);

            LocalDate nowdate = LocalDate.now();
            System.out.println("Now date is: " + nowdate);


            int updatedVal;
            assignRepo.updateDhRejection(assignModelOptional.get().getId(),false, nowdate);
            updatedVal = assignRepo.updateAmRejection(assignModelOptional.get().getId(),false, nowdate);


            System.out.println("Rejected DH: " + updatedVal);

            Optional<AssignModel> updatedModel = assignRepo.findById(req.id);


            return ResponseEntity.ok(updatedModel.get());
        }
        else {

            System.out.println("DM reject model NOT found in table. ");
            return null;
        }


    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Reject by asset Manager
    @PostMapping("/assetmanager")
    public ResponseEntity<AssignModel> rejectByAssetManager(@RequestBody RequestConfirmationDTO req){
        System.out.println("Reject by Department head, this id: "+ req.toString());

        Optional<AssignModel> assignModelOptional = assignRepo.findById(req.id);

        if(assignModelOptional.isPresent()){
            System.out.println("AM reject model found in table. Updating to confirm ");

            // Assigning updated date
//            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
//            Date nowdate = new Date();
//            dateFormat.format(nowdate);


            LocalDate nowdate = LocalDate.now();
            System.out.println("Now date is: " + nowdate);


            int updatedVal;
            updatedVal = assignRepo.updateAmRejection(assignModelOptional.get().getId(),false, nowdate);

            System.out.println("Rejected AM: " + updatedVal);
            Optional<AssignModel> updatedModel = assignRepo.findById(req.id);


            return ResponseEntity.ok(updatedModel.get());
        }
        else {

            System.out.println("AM reject model NOT found in table. ");
            return null;
        }


    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





}

