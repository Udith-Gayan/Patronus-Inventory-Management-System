package com.project.inventoryManagement.Controllers;


import com.project.inventoryManagement.DTO.FutureDatesDTO;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

         System.out.println("Size of assigns: "+ assigns.size());
        System.out.println("qurieddddd");
         List<FutureDatesDTO> dateArrayList = new ArrayList<FutureDatesDTO>();
        System.out.println("quriedddaaaaaaaad");

        int count = 0;


         assigns.forEach(ass -> {
            // System.out.println(ass.toString());
                                  FutureDatesDTO aDate = new FutureDatesDTO(ass.getBeginDate(),ass.getDueDate());
             System.out.println("qurieddddd");
                                 // assert dateArray != null;
                                  dateArrayList.add(aDate);
             System.out.println("1");
                                  });


         return dateArrayList;

    }
}
