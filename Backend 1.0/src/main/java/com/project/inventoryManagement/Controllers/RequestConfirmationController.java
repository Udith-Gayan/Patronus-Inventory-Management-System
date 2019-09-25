package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.DTO.RequestConfirmationDTO;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping(value = "/assign/confirmation")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class RequestConfirmationController {


    @Autowired
    AssignRepo assignRepo;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Confirm by Department Head
    @PostMapping("/departmenthead")
    public ResponseEntity<AssignModel> confirmByDepartmentHead(@RequestBody RequestConfirmationDTO req){
        System.out.println("Confirm by Department head, this id: "+ req.toString());

        Optional<AssignModel> assignModelOptional = assignRepo.findById(req.id);

        if(assignModelOptional.isPresent()){
            System.out.println("DH request model found in table. Updating to confirm ");

            // Assigning updated date
            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
            Date nowdate = new Date();
            dateFormat.format(nowdate);

            AssignModel updatedModel = assignRepo.updateDhConfirmation(assignModelOptional.get().getId(),true, nowdate);
            System.out.println("Confirmed DH: " + updatedModel.toString());

            return ResponseEntity.ok(updatedModel);
        }
        else {

            System.out.println("DM request model NOT found in table. ");
            return null;
        }


    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Confirm by Asset Manager

    @PostMapping("/assetmanager")
    public ResponseEntity<AssignModel> confirmByAssetManager(@RequestBody RequestConfirmationDTO req){
        System.out.println("Confirm by Asset Manager, this id: "+ req.toString());

        Optional<AssignModel> assignModelOptional = assignRepo.findById(req.id);

        if(assignModelOptional.isPresent()){
            System.out.println("AM request model found in table. Updating to confirm ");

            // Assigning updated date
            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
            Date nowdate = new Date();
            dateFormat.format(nowdate);

            AssignModel updatedModel = assignRepo.updateAmConfirmation(assignModelOptional.get().getId(),true, nowdate);

            System.out.println("Confirmed AM: " + updatedModel.toString());

            return ResponseEntity.ok(updatedModel);
        }
        else {

            System.out.println("AM request model NOT found in table. ");
            return null;
        }


    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
