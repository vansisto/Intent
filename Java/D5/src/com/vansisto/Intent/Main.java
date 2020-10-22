package com.vansisto.Intent;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<String> list = new LinkedList<>();
        list.add("String 0");
        list.add("String 1");
        list.add("String 2");

        System.out.println("Removed index 0: " + list.remove(0));
        System.out.println("Removed index 0: " + list.remove(0));

        int index = 0;
        System.out.println("get(" + index + ") - " + list.get(index));
    }
}
