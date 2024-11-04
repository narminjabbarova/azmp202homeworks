// 1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. 
// Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib 
// function-a göndərin

// function exponent (){
//     let number1 = prompt("enter the 1st number: ");
//     let number2 = prompt("enter the 2nd number: ")
//     alert (number1**number2);
    
// }
// exponent();

// 2.Bir funksiya yazın, 3 parametr qəbul etsin.Birincisi array olsun
//  ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
//   3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.
//   Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.


// function accept (array, index1, index2){
//     const number = array[index1];
//     array[number] = array[index2];
//     array[index2] = number;
//     console.log(array);
    
// }
// accept([5,7,12,4,9], 2, 1)

// 3.Daxil edilən arraydə təkrarlanan elementi silən və 
// yeni array qaytaran funksiya yazın.


//5. Daxil edilən iki arrayi birləşdirən funksiya yazın.

// function connect(array1, array2) {
//     let output = [];
//     for (let i = 0; i < array1.length; i++) {
//         output.push(array1[i])
//     }
//     for (let i = 0; i < array2.length; i++) {
//         output.push(array2[i])
//     }
//     console.log(output);
    
// }
// connect([2,8,9,2,3,4], [7,5,3,9,5,2,3])

// 6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.

// function calc(sentence) {
//     let count = 1;
//     for (let i = 0; i < sentence.length; i++) {
//         if(sentence[i] ==" "){
//             count++
//         }
//     }
// }
// calc("the tasks are very difficult")

// 7. Function language. Parametr qəbul etsin və bu parametr bir 
// array (ədədlərdən ibraət array) olsun. Funksiya həmin arrayin 
// medianını tapsın.Median ən ortada dayanan ədədi bildirir. 
// Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin 
// yarısı median olacaqdır.

// function median(array) {
  
//         if(array.length %2 !=0){
//             console.log(array[Math.floor(array.length/2)]);
            
//         }
//         else if(array.length %2 ==0){
//             console.log((array[array.length/2]+ array[(array.length/2) - 1]) /2);
            
//         }
    
// }
// median([7,9,4,12,5,8])


// 9. Bir string ve bir char qebul eden bir function yazın.Əgər daxil
// olunmuş char string-də varsa char-ın yerləşdiyi indekslərin
// cəmini, yoxdursa - 1 return etsin. Məsələn salam və 'a' daxil
// olunarsa output 1+3=4 olmalıdır.

// function sum(word, letter) {
//     let result = 0;
//     for (let i = 0; i < word.length; i++) {
//         if(letter == word[i].toLowerCase()){
//             result+=i;
//         }
//     }
//     console.log(result);
    
// }
// sum("Narmin", "n")

// 10.countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük 
// olmalıdır) yeni arrayda yığın.

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// function countriess() {
//     let new_array = [];
//     for (let i = 0; i < countries.length; i++) {
//         let string = ""
//         for (let j = 0; j < 3; j++) {
//             string+=(countries[i][j].toUpperCase())
//         }
//         new_array.push(string)
//     }
//     console.log(new_array);
    
// }
// countriess()

// 11. Write a JavaScript program(function) that accepts a string as
// input and swaps the case of each character. For example, if you 
// input 'The Quick Brown Fox' the output should be 
// 'tHE qUICK bROWN fOX'

// function change(sentence) {
//     let result = ""
//  for (let i = 0; i < sentence.length; i++) {
//     if(sentence[i] == sentence[i].toUpperCase()){
//         result+=sentence[i].toLowerCase()
//     }
//     else if(sentence[i] == sentence[i].toLowerCase()){
//         result+=sentence[i].toUpperCase()
//     }
//  } 
//  console.log(result);
   
// }
// change("I Am TiReD")


