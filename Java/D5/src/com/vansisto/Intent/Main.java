package com.vansisto.Intent;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<String> list = new LinkedList<>();
        list.add("String 0");
        list.add("String 1");
        list.add("String 2");

        System.out.println("Removed: " + list.remove(2));
        int el = 1;
        System.out.println("Element " + el + " = " + list.get(el));
    }
}
