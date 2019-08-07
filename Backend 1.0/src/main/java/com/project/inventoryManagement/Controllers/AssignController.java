package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssetModel;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping(value = "/assign")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AssignController {


    @Autowired
    AssignRepo assignRepo;

    @Autowired
    AssetRepository assetRepo;

    @Autowired
    EmployeeMainRepository empRepo;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Add a new request
    @PostMapping(path = "/request/add")
    public AssignModel addNewRequest(@RequestBody AssignModel m1) {

        System.out.println("requestBody: " + m1.toString());

        // Auto filling areas as this is a request
        m1.setRequestType("REQUEST");
        m1.setAssigned(true);
        m1.setApprovedByAssetManager(false);
        m1.setApprovedByDepartmentHead(false);

        // Assigning created date
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        Date date = new Date();
        // dateFormat.format(date);
        m1.setRequestMadeDate(date);

        System.out.println("After editing: " + m1.toString());

        // Assigning references
        Optional<AssetModel> assetOptional = assetRepo.findByAssetId(m1.getRequestedAsset().getAssetId());
        if (assetOptional.isPresent()) {
            System.out.println("Line 2");
            m1.setRequestedAsset(assetOptional.get());
            System.out.println("Line 3");
        } else {
            System.out.println("Line 4");
            System.out.println("Such Asset is NOT found in AssetModel table");
        }

        System.out.println("Line 5");
        if (empRepo.findByNic(m1.getUserAssigned().getNic()) != null) {
            System.out.println("Line 6");
            System.out.println("USer Assigned is found in EmployeeModel table.");
            m1.setUserAssigned(empRepo.findByNic(m1.getUserAssigned().getNic()));
        } else {
            System.out.println("USer Assigned is NOT found in EmployeeModel table.");
        }

        System.out.println("Line 7");
        assignRepo.save(m1);
        System.out.println("Line 8");
        System.out.println("Assigned saved Successfully !!!");

        return m1;

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @GetMapping(path = "/all")
    public Iterable<AssignModel> getAllAssignings() {

//        Iterable<AssignModel> assignIterables = assignRepo.findAll();
//        List<AssignDTO> assignDTOList = new ArrayList<>();
//
//         ModelMapper modelMapper = new ModelMapper();
//
//         assignIterables.forEach(eachAssignModel ->{
//                AssignDTO d1 = new AssignDTO();
//                 d1.id= eachAssignModel.getId();
//                 d1.requestType = eachAssignModel.getRequestType();
//                  d1.requestMadeDate = eachAssignModel.getRequestMadeDate();
//                  d1.beginDate = eachAssignModel.getBeginDate();
//                   d1.dueDate = eachAssignModel.getDueDate();
//                  d1.isAssigned = eachAssignModel.isAssigned();
//                   d1.isApprovedByAssetManager = eachAssignModel.isApprovedByAssetManager();
//                   d1.isApprovedByDepartmentHead= eachAssignModel.isApprovedByDepartmentHead();
//                   d1.requestedAsset = eachAssignModel.getRequestedAsset();
//                    d1.userAssigned = eachAssignModel.getUserAssigned();
//
//
//
//                     assignDTOList.add(d1);
//                 });

        return assignRepo.findAll();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Booking an asset
    @PostMapping(path = "/book/add")
    public void addNewBooking(@RequestBody AssignModel m1) {
        System.out.println("requestBody: " + m1.toString());

        // Auto filling areas as this is a request
        m1.setRequestType("BOOK");
        m1.setAssigned(true);
        m1.setApprovedByAssetManager(true);
        m1.setApprovedByDepartmentHead(true);

//        // Assigning created date
//        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
//        Date date = new Date();
//        // dateFormat.format(date);
//        m1.setRequestMadeDate(date);
//
//        System.out.println("After editing: "+ m1.toString());
//
//       //  // Assigning references
//        Optional<AssetModel> assetOptional = assetRepo.findByAssetId(m1.getRequestedAsset().getAssetId());
//        if(assetOptional.isPresent()){
//            System.out.println("Line 2");
//            m1.setRequestedAsset(assetOptional.get());
//            System.out.println("Line 3");
//        } else {
//            System.out.println("Line 4");
//            System.out.println("Such Asset is NOT found in AssetModel table");
//        }
//
//        System.out.println("Line 5");
//        if(empRepo.findByNic(m1.getUserAssigned().getNic()) != null){
//            System.out.println("Line 6");
//            System.out.println("USer Assigned is found in EmployeeModel table.");
//            m1.setUserAssigned(empRepo.findByNic(m1.getUserAssigned().getNic()));
//        }else {
//            System.out.println("USer Assigned is NOT found in EmployeeModel table.");
//        }
//
//        System.out.println("Line 7");
//        assignRepo.save(m1);
//        System.out.println("Line 8");
//        System.out.println("Assigned saved Successfully !!!");
//
//        return m1;
//    }


    }
}
