// Inspired by http://madewithenvy.com/ecosystem/articles/2015/exploring-order-flexbox-carousel/

// Current item visible is always order 2
// Animate is order 1 -> 2
// Animate reverse is order 2 <- 3
window.onload = function(){ 
    var carouselContent = document.querySelector('.carousel-content');
    var items = document.querySelectorAll('.carousel-item');
    
    /**
    * toggleReverse change class of .carousel-content element
    * @param check {bool} compare if .carousel-content element contains .carousel-reverse
    * @param action {string} [add, remove]
    */
    var toggleReverse = function(check, action){
      if(carouselContent.classList.contains('carousel-reverse') == check){
       carouselContent.classList[action]('carousel-reverse');
     } 
    };
    /**
    * toggleAnimate add or remove .carousel-animate to .carousel-content element
    */
    var toggleAnimate = function(){
      carouselContent.classList.toggle('carousel-animate');
    };
    
    /**
    * setOrder change dynamically the order of all .carousel-item elements
    */
    var setOrder = function(direction){
      // initialize direction to change order
      if(direction === 'left'){
        direction = 1;
      } else if(direction === "right"){
        direction = -1;
      }
      
      for(var i = 0, c=items.length;i<c;i++){
        if(items[i].style.order){ // change order with direction
          var newValue = (parseInt(items[i].style.order, 10) + direction) % c;
          items[i].style.order = newValue ? newValue : c;
        
        } else { // Initialize
          items[i].style.order = i+1;
        }
      }
    };
  
    // Initiliaze order of .carousel-item
    setOrder();
  
  
  
    var onRightClick = function(evt){
      // remove reverse
      toggleReverse(true, "remove");
      // Disable transition to instant change order     
      toggleAnimate();
      // Change order of element
      // Current order 2 visible become order 3
      setOrder('right');
      // Enable transition to animate order 3 to order 2
      setTimeout(toggleAnimate, 50);      
    };
    var onLeftClick = function(evt){
      // add reverse
      toggleReverse(false, "add");
      // Disable transition to instant change order
      toggleAnimate();
      // Change order of element
      // Current order 2 visible become order 1    
      setOrder('left');
      // Enable transition to animate order 1 to order 2
      setTimeout(toggleAnimate, 50);      
    };
    // controls the navigation select a different element for a different button
  // Desktop
    document.querySelector('.fa-chevron-left').addEventListener('click', onLeftClick, false);  
    document.querySelector('.fa-chevron-right').addEventListener('click', onRightClick, false); 
  // Mobile
    document.querySelector('.carousel-navigation-left').addEventListener('click', onLeftClick, false);  
    document.querySelector('.carousel-navigation-right').addEventListener('click', onRightClick, false);  
};
