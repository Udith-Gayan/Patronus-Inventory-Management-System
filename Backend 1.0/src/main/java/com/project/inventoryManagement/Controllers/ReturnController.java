package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping(value = "/return")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ReturnController {

    @Autowired
    AssignRepo assignRepo;

    // return a booked or requested asset
    @GetMapping(path = "return")
    boolean returnAsset(@RequestParam int id){

        System.out.println("Asset returned from Assign Id: "+ id);
        LocalDate today = LocalDate.now();
        assignRepo.updateReturnedAsset(id, today);

        return true;

    }
}
