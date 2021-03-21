let userName = prompt("Ingrese su nombre por favor: ");

alert(`Hola ${userName.toUpperCase()} te estabamos esperando!`);

let userAge = parseInt(prompt("que edad tienes?"));

if (userAge < 18) {
  alert("Eres joven, te queda un gran camino para aprender");
} else {
  alert("nunca es tarde para aprender!");
}

let userLastName = prompt("y cual es tu apellido? ");

let confirmName = prompt(
  `AAHH entonces tu nombre completo es ${userName.toUpperCase()} ${userLastName.toUpperCase()}?`
);

let date = new Date();

if (
  confirmName.toLowerCase() === "si" ||
  confirmName.toLowerCase() === "yes" ||
  confirmName.toLowerCase() === "true"
) {
  let userResponse = prompt(
    `aaah excelente! y naciste en ${date.getFullYear() - userAge}??`
  );
  if (userResponse) {
    alert(`Viste cuan inteligentes somos las computadoras ${userName}??`);
    alert("GRACIAS por participar de esta encuesta, vuelva prontos");
  }
} else {
  alert(
    "mmmm algo malio sal! por favor recarga la pagina para volver a empezar"
  );
}
