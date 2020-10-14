package com.vansisto.Intent.Task1_ShapeBox;

public class Shape {

    private int volume;

    public Shape(int volume){
        this.volume = volume;
    }

    @Override
    public String toString() {
        return "Shape{volume=" + this.volume + "}";
    }

    public int getVolume() {
        return volume;
    }
}