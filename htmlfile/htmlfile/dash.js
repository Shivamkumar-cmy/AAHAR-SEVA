//showing navbar when click on toggle
// const mobile = document.querySelector('.menu-toggle');
// const mobileLink = document.querySelector('.slidebar');

// mobile.addEventListener("click", function(){
//     mobile.classList.toggle("is-active");
//     mobileLink.classList.toggle("active");
//   });

// //close when click
// mobileLink.addEventListener("click",function(){
//     const menuBars = document.querySelector("is-active");
//     if(window.innerWidth<=768 && menuBars){
//     mobile.classList.toggle("is-active")
//     mobileLink.classList.toggle("active")
//     }
// })

const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.slidebar');
const main = document.querySelector('.main');

mobile.addEventListener("click", function(){
mobile.classList.toggle("is-active");
mobileLink.classList.toggle("active");
main.classList.toggle("main-full");
});

mobileLink.addEventListener("click", function(){
if(window.innerWidth <= 768) {
    mobile.classList.remove("is-active");
    mobileLink.classList.remove("active");
    main.classList.add("main-full");
}
});


//now the menu to right and left when click back and next
var stop = 100;
var stopFilter = 60;
var scrolling = true;

$(".back").bind("click",function(e){
e.preventDefault();
$(".highlight-wrapper").animate({
    scrollLeft:"-=" + step + "px"
});
});

$(".next").bind("click",function(e){
e.preventDefault();
$(".highlight-wrapper").animate({
    scrollLeft:"+=" + step + "px"
});
});
//the menu to right and left when click  menu filters
$(".back-menus").bind("click",function(e){
e.preventDefault();
$(".filter-wrapper").animate({
   scrollLeft:"-=" + stopFilter + "px"
})
})

$(".next-menus").bind("click",function(e){
e.preventDefault();
$(".filter-wrapper").animate({
   scrollLeft:"+=" + stopFilter + "px"
})
})

//for shopping cart
//for cart popup
function toggleCartPopup(){
    const cartPopup = document.getElementById('cart-popup')
    cartPopup.classList.toggle('active')
}
//for cart close popup
function closeCart(){
    const cartPopup = document.getElementById('cart-popup')
    cartPopup.classList.remove('active')
}
//for add to cart button
function addToCart(itemName , itemPrice){
    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0]
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent==itemName)
    if (existingItem){
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent)+1
        existingItem.querySelector('.item-count').textContent = itemCount

        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent)+parseFloat(itemPrice)
        existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2)
    }
    else{
        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
        <td>${itemName}</td>
        <td class="item-count">1</td>
        <td class="item-price">${itemPrice}</td>
        <td class="item-total">${itemPrice}</td>
      `;
     }
     updateCartCountAndTotal();
}
//update cart count and total
function updateCartCountAndTotal() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
  
    let totalCount = 0;
    let total = 0;
  
    cartItems.forEach(item => {
      const itemCount = parseInt(item.querySelector('.item-count').textContent) || 0;
      const itemTotal = parseFloat(item.querySelector('.item-total').textContent.replace(/₹/, '') || 0);
  
      totalCount += itemCount;
      total += itemTotal;
    });
  
    cartCount.textContent = totalCount;
    cartTotal.textContent = `₹ ${total.toFixed(2)}`;
  }
  
  
  
