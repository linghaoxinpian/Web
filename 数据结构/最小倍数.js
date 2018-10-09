function minMultiple(a,b){
    var multiply=a*b;
    if(a<b){
        a=(a+b)-(b=a);
    }
    for(;a%b!=0;){
        var temp=a%b;
        a=b;
        b=temp;
    }
    console.log("minMultiple:"+multiply/b);
}

minMultiple(8,18);