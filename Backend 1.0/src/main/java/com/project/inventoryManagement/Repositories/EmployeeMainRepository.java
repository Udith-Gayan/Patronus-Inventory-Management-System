package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.EmployeeMainModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface EmployeeMainRepository extends CrudRepository<EmployeeMainModel, Long> {
    EmployeeMainModel findByEmailAndPassword(String email,String password);

    EmployeeMainModel findFirstByEmailAndPassword(String email,String password);

    EmployeeMainModel findByEmail(String email);

    EmployeeMainModel findByNic(String nic);

    @Transactional
    void deleteByNic(String nic);
}
