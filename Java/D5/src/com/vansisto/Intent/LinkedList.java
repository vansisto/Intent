package com.vansisto.Intent;

import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.function.UnaryOperator;
import java.util.stream.Stream;

public class LinkedList<E> implements List<E> {

    private Node last;
    private Node first;
    private int size;

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return last == null ? true : false;
    }

    @Override
    public boolean add(E e) {
        if (last != null){
            last.next = new Node((E)e, null, last);
            last = last.next;
            size++;
            return true;
        } else {
            last = new Node((E)e, null, null);
            first = last;
            size++;
            return true;
        }
    }

    @Override
    public void clear() {
        last = null;
        first = null;
        size = 0;
    }

    @Override
    public E get(int index) {
        if (index < size){
            return Stream.iterate(first, n -> n = n.next)
                    .skip(index)
                    .findFirst()
                    .get().value;
        } else
            throw new LinkedIndexOutOfBoundException(index);
    }


    @Override
    public E remove(int index) {
        Node removed;

        if (index >= size) throw new LinkedIndexOutOfBoundException(index);
        if (first == null) throw new NullPointerException("The list is empty");
        if (size == 1) {
            removed = new Node(first);
            clear();
            return removed.value;
        }
        if (index == 0){
            removed = new Node(first);
            first = first.next;
            first.prev = null;
            size--;
            return removed.value;
        }
        if (index == size - 1){
            removed = new Node(last);
            last = last.prev;
            last.next = null;
            size--;
            return removed.value;
        }

        removed = Stream.iterate(first, n -> n = n.next)
                .skip(index)
                .findFirst()
                .get();
        size--;

        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;

        return removed.value;
    }

    @Override public int indexOf(Object o) {return 0;}
    @Override public int lastIndexOf(Object o) {return 0;}
    @Override public ListIterator listIterator() {return null;}
    @Override public ListIterator listIterator(int index) {return null;}
    @Override public List subList(int fromIndex, int toIndex) {return null;}
    @Override public Spliterator<E> spliterator() {return null;}
    @Override public Stream<E> stream() {return null;}
    @Override public Stream<E> parallelStream() {return null;}
    @Override public boolean retainAll(Collection c) {return false;}
    @Override public boolean removeAll(Collection c) {return false;}
    @Override public boolean containsAll(Collection c) {return false;}
    @Override public Object[] toArray(Object[] a) {return new Object[0];}
    @Override public boolean contains(Object o) {return false;}
    @Override public Iterator iterator() {return null;}
    @Override public void forEach(Consumer<? super E> action) {}
    @Override public Object[] toArray() {return new Object[0];}
    @Override public E set(int index, E element) {return null;}
    @Override public void add(int index, E element) {}
    @Override public boolean remove(Object o) {return false;}
    @Override public boolean removeIf(Predicate<? super E> filter) {return false;}
    @Override public void replaceAll(UnaryOperator<E> operator) {}
    @Override public void sort(Comparator<? super E> c) {}
    @Override public boolean addAll(Collection c) {return false;}
    @Override public boolean addAll(int index, Collection c) {return false;}

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
