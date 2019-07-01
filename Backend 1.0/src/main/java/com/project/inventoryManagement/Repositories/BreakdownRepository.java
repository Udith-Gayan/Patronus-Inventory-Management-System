package com.project.inventoryManagement.Repositories;

import com.project.inventoryManagement.Models.Breakdown;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BreakdownRepository extends JpaRepository<Breakdown, Long> {
}
