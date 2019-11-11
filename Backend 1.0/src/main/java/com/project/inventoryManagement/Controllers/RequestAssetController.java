package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import com.project.inventoryManagement.Service.DateCheckerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping(value = "/assign")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class RequestAssetController {


    @Autowired
    AssignRepo assignRepo;

    @Autowired
    AssetRepository assetRepo;

    @Autowired
    EmployeeMainRepository empRepo;

    @Autowired
    DateCheckerService  dateCheckerService;

//////////////////////////////////////////////////////////////////////
    // Add a new request
    //Moved to request Control class controller
    // Add a new request
    @PostMapping(path = "/request/add")
    public AssignModel addNewRequest(@RequestBody AssignModel m1) throws Exception {

        if(!dateCheckerService.isAvailable(m1.getAssetId(),m1.getBeginDate(),m1.getDueDate())){
            throw new Exception("Asset has been already reserved during the given period. Please select another period.");
        }

        System.out.println("requestBody: " + m1.toString());

        // Auto filling areas as this is a request
        m1.setRequestType("REQUEST");
        m1.setAssigned(true);
        m1.setApprovedByAssetManager(false);
        m1.setApprovedByDepartmentHead(false);
        if(m1.getDescription() == null){
            m1.setDescription("-");
        }

        LocalDate dd = LocalDate.of(0000,01,01);
        m1.setDateDHConfirmed(dd);
        m1.setDateAMConfirmed(dd);

        // Assigning created date
        LocalDate nowdate = LocalDate.now();
        System.out.println("Now date is: " + nowdate);
        m1.setRequestMadeDate(nowdate);

        System.out.println("After editing: " + m1.toString());

        // Assigning references
        Optional<AssetModel> assetOptional = assetRepo.findByAssetId(m1.getAssetId());
        if (assetOptional.isPresent()) {
            System.out.println("Line 2");
            m1.setRequestedAsset(assetOptional.get());
            System.out.println("Line 3");
        } else {
            System.out.println("Line 4");
            System.out.println("Such Asset is NOT found in AssetModel table");
        }

        System.out.println("Line 5");
        if (empRepo.findByNic(m1.getRequestedNic()) != null) {
            System.out.println("Line 6");
            System.out.println("USer Assigned is found in EmployeeModel table.");
            m1.setUserAssigned(empRepo.findByNic(m1.getRequestedNic()));
        } else {
            System.out.println("USer Assigned is NOT found in EmployeeModel table.");
        }

        System.out.println("Line 7");
        AssignModel savedm1 = assignRepo.save(m1);
        System.out.println("Line 8");
        System.out.println("Assigned saved Successfully !!!");

        return savedm1;

    }

    ///////////////////////////////////////////////////////////////////////////

    // View All requests
    @GetMapping(path = "/request/view/all")
    public Iterable<AssignModel> viewAllRequests(){
        System.out.println("Request came to get all requests");
        return assignRepo.findAllbyRequestType("REQUEST");
    }

    //////////////////////////////////////////////////////////////////////////////////////

    // view pending requests by Department head
    @GetMapping(path = "/request/view/pending/departmentHead")
    public Iterable<AssignModel> viewPendingsByDepartmentHead(){
        System.out.println("Request came to get all pending requests by department head");
        return assignRepo.findByRequestPendingByDepartmentHead("REQUEST",false,false);
    }

    ////////////////////////////////////////////////////////////////

    // view pending requests by Asset Manager head
    @GetMapping(path = "/request/view/pending/assetMananger")
    public Iterable<AssignModel> viewPendingsByAssetMAanager(){
        System.out.println("Request came to get all pending requests by AssetManager");
        return assignRepo.findByRequestPendingByAssetManager("REQUEST",true,false);
    }

    /////////////////////////////////////////////

    @GetMapping(path = "/request/view/approved/all")
    public Iterable<AssignModel> getAllAprrovedAssigningsByAssetMananger(){
        System.out.println(" Get All Aprroved requests by Asset Manager");
        return assignRepo.findAllApprovedRequests();
    }
    //////////////////////////////////////////////


}
