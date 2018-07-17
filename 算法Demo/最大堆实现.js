function MaxHeap(caption){  //构造函数
    this.currentIndex=1;
    this.data=new Array(caption+1); //数组第一个索引0处不使用，为的是配合堆的子、父节点索引性质，父索引=子索引/2
}
//定义类中方法
MaxHeap.prototype={
    count:function(){   //返回最大堆的容量
        return this.data.length;
    }
,
    insert:function(item){  //向堆中插入数据
        this.data[this.currentIndex+1]=item;
        this.currentIndex+=1;
        this.shiftUp(this.currentIndex);
    }
,
    shiftUp:function(k){    //插入数据后进行检查，是否子节点不大于父节点
        while(k>1 && this.data[k]>this.data[k/2]){
            this.swap(k,k/2);
        }
    }
,
    swap:function(k1,k2){   //交换节点
        this.data[k1]=(this.data[k1]+this.data[k2])-(this.data[k2]=this.data[k1]);
    }
}

var heap=new MaxHeap(12);
console.log("index:"+heap.currentIndex);
console.log("size:"+heap.count());
heap.insert(200);
heap.insert(2);
heap.insert(14);
heap.insert(9);
heap.insert(100);

console.log(heap.data);