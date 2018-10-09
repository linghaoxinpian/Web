//简单迭代
function sum(arr, len) {
    return len < 1 ? 0 : sum(arr, len - 1) + arr[len - 1];
}
sum([1,1,1,10],4);

//分而治之
function sum(arr,left,right){
    if(left==right)
        return arr[left];
    var mid=(left+right)/2;
    return sum(arr,left,mid)+sum(arr,mid+1,right-1);
}
sum([1,1,1,4],0,3);