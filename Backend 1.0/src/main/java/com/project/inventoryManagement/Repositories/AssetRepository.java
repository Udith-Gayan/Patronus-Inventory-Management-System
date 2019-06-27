package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssetModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface
AssetRepository extends CrudRepository<AssetModel, String> {


}
