package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/assets")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AssetController {



    @Autowired
    private AssetRepository assetRepo;


    @GetMapping("/hi")
    public String sayhi(){
        return "HIIIIIIIIIIIII";
    }

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<AssetModel> getAllAssets() {
        // This returns a JSON or XML with the users
        return assetRepo.findAll();
    }






    @PostMapping(path="/add") // Map ONLY POST Requests
    public AssetModel addNewAsset(@RequestBody AssetModel aa1) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        assetRepo.save(aa1);
        return aa1;
    }



}
