package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.DeletedAssetModel;
import org.springframework.data.repository.CrudRepository;

public interface DeletedAssetRepo extends CrudRepository<DeletedAssetModel, Long> {

     Iterable<DeletedAssetModel> findAll();
}
