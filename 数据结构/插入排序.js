function insertionSort(arr){
    var current=0,preIndex=0;

    for(var i=1,length=arr.length;i<length;i++){
        current=arr[i];
        preIndex=i-1;
        while(preIndex>=0 && arr[preIndex]>current){
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1]=current;
    }
}

var arr=new Array(5,7,2,10);
insertionSort(arr)
console.log(arr);