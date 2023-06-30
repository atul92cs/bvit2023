dayGuesser=(day)=>{
    switch(day)
    {
        case "1":
        return "monday";

        case "2":
        return "tuesday";

        case "3":
        return "wednesday";

        case "4":
        return "thrusday";

        case "5":
        return "friday";
        
        case"6":
        return "saturday";

        case "7":
        return "sunday";

        default:
        return "invalid day";
    }
}



let url='http://localhost:8080/user';

let xhr=new XMLHttpRequest();
xhr.open('GET',url,true);

xhr.onload=()=>{
    
    if(xhr.readyState==4||xhr.status==200)
    {
        let response=JSON.parse(xhr.responseText);
        let {users}=response;
        
         let table=document.querySelector('#student-body');
         users.forEach(element => {
            let {id,name,email}=element;
             let row=document.createElement('tr');
             let column1=document.createElement('td');
             let tid=document.createTextNode(id);
            column1.appendChild(tid);
             let tname=document.createTextNode(name);
             let column2=document.createElement('td');
             column2.appendChild(tname);
             let column3=document.createElement('td');
             let temail=document.createTextNode(email);
            column3.appendChild(temail);
            let column4=document.createElement('td');
            let updateButton1=document.createElement('button');
            updateButton1.className='update-button';
            updateButton1.textContent='Update Data';
            column4.appendChild(updateButton1);
             row.appendChild(column1);
             row.appendChild(column2);
             row.appendChild(column3);
             row.appendChild(column4);
             table.appendChild(row);
                updateButton1.addEventListener('click',(e)=>{
                    e.preventDefault();
                    let formname=document.querySelector('#name');
                    let formid=document.querySelector('#id');
                    let formemail=document.querySelector('#email');
                    formname.value=name;
                    formid.value=id;
                    formemail.value=email;
                    let form=document.querySelectorAll('.form-field');
                    let updatedata=document.createElement('button');
                    updatedata.textContent='update data';
                    form[3].appendChild(updatedata);
                    updatedata.addEventListener('click',(e)=>{
                        e.preventDefault();
                        let updatedid=formid.value;
                        let updatedname=formname.value;
                        let updatedemail=formemail.value;
                        let updateurl='http://localhost:8080/user/';
                        updateurl=updateurl+updatedid;
                        let params={name:updatedname,email:updatedemail};
                        let xhr=new XMLHttpRequest();
                        xhr.open('PUT',updateurl,true);
                        xhr.setRequestHeader("Content-Type","application/json");
                        xhr.onload=()=>{
                            if(xhr.readyState==4||xhr.status==200)
                            {
                                let response=xhr.responseText;
                                let {msg}=JSON.parse(response);
                                alert(msg);
                            }
                            else
                            {
                                console.log(xhr.response)
                            }
                        }
                        xhr.send(JSON.stringify(params));
                    });
                });
         });
    }
    else
    {
        console.log(res.responseText);
    }
}
xhr.send();

let addButton=document.querySelector('#add-button');
addButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name').value;
    let email=document.querySelector('#email').value;
    let id=document.querySelector('#id').value;
    let addurl=url+'/add';
    let params={id:id,name:name,email:email};
    let xhr=new XMLHttpRequest();
    xhr.open('POST',addurl,true);

    xhr.setRequestHeader("Content-Type","application/json");
    
    
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            let {responseText}=xhr;
            
            let {msg}=JSON.parse(responseText);
            alert(msg);
        }
        else{
            console.log(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify(params));
});