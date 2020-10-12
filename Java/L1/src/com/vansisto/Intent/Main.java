package com.vansisto.Intent;

public class Main {

    public static void main(String[] args) {
        for (int i = 2; i <= 100; i++) {
            if (isSimple(i)) System.out.println(i);
        }
    }

    public static boolean isSimple(long n) {
        if (n == 2 || n == 3 || n == 5 || n == 7) return true;
        return n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0 ? false : true;
    }
}
