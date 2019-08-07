package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.IDNumberRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/asset")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class    AssetController {



    @Autowired
    private AssetRepository assetRepo;

    @Autowired
    private IDNumberRepo idNumberRepo;

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

        //creating an aasset id according to the category

       System.out.println(aa1.toString());

        System.out.println("line0");

        if(aa1.getAssetCategory().equals("Laptop")){
            aa1.setAssetId("LAP");
        }else if(aa1.getAssetCategory().equals("PC")){
            aa1.setAssetId("PC");
        }else if(aa1.getAssetCategory().equals("Projector")){
            aa1.setAssetId("PRJ");
        }else if(aa1.getAssetCategory().startsWith("Fur") || aa1.getAssetCategory().startsWith("fur")){
            aa1.setAssetId("FUR");
        }else {
            aa1.setAssetId("OTH");
        }

        System.out.println("line00");
        aa1.toString();

        long oldId = idNumberRepo.findFirst().getAssetIdNumber();
        System.out.println("line111");
        aa1.setAssetId(aa1.getAssetId()+oldId);
        System.out.println("line222");
       int x = idNumberRepo.updateAssetId(oldId,++oldId);
        System.out.println("line333");

        aa1.setBroken(false);

        assetRepo.save(aa1);
        System.out.println("line1444");
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
