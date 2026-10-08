function calculateGrade(score) { 
    if (typeof score !== 'number' && !Number.isFinite(score)) //Numbers in JS are: Infinite, NaN, and finite numbers. This checks if the input is a number and not NaN or Infinite.
        return "Invalid";
    if (score < 0 || score > 100) //check input validation.
        return "Invalid";
    else if (score >= 90)
        return "A";
    else if (score >= 80)
        return "B";
    else if (score >= 70)
        return "C";
    else if (score >= 60)
        return "D";
    else
        return "F";
}

function checkAccess(age, hasTicket) {
    if (typeof age !== 'number' || !Number.isFinite(age)) //check input validation.
        return "Invalid";
    if (typeof hasTicket !== 'boolean') //check input validation.
        return "Invalid";
    if (age >= 18 && hasTicket === true) //check input validation. returning a boolean based on multiple logical criteria.
        return true;
    else
        return false;
}

console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(0));
console.log(calculateGrade(100));
console.log(calculateGrade(54));
console.log(calculateGrade(101));

console.log(checkAccess(18, true));
console.log(checkAccess(17, true));
console.log(checkAccess(18, false));
