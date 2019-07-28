package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssetModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AssetRepository extends CrudRepository<AssetModel, Long> {




    void deleteById(long id);

    Optional<AssetModel> findByAssetId(String assetId);
}
