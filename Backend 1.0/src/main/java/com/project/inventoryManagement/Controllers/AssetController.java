package com.project.inventoryManagement.Controllers;


import com.google.common.collect.Lists;
import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Models.EmployeeMainModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import com.project.inventoryManagement.Repositories.IDNumberRepo;
import com.project.inventoryManagement.Service.AssetRegistration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/asset")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class    AssetController {



    @Autowired
    private AssetRepository assetRepo;

    @Autowired
    AssetRegistration assetRegistration;

    @Autowired
    private IDNumberRepo idNumberRepo;

    @Autowired
    private EmployeeMainRepository employeeMainRepository;

    @Autowired
    private AssignRepo assignRepo;


    @GetMapping("/hi")
    public String sayhi(){
        return "HIIIIIIIIIIIII";
    }

//////////////////////////////////////////////////////////////////////////////////////////////
// Get all assets
    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<AssetModel> getAllAssets() {
        // This returns a JSON or XML with the users
        return assetRepo.findAll();
    }
////////////////////////////////////////////////////////////////////////////////////////////////


   // Register a new asset
    @PostMapping(path="/add") // Map ONLY POST Requests
    public AssetModel addNewAsset(@RequestBody AssetModel aa1) {
       System.out.println("Asset came:   "+ aa1.toString());

       return assetRegistration.registerAnAsset(aa1);

    }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Delete Asset by ID
    @DeleteMapping(path = "/delete")
    public boolean deleteAssetById(@RequestParam long id){
        System.out.println("delete id received: "+ id);
        assetRepo.deleteById(id);
        System.out.println("Deleted");
        return true;
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // View Owned assets
    @GetMapping(path = "/my/asset")
    public List<AssignModel> getAllOwnedAssets(@RequestParam String nic){
        System.out.println("Get all owned assets of employee: "+ nic);

        EmployeeMainModel owner = employeeMainRepository.findByNic(nic);

        Iterable<AssignModel> assignsNotDateFiltered = assignRepo.findByNicAndAmConfirmedAndReturnedAndIssued(owner.getEmployeeId());  //two queries with issued and not

         LocalDate today = LocalDate.now();
        List<AssignModel> filteredList = Lists.newArrayList(assignsNotDateFiltered);



        filteredList.removeIf(p -> today.isBefore(p.getBeginDate()) || today.isAfter(p.getDueDate()));   // Only today is within the assigned period are saved
      //  System.out.println(filteredList);   // heap overflow here

        return filteredList;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
