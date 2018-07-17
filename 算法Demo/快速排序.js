function quickSort(arr, l, r) {
    if (l < r) {
        var i = l,
            j = r,
            pivot = arr[l];

        while (i < j) {
            while (i < j && arr[j] > pivot) j--;

            if (i < j) arr[i++] = arr[j];

            while (i < j && arr[i] < pivot) i++;

            if (i < j) arr[j--] = arr[i];
        }
        arr[i]=pivot;
        quickSort(arr,l,i-1);
        quickSort(arr,i+1,r);
    }
}

var arr = new Array(5, 7, 2, 10, 10, 6, 23);
quickSort(arr, 0, arr.length - 1);
console.log(arr); 