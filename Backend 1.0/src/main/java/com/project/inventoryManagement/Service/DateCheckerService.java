package com.project.inventoryManagement.Service;

import com.project.inventoryManagement.DTO.FutureDatesDTO;
import com.project.inventoryManagement.Models.AssignModel;
import com.project.inventoryManagement.Repositories.AssignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.threeten.extra.LocalDateRange;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Service
public class DateCheckerService {


    @Autowired
    AssignRepo assignRepo;


    //////////////////////////////////////////////////////////////////////////////////////
    // Check availability of given dates

    public boolean  isAvailable(String assetId,LocalDate a, LocalDate b){
        List<FutureDatesDTO> datesArray = this.getFutureDates(assetId);

        AtomicBoolean flag = new AtomicBoolean(true);


        LocalDateRange.ofClosed(a, b).stream()
                .forEach(date ->{

                    System.out.println(" Dte: "+ date);

                    if(flag.get() == true) {

                        for (FutureDatesDTO dateCouple : datesArray) {

                            System.out.println(" Begin Date: "+ dateCouple.getBeginDate() + "  due Date: "+ dateCouple.getDueDate());

                            System.out.println(" with begin date: "+ ((date.isAfter(dateCouple.getBeginDate()))));
                            System.out.println(" with due date: "+ ((date.isBefore(dateCouple.getDueDate()))));
                            if ((date.isAfter(dateCouple.getBeginDate().minusDays(1)))  && (date.isBefore(dateCouple.getDueDate().plusDays(1)))) {

                                //   date.isEqual(dateCouple.getBeginDate(.) || date.isEqual(dateCouple.getDueDate()) || date.isBefore(dateCouple.getBeginDate())  || date.isAfter(dateCouple.getDueDate())
                                System.out.println("date is okay");
                                flag.set(false);
                            } else {
                                System.out.println("date is not okay");
                                flag.set(true);

                            }

                            if (flag.get() == false) {
                                System.out.println("breakkk");
                                break;
                            }
                        }

                    }
                    else{
                        System.out.println("Elseee");
                        return;
                    }


                });

        if(flag.get() == false){
            return false;
        }

        return true;


    }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //// Get assigned Dates
    public List<FutureDatesDTO> getFutureDates(String assetId) {

        System.out.println("Get all future dates");

        List<AssignModel> assigns;
        assigns = assignRepo.findAllFutureDates(assetId);

        System.out.println("Size of assigns: " + assigns.size());
        System.out.println("qurieddddd");
        List<FutureDatesDTO> dateArrayList = new ArrayList<FutureDatesDTO>();
        System.out.println("quriedddaaaaaaaad");

        int count = 0;


        assigns.forEach(ass -> {

            FutureDatesDTO aDate = new FutureDatesDTO(ass.getBeginDate(), ass.getDueDate());
            System.out.println("qurieddddd");
            // assert dateArray != null;
            dateArrayList.add(aDate);
            System.out.println("1");
        });


        return dateArrayList;
    }


}

