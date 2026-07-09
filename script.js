// ================= CART SYSTEM =================


let cartCount = 0;


function addCart(){

    cartCount++;

    document.getElementById("cartCount").innerHTML = cartCount;

    alert("Product added to cart 🛒");

}





// ================= SEARCH SYSTEM =================


let searchInput = document.getElementById("searchInput");


if(searchInput){


searchInput.addEventListener("keyup",function(){


let value = searchInput.value.toLowerCase();


let products = document.querySelectorAll(".card");



products.forEach(function(product){


let name = product.innerText.toLowerCase();



if(name.includes(value)){

    product.style.display="block";

}

else{

    product.style.display="none";

}


});


});


}







// ================= MOBILE MENU =================


let menuBtn = document.querySelector(".menu-btn");

let nav = document.querySelector("nav");



if(menuBtn){


menuBtn.onclick=function(){


nav.classList.toggle("active");


}


}







// ================= WISHLIST =================


let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];



function addToWishlist(name,price){


let exist = wishlist.find(
item => item.name === name
);



if(exist){

alert("Already in wishlist ❤️");

return;

}



wishlist.push({

name:name,

price:price

});



localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);



updateWishlistCount();


alert(
name+" added to wishlist ❤️"
);


}





function updateWishlistCount(){


let count = wishlist.length;


let element =
document.getElementById("wishCount");


if(element){

element.innerHTML=count;

}


}



updateWishlistCount();







// ================= LOGIN POPUP =================


function login(){


let email = prompt(
"Enter your email:"
);


if(email){

alert(
"Login successful"
);

}


}







// ================= SIGNUP =================


function signup(){


let name = prompt(
"Enter your name:"
);


if(name){

alert(
"Welcome to Roselle " + name
);

}


}







// ================= SCROLL EFFECT =================



window.addEventListener(
"scroll",
function(){


let header=document.querySelector("header");


if(window.scrollY>50){


header.style.boxShadow=
"0 5px 20px rgba(0,0,0,0.2)";


}

else{


header.style.boxShadow=
"0 2px 10px rgba(0,0,0,0.1)";


}



});

function filterProducts(){


let category =
document.getElementById("categoryFilter").value;


let price =
document.getElementById("priceFilter").value;


let rating =
document.getElementById("ratingFilter").value;



let products =
document.querySelectorAll(".card");



products.forEach(product=>{


let productCategory =
product.dataset.category;


let productPrice =
Number(product.dataset.price);


let productRating =
Number(product.dataset.rating);



let categoryMatch =
(category=="all" || productCategory==category);



let priceMatch=true;


if(price=="500"){

priceMatch = productPrice < 500;

}

else if(price=="1000"){

priceMatch =
productPrice>=500 &&
productPrice<=1000;

}

else if(price=="2000"){

priceMatch =
productPrice>1000;

}



let ratingMatch =
productRating >= Number(rating);



if(categoryMatch && priceMatch && ratingMatch){

product.style.display="block";

}

else{

product.style.display="none";

}



});


}

function toggleMenu(){

let menu=document.getElementById("navMenu");


menu.classList.toggle("active");


}

function subscribe(){

let email=document.getElementById("email").value;


if(email){

alert("Subscribed successfully 🎉");

}

else{

alert("Enter your email");

}



window.onload=function(){

document.getElementById("loader").style.display="none";

}

window.onscroll=function(){

if(document.documentElement.scrollTop>200){

document.getElementById("topBtn").style.display="block";

}

else{

document.getElementById("topBtn").style.display="none";

}

};



function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
}
