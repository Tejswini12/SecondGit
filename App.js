// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerHTML='Good Bye';
//console.log(headerTitle.innerHTML);
//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//header.style.borderBottom='solid 3px #000';
//var item=document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent='Hello 2';
// item[1].style.fontWeight='bold';
// item[1].style.backgroundColor='yellow';
// for(let i=0;i<item.length;i++){
//     item[i].style.backgroundColor='#f4f4f4';
// }
// item[2].style.backgroundColor='green';
// for(let i=0;i<item.length;i++){
//     item[i].style.fontWeight='bold';
// }
//bytagName
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

var item=document.getElementsByClassName('list-group-item-new');
console.log(item);
item[0].style.backgroundColor='pink';
var newitem=document.getElementsByTagName('li');
for(let i=0;i<newitem.length;i++){
    newitem[i].style.fontSize='5px';
}