package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.IDNumber;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface IDNumberRepo extends CrudRepository<IDNumber, Long> {


    @Query(value = "select * from id_number i where i.id = 1", nativeQuery = true)
    public IDNumber findFirst();



    @Modifying(flushAutomatically = true, clearAutomatically = true)
    @Query(value = "update id_number set asset_id_number = ?2 where asset_id_number = ?1" , nativeQuery = true)
    public int updateAssetId(long oldId, long newId);   // returns only int/Integer or void

}
