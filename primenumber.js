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
        throw new Error("Zahlen ≤ 0 sind nicht definiert");
      }
    } catch (e) {
      return e.message;
    }
  
    let primeList = [];
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        primeList.push(i);
      }
    }
  
    if (primeList.length == 2 && primeList.includes(1) && primeList.includes(n)) {
      return "Primzahl";
    } else if (n == 1) {
      return "Keine Primzahl";
    } else {
      return "Keine Primzahl, teilbar durch ${primeList.join(", ")}";
    }
  }



