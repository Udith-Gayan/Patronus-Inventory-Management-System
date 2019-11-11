package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.AssetModel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;


@Repository
public interface AssetRepository extends CrudRepository<AssetModel, Long> {




    void deleteById(long id);

    Optional<AssetModel> findByAssetId(String assetId);

    // release broken asset
    @Transactional
    @Modifying
    @Query(value = "update asset set is_broken = false where asset_id = ?1", nativeQuery = true)
    int updateReleasedAsset(String assetId);

    //Update location
    @Transactional
    @Modifying
    @Query(value = "update asset set location = ?2 where asset_id = ?1", nativeQuery = true)
    int updateAssetLocation(String assetId, String location);


    AssetModel saveAndFlush(AssetModel aa1);
}
