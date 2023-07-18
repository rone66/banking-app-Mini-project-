let acNum=Math.floor(Math.random()*1000000000);
//console.log(acNum);
document.getElementById('acDisplay').innerText=acNum;
let n=document.getElementById('name');
let p=document.getElementById('price');

document.getElementById("create").addEventListener('click',(e)=>{
  
    let obj={
        'Name':n.value,
        'cash':p.value
    };
   // console.log(obj);
   let obj_string=JSON.stringify(obj);
   localStorage.setItem(acNum,obj_string);
   alert(`Account is created successfully...name:${n.value},acc no.${acNum}  `);
   
   //console.log(localStorage);
   //let obj2=JSON.parse(localStorage.getItem(acNum));
   //console.log(obj2);
})