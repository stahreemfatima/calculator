let input= document.getElementById('inputbox');
let button=document.querySelectorAll('button');
let result="";
let arr= Array.from(button);
console.log(" jkhihi",arr)

arr.forEach(button=>


    {
        button.addEventListener('click',(e)=>{
            console.log(e)
            if( e.target.innerHTML == '='){
                result=eval(result);
                input.value=result; 

                
            }
            else if (e.target.innerHTML == 'AC'){
                result="";
                input.value=result;
            }
            else if(e.target.innerHTML =='+/-'){
                // string =string.slice(0,string.length-1)
        //   firstvalue=resultvalue;
            result ="-"+input.value
          input.value="-"+input.value

            }
            
            
            else{
                result += e.target.innerHTML;
                input.value= result;
            }

        })
    
    })
    



