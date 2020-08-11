# Quicksort

## Info

Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.

Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved.

## Complexity

##### Worst: n^2
##### Average: n*log(n)
##### Best: n*log(n)

## Pros
- Its average-case time complexity to sort an array of n elements is O(n lg n).
- On the average it runs very fast, even faster than Merge Sort.
- It requires no additional memory.

## Cons
- Its running time can differ depending on the contents of the array.
- Quicksort's running time degrades if given an array that is almost sorted (or almost
reverse sorted). Its worst-case running time, O(n
2
) to sort an array of n elements, happens
when given a sorted array.
- It is not stable.
