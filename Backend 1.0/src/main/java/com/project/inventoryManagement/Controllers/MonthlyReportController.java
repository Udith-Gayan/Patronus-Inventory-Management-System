package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.DTO.Responses.MonthlyDetailsDTO;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Models.Breakdown;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.BreakdownRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/report")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class MonthlyReportController {

    @Autowired
    AssignRepo assignRepo;

    @Autowired
    BreakdownRepo breakdownRepo;


    @GetMapping(path = "monthly")
    public MonthlyDetailsDTO getMonthlyReport(@RequestParam int year, @RequestParam int month) {
     System.out.println("Monthly report requested\nGenerating...");

       MonthlyDetailsDTO reportObject = new MonthlyDetailsDTO();

       reportObject.setBookedAssets(monthlyBooking(year,month));
       reportObject.setBreakdowns(monthlyBreakdowns(year,month));
       reportObject.setRequestedApprovedAssets(monthlyApprovedRequests(year,month));
       reportObject.setRequestedRejectedAssets(monthlyRejectedRequests(year,month));

        System.out.println("Completed Generating");

        return reportObject;

    }

    ////////////////////////////////////////////
    public List<AssignModel> monthlyBooking(int year , int month){

        List<AssignModel> l1 = assignRepo.findAllBookings();

        LocalDate firstDate = LocalDate.of(year,month,1);
        LocalDate lastDate;
        if(month == 2) {
           lastDate = LocalDate.of(year, month, 28);
        } else {
           lastDate = LocalDate.of(year, month, 30);
        }

        l1.removeIf(as -> as.getBeginDate().isAfter(lastDate) && as.getDueDate().isBefore(firstDate));

        return l1;
    }
    ////////////////////////////////////////////////////////////////
    public List<Breakdown> monthlyBreakdowns(int year , int month){

        List<Breakdown> l1 = breakdownRepo.findAllAsList();

        LocalDate firstDate = LocalDate.of(year,month,1);
        LocalDate lastDate;
        if(month == 2) {
            lastDate = LocalDate.of(year, month, 28);
        } else {
            lastDate = LocalDate.of(year, month, 30);
        }

        l1.removeIf(as -> as.getInformedDate().isAfter(lastDate) || as.getInformedDate().isBefore(firstDate));

        return l1;
    }
    //////////////////////////////////////////////
    public List<AssignModel> monthlyRejectedRequests(int year , int month){

        List<AssignModel> l1 = assignRepo.findAllRejectedRequests();

        LocalDate firstDate = LocalDate.of(year,month,1);
        LocalDate lastDate;
        if(month == 2) {
            lastDate = LocalDate.of(year, month, 28);
        } else {
            lastDate = LocalDate.of(year, month, 30);
        }

        l1.removeIf(as -> as.getBeginDate().isAfter(lastDate) && as.getDueDate().isBefore(firstDate));

        return l1;
    }
    ///////////////////////////////////////////////
    public List<AssignModel> monthlyApprovedRequests(int year , int month){

        List<AssignModel> l1 = assignRepo.findAllApprovedRequestsAsList();

        LocalDate firstDate = LocalDate.of(year,month,1);
        LocalDate lastDate;
        if(month == 2) {
            lastDate = LocalDate.of(year, month, 28);
        } else {
            lastDate = LocalDate.of(year, month, 30);
        }

        l1.removeIf(as -> as.getBeginDate().isAfter(lastDate) && as.getDueDate().isBefore(firstDate));

        return l1;

    }
    ///////////////////////////////////////////////////

}
