package com.vansisto.Intent;

public class LinkedIndexOutOfBoundException extends ArrayIndexOutOfBoundsException {
    public LinkedIndexOutOfBoundException(int index) {
        super("No index: " + index);
    }
}
