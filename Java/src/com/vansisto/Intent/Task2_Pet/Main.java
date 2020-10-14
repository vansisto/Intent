package com.vansisto.Intent.Task2_Pet;

public class Main {
    public static void main(String[] args) {
        Pet pet = new Cat();
        pet.voice();

        pet = new Dog();
        pet.voice();

        pet = new Cow();
        pet.voice();
    }
}
