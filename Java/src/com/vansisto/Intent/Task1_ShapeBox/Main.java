package com.vansisto.Intent.Task1_ShapeBox;

public class Main {

    public static void main(String[] args) {

        Box box = new Box(100);
        box.add(new Shape(12));
        box.add(new Shape(23));
        System.out.println(box.getVolume());
    }
}