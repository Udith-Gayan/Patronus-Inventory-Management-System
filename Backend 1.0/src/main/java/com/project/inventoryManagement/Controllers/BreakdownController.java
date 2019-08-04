package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.Breakdown;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.BreakdownRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping(value = "/breakdown")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class BreakdownController {


    @Autowired
    BreakdownRepo breakdownRepo;

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    EmployeeMainRepository empRepo;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add a breakdown
    @PostMapping(path = "add")
    public Breakdown addNewDamage(@RequestBody Breakdown b){
        // Assigning references
        Optional<AssetModel> assetOptional = assetRepository.findByAssetId(b.getBrokenAsset().getAssetId());
        if(assetOptional.isPresent()){
            System.out.println("Line 2");
            assetOptional.get().setBroken(true);
            b.setBrokenAsset(assetOptional.get());
            System.out.println("Line 3");
        } else {
            System.out.println("Line 4");
            System.out.println("Such Asset is NOT found in AssetModel table");
        }


        System.out.println("Line 5");
        if(empRepo.findByNic(b.getInformedBy().getNic()) != null){
            System.out.println("Line 6");
            System.out.println("informed user is found in EmployeeModel table.");
            b.setInformedBy(empRepo.findByNic(b.getInformedBy().getNic()));
        }else {
            System.out.println("informed user is NOT found in EmployeeModel table.");
        }

        b.setApprovedByAssetMananger(false);
        b.setAssignedToRepairManager(false);

        Date currentDate = new Date();
        b.setInformedDate(currentDate);


         b.setWarrantyStatus(false);   // need to edit this according to the asset's warranty

        breakdownRepo.save(b);
        return b;

    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Approve by asset manager



}
