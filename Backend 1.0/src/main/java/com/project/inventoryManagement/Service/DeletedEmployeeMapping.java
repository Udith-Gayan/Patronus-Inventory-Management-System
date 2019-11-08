package com.project.inventoryManagement.Service;

import com.project.inventoryManagement.Models.DeletedEmployeesModel;
import com.project.inventoryManagement.Models.EmployeeMainModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DeletedEmployeeMapping {

    public  EmployeeMainModel emp;
    public  DeletedEmployeesModel deletedEmp;

    @Autowired
    private ModelMapper modelMapper;

    public DeletedEmployeesModel mapToDeletedEmployeeModel(EmployeeMainModel e){

        DeletedEmployeesModel dm = modelMapper.map(e, DeletedEmployeesModel.class);

        LocalDate today = LocalDate.now();
        dm.setDeletedDate(today);

        System.out.println("Mapping Completed");

        return dm;    // set to delete employee in frontend
    }
}
