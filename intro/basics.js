// This is first line of code in java script 
/* this is multiline code
u can write anything u want
like abcde...? hahaha yes!
*/
document.write("<h1>Hello World(Exclusive)</h1>");

//Variables and Data types
/* Data types
1. Premitive data types --> number , string , boolean , null , undefined
2. composite data types ---> objects , arrays
*/

/* variable name starts from latter, _ , or $ 
javascript is loosely typed 
javascript is case sensative
*/
document.write("<h2>Variables and Data types</h2>");
var a=10;
var name;
name="Lokesh";
document.write(a);
document.write("<br>");
document.write(name);

a=false;
document.write("<br>");
document.write(a);



//Operators
document.write("<h2>Operators</h2>");

var x=8;
var y="8";

document.write(x==y);
document.write("<br>");
document.write(x===y);

document.write("<br><br>");
document.write(typeof(x));
document.write("<br>");
document.write(typeof(y));
document.write("<br>");

first_name="Lokeshvar";
second_name="Kumar";
document.write( x + x + first_name + " " + second_name + x + x);



// If Else control statements
document.write("<h2>If Else control statements</h2>");
var num=10;
document.write(num);
if(num%2==0){
    document.write("<p>Even number</p>");
}
else{
    document.write("<p>Odd number</p>");
}


// Switch Case
document.write("<h3>Switch Case</h3>");
var day=5;
switch(day){
    case 1:
        document.write("<p>Sunday</p>");
        break;
    case 2:
        document.write("<p>Monday</p>");
        break;
    case 3:
        document.write("<p>Tuesday</p>");
        break;
    case 4:
        document.write("<p>Wednesday</p>");
        break;
    case 5:
        document.write("<p>Thursday</p>");
        break;        
    case 6:
        document.write("<p>Friday</p>");
        break;
    case 7:
        document.write("<p>Saturday</p>");
        break;
    default :
        document.write("<p>Wrong Input</p>");
}


var name="Tanmay";
var title="Sakpal";
switch(name+" "+title){
    case "Tanmay Sakpal":
        document.write("<p>Manager</p>");
        break;
    case "Tanmay Kishor":
        document.write("<p>Developer</p>");
        break;
    default :
        document.write("<p>No one</p>");
}


// For Loop
document.write("<h2>For Loop</h2>");

var n=19;
document.write("<p>Print Table</p>");
for(var i=1;i<=10;i++){
    document.write(n*i);
    document.write("<br>");
}

// While Loop
document.write("<h2>While Loop</h2>");

var n=18;
var i=1;
document.write("<p>Print Table</p>");
while(i<=10){
    document.write(n*i);
    i++;
    document.write("<br>");
}




// do while Loop
document.write("<h2>Do While Loop</h2>");

var n=17;
var i=1;
document.write("<p>Print Table</p>");
do{
    document.write(n*i);
    i++;
    document.write("<br>");
}while(i<=10)

//Functions

document.write("<h2>Functions</h2>");

function addTwoNumber(a,b){

    var c; //local variable 
    c=a+b;
    return c;
}

var total=addTwoNumber(5,6);
document.write("Total = "+total);
document.write("<br>");
var total=addTwoNumber("Tiken ", "Zongna")
document.write("Total = "+total);


//Scope of Variables
document.write("<h2>Scope of Variables</h2>");

//Arrays
document.write("<h2>Arrays</h2>");

var cars=["BMW", "Volvo", "Audi"];
document.write("<p>"+cars+"</p>");

document.write("<p>Cars :</p>");
for(var i=0;i<cars.length;i++){
    document.write(cars[i]+", ");
}


var arr1=new Array("Mango","Banana","Apple","Orange");
document.write("<p>Fruits :</p>");
for(var i=0;i<arr1.length;i++){
    document.write(arr1[i]+", ");
}

arr1.push("Pineapple");
arr1.push("Guava");

document.write("<p>More Fruits :</p>");
for(var i=0;i<arr1.length;i++){
    document.write(arr1[i]+", ");
}


document.write("<p>Student Information :</p>");
var arr2=new Array("Lokesh","kumar","M170364CA");
arr2.push(25);
arr2.push(5.4);
arr2.push(50);
for(var i = 0;i<arr2.length;i++){
    document.write(arr2[i]+", ")
}



// Objects in JavaScript
document.write("<h2>Objects in JavaScript</h2>");

//Method 1: Literal Object way
document.write("<h4>Method 1: Literal Object way</h4>");
var car = {
    car_brand : "Tesla",
    car_model: "Model 3",
    price : 35000,
    teslaAutoPilot:function(){
        document.write("<p>This Car has Auto Pilot feature </p>");
    }
}
document.write("<p>"+car.car_brand+"</p>")
car.teslaAutoPilot();

//we can do more with javascript object 
// car.price="30000";
// delete car.price;
// car.fuel="Petrol";

//Method 2: using constructor function
document.write("<h4> Method 2: using constructor function</h4>");

function Cars(car_brand,car_model,price){
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.teslaAutoPilot = function(){
        document.write("<p>This Car has Auto Pilot feature </p>");
    }
}

var c1=new Cars("Mercedes","Model 5",30000);
document.write("<p>"+c1.car_brand+"</p>");
c1.teslaAutoPilot();

var c2=new Cars("Tesla","Model 1",35000);
document.write("<p>"+c2.car_brand+"</p>");
c2.teslaAutoPilot();

// Objects of primitive data types
document.write("<h4>Objects of primitive data types : </h4>");

var str1= new String();
document.write("<p> "+typeof(str1)+" </p>");
var str2="sssttrring";
document.write("<p> "+typeof(str2)+" </p>");

