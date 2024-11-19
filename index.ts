//( Comparision Operators...)

// def: 2 values ko aps main compare krna...

// 1.
let y = 64;

console.log(y == 64);

// hm ne phly y ko value di ka Y 64 k brabr ha phr hm compare kr rhy hen == se k kia Y 64 k brabr ha?

// .
let x = 64;

console.log(x == 54);

// 2.
let M = 64;
console.log(M === 64)

// * === is ka mtlab ha ha hm is k sath is ki data type ko bhi compare kr rhy hen...
// agr hmain uper string dena ha toh meniton krna prhy ga jabhi yeh print kry ga wrna error dy dy ga

// 3.
// Greater than - Less than Comparision operators

// Greater than...

// *
let m = 86;
console.log(m >85)

// Ans: True

// *
let n = 86;
console.log(n >87)

// Ans: False

// 4.
// LeSs ThAn...

// *
let t = 86;
console.log(t < 82)

// Ans: False

// *
let s = 86;
console.log(s < 87)

// Ans: True


// 5.
//  Greater than and Equal to...

// *
let j = 86;
console.log(j >86)

// Ans: False


// yeh false ha q k value 86 se bari nh  

// *
let r = 86;
console.log(r >= 86)

// Ans: True

// yeh true ha q k >= ka mtlab ha ya toh value 86 se bari ho ya brabr

// 6.

let R = 86;
console.log(R <= 86)

// *
// let firstVar = 10;
// let secondVar = 20;

// 			console.log( firstVar <= secondVar );
// 			console.log( firstVar <= 10 );			
// 			console.log( firstVar <='10' );	


// yeh true ha q k <= ka mtlab ha ya toh value 86 se choti ho ya brabr


// 7.

//*
let e = 86;
console.log(e != 86)

// Ans: False

// *
let w = 86;
console.log(w != 87)

// yeh hmesha ult ans dy ga true ko false or or false ko true..


// IF ELSE STATEMENT ...

let A = 20 

if (A == 20){
    console.log("Moattar")
}else{

}

// * eg...
let student = "9th"

if(student == "8th"){
    console.log("Get in")
}else{
    console.log("Get out")
}


// let main hm apni condition - shrt dey hen k agr shrt true ho gai toh ye jo console main dia ha woh print krdy or agr false hoi toh yeh else main jo dia usko print krdy ga

let guest:number = 17       // yhan agr 18 se bra hoga toh elilgble , chota hoa toh not eligible

if(guest >= 18){
    console.log("You are eligible for party")
}else{
    console.log("You are not eligible for party")
}

//********************--------------------**********************


// Assigment .......

let age:number = 18

if(age >= 18){
    console.log("You can drive")
}else{
    console.log("You can't drive")
} 



// (Logical Operator...)

// 1.LOGICAL 'AND' (&&) OPERATOR
//2. LOGICAL 'OR' (||) OPERATOR
//3. LOGICAL 'NOT' (!) OPERATOR

// 1.LOGICAL 'AND' (&&) OPERATOR

// donon main se ak bhi false hogi to print nh hoga...

let fname: string ="fatima"
let Age=18

if(fname==="fatima" && Age === 18){
    console.log('You Login')
}else{
    console.log('Login Fail')
}

// hm ne yhan yeh btaya ha ka hm ab 2 conditon dy skhty hen ka jesy agr fatima brabr ho fname k or age brabr ho 18 k toh "you login"print ho wrna "login fail" print ho jai .... donon main se ak bhi false ho gi toh else ki conditon print hogi (fb pr signup ka bad login)

const userName= "moattar"
const password = 65867

if(userName === "moattar" && password === 65867){
    console.log("Login Succesfully")
}else{
    console.log("login Fail")
}

//2. LOGICAL 'OR' (||) OPERATOR

const email= "moattar@gmail.com"
const Password = 65867

if(email === "moattar@gmail.com" || password === 65867){
    console.log("Welcome to Facebook")
}else{
    console.log("login Fail")
}
// donon main se koi ak bhi shi hogi toh print ho jai ga...

//3.










//(CONDITIONAL TERNARY OPERATOR)

// if else ki trhan he is main multiple times use kr skhty hen lkn Condi... main hm ak line or ak bar use kr skhty hen

let Agee = 17
let result = (Agee >= 17)? "you elegible" : "you not eligible"

console.log(result)

