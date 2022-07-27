function validateform(){  
    var name=document.myform.name1.value;  
    var password=document.myform.password1.value;  
      
    var re =new RegExp("(?=.*[A-Z])");
    const isEmailValid = (name) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(name);}
    const tr=(password) => {
        const re = new RegExp("(?=.*[A-Z])");
        return re.test(password);
    };
    console.log(tr(password));
    if (isEmailValid(name)==false){  
      alert("Name can't be blank");  
       return false;
    }else if( tr(password)==false ){  
      alert("Password must be at least 6 characters long.");  
     return false;
      }  
    }  
    

    