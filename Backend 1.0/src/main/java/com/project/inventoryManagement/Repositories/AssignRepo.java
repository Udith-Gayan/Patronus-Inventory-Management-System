package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssignModel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AssignRepo extends CrudRepository<AssignModel, Long> {

    Iterable<AssignModel> findAll();

    AssignModel save(AssignModel model);

    @Query(value = "SELECT * from assign_model where request_type = ?1", nativeQuery = true)
    Iterable<AssignModel> findAllbyRequestType(String requestType);

    /* DepartmentHead Pending requests */
    @Query(value = "select * from assign_model where request_type = ?1 and is_approved_by_department_head = ?2 and is_approved_by_asset_manager = ?3 and is_dh_touched = false" , nativeQuery = true)
    Iterable<AssignModel> findByRequestPendingByDepartmentHead(String requestType , boolean headApproved, boolean managerApproved);

    /* Asset Manager pending requests */
    @Query(value = "select * from assign_model where request_type = ?1 and is_approved_by_department_head = ?2 and is_approved_by_asset_manager = ?3 and is_dh_touched = true and is_am_touched = false" , nativeQuery = true)
    Iterable<AssignModel> findByRequestPendingByAssetManager(String requestType , boolean headApproved, boolean managerApproved);


    Optional<AssignModel> findById(long id);


    /* Confirmation by Dh */
    @Transactional
    @Modifying
    @Query(value = "update assign_model set is_approved_by_department_head = ?2 , date_dh_confirmed = ?3 , is_dh_touched = true where id = ?1" , nativeQuery = true)
    int updateDhConfirmation(long id, boolean confirmation, LocalDate confirmedDate);

    /* Confirmation by AM */
    @Transactional
    @Modifying
    @Query(value = "update assign_model set is_approved_by_asset_manager = ?2 , date_am_confirmed = ?3 , is_am_touched = true where id = ?1" , nativeQuery = true)
    int updateAmConfirmation(long id, boolean confirmation, LocalDate confirmedDate);

    /* Rejection by Department Head */
    @Transactional
    @Modifying
    @Query(value = "update assign_model set is_approved_by_department_head = ?2 , date_dh_confirmed = ?3 , is_dh_touched = true , returned = true where id = ?1" , nativeQuery = true)
    int updateDhRejection(long id, boolean confirmation, LocalDate confirmedDate);

    @Transactional
    @Modifying
    @Query(value = "update assign_model set is_approved_by_asset_manager = ?2 , date_am_confirmed = ?3  , is_am_touched = true , returned= true where id = ?1" , nativeQuery = true)
    int updateAmRejection(long id, boolean confirmation, LocalDate confirmedDate);

    Iterable<AssignModel> findAllByRequestType(String requestType);


    // Asset returned
    @Transactional
    @Modifying
    @Query(value = "update assign_model set returned = true , due_date = ?2 where id = ?1", nativeQuery = true)
    int updateReturnedAsset(long id, LocalDate today);

    // Asset issued
    @Transactional
    @Modifying
    @Query(value = "update assign_model set issued = true where id = ?1", nativeQuery = true)
    int updateIssuedAsset(long id);


    // All approved requests
    @Query(value = "select * from assign_model where request_type='REQUEST' and is_approved_by_asset_manager = true and is_approved_by_department_head = true and is_am_touched = true and is_dh_touched = true ", nativeQuery = true)
    Iterable<AssignModel> findAllApprovedRequests();

    //  //All owned assets
    @Query(value = "select * from assign_model where assigned_user_id = ?1 and is_approved_by_asset_manager = true and returned = false", nativeQuery = true)
    Iterable<AssignModel> findByNicAndAmConfirmedAndReturned(long id);

    // All owned assets
    @Query(value = "select * from assign_model where assigned_user_id = ?1 and is_approved_by_asset_manager = true and returned = false", nativeQuery = true)
    Iterable<AssignModel> findByNicAndAmConfirmedAndReturnedAndIssued(long id);   /// make issued true here

    // Future Dates
    @Query(value = "select * from assign_model where asset_id = ?1 and issued = false and returned = false" , nativeQuery = true)
    List<AssignModel> findAllFutureDates(String assetId);

    // All booking for monthly report
    @Query(value = "select * from assign_model where request_type = 'BOOK' ", nativeQuery = true)
    List<AssignModel> findAllBookings();

    //All rejected requests for monthly report
    @Query(value = "select * from assign_model where request_type='REQUEST' and ((is_approved_by_asset_manager = false and is_am_touched = true) or (is_approved_by_department_head = false and is_dh_touched = true ))", nativeQuery = true)
    List<AssignModel> findAllRejectedRequests();

    // All approved requests for monthly report
    @Query(value = "select * from assign_model where request_type='REQUEST' and is_approved_by_asset_manager = true and is_approved_by_department_head = true and is_am_touched = true and is_dh_touched = true ", nativeQuery = true)
    List<AssignModel> findAllApprovedRequestsAsList();




}