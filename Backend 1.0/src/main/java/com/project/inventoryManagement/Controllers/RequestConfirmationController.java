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
@RequestMapping(value = "/assign/confirmation")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class RequestConfirmationController {


    @Autowired
    AssignRepo assignRepo;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Confirm by Department Head
    @PostMapping("/departmenthead")
    public ResponseEntity<AssignModel> confirmByDepartmentHead(@RequestBody RequestConfirmationDTO req){
        System.out.println("Confirm by Department head, this id: "+ req.getId());

        Optional<AssignModel> assignModelOptional = assignRepo.findById(req.id);

        if(assignModelOptional.isPresent()){
            System.out.println("DH request model found in table. Updating to confirm ");

            // Assigning updated date
//            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
//            Date nowdate = new Date();
//            dateFormat.format(nowdate);


            LocalDate nowdate = LocalDate.now();
            System.out.println("Now date is: " + nowdate);

            int updatedVal = assignRepo.updateDhConfirmation(assignModelOptional.get().getId(),true, nowdate);
            System.out.println("Confirmed DH: " + updatedVal);


            Optional<AssignModel> updatedModel = assignRepo.findById(req.id);

            return ResponseEntity.ok(updatedModel.get());
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
//            DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
//            Date nowdate = new Date();
//            dateFormat.format(nowdate);


            LocalDate nowdate = LocalDate.now();
            System.out.println("Now date is: " + nowdate);

            int updatedVal = assignRepo.updateAmConfirmation(assignModelOptional.get().getId(),true, nowdate);


            System.out.println("Confirmed AM: " + updatedVal);

            Optional<AssignModel> updatedModel = assignRepo.findById(req.id);

            return ResponseEntity.ok(updatedModel.get());
        }
        else {

            System.out.println("AM request model NOT found in table. ");
            return null;
        }


    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}