package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/assign")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AssignController {


    @Autowired
    AssignRepo assignRepo;

    @Autowired
    AssetRepository assetRepo;

    @Autowired
    EmployeeMainRepository empRepo;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Add a new request
   // moved to request Asset Controller
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping(path = "/all")
    public Iterable<AssignModel> getAllAssignings() {



        return assignRepo.findAll();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Booking an asset
    //Moved to bookingAsset Controller class

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////



}
