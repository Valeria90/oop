class Worker {
    constructor (name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate; 
        this.days = days;
    }

    getSalary() {
        let salary = this.rate*this.days;
        alert(salary);
    }
}
function Worker(name, surname, rate, days) {
    this.getName = function(){
        return name;
    }
    this.getSurname = function(){
        return surname;
    }
    this.Rate = function(changeRate){
        if(!arguments.length){
            return rate;
        } else {
            rate = changeRate;
        }
    }
    this.Days = function(changeDay){
        if(!arguments.length){
            return days;
        } else {
            days = changeDay;
        }
    }
    this.getSalary = function() {
        return rate*days;
    }
}

class MyString {
    constructor (string) {
        this.string = string;
    }
    reverce(string) {
        let temp = string.split('');
        let result = '';
        for(var i = temp.length-1; i >= 0; i--) {
            result += temp[i]; 
        }
        return res;
    }
    ucFirst(string) {
        let result = string[0].toUpperCase()+string.slice(1);
        return result;
    }
    ucWords(string) {
        let arrayStrings = string.split(' ');
        let result = '';
        arrayStrings.forEach(function(element) {
            let temp = element[0].toUpperCase()+element.slice(1);
            result = result+temp+' ';
        });
    }
}
class Validator {
    constructor (string) {
        this.string = string;
    }
    isMail(string) {
        var regex = /^[\w\s]{3,}@[\w\s]{3,}\.[\w\s]{2,}/;
        return regex.test(email.toLowerCase());
    }
    isDomain(string) {
        var regex = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return regex.test(string);
    }
    isDate (string) {
        var regex =/^[\d]{2}[\.|\-|\/][\d]{2}[\.|\-|\/][\d]{4}$/;
        return regex.test(string);
    }
    isPhone (string) {
        var regex =/^[\+](380)[\d]{9}$/;
        return regex.test(string);
    }
}
class User {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getFullName() {
        alert(this.name + " " + this.surname);
    }
}
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname, year)
    }
    getCourse() {
        let date = new Date();
        let currentYear = date.getFullYear();
        alert(currentYear - this.year);
    }
}
function counter() {
    let current = 1;
    return function() { 
        return current++;
    };
}
let count = counter();
alert(count());
alert(count());
alert(count());

class List {
    constructor(options) {
        this.ctrl = options.ctrl;
        this.parentElement = options.parentElement;
        this.itemElement = options.itemElement;
        this.arrOfItems = options.arrOfItems;
        this.onCreate = options.onCreate;
        this.onDelete = options.onDelete;
        this.checkedList = [];
    }
    createStartPage() {
        let body = document.querySelector('body');
        body.innerHTML = "<input><button></button><button></button><ul></ul>";
        let getDataInput = document.querySelector('input');
        let buttonAdd = document.querySelectorAll('button')[0];
        buttonAdd.innerText = '+';
        let buttonDel = document.querySelectorAll('button')[1];
        buttonDel.innerText = '-';
        buttonDel.classList.add('hide');
        let list = document.querySelector(this.parentElement);
        for(let i = 0; i < 5; i++) {
            let li = document.createElement(this.itemElement);
            let innerI = document.createTextNode(this.arrOfItems[i]);
            li.appendChild(innerI);
            list.appendChild(li);
        }
        buttonAdd.addEventListener('click', this.onCreate);
        buttonDel.addEventListener('click', this.onDelete.bind(this));
        list.addEventListener('click', this.check.bind(this));
    }
    check(event) {
        let buttonDel = document.querySelectorAll('button')[1];
        let itemList = document.querySelectorAll('li');
        let checkedItem = event.target;
        if(event.ctrlKey){
            if(!checkedItem.classList.contains('checked')) {
                checkedItem.classList.add('checked');
                this.checkedList.push(checkedItem);
            } else {
                checkedItem.classList.remove('checked');
                for(let i = 0; i < this.checkedList.length; i++) {
                    if (this.checkedList[i] == checkedItem) {
                        this.checkedList.splice(this.checkedList[i]);
                    }
                } 
            }
        } else {
            if(!checkedItem.classList.contains('checked')) {
                for(let i = 0; i < itemList.length; i++) {
                    itemList[i].classList.remove('checked');
                }
                checkedItem.classList.add('checked');
                this.checkedList.push(checkedItem);
            } else {
                if(this.checkedList.length > 1) {
                    for(let i = 0; i < itemList.length; i++) {
                        itemList[i].classList.remove('checked');
                    }
                    this.checkedList = [];
                    checkedItem.classList.add('checked');
                    this.checkedList.push(checkedItem); 
                } else {
                    for(let i = 0; i < itemList.length; i++) {
                        itemList[i].classList.remove('checked');
                    }
                    this.checkedList = [];
                }
            }
        }
        if(this.checkedList.length > 0) {
            buttonDel.classList.remove('hide');
            buttonDel.classList.add('show');
        } else {
            buttonDel.classList.add('hide');
            buttonDel.classList.remove('show');
        }
    }
}
function addListElement() {
    let list = document.querySelector('ul');
    let input = document.querySelector('input');
    let li = document.createElement('li');
    let addTextToNewItem = document.createTextNode(input.value);
    li.appendChild(addTextToNewItem);
    list.appendChild(li);
    input.value = '';
}
function removeListElement() { 
    for(let i = 0; i < this.checkedList.length; i++) {
        this.checkedList[i].remove();
    }
}
let item = new List({
    ctrl: true, 
    parentElement: 'ul', 
    itemElement: 'li', 
    arrOfItems: ['1', '2', '3', '4', '5'], 
    onCreate: addListElement, 
    onDelete: removeListElement});
item.createStartPage();