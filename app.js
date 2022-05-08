const student = [
    {
        name: 'Apu Barua',
        roll: 1,
        st_class: 'Five',
        bangla: 98,
        english: 95,
        math: 92,
        science: 90,
        drawing: 99
    },
    {
        name: 'Rahul Barua',
        roll: 2,
        st_class: 'Five',
        bangla: 67,
        english: 70,
        math: 55,
        science: 45,
        drawing: 95
    },
    {
        name: 'Shimul Barua',
        roll: 3,
        st_class: 'Five',
        bangla: 55,
        english: 60,
        math: 99,
        science: 55,
        drawing: 100
    },
    {
        name: 'Durjoy Barua',
        roll: 4,
        st_class: 'Five',
        bangla: 12,
        english: 60,
        math: 10,
        science: 55,
        drawing: 85
    },
    {
        name: 'Rasel Barua',
        roll: 5,
        st_class: 'Five',
        bangla: 30,
        english: 20,
        math: 15,
        science: 55,
        drawing: 85
    },
    {
        name: 'Mridul Barua',
        roll: 6,
        st_class: 'Five',
        bangla: 35,
        english: 33,
        math: 39,
        science: 45,
        drawing: 65
    },
    {
        name: 'Dola Barua',
        roll: 7,
        st_class: 'Five',
        bangla: 98,
        english: 99,
        math: 97,
        science: 99,
        drawing: 100
    },
    {
        name: 'Riya Barua',
        roll: 8,
        st_class: 'Five',
        bangla: 93,
        english: 91,
        math: 67,
        science: 99,
        drawing: 100
    },
    {
        name: 'Bijoya Barua',
        roll: 9,
        st_class: 'Five',
        bangla: 95,
        english: 86,
        math: 85,
        science: 79,
        drawing: 90
    },
    {
        name: 'Fahim Khan',
        roll: 10,
        st_class: 'Five',
        bangla: 0,
        english: 0,
        math: 10,
        science: 29,
        drawing: 25
    }
];

let gpa;

function gpaCal(marks){
    if(marks >= 0 && marks < 33){
        return gpa = 0.00;
    }else if(marks >= 33 && marks < 40){
        return gpa = 1.00;
    }else if(marks >= 40 && marks < 50){
        return gpa = 2.00;
    }else if(marks >= 50 && marks < 60){
        return gpa = 3.00;
    }else if(marks >= 60 && marks < 70){
        return gpa = 3.50;
    }else if(marks >= 70 && marks < 80){
        return gpa = 4.00;
    }else if(marks >= 80 && marks <= 100){
        return gpa = 5.00;
    }else{
        return "Invalid";
    }
}

let grade;

function gradeCal(marks){
    if(marks >= 0 && marks < 33){
        return grade = 'F';
    }else if(marks >= 33 && marks < 40){
        return grade = 'D';
    }else if(marks >= 40 && marks < 50){
        return grade = 'C';
    }else if(marks >= 50 && marks < 60){
        return grade = 'B';
    }else if(marks >= 60 && marks < 70){
        return grade = 'A-';
    }else if(marks >= 70 && marks < 80){
        return grade = 'A';
    }else if(marks >= 80 && marks <= 100){
        return grade = 'A+';
    }else{
        return "Invalid";
    }
}

let cgpa;

function calculation(sub1, sub2, sub3, sub4, sub5){
    return cgpa = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
}



console.log(`
Class 5 Student Result Sheet
===========================================================================
`);

student.forEach(item => {

    let result = item.bangla >=33 && item.english >= 33 && item.math >= 33 && item.science >= 33 && item.drawing >= 33 ? 'Passed' : 'Failed';

    console.log(`
Student Name : ${ item.name }
Student Roll : ${ item.roll }
Student Class: ${ item.st_class }
====================================================================================
Subject Name            GPA                 Grade       CGPA        Final Result
-------------------------------------------------------------------------------------
Bangla                  ${ gpaCal(item.bangla)}                   ${ gradeCal(item.bangla)}  
English                 ${ gpaCal(item.english)}                   ${ gradeCal(item.english)}
Math                    ${ gpaCal(item.math)}                   ${ gradeCal(item.math)}           ${ calculation(gpaCal(item.bangla), gpaCal(item.english), gpaCal(item.math), gpaCal(item.science), gpaCal(item.drawing))}         You are ${ result }
Science                 ${ gpaCal(item.science)}                   ${ gradeCal(item.science)}
Drawing                 ${ gpaCal(item.drawing)}                   ${ gradeCal(item.drawing)}
`);
});