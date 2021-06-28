let title = document.createElement('title');
title.innerHTML = "New Document";
document.head.appendChild(title);

let MetaUtf8 = document.createElement('meta');
MetaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(MetaUtf8);

let style = document.createElement('style');
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Open Sans', sans-serif;
}
.wrapper1 {
    margin-top: 135px;
    text-align: center;
} 
.wrapper1__h1 {
    margin-bottom: 35px;
}
.wrapper1__p {
    margin-bottom: 60px;
}

.h1 {
    font-family: 'Arvo', serif;
    font-size: 36px;
    
}
.h2 {
    font-family: 'Montserrat', sans-serif;
    margin-top: 80px;
    font-size: 12px;
    color: #9FA3A7;
    text-transform: uppercase;
    margin-bottom: 35px;
}
.p {
    font-size: 14px;
    color: #9FA3A7;
}
.wrapper2 {
    display: flex;
    justify-content: center;
    margin-bottom: 140px;
}
.item {
    width: 400px;
    text-align: center;
}
.item__h1 {
    margin-bottom: 40px;
    width: 210px;
    margin: 0 auto;
    padding-bottom: 40px;
    
}
.item__p {
    
    width: 210px;
    margin: 0 auto;
    font-size: 12px;
    
}
.item__button {
    margin-top: 65px;
    margin-bottom: 85px;
    padding: 15px 20px;
    border-radius: 30px;
    border: 3px solid #FFC80A;
    font-size: 12px;
    
}
.item1 {
    border: 1px solid #C4C4C4;
    border-radius: 5px;
}
.item1__button {
   background-color: white;
   
    
}
.item2 {
    background-color: #8F75BE;
    border-radius: 3px;
}
.item2__h1 {
    color: white;
}
.item2__p {
    color: white;
}

.item2__h2 {
    color: #FFC80A;
}
.item2__button {
    background-color: #8F75BE;
    color: white;
}
`;
document.head.appendChild(style);


let wrapper1 = document.createElement('div');
wrapper1.classList.add ('wrapper1');
document.body.appendChild(wrapper1);

let h1 = document.createElement('h1');
h1.classList.add ('h1');
h1.classList.add ('wrapper1__h1');
h1.innerHTML = 'Choose Your Option';
wrapper1.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p.classList.add ('p');
p.classList.add ('wrapper1__p');
wrapper1.appendChild(p);

let wrapper2 = document.createElement('div');
wrapper2.classList.add ('wrapper2');
document.body.appendChild(wrapper2);

let item__item1 = document.createElement('div');
item__item1.classList.add ('item');
item__item1.classList.add ('item1');
wrapper2.appendChild(item__item1);

let h2 = document.createElement('h2');
h2.classList.add ('h2');
h2.innerHTML = 'Freelancer';
item__item1.appendChild(h2);

let h1__2 = document.createElement('h1');
h1__2.classList.add ('h1');
h1__2.classList.add ('item__h1');
h1__2.innerHTML = 'Initially designed to';
item__item1.appendChild(h1__2);

let p2 = document.createElement('p');
p2.classList.add ('p');
p2.classList.add ('item__p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
item__item1.appendChild(p2);

let button = document.createElement('button');
button.classList.add ('item__button');
button.classList.add ('item1__button');
button.innerHTML = 'START HERE';
item__item1.appendChild(button);

let item__item2 = document.createElement('div');
item__item2.classList.add ('item');
item__item2.classList.add ('item2');
wrapper2.appendChild(item__item2);

let h2__2 = document.createElement('h2');
h2__2.classList.add ('h2');
h2__2.classList.add ('item2__h2');
h2__2.innerHTML = 'Studio';
item__item2.appendChild(h2__2);

let h1__3 = document.createElement('h1');
h1__3.classList.add ('h1');
h1__3.classList.add ('item__h1');
h1__3.classList.add ('item2__h1');
h1__3.innerHTML = 'Initially designed to';
item__item2.appendChild(h1__3);

let p__3 = document.createElement('p');
p__3.classList.add ('p');
p__3.classList.add ('item__p');
p__3.classList.add ('item2__p');
p__3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
item__item2.appendChild(p__3);

let button2 = document.createElement('button');
button2.classList.add ('item__button');
button2.classList.add ('item2__button');
button2.innerHTML = 'START HERE';
item__item2.appendChild(button2);











