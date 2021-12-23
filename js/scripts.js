// Task 1
    // function quotient(n1, n2, n3) {
    //     if (arguments[2] === undefined) {
    //         console.log("Задано менее 3-х параметров");
    //     } else if ((!Zero()) && (!numUndefined())) {
    //         console.log((n1 - n2)/n3);
    //     } else if (numUndefined()){
    //         console.log("Не числовое выражение");
    //     } else if (Zero()) {
    //         console.log("На ноль делить нельзя");
    //     }
    //     function Zero() {
    //         if (n3 == 0) {
    //             return true;
    //         }
    //         return false;
    //     }
    //     function numUndefined() {
    //         if((+n1 !== n1) || (+n2 !== n2) || (+n3 !== n3)) {
    //             return true;
    //         }
    //         return false;
    //     }
    // }
    //
    // quotient(3,1,2);
// Task 2
    // function cubeSquare(n1) {
    //     let result = []; 
    //     result.push(Math.pow(n1, 2));
    //     result.push(Math.pow(n1, 3));
    //     return result;
    // }

    // console.log(cubeSquare(5));
// Task 3
    // function min(a, b) {
    //     if (a>b) {
    //         return b;
    //     } else if (a<b){
    //         return a;
    //     } else {
    //         return "Числа равны";
    //     }
    // }

    // function max(a,b) {
    //     if (a>b) {
    //         return a; 
    //     } else if (a<b){
    //         return b;
    //     } else {
    //         return "Числа равны";
    //     }
    // }

    // console.log(max(2,4), min(3,7));
// Task 4
    // function getArr() {
    //     let arrRange = [];
    //     let arr = [];
    //     let flag = 0;
    //     for (let i = 0; i <= 1; i++) {
    //          arrRange[i] = +prompt("Введите диапазон значений от a до b");
    //     }
    //     let a = arrRange[0];
    //     let b = arrRange[1];
    //     if (a >= b) {
    //         flag = "Не верно задан диапазон значений";
    //         return flag;
    //     } else {
    //         for (let i = a; i <= b; i++) {
    //             arr.push(i); 
    //         }
    //         if (flag != 1) {
    //         return arr;
    //         } 
    //     }
    // }

    // function showArr() {
    //     console.log(getArr());

    // }

    // showArr();
// Task 5
    // function isEven(integerNum) {
    //     if(!Number.isInteger(integerNum)) {
    //         return "число не целое";
    //     } else if(integerNum % 2 == 0){ 
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // console.log(isEven(4));
// Task 6
    // function getEvenArr(integerArr) {
    //     let newArr = [];
    //     for (let i = 0; i < integerArr.length; i++) {
    //         if ((isEven(integerArr[i])) && (typeof isEven(integerArr[i]) !== 'string')) {
    //             newArr.push(integerArr[i]);
    //         } else if (typeof isEven(integerArr[i]) === 'string') {
    //             return "число в массиве не целое";
    //         }
    //     }
    //     return newArr;
    // }

    // console.log(getEvenArr([1,2,4,4,5,6,34,8]));
// Task 7
    // document.write("Задача 7 <br /\>");
    //     function pyramid(arr) {
    //         let param = prompt('Введите необходимое количество рядов', [9]);
    //         if (+param !== +param) {
    //             for (let i = 1; i <= 9; i++) {
    //                 arr[i] = [];
    //                 for (let j = 1; j <= i; j++) {
    //                     arr[i][j] = param;
    //                     document.write(arr[i][j]);
    //                 }
    //                 document.write("<br /\>");
    //             } 
    //         } else { 
    //             for (let i = 1; i <= param; i++) {
    //                 arr[i] = [];
    //                 for (let j = 1; j <= i; j++) {
    //                     arr[i][j] = j;
    //                     document.write(arr[i][j]);
    //                 }
    //                 document.write("<br /\>");
    //             }
    //         }
    //     document.write("<br /\>");
    //     }

    //     pyramid([1,2,3,4,5,6,7,8,9]);
// Task 8 #1
// document.write("Задача 8 Вариант 1 <br /\>");
// let h = prompt("Введите высоту треугольника:");
//     arrT11 = [];    
//     arrT12 = [];

//     for (let i = 0; i < h ; i++) {
//         arrT11[i] = [];
//         arrT12[i] = [];
        
//         for (let j = 0 + i; j < h*2 - 1 - i; j++){
//             arrT11[i][j] = "^";
//         }

//         for (let a = 0; a < h*2 - 1; a++){
//             if (!!!arrT11[i][a]) {
//                 arrT11[i][a] = "<span style='color:white'>^</span>";
//             }
            
//             document.write(arrT11[i][a]);
//         }

//         document.write("<span style='color:white'>^^^^^</span>");

//             for (let j = h*2 - 1 - h + i ; j >= h - 1 - i; j--) {
//                     arrT12[i][j] = "^";
//                     console.log(i, j);
//                 }

//                 for (let a = 0; a < h*2 - 1; a++){
//                     if (!!!arrT12[i][a]) {
//                         arrT12[i][a] = "<span style='color:white'>^</span>";
//                     }
                    
//                     document.write(arrT12[i][a]);
//                 }

//         document.write("<br /\>");
//     }

// Task 8 #2
// document.write("<span style='color:red'>Задача 8 Вариант 2</span> <br /\>");
// let h2 = prompt("Введите высоту треугольника:");
//     arrT11 = [];    
    
//     for (let i = 0; i < h ; i++) {
//         arrT11[i] = [];
        
//         for (let j = 0 + i; j < h*2 - 1 - i; j++){
//             arrT11[i][j] = "<span style='color:red'>^</span>";
//         }

//         for (let a = 0; a < h*2 - 1; a++){
//             if (!!!arrT11[i][a]) {
//                 arrT11[i][a] = "<span style='color:white'>^</span>";
//             }
            
//             document.write(arrT11[i][a]);
//         }

//         document.write("<br /\>");
//     }
//     arrT11.reverse();
//     for (let i = 0; i < h ; i++) {
//         for (let j = 0 ; j < h*2 - 1; j++) {
//             document.write(arrT11[i][j]);
//         }

//         document.write("<br /\>");
//     }
// Task 9
    // function fibonachi() {
    //     let fArr = [];
    //         nF = 1000;
    //      for (let i = 0; i < 20; i++) {
    //         if (i == 0) {
    //             fArr[i] = i;
    //         } else if (i == 1) {
    //             fArr[i] = i;
    //         } else if (fArr[i-1] + fArr[i-2] > nF) {
    //             break;
    //         } else {
    //             fArr.push(fArr[i-1] + fArr[i-2]);
    //             }
    //     }
        
    //     return fArr;
    // }

    // console.log(fibonachi());
// Task 10
    // function recursion(number) {
    //     let numberStr;
    //         sum = 0;
    //         numberArr = [];
    //         numberStr = number + ""; 
    //         numberArrStr = numberStr.split('');     
    //         numberArr = numberArr = numberArrStr.map(j=>Number(j));
    //     for (let i = 0; i < numberArr.length; i++) {
    //         sum += numberArr[i]; 
    //     }
    //     if (sum > 9) {
    //         number = sum;
    //         console.log("Новое число: ", number);
    //         recursion(number);
    //     } else {
    //         console.log("Сумма цифр чиcла", number, ":",  sum);
    //     }
    // }

    // recursion(99873487);
// Task 11
    // function recursionArr(arr) {
    //     console.log(arr[i]);
    //     i++;

    //     if (i < arr.length) {
    //         recursionArr(arr);
    //     }
    // }
    // let i = 0;
    // recursionArr([1,2,3,4,5]);
// Task 12
    // function getData() {
    //     let name = prompt("Имя:");
    //         surname = prompt("Фамилия:");
    //         patronymic = prompt("Отчество:");
    //         numGroup = prompt("Номер группы:");
    //         dataDisp = [];
    //     let arrDisp;
    //     let addS = [];
    //     let addStr = [];

    //         dataDisp.push("Домашняя работа: \"Функции\"");
    //         dataDisp.push("Выполнил: студент гр." + numGroup);
    //         dataDisp.push(name + " " + surname + " " + patronymic);
    //         let longStr = dataDisp[0].length; 
    //         for (let i = 1; i < dataDisp.length; i++) {
    //             console.log(dataDisp[i].length);     
    //             if (longStr <= dataDisp[i].length) {
    //                 longStr = dataDisp[i].length;
                    
    //             }
    //         }
                
    //         for (let i = 0; i < dataDisp.length; i++) { 
    //             if (longStr >= dataDisp[i].length) {
    //                 qoutient = longStr - dataDisp[i].length;
    //                 for (let j = 0; j < qoutient; j++) {
    //                     str = "<span style='color:white'>*</span>"
    //                     addS.push(str);
    //                 }
    //                 addStr[i] = addS.join('');
    //             }
    //         }

    //         for (let i = 0; i < dataDisp.length; i++) {
    //             dataDisp[i] = "*" + dataDisp[i] + addStr[i] + "*";
    //             }
      
    //         arrDisp = Array(longStr).fill('*');
    //         dataDisp.unshift(arrDisp.join(''));
    //         dataDisp.push(arrDisp.join(''));
    //         for (let i = 0; i < 5; i++) {
    //            document.write(dataDisp[i] + "<br \/>");
    //         }
 
    // }

    // getData();










    

