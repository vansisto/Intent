package com.vansisto.Intent;

public class Main {
//############     Office    ######################
//    public static void main(String[] args) {
//        int [] arr = {9, 1, 8, 2, 7, 3, 6, 4, 5};
//
//        boolean done = false;
//        int temp;
//        while(!done) {
//            done = true;
//            for (int i = 0; i < arr.length-1; i++) {
//                if(arr[i] > arr[i+1]){
//                    done = false;
//
//                    temp = arr[i];
//                    arr[i] = arr[i+1];
//                    arr[i+1] = temp;
//                }
//            }
//        }
//        System.out.println(Arrays.toString(arr));
//    }

    public static void main(String[] args) {
        int[] x = {6, 5, 4, 3, 2, 1};
        int[] y = {6, 5, 4, 3, 2, 1};

        String[] color = {"red", "blue", "green", "yellow", "black", "white"};

        Point[] points = new Point[x.length];

        for (int i = x.length - 1; i >= 0; i--) {
            points[i] = new Point(x[i], y[i], color[i]);
        }

        for (Point point: points
             ) {
            System.out.println(point);
        }
    }
}
