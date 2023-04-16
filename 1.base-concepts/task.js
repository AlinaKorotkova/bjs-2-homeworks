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
