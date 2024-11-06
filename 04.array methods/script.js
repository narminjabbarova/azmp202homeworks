let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

  // 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
//   const startT = arr.filter((element) => {
//     return element.name.startsWith("t");
//   });
  
//   console.log(startT);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// let count = 0
// const tcount = arr.forEach((objects)=>{
//     if(objects.name.startsWith("t") && objects.name.endsWith("t")){
//         count++;
//     }
// });
// console.log(count);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin 
// keylerinin cemini tapin
// let key = 0;
// const tkey = arr.forEach((objects)=>{
//     if(objects.name.startsWith("t") && objects.name.endsWith("t")){
//         key+=objects.key;
//     }
// });
// console.log(key);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini 
// "SuperDev" sozu ile evezleyin.
// arr.forEach((words)=>{
//     if(words.name.endsWith("e")){
//         words.name = "SuperDev";
//     }
// })
// console.log(arr);

// 5) "name"-i en uzun olan obyekti tapin
// let longest= arr[0]; 
// arr.forEach((longword)=>{
//     if (longword.name.length > longest.name.length){
//         longest = longword;
//     }

// })
// console.log(longest);

// 6) "name"-i en uzun olan obyektin key'ni tapin
// let longest= arr[0]; 
// arr.forEach((longword)=>{
//     if (longword.name.length > longest.name.length){
//         longest = longword;
//     }

// })
// console.log(longest.key);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let longindex = 0;
// arr.forEach((object, index)=>{
//     if(object.name.length> arr[longindex].name.length){
//         longindex = index
//     }
// })
// let square = longindex**2
// console.log(square);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
// const namelength = arr.filter((objects)=>{
//     if(objects.name.length === 4){
//         return objects
//     }
// })
// console.log(namelength);

// 9)  en boyuk "key"i olan obyektin "name"-i ni tapin
// let biggestkey= arr[0]; 
// arr.forEach((object)=>{
//     if (object.key > biggestkey.key){
//         biggestkey = object;
//     }

// })
// console.log(biggestkey.name);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.
// const twol = arr.filter((objects)=>{
//     const ll_letter = objects.name.split('l').length - 1;
//     return ll_letter === 2;
// });
// console.log(twol);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
// const twot = arr.filter((objects)=>{
//     const tt_letter = objects.name.split('t').length - 1;
//     return tt_letter === 2;
// });
// console.log(twot);

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
// const lobjects = arr.filter((objects)=>{
//     return objects.key>10 && objects.name.startsWith("l")
// })
// console.log(lobjects);





  