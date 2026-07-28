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
// function login(msg,error){
//     if(error){
//         console.log("Error is"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
// function loginHandler(username ,password,clbk){
//     if(username=="Aastha40"&& password=="12345"){
//         clbk("success",null);

//     }else{
//         clbk(null,"Username or password is incorrect ")
//     }
// }
// loginHandler("Aastha40","123458",login)
// console.log("One")
// setTimeout(()=>{  //arrow function ,non synchronization
// console.log("Two")
// },1000)
// console.log("Three")
// setTimeout(()=>{
//     console.log("One")
//     setTimeout(()=>{
//         console.log("Two")
//     setTimeout(()=>{
//          console.log("Three")
//          setTimeout(()=>{
//          console.log("Four")
//           setTimeout(()=>{
//          console.log("Five")
//           setTimeout(()=>{
//          console.log("Six")

//          },1000)
//           },1000)
//            },1000)
//             },1000)
//              },1000)
//               },1000)
         
//    const mypromise=new Promise((resolve,reject)=>{
//   const username="Aastha23";
//    const password="123456";
//    if(username=="Aastha23"&& password=="123456"){
//         resolve("Success");

//      }else{
//          reject("Username or password incorrect")
//     }

//    } )   
//    mypromise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((msg) => {
//         console.log(msg);
//     })
//     .finally(() => {
//         console.log("All Done");
//     });

    

//   })
// const mypromises=new Promise((resolve,reject)=>{
//     const num=14;
//     if(num%2==0){
//         resolve("Even");
//     }else{
//         reject("Odd")

// }
// })
// mypromises.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All Done")
// })
  
//    async function handleData(){
//     try{
//         console.log("first")
//         const a=   await mypromise;
//         console.log(a);
// console.log("Second")
//     }catch(err){
//         console.log(err)
//     }
//     finally{
//         console.log("All Done")
//     }
//    }
//    handleData();

  const mypromise = new Promise((resolve, reject) => {
    const username = "akshu";
    const password = "12345";

    if (username == "akshu" && password == "12345") {
        resolve("success");
    } else {
        reject("user or password incorrect");
    }
});

const profilePromise = new Promise((resolve, reject) => {
    const profileloaded = true;

    if (profileloaded) {
        resolve("profile loaded");
    } else {
        reject("profile not loaded");
    }
});

async function handleData() {
    try {
        console.log("handling data");

        const login = await mypromise;
        console.log("Login:", login);

        const profile = await profilePromise;
        console.log("Profile:", profile);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("All done");
    }
}

handleData(); // Function call