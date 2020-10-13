package com.vansisto.Intent;

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

    public void setVolume(int volume) {
        this.volume = volume;
    }
}
