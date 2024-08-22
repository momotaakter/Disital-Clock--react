let hrs=document.getElementById('hrs');
let minit=document.getElementById('min');
let second=document.getElementById('sec');

setInterval(()=>{
    let curentTime=new Date();
    hrs.innerHTML=(curentTime.getHours()<10?"0":"")+curentTime.getHours();
    minit.innerHTML=(curentTime.getMinutes()<10?"0":"")+curentTime.getMinutes();
    second.innerHTML=(curentTime.getSeconds()<10?"0":"")+curentTime.getSeconds();
    

},1000)




