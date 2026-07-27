//console.log("Hello, Asthaaa");//

//const sum=(a,b)=>{return a+b};
//console.log(sum(12,30));

//const data =function(msg){
    //return "Hello, I am usoing JS"+msg
//}
//console.log(data("and Node"));
//IIFE
//((()=>{
   // console.log("IIFE executed")
//})());
//callback
//function sum(a,b){
    //return a+b;

//}
// function sumWithMsg(clbk,msg){
// const result=clbk(2,6);
// console.log("Hey,your result="+result+"!!Well Done"+msg);
// }

// sumWithMsg(sum,"Rahul")
function login(msg,error){
    if(error){
        console.log("Error is"+error)
    }
    else{
        console.log(msg)
    }
}
function loginHandler(username ,password,clbk){
    if(username=="Aastha40"&& password=="12345"){
        clbk("success",null);

    }else{
        clbk(null,"Username or password is incorrect ")
    }
}
loginHandler("Aastha40","12345",login)