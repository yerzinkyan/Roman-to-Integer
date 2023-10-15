let arr=[];
let I=1;
let V=5;
let X=10;
let L=50;
let C=100;
let D=500;
let M=1000;
let v = Math.floor((Math.random() * 4000));
let x=v
console.log(x);

//hazaryak
let a=Math.floor(x/M);
if(x/M>=1){
    for(t=0;t<a;t++){
       arr.push('M')
    }
}


x=x-a*M;

//haryurak
let b=Math.floor(x/C);
if(b>=1 && b<4){
    for(t=0;t<(b);t++){
        arr.push('C')
     }
}
if(b>=5 && b<9){
    z=b-5;
    arr.push('D');
    for(t=0;t<z;t++){
        arr.push('C')
    }
}
if(b==4){
    arr.push('CD')
}
if(b==9){
    arr.push('CM')
}


x=x-b*C

//tasnavor
let c=Math.floor(x/X)
if(c>=1 && c<4){
    for(t=0;t<(c);t++){
        arr.push('X')
     }
}
if(c>=5 && c<9){
    y=c-5;
    arr.push('L');
    for(t=0;t<y;t++){
        arr.push('X')
    }
}
if(c==4){
    arr.push('XL')
}
if(c==9){
    arr.push('XC')
}
x=x-c*X

//miavor
if(x>=1 && x<4){
    for(t=0;t<(x);t++){
        arr.push('I')
     }
}
if(x>=5 && x<9){
    y=x-5;
    arr.push('V');
    for(t=0;t<y;t++){
        arr.push('I')
    }
}
if(x==4){
    arr.push('IV')
}
if(x==9){
    arr.push('IX')
}

console.log(v+' = '+arr.join(''));
