package com.vansisto.Intent;

import java.util.ArrayList;
import java.util.List;

public class Box {

    private int volume;
    private List<Shape> shapes = new ArrayList<>();

    public Box(int volume) {
        this.volume = volume;
    }

    public boolean add(Shape shape){
        if (shape.getVolume() <= this.volume) {
            shapes.add(shape);
            this.volume = this.volume - shape.getVolume();
            return true;
        } else return false;
    }

    @Override
    public String toString() {
        return "Box{" +
                "volume=" + volume +
                ", shapes=" + shapes.toString() +
                '}';
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public List<Shape> getShapes() {
        return shapes;
    }

    public void setShapes(List<Shape> shapes) {
        this.shapes = shapes;
    }
}
