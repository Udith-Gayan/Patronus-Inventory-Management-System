package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssignModel;
import org.springframework.data.repository.CrudRepository;

public interface AssignRepo extends CrudRepository<AssignModel, Long> {

   Iterable<AssignModel> findAll();
}
