// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.

// function convertToUpper(sentence) {
//   let letters = sentence.split("");
//   let string = "";
//   for (let i = 0; i < letters.length; i++) {
//     string+=letters[i].toUpperCase()
//   }
//   console.log(string);
// }
// convertToUpper("italy is the best country")

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// function reverse(sentence) {
//   console.log(sentence.split("").reverse().join(""));
// }
// reverse("she loves travelling")

// # Arrayi , azdan coxa düzün.

// let array = [12, 56, 96, 47, 65, 15, 20, 5];
// array.sort((a, b) => a - b);
// console.log(array);

// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın

// function longest(sentence){
//     let words = sentence.split(" ")
//     let long = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length > long.length ){
//             long= words[i]
//         }
        
//     }    
//     console.log(long);
    
// }

// longest("i love swimming")

// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase 
// edilmiş şəkildə qaytaran bir funksiya yazın.

// function replace(sentence, letter1, letter2){
//     let new_str = sentence.toLowerCase().replaceAll("o", "u");
//     console.log(new_str);
    
// }

// replace("coding")

// ARRAY METHODS

// #1.add 'Meat' in the beginning of your shopping cart if it has not 
// been already added

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// function meat(){
//     if(!shoppingCart.includes("meat")){
//         shoppingCart.unshift("meat")
//     }
//     console.log(shoppingCart);   
// }
// meat();

// #2. add Sugar at the end of you shopping cart if it has not been 
// already added

// function sugar(){
//     if(!shoppingCart.includes("sugar")){
//         shoppingCart.push("sugar")
//     }
//     console.log(shoppingCart);   
// }
// sugar();

// #4. modify Tea to 'Green Tea'

// function tea() {
//     let shopping_str = shoppingCart.join(" ")
//     console.log(shopping_str.replaceAll("Tea", "GreenTea").split(" "));

// }
// tea();

// 2) 
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
//   #Reverse countries array using reverse() method

// function reverseco(){
//     countries.reverse();
//     console.log(countries); 
// }
// reverseco();

// #remove "Canada" and "Denmark", and add "Azerbaijan

// function remove(){
//     countries.splice(2, 2, "Azerbaijan");
//     console.log(countries);  
// }
// remove()

// 3) #Concatenate the following two variables and store it in a 
// fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// function connect(){
//     let fullStack = frontEnd.concat(backEnd)
//     console.log(fullStack);    
// }
// connect()


// 4) #Slice out the first 3 companies from the array

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// function slicecomp(){
//     const three = itCompanies.slice(0, 3);
//     console.log(three);    
// }
// slicecomp()

// #Slice out the last 3 companies from the array

// function slice_last_three(){
//     const last_three = itCompanies.slice(-3);
//     console.log(last_three);   
// }
// slice_last_three()

// #Slice out the middle IT company or companies from the array

// function company_slice_middle(){
//     if (itCompanies.length % 2 == 0){
//         console.log(itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1));
        
//     }
//     else if (itCompanies.length % 2 != 0){
//         console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2 +1)));
        
//     }    
// }
// company_slice_middle()

// #Sort companies array using sort() method

// function sortcomp(){
//     itCompanies.sort()
//     console.log(itCompanies);   
// }
// sortcomp()

// #Change each company name to uppercase one by one and print them out

// function upper_case(){
//     let array = [];
//     for (let i = 0; i < itCompanies.length; i++) {
//         let str = ""
//         for (let j = 0; j < itCompanies[i].length; j++) {
//             str+=itCompanies[i][j].toUpperCase()
//         }
//         array.push(str)
//     }
//     console.log(array);  
// }
// upper_case()

// #Check if a "Google" company exists in the itCompanies array. If it exist 
// return the company else return a company is not found

// function existence(){
//     if(itCompanies.includes("Google"))
//         console.log("Google");
//     else{
//         console.log("Company not found.");   
//     }
// }
// existence()

// #Filter out companies which have more than one 'o' without the filter method

// function filter(){
//     for (let i = 0; i < itCompanies.length; i++) {
//         if(itCompanies[i].toLowerCase().includes("o")){

//             if(itCompanies[i].toLowerCase().indexOf('o') == itCompanies[i].toLowerCase().lastIndexOf('o')){
//                 console.log(itCompanies[i]);
                
//             }
//         }   
//     }
// }
// filter()

// 5) Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul 
// edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini 
// birleshdirib bir string olaraq return etmelidir. 

// function union(array1, array2, char){
//     let array = array1.concat(array2);
//     let array_str = array.join("*")
//     console.log(array_str);
    
// }
// union([7,13,4,7], [8,5,1,9])

