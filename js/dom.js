// let image=document.getElementById('main-image');
// console.log(image);
// image.src='../images/lvqtv8862jadbgwts6mi.png';
// image.style="height:10vh; width:auto;";

// let mainprofile=document.getElementsByClassName('main-profile');
// console.log(mainprofile);
// mainprofile[0].style="background:cyan;";
// let infosection=document.getElementById('info-section');
// let heading=infosection.childNodes[1];
// heading.textContent='this is dom first implementation';

// let paragraph=document.getElementsByTagName('p');
// console.log(paragraph);
// paragraph[1].textContent='this is changed by dom ';

let paragraph=document.querySelectorAll('.section-para');
paragraph[0].style='color:red;';
paragraph[1].style='color:blue;';
paragraph[2].style='color:orange;';
let image=document.querySelector('#main-image');
image.style='border:solid red 1.5px; border-radius:1.5px;';

let headingtag=document.querySelectorAll('h4');
headingtag[0].style='color:cyan; text-decoration:underline;';
headingtag[1].style='color:cyan; text-decoration:underline;';
headingtag[2].style='color:cyan; text-decoration:underline;';

let infosection=document.querySelector('#info-section');

let infopara=document.createElement('p');
let text=document.createTextNode('this is dom generated text');
infopara.appendChild(text);
infosection.appendChild(infopara);

let introduction=document.createElement('h1');
let headingtext=document.createTextNode('heading text by dom');
introduction.appendChild(headingtext);
infopara.insertBefore(introduction,infopara.children[0]);


