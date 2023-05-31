const high_school = grades => grades >= 7 ? "Passed" : "Failed";

const grades = {
    Mark: 8,
    John: 9,
    Alex: 5,
    Karen: 10,
    Kattie: 6,
    James: 7
}


console.log(`Mark you`, high_school(grades["Mark"]));
console.log(`John you`, high_school(grades["John"]));
console.log(`Alex you`, high_school(grades["Alex"]));
console.log(`Karen you`, high_school(grades["Karen"]));
console.log(`Kattie you`, high_school(grades["Kattie"]));
console.log(`James you`, high_school(grades["James"]));