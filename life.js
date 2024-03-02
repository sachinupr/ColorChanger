
let a=document.querySelector('#one');
let b=document.querySelector('#second');
let c=document.querySelector('#third');
let d=document.querySelector('#fourth');
let e=document.querySelector('#fifth');
let f=document.querySelector('#sixth');
let bdy=document.querySelector('#main');


a.addEventListener('click',aa);
b.addEventListener('click',bb);
c.addEventListener('click',cc);
d.addEventListener('click',dd);
e.addEventListener('click',ee);
f.addEventListener('click',ff);

function aa()
{
    let val = window.getComputedStyle(one);
    let color = val.getPropertyValue('background-color');
    bdy.style.backgroundColor = color;
}


function bb()
{
    let val=window.getComputedStyle(second);
    let color=val.getPropertyValue('background-color');
    bdy.style.backgroundColor=color;
}


function cc()
{
    let val = window.getComputedStyle(third);
    let color = val.getPropertyValue('background-color');
    bdy.style.backgroundColor = color;
}


function dd()
{
    let val = window.getComputedStyle(fourth);
    let color = val.getPropertyValue('background-color');
    bdy.style.backgroundColor = color;
}


function ee()
{
    let val = window.getComputedStyle(fifth);
    let color = val.getPropertyValue('background-color');
    bdy.style.backgroundColor = color;
}


function ff()
{
    let val = window.getComputedStyle(sixth);
    let color = val.getPropertyValue('background-color');
    bdy.style.backgroundColor = color;
}



