// 1 a) Print odd numbers in an array (anonymous function)
// const anonynousFunc= function(arrays) {
//     for (let i=0; i<arrays.length ;i++) {
//         // console.log(i)
//         if (arrays[i] % 2 != 0) {
//             console.log(arrays[i]) 
//         } 
//     }
// }
// anonynousFunc([1,2,3,4,5,6,7,8,9])

//1 a) Print odd numbers in an array (IIFE)
// (function (arrays) {
//     for (let i=0; i<arrays.length ;i++) {
//         // console.log(i)
//         if (arrays[i] % 2 != 0) {
//             console.log(arrays[i]) 
//         } 
//     }
// }
// ([1,2,3,4,5,6,7,8,9])) 
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1 b) Convert all the strings to title caps in a string array (anonymous function)
// let a=""
// let titleCaps = function (strings){
//     strings = strings.toLowerCase().split(' ')
    
//     for (let i=0 ;i< strings.length;i++){
//         let one =strings[i].split('')
//         let two =one[0].toUpperCase() + strings[i].slice(1)
//         a += two + " "
        
// }
// console.log(a)
// }
// titleCaps("jAlla bullA jungGu")

// //1 b) Convert all the strings to title caps in a string array (IIFE)

// (function (strings){
//     let a=""
//     strings = strings.toLowerCase().split(' ')
    
//     for (let i=0 ;i< strings.length;i++){
//         let one =strings[i].split('')
//         let two =one[0].toUpperCase() + strings[i].slice(1)
//         a += two + " "
        
// }
// console.log(a)
// }
// ) ("jAlla bullA jungGu")

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1 c)Sum of all numbers in an array (Anonymous Fn)
// var a=0
// const anonynousFunc= function(arrays) {
    
//         for (let i=0; i<arrays.length ;i++) {
//             a = a + arrays[i]
            
//         }
//         console.log(a)
//     }
//     anonynousFunc([1,2,3,4,5,6,7,8,9,10,11])

// 1 c) Sum of all numbers in an array(IIFE)

// (function (arrays) {
//     var a=0
//         for (let i=0; i<arrays.length ;i++) {
//             a = a + arrays[i]
            
//         }
//         console.log(a)
//     })
//     ([1,2,3,4,5,6,7,8,9,10,11]) 
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1 d)Return all the prime numbers in an array (anonymous fn)
// let arr=[]
// const anonynousFunc= function(arrays) {
//     for (let i=0; i<arrays.length ;i++) {
//         if (arrays[i]%2 !=0) {
//             let arrPush= arr.push(arrays[i])
//             return arrPush
            
            
//         }
        
//     } 
    
// }

// console.log(anonynousFunc([1,2,3,4,5,6,7,8,9]))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1 e)Return all the palindromes in an array (anonmyous fn)
// let arr=[]
// let anonynousFunc = function (palindrome) {
    
//     for (i=0;i<palindrome.length;i++) {
//         let splitting =palindrome[i].split("")
//         let reversing =splitting.reverse()
//         let joining = reversing.join("")
//         if (palindrome[i]==joining) {
//              arr.push(palindrome[i])
           
//         } 
//     }
//         console.log(arr)

// }
// anonynousFunc(["coc" ,"marker","baloon","dad","civic"])


//1 e) Return all the palindromes in an array (iife)
// let palindrome=["coc" ,"marker","baloon","dad","civic"] ;

// (function (palindrome) {
//     let arr=[]
//     for (i=0;i<palindrome.length;i++) {
        
//         let splitting =palindrome[i].split("")
//         let reversing =splitting.reverse()
//         let joining = reversing.join("")
//         if (palindrome[i]==joining) {
//              arr.push(palindrome[i])
           
//         } 
//     }
//     console.log(arr);
// }) (palindrome)

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1 g) Remove duplicates from an array (anonymous fn)

// let arr = ["banana", "watermelon","apple", "banana", "watermelon", "mango"];
// let anonynousFunc = function() {
//     let emptyArr=[]
//     for(i=0;i<arr.length;i++){
//         if(emptyArr.indexOf(arr[i])===-1){
//             emptyArr.push(arr[i])
//         }
//     } return emptyArr
// }
// console.log(anonynousFunc(arr))

//1 g)Remove duplicates from an array  (iife)
// let arr = ["banana", "watermelon","apple", "banana", "watermelon", "mango"];
// (function() {
//     let emptyArr=[]
//     for(i=0;i<arr.length;i++){
//         if(emptyArr.indexOf(arr[i])===-1){
//             emptyArr.push(arr[i])
//         }
//     } console.log(emptyArr)
// }) (arr) 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ARROW FUNCTIONS
// let arrowFunc = (name) => { 
//     console.log(name)
// } 
// arrowFunc("deva")
//2 a)Print odd numbers in an array
// const anonynousFunc= (arrays) => {
//         for (let i=0; i<arrays.length ;i++) {
//             // console.log(i)
//             if (arrays[i] % 2 != 0) {
//                 console.log(arrays[i]) 
//             } 
//         }
//     }
//     anonynousFunc([1,2,3,4,5,6,7,8,9])
 //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
 //2 b) Convert all the strings to title caps in a string array
 
//  let a=""
//  let titleCaps =  (strings) => {
//      strings = strings.toLowerCase().split(' ')
     
//      for (let i=0 ;i< strings.length;i++){
//          let one =strings[i].split('')
//          let two =one[0].toUpperCase() + strings[i].slice(1)
//          a += two + " "
         
//  }
//  console.log(a)
//  }
//  titleCaps("jAlla bullA jungGu")
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2 c) Sum of all numbers in an array

// var a=0
// const anonynousFunc= (arrays) => {
    
//         for (let i=0; i<arrays.length ;i++) {
//             a = a + arrays[i]
            
//         }
//         console.log(a)
//     }
//     anonynousFunc([1,2,3,4,5,6,7,8,9,10,11])
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2 D) Return all the prime numbers in an array

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//2 e) Return all the palindromes in an array

// let arr=[]
// let anonynousFunc =  (palindrome) => {
    
//     for (i=0;i<palindrome.length;i++) {
//         let splitting =palindrome[i].split("")
//         let reversing =splitting.reverse()
//         let joining = reversing.join("")
//         if (palindrome[i]==joining) {
//              arr.push(palindrome[i])
           
//         } 
//     }
//         console.log(arr)

// }
// anonynousFunc(["coc" ,"marker","baloon","dad","civic"])








