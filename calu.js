document.addEventListener("DOMContentLoaded",function(){
    const display=document.querySelector("#display");
    const buttons=document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click",function(){
            const value=button.value;

            if(value === "="){
                try{
                    display.value=eval(display.value);
                }
                catch(error){
                    display.value="Error";
                }
            }
                else if(value === "C"){
                    display.value="";
                 }
                 else{
                    display.value+=value;
                 }
        });
    });
});



