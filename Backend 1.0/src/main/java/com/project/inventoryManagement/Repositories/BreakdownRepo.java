package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.Breakdown;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface BreakdownRepo extends CrudRepository<Breakdown, Long> {

    //Update a release of an asset
    @Transactional
    @Modifying
    @Query(value = "update breakdowns set is_released_by_am = true where asset_id = ?1" , nativeQuery = true)
    int updateReleased(String assetId);

    @Query(value = "select * from breakdowns", nativeQuery = true)
    List<Breakdown> findAllAsList();

}
