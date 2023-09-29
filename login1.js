class Landing{
    // properties
    database={
        "milan":{username:"Milan",password:"12"},
        "tovi":{username:"tovi",password:"123"},
        "hari":{username:"hari",password:"1234"},
        "akash":{username:"akash",password:"12345"}

    }

    // to add date to local storage
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database));
        }
    }

    // to retrive item 
    ritem(){
        this.database=JSON.parse(localStorage.getItem("database"))
    }


    // method
    register(){
       let user= reg1.value
       let pswd=reg2.value
       this.ritem()
       if(user=="" || pswd==""){
        alert("Please fill all the fields")
       }
       else{
        if(user in this.database){
            alert('alredy registered')
        }else{
            this.database[user]={username:user,password:pswd}
            console.log(this.database);
            alert("registration sucessfull")

            this.saveData()

            window.location=("login_main.html")
        }
       }

    }
    // login function
    login(){
        let user1= log1.value
        let pswd2=log2.value
        this.ritem()
        if(user1 in this.database){
            if(this.database[user1].password==pswd2){
                alert("login sucessfull")
                window.location=("home.html ")
                localStorage.setItem("user",user1)
                
            }else{
                alert("invalid username or password")
            }
        }else{
            alert("user not found")
        }
    }


}
const obj =new Landing()
