const add1 = document.querySelector(".add1");
const sub1 = document.querySelector(".sub1");

const add2 = document.querySelector(".add2");
const sub2 = document.querySelector(".sub2");
 
const add3 = document.querySelector(".add3");
const sub3 = document.querySelector(".sub3");


export const cost1 = 7.50;
export const cost2 = 5.00;
export const cost3 = 8.50; 

const label1 = document.querySelector(".cnt1");
const label2 = document.querySelector(".cnt2")
const label3 = document.querySelector(".cnt3");

add1.addEventListener("click", ()=>{
    label1.innerHTML++; 
    setVals();
})

sub1.addEventListener("click", ()=>{
    if(label1.innerHTML > 0){
         label1.innerHTML--;
         setVals(); 
    }
})

add2.addEventListener("click", ()=>{
    label2.innerHTML++;
    setVals(); 
})

sub2.addEventListener("click", ()=>{
    if(label2.innerHTML > 0){
         label2.innerHTML--; 
         setVals();
    }
})

add3.addEventListener("click", ()=>{
    label3.innerHTML++; 
    setVals();

})

sub3.addEventListener("click", ()=>{
    if(label3.innerHTML > 0){
         label3.innerHTML--; 
         setVals();
    }
})

function setVals(){
    localStorage.setItem("tot1", label1.innerHTML);
    localStorage.setItem("tot2", label2.innerHTML);
    localStorage.setItem("tot3", label3.innerHTML);
}




