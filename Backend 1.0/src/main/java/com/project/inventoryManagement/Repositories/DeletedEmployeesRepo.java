package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.DeletedEmployeesModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeletedEmployeesRepo extends CrudRepository<DeletedEmployeesModel, Long> {

    Iterable<DeletedEmployeesModel> findAll();
}
