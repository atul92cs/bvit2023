// const num1=-6;
// let num2=9;
// console.log(num2);
// console.log(num1);
// num2=num2+num1;
// console.log(num2);
// console.log(typeof(num2));

// // let name='john smith';
// // console.log(name.length);
// // console.log(name.substring(0,5));
// // console.log(name.toUpperCase());
// // console.log(name.toLowerCase());
// // console.log(name.split(''));
// // console.log(name.split(' '));

// // let title='Mr';
// //  name=title+name;
// //  console.log(name);
// //  name= `${title} ${name}`;
// //  console.log(name);

//  let cars=[];
// // cars.push('Audi');
// // console.log(cars);
// // cars[1]='bmw';
//  //console.log(cars);
//  //cars.unshift('volkswagen');
//  //console.log(cars);
//  //cars.pop();
// //  console.log(cars);
// //  cars.splice(1,1);
// //  console.log(cars);
// //  console.log(cars.includes('volkswagen'));
// //  console.log(cars.indexOf('volkswagen'));
// let cardata={};
//  cardata.name='Virtus';
//  cardata.company='Volkswagen';
//  cardata.status=true;
//  console.log(cardata);
//  console.log(cardata.name);
//  let {name:carname,company,status}=cardata;
//  console.log('name',carname);
//  console.log(company);
//  console.log(status);

// cars.push(cardata);
// //Es5 syntax
// function addCar()
// {
//     let car={name:'Fiesta',company:'Ford',
//     status:false};
//     cars.push(car);
//     console.log(cars);
// }
// addCar();

// //Es6 Syntax

// newAddcar=(name,company,status)=>{
//     let car={name:name,company:company,
//         status:status};
//     cars.push(car);
//     console.log(cars);
//     return cars;
// }

// let newcars=newAddcar('Swift','Maruti',true);
// console.log(newcars);
// let oldcars=cars.filter((car)=>car.status==false);
// console.log(oldcars);
// let carnames=cars.map(car=>{return car.name});
// console.log(carnames);

// for (let i=0;i<cars.length;i++)
// {
//     if(cars[i].status==false)
//     {
//         console.log('old car ',cars[i]);
//     }
//     else{
//     console.log('new car ',cars[i]);
//     }
// }
// cars.forEach((car)=>{
//     car.location='mumbai';
// });
// console.log(cars);

// let car1={name:'Figo',company:'Ford',
//     status:false};
//  let car2={name:'Beat',company:'Chervolet',
//     status:false};
// cars.push(car1);
// cars.push(car2);
// cars.forEach((car)=>{
//     if(car.location==='mumbai' && 
//     car.status==false)
//     {
//         car.availability='none';
//     }
//     else
//     {
//         car.availability='available';
//     }
// });
// console.log(cars);

// cars.forEach((car)=>{
//     if((car.status==false && 
//         car.location==='mumbai')||
//     car.status==false)
//     {
//         car.availability='none';
//     }
// });
// console.log(cars);
    
let image=document.getElementById('main-image');
image.src='./images/lvqtv8862jadbgwts6mi.png';

let firstbody=document.getElementsByClassName('first-body');
console.log(firstbody);
firstbody[0].textContent='this is changed by dom';
firstbody[0].style='color:red;';
let child=firstbody[0].childNodes;
console.log('child-->',child);
child[0].textContent=`This is the first html page`;