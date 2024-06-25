
const incr=document.getElementById('inc')
const dec=document.getElementById('dec')
const res=document.getElementById('res')
const cont=document.getElementById('cont')

let count=0;

incr.onclick=function(){
    count++;
    document.getElementById( "cont" ).textContent = count ; 
}
dec.onclick=function(){  --count;
    document.getElementById( "cont" ).textContent = count ; 
}
res.onclick=function(){  count=0;
    document.getElementById( "cont" ).textContent = count ; 
}

