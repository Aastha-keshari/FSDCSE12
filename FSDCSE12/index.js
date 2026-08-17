const button=document.getElementById('btn');
const container=document.getElementById('container');
const loading=document.createElement('div');
container.appendChild(loading);
// const loading= document.createElement('div')
// container.appendChild(loading);
// console.log(button)

async function fetchData(){
                try{
               loading.innerHTML="<h2>Loading Data...</h2>";
              const serverData=await fetch('https://fakestoreapi.com/products')
                const jsonData= await serverData.json();
              console.log(jsonData)
            //container.innerHTML=`${JSON.stringify(jsonData)}`
            let table=`<table border='4px'>
<tr>
<td>image</td>
<td>ITEM_ID</</td>
<td> TITLE</td>
<td> PRICE</td>
</tr> 
${
    jsonData.map((ele)=>(
        `
        <tr>
        <td> <img src=${ele.image}height="100px" width="100px" alt='cloth'/></td>
        <td>
        ${ele.id}
        </td>
        <td> ${ele.title}</td>
        <td> ${ele.price}</td>
        
        </tr>`

    ))
}

            </table>`
            container.innerHTML=table;
        
        }catch(e){
             loading.innerHTML='<h2>Loading Error</h2>'
        }
        finally{
             loading.innerHTML=''
        }

        }

button.addEventListener('click',fetchData)