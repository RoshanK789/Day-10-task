
const form=document.getElementById("form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    sumit();
})

function sumit()
{
    var test;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var count=0;
    for(var i=0;i<checkboxes.length;i++)
    {
        if(checkboxes[i].checked==true)
        {       
            test=test+" "+checkboxes[i].value;
            test = test.replace("undefined", "");
            count=count+1;
        }
    }
    if(count>=3)
    {
        const a =document.getElementById("first-name").value
        t1.innerHTML=a;
        const b =document.getElementById("last-name").value
        t2.innerHTML=b;
        const c =document.getElementById("address").value
        t3.innerHTML=c;
        const d =document.getElementById("pincode").value
        t4.innerHTML=d;
        const e =document.querySelector('input[name="gender"]:checked');
        const selectedValue = e ? e.value : ''; 
        t5.innerHTML=selectedValue;    
        t6.innerHTML=test;
        const g =document.getElementById("state").value
        t7.innerHTML=g;
        const h =document.getElementById("country").value
        t8.innerHTML=h;
    }
    else{
        alert("must select three food items")
    }
}
function reset()
{
   location.reload()
}