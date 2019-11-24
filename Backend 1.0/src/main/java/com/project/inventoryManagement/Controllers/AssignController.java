package com.project.inventoryManagement.Controllers;

import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssetRepository;
import com.project.inventoryManagement.Repositories.AssignRepo;
import com.project.inventoryManagement.Repositories.EmployeeMainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
   // moved to request Asset Controller
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
    //Moved to bookingAsset Controller class

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////



}
