console.log("its working");

window.onload=update2;

function update2()
{
    
    let str = "";

    arrayh = JSON.parse(localStorage.getItem('todoarray'));

    if(arrayh == null)
    {
        arrayh = [];
    }
    else
    {
        arrayh.forEach((element , index) => {
            str+= `<tr>
            <th scope="col">${index+1}</th>
            <th scope="col">${element[0]}</th>
            <th scope="col">${element[1]}</th>
            <th scope="col"><button class="btn-danger" onclick = "monk(${index})">delete</button></th>
          </tr>`
        });
    }
    

    let elem2 = document.getElementById('tbody');

    elem2.innerHTML = str;
}

function myupdate()
{
    console.log("updating..");

    let tile = document.getElementById('title');

    let desc= document.getElementById('discription');

    
   if(localStorage.getItem('todoarray') == null)
   {
        var arrayh  = [];
        arrayh.push([tile.value , desc.value]);
        localStorage.setItem('todoarray' , JSON.stringify(arrayh));
        


   }
   else
   {
        arrayh = JSON.parse(localStorage.getItem('todoarray'));

       arrayh.push([tile.value , desc.value]);

       localStorage.setItem('todoarray' , JSON.stringify(arrayh));

    }

    update2();

    

}

function monk(e)
{
    console.log("delete working")
    arrayh = JSON.parse(localStorage.getItem('todoarray'));
    arrayh.splice(e , 1);
    localStorage.setItem('todoarray' , JSON.stringify(arrayh));
    update2();
}
