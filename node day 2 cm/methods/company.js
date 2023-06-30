let companies=[];
let db=require('../config/database');
addCompany=(name,year)=>{
    let company={name:name,founding_year:year};
    let msg='';
    let sql='insert into company set ?';
   
}
getCompanies=()=>{
    return companies;
}
module.exports={addCompany,getCompanies};