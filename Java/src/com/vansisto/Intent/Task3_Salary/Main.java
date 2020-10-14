package com.vansisto.Intent.Task3_Salary;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Employer> employers = new ArrayList<>();

        employers.add(new Employer(Period.DAY, 13));
        employers.add(new Employer(Period.MONTH, 344));
        employers.add(new Employer(Period.YEAR, 3255));

        employers.forEach(e ->
                System.out.println(
                        e.salary(Period.YEAR)));
    }
}
