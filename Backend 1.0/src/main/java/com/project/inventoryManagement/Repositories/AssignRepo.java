package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssignModel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.Optional;

public interface AssignRepo extends CrudRepository<AssignModel, Long> {

   Iterable<AssignModel> findAll();

   AssignModel save(AssignModel model);

   @Query(value = "SELECT * from assign_model where request_type = ?1", nativeQuery = true)
   Iterable<AssignModel> findAllbyRequestType(String requestType);

   @Query(value = "select * from assign_model where request_type = ?1 and is_approved_by_department_head = ?2 and is_approved_by_asset_manager = ?3 and date_dh_confirmed is null and date_am_confirmed is null" , nativeQuery = true)
   Iterable<AssignModel> findByRequestPendingByDepartmentHead(String requestType , boolean headApproved, boolean managerApproved);

   @Query(value = "select * from assign_model where request_type = ?1 and is_approved_by_department_head = ?2 and is_approved_by_asset_manager = ?3 and date_dh_confirmed is not null and date_am_confirmed is null" , nativeQuery = true)
   Iterable<AssignModel> findByRequestPendingByAssetManager(String requestType , boolean headApproved, boolean managerApproved);


   Optional<AssignModel> findById(long id);

   /* Confirmation */
    @Transactional
   @Modifying
   @Query(value = "update assign_model set is_approved_by_department_head = ?2 , date_dh_confirmed = ?3 where id = ?1" , nativeQuery = true)
   int updateDhConfirmation(long id, boolean confirmation, Date confirmedDate);

    @Transactional
   @Modifying
   @Query(value = "update assign_model set is_approved_by_asset_manager = ?2 , date_am_confirmed = ?3 where id = ?1" , nativeQuery = true)
   int updateAmConfirmation(long id, boolean confirmation, Date confirmedDate);

  /* Rejection */
  @Transactional
  @Modifying
  @Query(value = "update assign_model set is_approved_by_department_head = ?2 , date_dh_confirmed = ?3 where id = ?1" , nativeQuery = true)
  int updateDhRejection(long id, boolean confirmation, Date confirmedDate);

    @Transactional
   @Modifying
   @Query(value = "update assign_model set is_approved_by_asset_manager = ?2 , date_am_confirmed = ?3 where id = ?1" , nativeQuery = true)
   int updateAmRejection(long id, boolean confirmation, Date confirmedDate);

}
