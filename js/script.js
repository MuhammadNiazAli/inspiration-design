// hamme icon crose icon ul>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<< 
let menuicon = document.querySelector(".ri-menu-line");
let croseicon = document.querySelector(".ri-close-large-fill");
let ul = document.querySelector("ul");
let backHere = 0

menuicon.addEventListener("click",()=>{
    if(backHere==0){
        ul.style.marginLeft="-10px"
    ul.style.transition="0.8s"
    backHere=1
    }else{
        ul.style.marginLeft="-500px"
    ul.style.transition="0.9s"
    backHere=0
    }
})
croseicon.addEventListener("click",()=>{
    ul.style.marginLeft="-500px"
    ul.style.transition="0.9s"
})
// ===Close===>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<
