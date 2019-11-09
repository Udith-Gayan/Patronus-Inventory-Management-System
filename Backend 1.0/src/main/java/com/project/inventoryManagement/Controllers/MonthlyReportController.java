package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/report")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class MonthlyReportController {

    @Autowired
    AssignRepo assignRepo;


}
