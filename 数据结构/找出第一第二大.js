/**
 * 找出第一第二大 [left,right)
 * @param {数组} arr 
 * @param {左边界} left 
 * @param {右边界} right 
 */
function max1And2(arr,left,right){
    var max1=left,
        max2=left+1;
        if(arr[max2]>arr[max1])
            //swap(max1,max2);
            max2=(max1+max2)-(max1=max2);
    for(var i=left+2;i<right;i++){
        if(arr[i]>arr[max2]){
            if(arr[max2=i]>arr[max1]){
                //swap(max1,max2);
                max2=(max1+max2)-(max1=max2);
            }
        }
    }
    console.log(arr[max1]+"-"+arr[max2]);
}

max1And2([2,4,1,23,100],0,5);