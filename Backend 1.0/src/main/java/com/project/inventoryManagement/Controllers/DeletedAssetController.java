package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.DeletedAssetModel;
import com.project.inventoryManagement.Repositories.DeletedAssetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/deletedasset")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class DeletedAssetController {

    @Autowired
    DeletedAssetRepo deletedAssetRepo;

    @GetMapping(path = "all")
    public Iterable<DeletedAssetModel> getAllDeletedAssets(){
        System.out.println("Getting All deleted Assets");

        return deletedAssetRepo.findAll();
    }

}
