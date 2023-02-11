(function(){
    "use strict";
 
     const id=(id)=> document.getElementById(id);
     const classes=(classes)=> document.getElementsByClassName(classes);
 
     const username =id("username"),
      form=id("form"),
    
      errorMsg=classes("error"),
      succcessIcon=classes("success-icon"),
      failureIcon=classes("failure-icon");
 
      form.addEventListener("submit", (e)=>{
          e.preventDefault();
 
          engine(username, 0, "");
          engine(username, 1, "");
          engine(username, 2, "");
         
      });
 
      const engine = (id,serial,message)=>{
         // the id.value.trim() will remove all the extra white spaces from the value which the user inputs.
          if(id.value.trim() === ""){
              errorMsg[serial].innerHTML= message;
              id.style.border= "1px solid red";
 
               // icons
             failureIcon[serial].style.opacity="1";
             succcessIcon[serial].style.opacity="0";
             
 
          }
          else{
             errorMsg[serial].innerHTML= "";
             id.style.border="1px solid green";
 
             // icons
             failureIcon[serial].style.opacity="0";
             succcessIcon[serial].style.opacity="1";
          }
      }
 
 
 
 
 
 
  })();
  
 
 
 