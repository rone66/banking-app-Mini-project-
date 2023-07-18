let acNum=document.getElementById('acno');
document.getElementById('Search').addEventListener('click',()=>{
    
    let obj2=JSON.parse(localStorage.getItem(acNum.value));

    document.getElementById('nameDisplay').innerText=obj2.Name;
    document.getElementById('priceDisplay').innerText=obj2.cash;

})

document.getElementById('deposit').addEventListener('click',()=>{
    let a=prompt('enter the amount:');
    //console.log(a);
    let obj2=JSON.parse(localStorage.getItem(acNum.value));
    for (const i in obj2) {
        if(i==='cash'){
            let b=Number(obj2[i])+Number(a);
            if(b==0 || b<0 || a<0){
                alert("Please check deposit amount");
            }else{
                obj2[i]=b;
                document.getElementById('priceDisplay').innerText=obj2.cash;
                let obj={
                    'Name':document.getElementById('nameDisplay').innerText,
                    'cash':b
                };
            
                localStorage.setItem(acNum.value,JSON.stringify(obj));
                alert("Deposit successfully done!!!");
                return;
            }
        }
        
    }
})

document.getElementById('Withdraw').addEventListener('click',()=>{
    let a=prompt('enter the amount:');
    //console.log(a);
    let obj2=JSON.parse(localStorage.getItem(acNum.value));
    for (const i in obj2) {
        if(i==='cash'){
            let b=Number(obj2[i])-Number(a);
            if(b<0 || a==0 ||a<0){
                alert('bhag bhosdike..Insufficient balace or check the withdraw amount');
            }else{
                obj2[i]=b;
                document.getElementById('priceDisplay').innerText=obj2.cash;
                let obj={
                    'Name':document.getElementById('nameDisplay').innerText,
                    'cash':b
                };
                
                localStorage.setItem(acNum.value,JSON.stringify(obj));
                alert("Withrawl successfully done!!!");
                return;
            }
           
        }
        
    }
})
