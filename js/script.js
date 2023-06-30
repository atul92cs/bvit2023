let car1={name:'polo',company:'volkswagen',status:false,year:2018};
let car2={name:'taigun',company:'volkswagen',status:true,year:2018};
let cars=[];
cars.push(car1);
cars.push(car2);
console.log(cars);
let presentcar=cars.filter((car)=>car.status==true);
console.log(presentcar);
//ES5 Decalaration
function addCar(name,company,status,year){
    let car={name:name,company:company,status:status,year:year};
    cars.push(car);
    console.log(cars);
}
addCar("Swift","Maruti",true,2023);

//ES6 Decalaration

removeCar=(num)=>{
    cars.splice(num,1);
    console.log(cars);
};
//removeCar(2);
let carnames=cars.map(car=>{return car.name});
console.log(carnames);

for (let i=0;i<cars.length;i++)
{
    if(cars[i].company==="volkswagen")
    {
        console.log(cars[i]);
    }
    else
    {
        console.log('other company car')
    }
}
cars.forEach(car => {
        car.location='mumbai';
});
console.log(cars);
let volkswagenexp=[];
cars.forEach(car=>{
    if(car.company==="volkswagen" && 
    car.status==false)
    {
        volkswagenexp.push(car);
    }
});
console.log(volkswagenexp);