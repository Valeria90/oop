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