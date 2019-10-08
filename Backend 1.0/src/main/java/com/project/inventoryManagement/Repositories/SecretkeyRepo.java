package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.SecretkeyModel;
import org.springframework.data.repository.CrudRepository;

public interface SecretkeyRepo extends CrudRepository<SecretkeyModel, Long> {



    void deleteBySkey(String skey);


    boolean existsBySkey(String skey);

    SecretkeyModel findBySkey(String skey);

}
