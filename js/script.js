  var imgs= Array.from ( document.querySelectorAll (".item img") );
  var lightBoxContainer = document.getElementById("lightBoxContainer"),
      viewBtn = document.getElementById("viewBtn"),
      lightBoxItem = document.getElementById ("lightBoxItem"),
      nextBtn = document.getElementById("nextBtn"),
      preBtn =document.getElementById("preBtn"),
      close = document.getElementById("close")

var currentIndex = 0;


  
  for (var i=0 ; i<imgs.length ; i++)
  {
    imgs[i].addEventListener ("click", view);
  }




function view(eventInfo)
{
  
  currentIndex = imgs.indexOf(eventInfo.target)
  // console.log(currentIndex)
    var imgSrc = this.getAttribute("src");
    // console.log(imgSrc)
    
    lightBoxItem.style.backgroundImage =`url(${imgSrc})`; 
    lightBoxContainer.classList.replace("d-none" , "d-flex");
    

}



function nextSlide()
{
  currentIndex++;
  console.log(currentIndex);

  if(currentIndex == imgs.length) //5
  {
  
    currentIndex =0
  }
  var imgSrc = imgs[currentIndex].getAttribute("src")
  lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
  
}
nextBtn.addEventListener("click" ,nextSlide)


function prevSlide()
{
  currentIndex--;
  console.log(currentIndex)
  if(currentIndex < 0)
  {
    currentIndex = imgs.length -1 ;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  
  lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
  
}
preBtn.addEventListener("click" ,prevSlide)


function closeSlide()
{
  lightBoxContainer.classList.replace("d-flex" , "d-none")
}
close.addEventListener("click", closeSlide)


lightBoxContainer.addEventListener("click",function(e){
  if(e.target==lightBoxContainer)
  {
    
    lightBoxContainer.classList.replace("d-flex" , "d-none")

  }


})

document.addEventListener("keydown",function(e)
{
  
  if(e.code == "ArrowLeft")
  {
    prevSlide()
  }
  else if(e.code == "ArrowRight")
  {
    nextSlide()
  }
  else if (e.code == "Escape")
  { 
    closeSlide()
  }
})