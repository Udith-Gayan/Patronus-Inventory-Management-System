package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    ////////////////////////////////////
    @PostMapping(path = "/book/add")
    public AssignModel addNewBooking(@RequestBody AssignModel m1) {
        System.out.println("requestBody: " + m1.toString());

        // Auto filling areas as this is a request
        m1.setRequestType("BOOK");
        m1.setAssigned(true);
        m1.setApprovedByAssetManager(true);
        m1.setApprovedByDepartmentHead(true);

        // Assigning created date
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        Date date = new Date();
        // dateFormat.format(date);
        m1.setRequestMadeDate(date);

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
    @GetMapping(path = "/book/view/all")
    public Iterable<AssignModel> viewAllBookings(){

        System.out.println("Request came to get all Bookings");

        return assignRepo.findAllbyRequestType("BOOKING");
    }


    ///////////////////////////////////

}
