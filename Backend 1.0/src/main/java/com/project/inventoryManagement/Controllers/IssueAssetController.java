package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.EmployeeMainModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/issue")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class IssueAssetController {

    @Autowired
    AssignRepo assignRepo;

    @Autowired
    AssetRepository assetRepository;

    // Issue a booked or requested asset by store keeper
    @GetMapping(path = "issue")
    boolean returnAsset(@RequestParam int id){
        System.out.println("Asset Issued from Assign Id: "+ id);

        EmployeeMainModel assignedUser = assignRepo.findById(id).get().getUserAssigned();
        String userLocation = assignedUser.getLocation();

        AssetModel asset = assignRepo.findById(id).get().getRequestedAsset();
        asset.setLocation(userLocation);

        assetRepository.updateAssetLocation(asset.getAssetId(), userLocation);


      int x = assignRepo.updateIssuedAsset(id);


        return true;

    }
}
