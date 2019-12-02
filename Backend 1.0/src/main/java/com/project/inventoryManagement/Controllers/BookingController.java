package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/booking")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class BookingController {

    @Autowired
    AssignRepo assignRepo;


    @GetMapping(path = "/all")
    public Iterable<AssignModel> getAllBookings() {
        System.out.println("View All Bookings");
         return assignRepo.findAllByRequestType("BOOK");
    }

//////////////////////////////////////////////////////////////////////////////

    @GetMapping(path = "/delete")

    public boolean deleteAssigning(@RequestParam long id){
        System.out.println("Delete Request Came");
        assignRepo.deleteById(id);
        return true;
    }

    ///////////////////////////////////////////////////////////////////////////

}
