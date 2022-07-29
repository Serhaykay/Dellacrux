var mainImg = document.getElementById("big-Img");
var smallImg = document.getElementsByClassName("small-img");


// smallImg[0].onclick = function(){
//     mainImg.src = smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     mainImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     mainImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = function(){
//     mainImg.src = smallImg[3].src;
// }

for (let i = 0; i < smallImg.length; i++) {
   const eachSmallImgs = smallImg[i]
    console.log(eachSmallImgs)

    eachSmallImgs.addEventListener('click',(e)=>{
        mainImg.src = smallImg[i].src
    })

}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))








