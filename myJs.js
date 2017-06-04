/**
 *栈
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
 *队列
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