package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssignModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface AssignRepo extends CrudRepository<AssignModel, Long> {

   Iterable<AssignModel> findAll();

   AssignModel save(AssignModel model);

   @Query(value = "SELECT * from assign_model where request_type = ?1", nativeQuery = true)
   Iterable<AssignModel> findAllbyRequestType(String requestType);

   @Query(value = "select * from assign_model where request_type = ?1 and is_approved_by_department_head = ?2 and is_approved_by_asset_manager = ?3" , nativeQuery = true)
   Iterable<AssignModel> findByRequestTypeAndApprovedByDepartmentHeadAAndApprovedByAssetManager(String requestType , boolean headApproved, boolean managerApproved);


}
