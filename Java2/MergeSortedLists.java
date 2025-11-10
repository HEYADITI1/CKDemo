import java.util.*;

public class MergeSortedLists {
    public static List<Integer> merge(List<Integer> list1, List<Integer> list2) {
        List<Integer> merged = new ArrayList<>();
        int i = 0, j = 0;

        while (i < list1.size() && j < list2.size()) {
            if (list1.get(i) <= list2.get(j)) {
                merged.add(list1.get(i++));
            } else {
                merged.add(list2.get(j++));
            }
        }

        while (i < list1.size()) merged.add(list1.get(i++));
        while (j < list2.size()) merged.add(list2.get(j++));

        return merged;
    }

    public static void main(String[] args) {
        List<Integer> list1 = Arrays.asList(1, 3, 5, 7);
        List<Integer> list2 = Arrays.asList(2, 4, 6, 8);

        List<Integer> result = merge(list1, list2);
        System.out.println("Merged Sorted List: " + result);
    }
}
