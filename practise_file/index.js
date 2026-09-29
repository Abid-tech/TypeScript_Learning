"use strict";
// Starting 
/*
let firstName:string
firstName = 'Abid'
console.log(firstName)


//function

let addNumbers = (num1:number,num2:number)=>{
    console.log(num1+num2)
 }

addNumbers(12.54,24.12)
*/
// Built-in types : number, string, boolean, void, null, undefined
/*
let userId:number;
let firstName:string;
let lastName:string;
let fullName:string;
let isActivated : boolean;


let printDetails = (id:number,name:string,activation:boolean): void =>{
    console.log(`
        The userId of the student is ${userId}. The name of the student is ${fullName}. Activation of studentShip is : ${isActivated}
    `)
}

userId = 101
firstName = 'Md. Abid'
lastName = ' Ali'
fullName = firstName.concat(lastName)
isActivated =  true
printDetails(userId,fullName,isActivated)
*/
// user defined type : UNION
// If it is not user which one to use
/*

let userId : string|number|boolean;

userId = 28;
console.log(userId)


const printUserId = (userId:string|number) : void => {
    console.log(`The user id is ${userId}`)
}

printUserId('std123')
printUserId(123)
*/
// User Defined types : Array
/*

// there are 2 ways
//1
let userNames : string[];
let userIds : number[]
//2
let userName : Array<string>
let userId : Array<number>

userNames = ['abid','shakib','ali']
userName = ['rakib','emon','nabil']
userIds = [201,120,232]
userId = [321,434,123]
console.log(userNames)
console.log(userName)
console.log(userIds)
console.log(userId)


// Multiple types in array
//1
let combineIds : (number|string)[];
//2
let combineId : Array<number|string|boolean>;

combineIds = ['std123',453,566,'std998']
combineId = [909,'std667',566,'std911',false]
console.log(combineIds)
console.log(combineId)
*/
// completed till 6 from the playlist
// user defined types : tuple
// Can use multiple data type. It can be done using array ( previously shown ), but not recommended. 
/*
let std_details : [number,string,boolean]

std_details = [112,'Abid',true]
console.log(std_details)
*/
// User defined types : Enum
// It is a way to define some constant keywords
// There are 3 types of enum
/*

// 1. Numeric enum

enum playerMovement {
    up=1,
    down,
    left,
    right
}

console.log(playerMovement)
console.log(playerMovement.down)



//2. String enum

// It will give you a chance to store some keywords , which will help to overcome the typo problem

enum saveKeyword {
    process = "ONGOING",
    completion = "COMPLETED",
    updating = "UPDATED"
}
console.log(saveKeyword)
console.log(saveKeyword.completion)


//3. Heterogeneous enum - mixture of both enum

enum booleanAnswer {
    no = 0,
    yes = "YES"
}
console.log(booleanAnswer)
console.log(booleanAnswer.no)
console.log(booleanAnswer.yes)
*/
// User defined type : Any type
// When you are not sure about the type, or multiple type can contain , then use any type
/*
let number:any;

number = 'std123'
console.log(number)

number = 123
console.log(number)

number = true

console.log(number)
*/
// User defined data type : object
// There are couple of ways to declare object
/*
// 1
let studentInfo : object

// 2
let stdInfo : {'stdName':string, 'stdId' ?: number} // Here, stdId is optional
*/
// example
/*
let studentInfo : object[]  // array of object
studentInfo = []

let std1 : {'stdName': string, 'stdId' :number }
std1 = {'stdName':'Abid' , 'stdId':112}

let std2 : {'stdName': string, 'stdId' :number }
std2 = {'stdName':'shakib' , 'stdId':113}

studentInfo.push(std1)
studentInfo.push(std2)

console.log(studentInfo)
*/
// There is a problem if we notice. WE have to define the object everytime in std1 , std2. It will be hassle if there are 100s of students. SO, we can create custom data type
//custome data type
// Previous example using custom data type
/*
let studentInfo : object[]  // array of object
studentInfo = []

type std = {'stdName': string, 'stdId' :number }

let std1 : std
std1 = {'stdName':'Abid' , 'stdId':112}

let std2 : std
std2 = {'stdName':'shakib' , 'stdId':113}

studentInfo.push(std1)
studentInfo.push(std2)

console.log(studentInfo)
*/
// Another example of custom data type
/*
type RequestType = "GET"|"POST"

let getRequestType : RequestType

let getRequestFunction = (getRequestType:RequestType)=>{
    console.log(getRequestType)
}

getRequestFunction('POST') // I only get 2 options to put here, otherwise will get error. It will make chance of mistake lesser
*/
// Starting object oriented programming
/*
class User {
    userName : string
    age : number

    constructor (userName:string, age:number){
        this.userName = userName
        this.age = age
    }

    display():void{
        console.log(`Name of the user is ${this.userName}. Age of the user is ${this.age}`)
    }
}


let user1 = new User('Abid',24)
user1.display()

let user2 = new User('Rakib',26)
console.log(user2.age)
*/
// Inheritance
/*
class User {
    userName : string
    age : number

    constructor (userName:string, age:number){
        this.userName = userName
        this.age = age
    }

    display():void{
        console.log(`Name of the user is ${this.userName}. Age of the user is ${this.age}`)
    }
}

class Student extends User{
    studentId : number
    constructor (userName:string, age:number, studentId:number){
        super(userName,age)
        this.studentId = studentId
    }

    display(): void {
        console.log(`Name of the Student is ${this.userName}. Age of the student is ${this.age} and student Id is ${this.studentId}`)
    }
}

const std1 = new Student("Abid",24,22299505)
std1.display()
*/
//abstraction
/*

abstract class User {
    abstract userName : string
    age : number

    constructor (age:number){
        this.age = age
    }

    abstract display():void // can't define the abstract function
}

class Student extends User{
    studentId : number
    userName: string // // Must declare the abstract element if we extend an abstract class
    constructor (userName:string, age:number, studentId:number){
        super(age)
        this.userName = userName
        this.studentId = studentId
    }

    display(): void {
        console.log(`Name of the Student is ${this.userName}. Age of the student is ${this.age} and student Id is ${this.studentId}`)
    } // Must declare the abstract method if we extend an abstract class
}

const std1 = new Student("Abid",24,22299505)
std1.display()
*/
// Encapsulation
// 4 type
// 1. Public : can access from anywhere, can modify as well
// 2. Protected : Can only access by its class and subclasses ( The one who extend it ),  can't modify from outside
// 3. Private : Can only access by its class. Can create setter and getter method to access and modify it.
// 4. readonly : can only read from outside of the class. Can't modified outside
//1
/*
class User {
    protected userName : string
    age : number

    constructor (userName:string, age:number){
        this.userName = userName
        this.age = age
    }

    display():void{
        console.log(`Name of the user is ${this.userName}. Age of the user is ${this.age}`)
    }
}

class Student extends User{
    studentId : number
    constructor (userName:string, age:number, studentId:number){
        super(userName,age)
        this.studentId = studentId
    }

    display(): void {
        console.log(`Name of the Student is ${this.userName}. Age of the student is ${this.age} and student Id is ${this.studentId}`)
    }
}

const std1 = new Student("Abid",24,22299505)
std1.userName = 'rakib'
console.log(std1.userName)
std1.display()
*/
//2 
/*

class User {
    protected userName : string
    age : number

    constructor (userName:string, age:number){
        this.userName = userName
        this.age = age
    }

    display():void{
        console.log(`Name of the user is ${this.userName}. Age of the user is ${this.age}`)
    }
}

class Student extends User{
    studentId : number
    constructor (userName:string, age:number, studentId:number){
        super(userName,age)
        this.studentId = studentId
    }

    display(): void {
        console.log(`Name of the Student is ${this.userName}. Age of the student is ${this.age} and student Id is ${this.studentId}`)
    }
}

const std1 = new Student("Abid",24,22299505)
// std1.userName = 'rakib'  // Can't do this
// console.log(std1.userName) // can't do this
std1.display()

*/
// 3
/*
class User {
    private userName : string
    age : number

    constructor (userName:string, age:number){
        this.userName = userName
        this.age = age
    }


    getName():void{
        console.log(this.userName)
    }
    setName(modifiedName:string):void{
        this.userName = modifiedName
    }
   

    display():void{
        console.log(`Name of the user is ${this.userName}. Age of the user is ${this.age}`)
    }
}



const std1 = new User("Abid",24)

std1.display()
std1.getName()
std1.setName('Md. Abid Ali')
std1.display()
*/ 
