package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import com.project.inventoryManagement.Service.DateCheckerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping(value = "/assign")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class BookingAssetController {

    @Autowired
    AssignRepo assignRepo;

    @Autowired
    AssetRepository assetRepo;

    @Autowired
    EmployeeMainRepository empRepo;


    @Autowired
    DateCheckerService dateCheckerService;

    ////////////////////////////////////
    // add a new booking
    @PostMapping(path = "/book/add")
    public AssignModel addNewBooking(@RequestBody AssignModel m1) throws Exception{




        if(!dateCheckerService.isAvailable(m1.getAssetId(),m1.getBeginDate(),m1.getDueDate())){
            throw new Exception("Asset has been already reserved during the given period. Please select another period.");
        }


        System.out.println("requestBody: " + m1.toString());

        // Auto filling areas as this is a request
        m1.setRequestType("BOOK");
        m1.setAssigned(true);
        m1.setApprovedByAssetManager(true);
        m1.setApprovedByDepartmentHead(true);
        m1.setAmTouched(true);

        if(m1.getDescription() == null){
            m1.setDescription("-");
        }

        LocalDate dd = LocalDate.of(0001,01,01);
        m1.setDateDHConfirmed(dd);
        m1.setDateAMConfirmed(dd);


        // Date created
        LocalDate nowdate = LocalDate.now();
        System.out.println("Now date is: " + nowdate);

        m1.setRequestMadeDate(nowdate);

        System.out.println("After editing: "+ m1.toString());

        //  // Assigning references
        Optional<AssetModel> assetOptional = assetRepo.findByAssetId(m1.getAssetId());
        if(assetOptional.isPresent()){
            System.out.println("Line 2");
            m1.setRequestedAsset(assetOptional.get());
            System.out.println("Line 3");
        } else {
            System.out.println("Line 4");
            System.out.println("Such Asset is NOT found in AssetModel table");
        }

        System.out.println("Line 5");
        if(empRepo.findByNic(m1.getRequestedNic()) != null){
            System.out.println("Line 6");
            System.out.println("USer Assigned is found in EmployeeModel table.");
            m1.setUserAssigned(empRepo.findByNic(m1.getRequestedNic()));
            System.out.println("Line 6.2");
        }else {
            System.out.println("USer Assigned is NOT found in EmployeeModel table.");
        }

        System.out.println("Line 7");
        AssignModel savedm1 = assignRepo.save(m1);
        System.out.println("Line 8");
        System.out.println("Assigned saved Successfully !!!");

        return savedm1;



    }
    ////////////////////////////////

    // view all bookings
    @GetMapping(path = "/book/view/all")
    public Iterable<AssignModel> viewAllBookings(){

        System.out.println("Request came to get all Bookings");

        return assignRepo.findAllbyRequestType("BOOKING");
    }


    ///////////////////////////////////

}
