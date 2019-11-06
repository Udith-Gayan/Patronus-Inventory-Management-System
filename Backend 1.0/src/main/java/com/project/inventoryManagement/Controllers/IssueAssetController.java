package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/issue")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class IssueAssetController {

    @Autowired
    AssignRepo assignRepo;

    // Issue a booked or requested asset by store keeper
    @GetMapping(path = "issue")
    boolean returnAsset(@RequestParam int id){

      int x = assignRepo.updateIssuedAsset(id);


        return true;

    }
}
