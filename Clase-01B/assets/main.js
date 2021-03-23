let bankUser = prompt("Bienvenido a CoderBANK \nIngese su usuario: ");

console.log(bankUser);

switch (bankUser) {
  case "user1":
    intento = 1;
    saldoInicial = 4500;
    do {
      typePass = parseInt(prompt("Por favor ingrese su clave de acceso: "));
      if (typePass === 1234) {
        userResp = parseInt(
          prompt(
            `Bienvenido ${bankUser.toUpperCase()}\nPresione:\n1 CONSULTA DE SALDO\n2 EXTRACCION`
          )
        );
        if (userResp === 1) {
          userResp2 = parseInt(
            prompt(
              `Su saldo disponible para operar es de $ ${saldoInicial}\nPresione:\n1 para realizar una EXTRACCION\n2 Para salir`
            )
          );
          if (userResp2 === 1) {
            userResp3 = parseInt(
              prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
            );
            alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          } else {
            break;
          }
        } else {
          userResp3 = parseInt(
            prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
          );
          alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          break;
        }
      } else {
        intento++;
      }
    } while (intento <= 3);

    alert(
      "GRACIAS por operar con CoderBANK!\nPROXIMAS CLASES AGREGAREMOS MAS FUNCIONALIDADES!!!"
    );
    break;
  case "user2":
    intento = 1;
    saldoInicial = 5700;
    do {
      typePass = parseInt(prompt("Por favor ingrese su clave de acceso: "));
      if (typePass === 4567) {
        userResp = parseInt(
          prompt(
            `Bienvenido ${bankUser.toUpperCase()}\nPresione:\n1 CONSULTA DE SALDO\n2 EXTRACCION`
          )
        );
        if (userResp === 1) {
          userResp2 = parseInt(
            prompt(
              `Su saldo disponible para operar es de $ ${saldoInicial}\nPresione:\n1 para realizar una EXTRACCION\n2 Para salir`
            )
          );
          if (userResp2 === 1) {
            userResp3 = parseInt(
              prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
            );
            alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          } else {
            break;
          }
        } else {
          userResp3 = parseInt(
            prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
          );
          alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          break;
        }
      } else {
        intento++;
      }
    } while (intento <= 3);

    alert(
      "GRACIAS por operar con CoderBANK!\nPROXIMAS CLASES AGREGAREMOS MAS FUNCIONALIDADES!!!"
    );
    break;
  case "user3":
    intento = 1;
    saldoInicial = 400;
    do {
      typePass = parseInt(prompt("Por favor ingrese su clave de acceso: "));
      if (typePass === 7895) {
        userResp = parseInt(
          prompt(
            `Bienvenido ${bankUser.toUpperCase()}\nPresione:\n1 CONSULTA DE SALDO\n2 EXTRACCION`
          )
        );
        if (userResp === 1) {
          userResp2 = parseInt(
            prompt(
              `Su saldo disponible para operar es de $ ${saldoInicial}\nPresione:\n1 para realizar una EXTRACCION\n2 Para salir`
            )
          );
          if (userResp2 === 1) {
            userResp3 = parseInt(
              prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
            );
            alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          } else {
            break;
          }
        } else {
          userResp3 = parseInt(
            prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
          );
          alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          break;
        }
      } else {
        intento++;
      }
    } while (intento <= 3);

    alert(
      "GRACIAS por operar con CoderBANK!\nPROXIMAS CLASES AGREGAREMOS MAS FUNCIONALIDADES!!!"
    );
    break;
  case "user4":
    intento = 1;
    saldoInicial = -500;
    do {
      typePass = parseInt(prompt("Por favor ingrese su clave de acceso: "));
      if (typePass === 8523) {
        userResp = parseInt(
          prompt(
            `Bienvenido ${bankUser.toUpperCase()}\nPresione:\n1 CONSULTA DE SALDO\n2 EXTRACCION`
          )
        );
        if (userResp === 1) {
          userResp2 = parseInt(
            prompt(
              `Su saldo disponible para operar es de $ ${saldoInicial}\nPresione:\n1 para realizar una EXTRACCION\n2 Para salir`
            )
          );
          if (userResp2 === 1) {
            userResp3 = parseInt(
              prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
            );
            alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          } else {
            break;
          }
        } else {
          userResp3 = parseInt(
            prompt("Ingrese el monto que desea retirar (sin puntos ni comas)")
          );
          alert(`Su nuevo SALDO es de $ ${saldoInicial - userResp3}`);
          break;
        }
      } else {
        intento++;
      }
    } while (intento <= 3);

    alert(
      "GRACIAS por operar con CoderBANK!\nPROXIMAS CLASES AGREGAREMOS MAS FUNCIONALIDADES!!!"
    );
    break;
  default:
    alert(
      "USUARIO no encontrado! Por favor recargue la pagina y vuelva a intentarlo"
    );
}
