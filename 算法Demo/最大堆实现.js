function MaxHeap(caption) {  //构造函数
    this.currentIndex = 0;
    this.data = new Array(caption + 1); //数组第一个索引0处不使用，为的是配合堆的子、父节点索引性质，父索引=子索引/2
}
//定义类中方法
MaxHeap.prototype = {
    count: function () {   //返回最大堆的容量
        return this.currentIndex;
    }
    ,
    insert: function (item) {  //向堆中插入数据
        this.data[this.currentIndex + 1] = item;
        this.currentIndex += 1;
        this.shiftUp(this.currentIndex);
    }
    ,
    shiftUp: function (k) {    //插入数据后进行检查，是否子节点不大于父节点
        while (k > 1 && this.data[k] > this.data[k / 2]) {
            this.swap(k, k / 2);
        }
    }
    ,
    swap: function (k1, k2) {   //交换节点
        this.data[k1] = (this.data[k1] + this.data[k2]) - (this.data[k2] = this.data[k1]);
    }
    ,
    getMax: function () {   //获取根节点，同时也会删除根节点，并将最后一个节点拿到根节点上
        var max = this.data[1];
        this.data[1] = this.data[this.currentIndex];
        this.data[this.currentIndex] = "null";
        this.currentIndex--;
        this.shiftDown(1);
        return max;
    }
    ,
    shiftDown: function (k) {   //将根节点下移到合适位置
        while (k < this.count()) {
            var j = 2 * k;
            if (j + 1 <= this.count() && this.data[j + 1] > this.data[j])
                j += 1;
            if (this.data[k] < this.data[j])
                this.swap(k, j);
            k = j;
        }
    }
}

var heap = new MaxHeap(12);
heap.insert(200);
heap.insert(2);
heap.insert(14);
heap.insert(9);
heap.insert(10);

console.log(heap.data);
console.log("get:" + heap.getMax());
console.log(heap.data);