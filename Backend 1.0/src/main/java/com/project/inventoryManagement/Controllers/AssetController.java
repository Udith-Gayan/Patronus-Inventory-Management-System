package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/asset")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AssetController {



    @Autowired
    private AssetRepository assetRepo;


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
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        assetRepo.save(aa1);
        return aa1;
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

}
