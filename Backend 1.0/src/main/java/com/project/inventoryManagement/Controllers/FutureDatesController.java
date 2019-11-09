package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.DTO.FutureDatesDTO;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/futuredates")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class FutureDatesController {

    @Autowired
    AssignRepo assignRepo;

    @GetMapping(path = "get")   // define urls
    public List<FutureDatesDTO> getFutureDates(@RequestParam String assetId) {

        System.out.println("Get all future dates");

        List<AssignModel> assigns;
         assigns = assignRepo.findAllFutureDates(assetId);

         final List<FutureDatesDTO> dateArray = null;
         

         assigns.forEach(ass -> {
                                  FutureDatesDTO aDate = new FutureDatesDTO(ass.getBeginDate(),ass.getDueDate());
                                 // assert dateArray != null;
                                  dateArray.add(aDate);
                                  });


         return dateArray;

    }
}
