let sviListElementi = document.querySelectorAll("li");

sviListElementi.forEach(elem => {
   elem.addEventListener('click', () =>{
       if(elem.style.textDecoration == "line-through"){
        elem.style.textDecoration = "none";
       }else{
        elem.style.textDecoration = "line-through";
       }
   });

   
});