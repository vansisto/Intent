package com.vansisto.MyLombok;

public class Main {
    public static void main(String[] args) {
        SomeClass someClass = new SomeClass();

        System.out.println("Value from annotation: " +
                someClass
                        .getClass()
                        .getAnnotation(MyAnn.class)
                        .value()
        );
    }
}
