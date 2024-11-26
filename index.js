let element = document.getElementById("func");
let sm = 0
element.addEventListener("click", (e) => {
   if(e.ctrlKey){
      element.setAttribute(
         "style",
         "color: red; text-align: right"
     );
   
   }else if(sm===0){
      element.setAttribute(
         "style",
         "color: blue; text-align: center"
     );
     sm +=1
   }else{
      element.setAttribute(
         "style",
         " text-align: left"
     );
     sm = 0      
   }

   

});
