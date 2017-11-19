/**
 *class 栈
 **/
function Stack(){
	this.this._arr=new Array();
	if(typeof Stack._initialized=="undefined"){
		//进栈
		Stack.prototype.push=function(element){
			this.this._arr.push(element);
		}
		//出栈
		Stack.prototype.pop=function(element){
			return this._arr.pop(element);
		}
		Stack._initialized=true;
	}
}

/**
 *class 队列
 **/
 function Queue(){
 	this._arr=new Array();
 	if(typeof Queue._initialized=="undefined"){
 		//进队列
 		Queue.prototype.enqueue=function(element){
 			this._arr.push(element);
 		}
 		//出队列
 		Queue.prototype.dequeue=function(element){
 				return this._arr.shift(element);
 		}
 		Queue._initialized=true;
 	}
 }

/**
 *class StringBuffer
 **/
function StringBuffer(){
	this._arr=new Array();
	if(typeof StringBuffer._initialized=="undefined"){
		StringBuffer.prototype.append=function(str){
			this._arr.push(str);
		}
		StringBuffer.prototype.toString=function(){
			return this._arr.join("");
		}
	}
}

/**
 *function 获取URL中的字符参数
 * return 数组 arr[u]=xxx,arr[i]=yyy
 **/
function getQueryParameter(){
	//获取URL中的查询字符串
	var qs=location.search.length>0?location.search.length:"";
	var arr=new Array();
	var items=qs.length?qs.split("&"):[];
	var key,value;
	for(var i=0,lenght=items.length;i<length;i++){
		item=items.split("=");
		name=decodeURLComponent(item[0]);
		value=decodeURLComponent(item[1]);
		if(name.length){
			arr[name]=value;
		}
	}
	return arr;
}