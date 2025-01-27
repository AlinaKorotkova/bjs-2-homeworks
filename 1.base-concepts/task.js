"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = (b ** 2) - (4 * a * c);
       if (D < 0) {
            arr.push();
       } else if (D == 0) {
          let quadraticRoots = -b/(2*a);
              arr.push(quadraticRoots);
       } else if (D > 0){
    let tmp = [];
          let firstRoot = (-b + Math.sqrt(D)) / (2 * a);
          let secondRoot = (-b - Math.sqrt(D)) / (2 * a);
               arr.push(firstRoot, secondRoot);
  }
   return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let totalAmount;
   let percentTest = Number(percent);
   let contributionTest = Number(contribution);
   let amountTest = Number(amount);
       if (percentTest != Number(percent)){
           return false ;	
   } else if (contributionTest != Number(contribution)){
          return false; 
   } else if (amountTest != Number(amount)){
          return false; 
   }
     else {
         let P = ((percent / 12) / 100);
         let S = amount - contribution;
         let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
       
         return Number(parseFloat(payment * countMonths).toFixed(2))
      };
     }

console.log(calculateTotalMortgage(10, 0, 20000, 24))


