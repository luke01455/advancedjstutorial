// Function constructor

/*
var john = {
name: 'John',
yearOfBirth: 1999,
job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} 

Person.prototype.calculateAge = function() {
    age = 2016 - this.yearOfBirth;
    this.age = age;
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
mark.calculateAge();
jane.calculateAge();
console.log(jane);
console.log(john);
console.log(mark);
*/

// Object. create

/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - yearOfBirth);
    }
}

var john = Object.create(personProto);

var jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: '1969'},
    job: { value: 'designer'}
});
*/

// primitives vs objects


//primitives
/*
var a = 23;
var b = a;
a = 46;
*/

// console.log(a, b);


//objects 

/*
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 27;
var obj = {
    name: 'jonas',
    city: 'lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
    return a;
    
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

// Lecture: passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fnc) {
    var arrRes = [];
for(var i = 0; i < arr.length; i++) 
    {
    arrRes.push(fnc(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
    
}

function fullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
return Math.round(206.9- (0.67* el));
    }
    else {
        return -1;
    }
}
var ages = arrayCalc(years, calcAge);
var fullAge = arrayCalc(ages, fullAge);
var heartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(heartRate);
*/
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {return function(name){
        console.log(name + ', can you please explain what do with a shithead pupil?')
    }
} else {return function(name) {
    console.log(name + ' whats ur fav choccy bar?');
}
}
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('other');
teacherQuestion('John');
designerQuestion('john');
otherQuestion('bobby');

interviewQuestion('teacher')('Mark');
*/

// lecture: IIFE

/*

*/


// closures

/*
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

var retirementIceland = retirement(67);
var retirementGer = retirement(65);
var retirementUS = retirement(66);
retirementGer(1990);
retirementIceland(1990);
retirementUS(1990);

function interviewQuestion(job) {
    a = ' can you please explain what UX design is?';
    b = ' what do you teach?';
    c = ' what is your hobby?';
return function (name) {
    switch (true) {
    case (job === 'designer') : console.log(name + a);
    break;
    case (job === 'teacher') : console.log(name + b);
    break;
    default: console.log(name + c);
    }
}


}


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Susan');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

var otherQuestion = interviewQuestion('spacker');
otherQuestion('Timmy');
*/

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen, i\'m ' + this.name + ' i\'m a ' + this.job + ' and i\'m ' + this.age + 'years old' );
        } else if (style === 'friendly') {
            console.log('Waddup my nigga hows ur ' + timeOfDay + ' poppin foo? dis is ' + this.name + ' speakin oh and by da way im actually a ' + this.job + ' and im current only ' + this.age + ' and i prolly gots more bitchez den u');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('friendly', 'morning');


john.presentation.call(emily , 'friendly', 'afternoon');


//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fnc) {
    var arrRes = [];
for(var i = 0; i < arr.length; i++) 
    {
    arrRes.push(fnc(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
    
}

function fullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullJapan = arrayCalc(ages, fullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/


/*
var rand = Math.round(Math.random()*2);
switch (true) {
    case (rand === 0) : questionOne.readOut('check');
    break;
    case (rand === 1) : questionOne.readOut.call(questionTwo, 'check');
    break;
    default : questionOne.readOut.call(questionThree, 'check');
    
};
var answer = prompt("Please choose the right answer (just enter the number");


    readOut: function(go) {
        console.log(this.question);
        console.log(this.a);
        console.log(this.b);
    
        if (this.c) {
            console.log(this.c);
        }
        if (answer = '1') {
            console.log('that answer is correct');
        }
        else {
            console.log('that answer is incorrect');
        }
        }
*/
/*
(function (goodLuck){
    var score = Math.random()*10;
    console.log ( score >= 5 - goodLuck);
}) (5);
*/
/*
init();
function init (){

    var answerOne, answerTwo, answerThree;
    var rand = Math.round(Math.random()*2);
switch (true) {
    case (rand === 0) : answerOne = readQuestionOne(answerOne);
    break;
    case (rand === 1) : answerTwo = readQuestionTwo(answerTwo);
    break;
    default : answerThree = readQuestionThree(answerThree);
    };
switch (true) {
    case (rand === 0) : if (answerOne) {console.log('correct')} else {console.log('incorrect')};  
    break;
    case (rand === 1) : if (answerTwo) {console.log('correct')} else {console.log('incorrect')};  
    break;
    default : if (answerThree) {console.log('correct')} else {console.log('incorrect')};
        };
}

function readQuestionOne(answer) {
    console.log('what color is the sky?');
    console.log('0: red');
    console.log('1: blue');
    console.log('2: green')
    personAnswer = prompt('answer the question (just put the number)');

    if (personAnswer == '1') {
        return true;
    }
    else { return false; }
}

    function readQuestionTwo(answer) {
        console.log('is Hitler dead?');
        console.log('0: yes');
        console.log('1: no');
        personAnswer = prompt('answer the question (just put the number)');
        if (personAnswer == '0') {
            return true;
        }
        else { return false; }
        };


 function readQuestionThree(answer) {
   console.log('Which is the fruit?');
    console.log('0: chocolate');
   console.log('1: doritos');
   console.log('2: banana');
    personAnswer = prompt('answer the question (just put the number)');
    if (personAnswer == '2') {
        return true;
    }
    else { return false; }
    };

*/
/*
function blastQuestion() {
    var rand = Math.round(Math.random()*2);
switch (true) {
    case (rand === 0) : console.log(questionOne.question);
    console.log('test');
    break;
    case (rand === 1) : console.log(questionTwo.question);
    console.log('test');
    break;
    default : console.log(questionThree.question);
    console.log('test');
    
}
}
blastQuestion();
*/


    
(function () {

var Question = function(question, a, correctAnswer) {
    this.question = question;
    this.a = a;
    this.correctAnswer = correctAnswer;
}

Question.prototype.readQuestion = function() {
        console.log(score);
        console.log(this.question);
        console.log(this.a[0]);
        console.log(this.a[1]);
        if (this.a[2]) {
        console.log(this.a[2]);
        }
        personAnswer = prompt('answer the question, (just type the number)');

        if (personAnswer == this.correctAnswer) {
        console.log('Thats the Correct Answer!');
        score ++;
        init();
    }
    else if (personAnswer == exit) {
exit();
    }
        else {
            console.log('Thats the Wrong Answer!');
        }
     }

var score = 0;
var questionOne = new Question('what color is the sky?', ['0: red', '1: blue', '2: green'], '1');
var questionTwo = new Question('is Hitler dead?', ['0: yes', '1: no', false,], '0');
var questionThree = new Question('which is the fruit?', ['0: dorito', '1: choc', '2: apple'], '2');
var allQuestions = [questionOne, questionTwo, questionThree];
    function init() {
    var rand = Math.round(Math.random()*2);
switch (true) {
    case (rand === 0) : allQuestions[0].readQuestion();
    break;
    case (rand === 1) : allQuestions[1].readQuestion();
    break;
    default : allQuestions[2].readQuestion();
}}
    init();

    function exit()
    {
        console.log('you have quit the game');
    }

})();







