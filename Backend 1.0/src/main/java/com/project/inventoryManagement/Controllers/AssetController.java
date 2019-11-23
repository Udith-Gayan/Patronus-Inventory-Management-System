package com.project.inventoryManagement.Controllers;


import com.google.common.collect.Lists;
import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Models.DeletedAssetModel;
import com.project.inventoryManagement.Models.EmployeeMainModel;
import com.project.inventoryManagement.Repositories.*;
import com.project.inventoryManagement.Service.AssetRegistration;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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

       // Checking for null

        System.out.println("Getting Fields");

        if(aa1.getCapacity() == null){
             aa1.setCapacity("-");
        }
        if(aa1.getDisplaySize() == null){
            aa1.setDisplaySize("-");
        }
        if(aa1.getProcessor() == null){
            aa1.setProcessor("-");
        }
        if(aa1.getCapacity() == null){
            aa1.setCapacity("-");
        }
        if(aa1.getRam() == null){
            aa1.setRam("-");
        }
        if(aa1.getDescription() == null){
            aa1.setDescription("-");
        }

        if(aa1.getYrs() == null){
            aa1.setYrs("-");
        }
        if(aa1.getMonths() == null){
            aa1.setMonths("-");
        }
        if(aa1.getDays() == null){
            aa1.setDays("-");
        }
        if(aa1.getBrandName() == null){
            aa1.setBrandName("-");
        }
        if(aa1.getCategoryTypes() == null){
            aa1.setCategoryTypes("-");
        }

       aa1.setId(null);

        System.out.println("Getting Fields over");
        // Checking for null is over

        System.out.println("Registering the more than one quantity");
        AssetModel lastAssetRegistered = new AssetModel();
        if(aa1.getQuantity() == 1)

            lastAssetRegistered = assetRegistration.registerAnAsset(aa1);
        else{
            for(int i =0; i< aa1.getQuantity();i++){
                System.out.println("Round: "+ i);
                try {
                    assetRegistration.registerAnAsset((AssetModel)aa1.clone());
                } catch (CloneNotSupportedException e) {
                    e.printStackTrace();
                }

            }
        }



       return lastAssetRegistered;

    }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    AssetRepository assetRepository;

    @Autowired
    DeletedAssetRepo deletedAssetRepo;

    // Delete Asset by ID
    @DeleteMapping(path = "/delete")
    public boolean deleteAssetById(@RequestParam long id){
        System.out.println("delete id received: "+ id);

        Optional<AssetModel> e = assetRepository.findById(id);
        AssetModel es = e.get();

        // Mapping
        DeletedAssetModel dam = modelMapper.map(es, DeletedAssetModel.class);

        LocalDate today = LocalDate.now();
        dam.setDeletedDate(today);

        System.out.println("Mapping asset to deleted okay");
        deletedAssetRepo.save(dam);

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
