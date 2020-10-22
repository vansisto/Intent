package com.vansisto.Intent;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,5,6};
        getEven(numbers).stream()
                .forEach(System.out::println);

        printFibonacci(9);
    }

    public static List<Number> getEven(int[] numbers){
        List<Number> result = new ArrayList<>();
        Arrays.stream(numbers)
                .filter(n -> n % 2 == 0)
                .forEach(n -> result.add(n));
        return result;
    }

    public static void printFibonacci(int limit){
        int[] initArray = {0, 1};
        Stream.iterate(initArray, a -> new int[]{a[1], a[0]+ a[1]})
                .limit(limit)
                .map(a -> a[0])
                .forEach(n -> System.out.println(n));
    }
}
