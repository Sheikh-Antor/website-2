let menuBtn=document.getElementById('menuBtn');
let slideNav=document.getElementById('slideNav');
let bar=document.getElementById('bar');
   
// let gun=<i class="fas fa-times fa 2x"></i>;

slideNav.style.right="-250px";

menuBtn.addEventListener('click',function(){
            if(slideNav.style.right==="-250px"){
                slideNav.style.right="0";
                 bar.src="https://reyb5srjdimeaub3bhjagg-on.drv.tw/www.barber.ml/images/close.png";
            }else{
                slideNav.style.right="-250px";
                bar.src=src="https://projects.thepostathens.com/SpecialProjects/opioid-epidemic-ohio-in-crisis/img/hammenu.png"
            }
})
