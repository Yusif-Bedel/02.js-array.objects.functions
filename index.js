//!task6-1 //!Loop
// let eded=prompt("eded daxil edin")
// let cem=0
// let hasil=1
// if(eded.length==3){
//     for (let i = 0; i < eded.length; i++) {
//         cem+=parseInt(eded[i])
//         hasil*=parseInt(eded[i])
//     }
//     let edediOrta=cem/3
//     console.log(cem,hasil,edediOrta)
// }
// else{
//     console.log("eded 3 reqemli deyil")
// }
//!task6-2
// let eded=parseInt(prompt("eded daxil edin"))
// for (let i = 1; i <= eded; i++) {
//     if(eded%i==0){
//         console.log(i)
//     }
// }
//!task6-3
// let eded=parseInt(prompt("eded daxil edin"))
// let say=0
// for (let i = 1; i <= eded; i++) {
//     if(eded%i==0){
//         say+=1
//     }
// }
// console.log(say)
//!task6-4
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * ${i} = ${i*i}`)
// }
//!task6-5
// for (let i = 0; i <= 10; i++) {
// console.log(`${i} ${i*i} ${i*i*i}`)
// }
//!task6-6
// for (let i = 1; i < 100; i++) {
//     if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0){
//         console.log(i)
//     }
// }
//!tassk6-7
// let tekCem=0
// let cutCem=0
// for (let i = 1; i < 100; i++) {
// if(i%2==0){
//     cutCem+=i
// }
// else{
//     tekCem+=i
// }
// }
// console.log(tekCem,cutCem)
//!task6-8 //!Arrays
// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//   ];
// let edediOrta1=(students[0].scores[0]+students[0].scores[1]+students[0].scores[2])/3
// let edediOrta2=(students[1].scores[0]+students[1].scores[1]+students[1].scores[2])/3
// let edediOrta3=(students[2].scores[0]+students[2].scores[1]+students[2].scores[2])/3
// let array=[]
// array.push(edediOrta1)
// array.push(edediOrta2)
// array.push(edediOrta3)
// console.log(array)
//!task6-9
// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  
//   let cem=0
//   let say=0
//   for (let i = 0; i < products.length; i++) {
//     cem+=products[i].price
//     say+=1
//   }
//   console.log(cem,cem/say)
//!task6-10
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// for (let i = 0; i < countries.length; i++) {
//     if(countries[i][0]=="A" && countries[i][countries[i].length-1]=="a"){
//         console.log(countries[i])
//     }
// }
//!task6-11
// let eded=parseInt(prompt("eded daxil edin"))
// let say=0
// for (let i = 1; i <= eded; i++) {
//     if(eded%i==0){
//         say+=1
//     }
// }
// console.log(say)
//!task6-12
// let count=0
// function salam(sampleNews) {
//     let cavab=sampleNews.split(" ")
//     for (let i = 0; i < cavab.length; i++) {
//         count++
//     }
//     console.log(count)
// }
// salam(`As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`)
//!task6-13 //!Functions
// function printFullName(ad,soyad) {
//     let fullname=ad+soyad
//     console.log(`I am ${fullname}`)
// }
// console.log("John","Marston")
//!task6-14
// function square(number) {
//     let cavab=number*number
//     console.log(cavab)
// }
// square(5)
//!task6-15
// function sum(a,b) {
//     let cavab=a+b
//     return cavab
// }
// function multiply(a,b) {
//     let cavab=a*b
//     return cavab
// }
// function subtruct(a,b) {
//     let cavab=a-b
//     return cavab
// }
// function divide(a,b) {
//     let cavab=a/b
//     return cavab
// }
// console.log(sum(5,1))
// console.log(multiply(5,1))
// console.log(subtruct(5,1))
// console.log(divide(5,1))
//!task6-16
// function calculator(a,b,parameter) {
//     if(parameter=="+"){
//         console.log(a+b)
//     }
//     else if(parameter=="-"){
//         console.log(a-b)
//     }
//     else if(parameter=="*"){
//         console.log(a*b)
//     }
//     else if(parameter=="/"){
//         console.log(a/b)
//     }
// }
// calculator(1,2,"-")
//!task6-17
// function salam(array) {
//     let cem=0
// for (let i = 0; i < array.length; i++) {
//     cem+=array[i]
// }
// console.log(cem)
    
// }
// salam([1,2,3,4,"salam",6])
//!task6-18
// function salam(array) {
//     let max=0
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>max){
//             max=array[i]
//         }
//     }
//     console.log(max)
// }
// salam([1,2,3,4,5,6])
//!task6-19
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];
// function filterEmployees (employees) {
//     let array=[]
//     for (let i = 0; i < employees.length; i++) {
//         if(employees[i].salary>60000){
//             array.push(employees[i])
//         }
//     }
//     console.log(array)
// }
// filterEmployees([
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ])
//!task6-20
// function salam(array,eded) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]==eded){
//             console.log("eded array-a daxildir")
//             break
//         }   
//         else{
//             console.log("eded array-a daxil deyil")
//         }
//     }

// };
// salam([1,2,3,4,5,6],1);
//!task6-21
// let count=0
// function salam(sampleNews) {
//     let cavab=sampleNews.split(" ")
//     for (let i = 0; i < cavab.length; i++) {
//         count++
//     }
//     console.log(count)
// }
// salam(`As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`)
//!task6-22
// function salam(arr1,arr2) {
//     let array=[]
//     for (let i = 0; i < arr1.length; i++) {
//         array.push(arr1[i])
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         array.push(arr2[j])
//     }
//     return array
// }
// console.log(salam([1,2,3,4,5],[6,7,8,9]))
//!task6-23
// function salam(par1,par2) {
//     let array=[]
//     for (let i = 0; i < par1; i++) {
//         array.push(par2)
//     }
//     console.log(array)
// }
// salam(6,1)
//!task6-24
// function salam(array,par1,par2) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]==array[par1]){
//             let eded=array[i]
//             array[i]=array[par2-1]
//             array[i+1]=array[par2]
//             array[par2]=eded
//         }
//     }
//     console.log(array)
// }
// salam([10, 20, 30, 40, 50], 0, 2)
//!task6-25
// function salam(par1,par2) {
//     let array=[]
//     for (let i = par1; i <= par2; i++) {
//         array.push(i)
//     }
//     console.log(array)
// }
// salam(1,5)