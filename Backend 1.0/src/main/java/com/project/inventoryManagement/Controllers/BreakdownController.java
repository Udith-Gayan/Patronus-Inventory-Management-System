package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.Breakdown;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.BreakdownRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
    public Breakdown addNewDamage(@RequestBody Breakdown b) throws Exception {
        // Assigning references

        if(b.getAnyMessage() == null)
            b.setAnyMessage("-");

        System.out.println(b);
        Optional<AssetModel> assetOptional = assetRepository.findByAssetId(b.getAssetId());    // changed
        System.out.println(" line 1");
        if(assetOptional.isPresent()){
            System.out.println("Line 2");
            assetOptional.get().setBroken(true);
            b.setBrokenAsset(assetOptional.get());
            System.out.println("Line 3");
        } else {
            System.out.println("Line 4");
            System.out.println("Such Asset is NOT found in AssetModel table");

            throw new Exception("Asset Not found");
        }


        System.out.println("Line 5");
        if(empRepo.findByNic(b.getComplainedNic()) != null){     // changed
            System.out.println("Line 6");
            System.out.println("informed user is found in EmployeeModel table.");
            b.setInformedBy(empRepo.findByNic(b.getComplainedNic()));       // changed
        }else {
            System.out.println("informed user is NOT found in EmployeeModel table.");
            throw new Exception("Employee Not found");
        }

        if(b.getAnyMessage() == null) {
            b.setAnyMessage("-");
        }

        b.setReleasedByAm(false);
        b.setTouchedByAssetManager(false);



        LocalDate currentDate = LocalDate.now();
        System.out.println("Now date is: " + currentDate);
        b.setInformedDate(currentDate);


         b.setWarrantyStatus(false);   // need to edit this according to the asset's warranty

        breakdownRepo.save(b);
        return b;

    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Reject breakdown and make asset available in the pool
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // View all breakdowns  for report generation
    @GetMapping(path = "all")
    public Iterable<Breakdown> getAllBreakdowns(){
       // System.out.println("Finding all Breakdowns...");
        final Iterable<Breakdown> all = breakdownRepo.findAll();
      //  System.out.println(" all Breakdowns found successfully!");



        return all;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Release an asset

    @GetMapping(path = "/release")
    public boolean releaseARepairedAsset(@RequestParam String assetId){
       // System.out.println("Releasing the asset : "+ assetId);
        assetRepository.updateReleasedAsset(assetId);
        breakdownRepo.updateReleased(assetId);

        return true;
    }

    /////////////////////////////////////////////////////////////////////////



}
