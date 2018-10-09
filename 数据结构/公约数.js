function MaxDivisor(a,b){
    if(a<b){
        a=(a+b)-(b=a);
    }
    for(;a%b!=0;){
        var temp=a%b;
        a=b;
        b=temp;
    }
    console.log("divisor:"+b);
}

MaxDivisor(120,90);