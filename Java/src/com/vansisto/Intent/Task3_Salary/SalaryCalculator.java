package com.vansisto.Intent.Task3_Salary;

public class SalaryCalculator {

    private double salaryOut;

    public SalaryCalculator(Period periodIn, double salaryIn, Period periodOut){

        if (periodIn == periodOut) salaryOut = salaryIn;

        if (periodIn == Period.DAY) {
            if (periodOut == Period.MONTH) salaryOut = salaryIn * 22;
            if (periodOut == Period.YEAR) salaryOut = salaryIn * 264;
        }

        if (periodIn == Period.MONTH) {
            if (periodOut == Period.DAY) salaryOut = salaryIn / 22;
            if (periodOut == Period.YEAR) salaryOut = salaryIn * 12;
        }

        if (periodIn == Period.YEAR) {
            if (periodOut == Period.DAY) salaryOut = salaryIn / 264;
            if (periodOut == Period.MONTH) salaryOut = salaryIn / 12;
        }
    }

    public double getSalaryOut(){
        return salaryOut;
    }
}
