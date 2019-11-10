package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.EmployeeMainModel;
import com.project.inventoryManagement.Models.UserDTO;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface EmployeeMainRepository extends CrudRepository<EmployeeMainModel, Long> {

    EmployeeMainModel save(EmployeeMainModel employeeMainModel);

    EmployeeMainModel save(UserDTO employeeMainModel);

    EmployeeMainModel findByEmailAndPassword(String email,String password);

    EmployeeMainModel findFirstByEmailAndPassword(String email,String password);

    EmployeeMainModel findByEmail(String email);

    EmployeeMainModel findByNic(String nic);

    // delete an employee
    @Transactional
    void deleteByNic(String nic);

    boolean existsByEmail(String newPassword);

    // update password
    @Transactional
    @Modifying
    @Query(value = "update employee_main set password = ?2 where email = ?1" , nativeQuery = true)
    int updatePassword(String email, String password);

    //Block employee
    @Transactional
    @Modifying
    @Query(value = "update employee_main set unblocked = false where nic = ?1", nativeQuery = true)
    int blockEmployee(String nic);

    //Unblock Employee
    @Transactional
    @Modifying
    @Query(value = "update employee_main set unblocked = true where nic = ?1", nativeQuery = true)
    int unblockEmployee(String nic);

    // Update details of an employee
    @Transactional
    @Modifying
    @Query(value = "update employee_main set contact_no = ?2 , status = ?3 , address = ?4 , location = ?5 where nic = ?1", nativeQuery = true)
    int updateEmployee(String nic, String contactNo, String status, String address, String location);
}
