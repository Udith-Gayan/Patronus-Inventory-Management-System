package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.EmployeeMainModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeMainRepository extends CrudRepository<EmployeeMainModel, Long> {
    EmployeeMainModel findByEmailAndPassword(String email,String password);

    EmployeeMainModel findFirstByEmailAndPassword(String email,String password);
}
