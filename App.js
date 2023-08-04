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

// var item=document.getElementsByClassName('list-group-item-new');
// console.log(item);
// item[0].style.backgroundColor='pink';
// var newitem=document.getElementsByTagName('li');
// for(let i=0;i<newitem.length;i++){
//     newitem[i].style.fontSize='5px';
// }
//QuerySelector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello world';
// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var lastItem=document.querySelector('.list-group-item:last-child');
// //lastItem.style.color='blue';

// var SecondlastItem=document.querySelector('.list-group-item:nth-child(2)');
// SecondlastItem.style.backgroundColor='green';
//QurySelector ALL
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';
// titles[1].style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<even.length;i++){
//     even[i].style.backgroundColor='#ccc';
// }

var itemList=document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#ccc';
// console.log(itemList.parentNode.parentNode.parentNode);

//parent element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#ccc';
// console.log(itemList.parentElement.parentElement.parentElement);

//childnode
//console.log(itemList.childNodes);
//console.log(itemList.children);
// firstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';
// console.log(itemList.lastChildChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 1';
//NextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElement

//create  a div
// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello Div');
// //create textNode
// var newDivtext=document.createTextNode('Hello World');
// //add text to div
// newDiv.appendChild(newDivtext);
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

var newDiv=document.createElement('Div');
newDiv.className='hello';
newDiv.id='hello1';
var newDivtext=document.createTextNode("HEllo");
newDiv.appendChild(newDivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header .list-group')
container.insertBefore(newDiv,h1);
