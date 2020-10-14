package com.vansisto.Intent.Task3_Salary;

public class Employer implements Salary{

    private Period period;
    private double salary;

    public Employer(Period period, double salary){
        this.period = period;
        this.salary = salary;
    }
    @Override
    public double salary(Period period) {
        return new SalaryCalculator(this.period, this.salary, period)
                .getSalaryOut();
    }
}
