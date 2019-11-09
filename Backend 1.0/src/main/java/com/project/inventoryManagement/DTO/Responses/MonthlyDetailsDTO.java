package com.project.inventoryManagement.DTO.Responses;

import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Models.Breakdown;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MonthlyDetailsDTO {

   private List<AssignModel> bookedAssets;
   private List<AssignModel> requestedRejectedAssets;
    private List<AssignModel> RequestedApprovedAssets;
   private List<Breakdown> breakdowns;

}
