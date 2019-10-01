package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.FeedbackModel;
import org.springframework.data.repository.CrudRepository;

public interface FeedBackRepo extends CrudRepository<FeedbackModel, Long> {

}
