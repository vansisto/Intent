package com.vansisto.Intent;

import java.util.LinkedList;

public class LinkedIndexOutOfBoundException extends ArrayIndexOutOfBoundsException {
    public LinkedIndexOutOfBoundException(int index) {
        super("No index: " + index);
    }
}
