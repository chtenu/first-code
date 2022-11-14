let countEl=document.getElementById("count-el")
let imScore=0
 function homeSco() {
    imScore=imScore+1
    countEl.innerText=imScore
    //console.log(imScore)
 }
 function homeSco2(){
     imScore=imScore+2
     countEl.innerText=imScore
 }
 function homeSco3(){
     imScore=imScore+3
     countEl.innerText=imScore
 }
 let guestEl=document.getElementById("guest-el")
 let guScore=0
 function gueSco() {
    guScore=guScore+1
    guestEl.innerText=guScore
}
 function gueSco2() {
    guScore=guScore+2
    guestEl.innerText=guScore
}
 function gueSco3() {
    guScore=guScore+4
    guestEl.innerText=guScore
}
 