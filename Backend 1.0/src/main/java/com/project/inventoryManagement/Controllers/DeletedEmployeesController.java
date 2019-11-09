package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.DeletedEmployeesModel;
import com.project.inventoryManagement.Repositories.DeletedEmployeesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/deletedemployees")
@CrossOrigin
public class DeletedEmployeesController {

    @Autowired
    DeletedEmployeesRepo deletedEmployeesRepo;

    @GetMapping(path = "all")
    public Iterable<DeletedEmployeesModel> getAllDeletedList() {
        System.out.println("Getting All deleted Employees");
        return deletedEmployeesRepo.findAll();
    }
}
