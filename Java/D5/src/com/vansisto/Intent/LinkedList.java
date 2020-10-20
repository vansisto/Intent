package com.vansisto.Intent;

import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.UnaryOperator;
import java.util.stream.Stream;

public class LinkedList<E> implements List<E> {

    private Node current;
    private Node head;
    private int size;

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return current == null ? true : false;
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator iterator() {
        return null;
    }

    @Override
    public void forEach(Consumer<? super E> action) {

    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }

    @Override
    public boolean add(E e) {
        if (current != null){
            current.next = new Node((E)e, null, current);
            current = current.next;
            size++;
            return true;
        } else {
            current = new Node((E)e, null, null);
            head = current;
            size++;
            return true;
        }
    }

    @Override
    public boolean remove(Object o) {
        return false;
    }

    @Override
    public boolean removeIf(Predicate<? super E> filter) {
        return false;
    }

    @Override
    public void replaceAll(UnaryOperator<E> operator) {

    }

    @Override
    public void sort(Comparator<? super E> c) {

    }

    @Override
    public boolean addAll(Collection c) {
        return false;
    }

    @Override
    public boolean addAll(int index, Collection c) {
        return false;
    }

    @Override
    public void clear() {
        current = null;
        head = null;
        size = 0;
    }

    @Override
    public E get(int index) {
        if (index < size){
            Node result = head;
            for(int i = 0; i < index; i++){
                result = result.next;
            }
            return result.value;
        } else
            throw new ArrayIndexOutOfBoundsException("No index:" + index + " in array size:" + size);
    }

    @Override
    public E set(int index, E element) {
        return null;
    }

    @Override
    public void add(int index, E element) {

    }

    @Override
    public E remove(int index) {
        Node removed;
        Node tmp = head;

        if (index >= size) throw new ArrayIndexOutOfBoundsException("No index:" + index + " in array size:" + size);
        if (current == null) return null;
        if (index == 0){
            removed = new Node(head);
            current = head.next;
            head = current;
            head.prev = null;
            size--;
            return removed.value;
        }

        for (int i = 0; i < index; i++){
            tmp = tmp.next;
        }
        removed = new Node(tmp);

        if (index + 1 == size)
            tmp.next = null;

        if (tmp.next != null){
            tmp.next.prev = tmp.prev;
            tmp.prev.next = tmp.next;
        } else {
            tmp.prev.next = null;
        }

        size--;
        return removed.value;
    }

    @Override
    public int indexOf(Object o) {
        return 0;
    }

    @Override
    public int lastIndexOf(Object o) {
        return 0;
    }

    @Override
    public ListIterator listIterator() {
        return null;
    }

    @Override
    public ListIterator listIterator(int index) {
        return null;
    }

    @Override
    public List subList(int fromIndex, int toIndex) {
        return null;
    }

    @Override
    public Spliterator<E> spliterator() {
        return null;
    }

    @Override
    public Stream<E> stream() {
        return null;
    }

    @Override
    public Stream<E> parallelStream() {
        return null;
    }

    @Override
    public boolean retainAll(Collection c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection c) {
        return false;
    }

    @Override
    public boolean containsAll(Collection c) {
        return false;
    }

    @Override
    public Object[] toArray(Object[] a) {
        return new Object[0];
    }

    public class Node {
        private E value;
        private Node next;
        private Node prev;

        public Node(E value, Node next, Node prev){
            this.value = value;
            this.next = next;
            this.prev = prev;
        }

        public Node(Node node) {
            this.value = node.value;
            this.next = node.next;
            this.prev = node.prev;
        }
    }

}
