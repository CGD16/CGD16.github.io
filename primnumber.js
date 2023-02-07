const input = document.getElementById("input-number");
const button = document.getElementById("check-button");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const n = input.value;
  const result = checkPrime(n);
  output.innerHTML = result;
});


function checkPrime(n) {
    try {
      if (n <= 0) {
        throw new Error("Zahlen <= 0 sind nicht definiert");
      }
    } catch (error) {
      return error.message;
    }
    const divisors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        divisors.push(i);
      }
    }
    if (divisors.length === 2 && divisors.includes(1) && divisors.includes(n)) {
      return "Primzahl";
    } else if (n === 1) {
      return "Keine Primzahl";
    } else {
      return "Keine Primzahl";
    }
  }
  
