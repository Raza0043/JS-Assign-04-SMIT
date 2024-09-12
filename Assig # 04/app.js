// Question no # 1


// var input = prompt("Enter a character (number or string):");


// var asciCode = input.charCodeAt(0);


// if (asciCode >= 48 && asciCode <= 57)
//      {
   
//     document.write("The input is a number."+" " +asciCode);
// } 
// else if (asciCode >= 65 && asciCode <= 90)
//      {
//     document.write("The input is an uppercase letter.");
// }
//  else if (asciCode >= 97 && asciCode <= 122)
//      {
    
//     document.write("The input is a lowercase letter.");
// }
//  else
//   {
//     document.write("The input is neither a number nor a letter.");
// }

// Question no # 2

// var f_no = prompt("Enter number to display")
// var num1 = parseInt(f_no)
// document.write("The  first number is:"+" " +num1+"<br>")


    

// var s_no = prompt("Enter  second number to display")
// var num2 = parseInt(s_no)
// document.write("The  second number is:"+" " +num2+"<br>")
// if(f_no===s_no)
// {
// document.write("The  both  number is equal:")


// }
// else if(f_no>s_no)
// {
// document.write("The first number is greater than second one.")

// }
// else if(f_no<s_no)
// {

//     document.write("The second number is greater than first one.")
// }


// Question no # 3
// var num = prompt("Enter Number:")
// var num1 = parseInt(num)
// document.write("The given no. is"+" "+ num+"<br>")


// if (num1 > 0) {
//     document.write("The number is Positive.");
// } else if (num1 < 0) {
//     document.write("The number is Negative.");
// } else {
//     document.write("The number is Zero.");
// }

// Question no # 4

// var char = prompt("Enter a character:");  


// char = char.toLowerCase();  


// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
//      {
//     document.write("True - The character is a vowel.");
// }
//  else
//   {
//     document.write("False - The character is not a vowel.");
// }

// Question no # 5
// // a.
// var correctPassword = "aliraza123";

// // b.
// var userPassword = prompt("Please enter your password:");

// // c. 

// // i. 
// if (userPassword === "" || userPassword === null) {
//     document.write("Please enter your password");
// } 
// // ii. 
// else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password.");
// } 
// else {
//     document.write("Incorrect password.");
// }

// Question no # 6

// var greeting;
// var hour = 13;
// if (hour < 18)
//      {
// document.write( "Good day");
// }
// else
// {document.write( "Good evening")
// }

// Question no # 7

// var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
// time = parseInt(time);  

// if (time >= 0 && time <= 2359) {
//     if (time >= 0 && time < 1200) {
    
//         if (time === 0) {
//             document.write("12:00 AM");
//         } else if (time < 1000) {
//             document.write(time.toString().substring(0, 1) + ":" + time.toString().substring(1) + " AM");
//         } else {
//             document.write(time.toString().substring(0, 2) + ":" + time.toString().substring(2) + " AM");
//         }
//     } else if (time >= 1200 && time < 1300) {
       
//         document.write(time.toString().substring(0, 2) + ":" + time.toString().substring(2) + " PM");
//     } else {
        
//         var hours = time - 1200;
//         if (hours < 1000) {
//             document.write(hours.toString().substring(0, 1) + ":" + time.toString().substring(2) + " PM");
//         } else {
//             document.write(hours.toString().substring(0, 2) + ":" + time.toString().substring(2) + " PM");
//         }
//     }
// } else {
    
//     document.write("Invalid time input.");
// }


