//给定整数 a1、a2、…、an，判断是否可以从中选出若干数，使它们的和恰好为 k。 
//1.输入 n=4 a={1,2,4,7} k=13 ,输出 Yes (13 = 2 + 4 + 7) 
//2.输入 n=4 a={1,2,4,7} k=15 ,输出 No 

//输入
var MAX_N=100;
var a=[1,3,4,51];
var n=4,k=59;

function dfs(i,sum){
    if(i==n) return sum==k;

    if(dfs(i+1,sum)) return true;

    if(dfs(i+1,sum+a[i])) return true;

    return false;
}

dfs(0,0);