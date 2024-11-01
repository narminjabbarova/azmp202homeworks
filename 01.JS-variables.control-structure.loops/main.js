// let number = prompt("Zehmet olmasa, 3 reqemli bir eded daxil edin: ");
// let sum = (number[1] + number[2] + number[3]);
// for (let i = 0; i < number.length; i++) {
//     if(number )
// }

// 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// let number = +prompt("ucreqemli eded daxil edin: ");
// let digit3 = number % 10;
// let digit2 = (number % 100 - digit3) / 10;
// let digit1 = (number - number%100)/100;
// let sum = digit1 + digit2 + digit3;
// let multiply = digit1 * digit2 * digit3;
// let average = sum / 3;
// alert(`Ededi orta: ${average}, Cem: ${sum}, Hasil: ${multiply}`);

// 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// let number = +prompt("Eded daxil edin: ");
// for (let i = 0; i <= number; i++) {
//     if(number % i == 0){
//         console.log(i);
        
//     }
    
// }

// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let number = +prompt("Eded daxil edin.");
// let count = 0;

// for (let i = 0; i <= number; i++) {
//     if (number % i == 0) {
//         count++
        
//     }    
// }

// alert(count)

// 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// for (let i = 0; i < 11; i++) {
//     let hasil = i*i
//     console.log(`${i}*${i} = ${hasil}`);
// }

// 5) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// for (let i = 0; i < 11; i++) {
//     let ozu = i
//     let kvadrat = i ** 2
//     let kub = i**3
//     console.log(`${ozu} ${kvadrat} ${kub}`);
// }

// 

// 6) 0 - 100 arası tək ədədlərin və cüt əd ədlərin cəmini tapın
// let oddsum = 0
//  for (let i = 0; i <100; i++) {
//   if  (i%2 == 1){
// oddsum++

// }
// }
// console.log(oddsum);

// let evensum = 0
// for (let i = 0; i <= 100; i++) {
//  if(i%2 == 0){
//    evensum++
// }   
// }
// console.log(evensum);  

// 7) Arraydəki ən böyük və ən kiçik element-ləri tapan alqoritm yazın.
// let  array = [4,2,7,9,3,12,46,32,19];
// let max = array[0];
// let min = array[0];
// for (let i = 0; i < array.length; i++) {   
//     if(array[i]>max){
//         max = array[i];
//     } 
//     else if(array[i]< min){
//         min = array[i];
//     }
// }
// console.log(max, min);



// 8)---------

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// let count = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] == " "){
//         count++
//     }

    
// }

// console.log(count);

// 10.31.2024
// 14. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let array = [12,23,43,54,65,67,89,90,100];
// let number = +prompt("enter number");
// for (let i = 0; i < array.length; i++) {

//     if(array[i]==number){
//         alert("this have ");
//         break;
//     }else{
//         console.log("yoxdu");
//     }
// }

// 15) 

//     const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores : [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ]; 

//   for (let i = 0; i < students.length; i++) {
//     let sum = 0;
//     let average = 0;
//     let score = [];
//     for (let j = 0; j < (students[i].scores).length; j++) {
//       sum+= students[i].scores[j];
//     }

//     average = sum / (students[i].scores).length;
//     console.log(`${students[i].name}, average: ${average}`);

//     if(average > 90){
//         console.log(`${students[i].name}, average: ${average}`);
//     }
    
//   }

//   16) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

//     let string = prompt("enter a word: ");
//     let newstr = "";

//     for (let i = 0; i < string.length; i++) {

//     let char = string[i].toLowerCase();

//     if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
//         newstr += char;
//     }
//    }
//     let isPalindrome = true;
//     for (let i = 0; i < newstr.length / 2; i++) {
//         if (newstr[i] !== newstr[newstr.length - 1 - i]) {
//         isPalindrome = false;
//             break;
//         }
//     }

//     if (isPalindrome) {
//         alert("this string is a palindrome");
//     }     else {
//         alert("this string is not a palindrome");
//     }
