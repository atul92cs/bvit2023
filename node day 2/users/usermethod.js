let users=[];

addUser=(id,name,email)=>
{
    let user={id:id,name:name,email:email};
    users.push(user);
    return users;
}
countUsers=()=>{
    let count=users.length;
    return count;
}
module.exports={addUser,countUsers};