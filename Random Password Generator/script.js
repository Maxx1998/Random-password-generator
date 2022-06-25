"use strict";

document.querySelector(".btn").
addEventListener("click",function()
{
const str=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]`;
console.log(str.length);
const passLen=16;
let pass="";

for(let i=0;i<passLen;i++)
{
    let random=Math.floor(Math.random()*(str.length));
    pass+=str.substring(random,random+1);
}
document.querySelector(".inputField").value=pass;
});