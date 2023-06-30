let cars=[];
let {getCompanies}=require('./company');
addCar=(id,name,company)=>{
    let car={id:id,name:name,company:company};
    cars.push(car);
    return cars;
}
getCars=()=>{
    return cars;
}
getCarsByCompany=(id)=>{
    let companies=getCompanies();
    let company=companies.filter(company=>{
       return company.id==id;
    });
    console.log(company);
    let newcars=cars.filter(car=>{
       return car.company==id;
    });
    console.log(newcars)
    newcars.forEach(newcar=>{
        newcar.company=company;
    });
    return newcars;
}

module.exports={addCar,getCars,getCarsByCompany};