        class UserRegistered {
            constructor(userName, userPassword, userRealName, userCountry) {
                this.userName = userName;
                this.userPassword = userPassword;
                this.userRealName = userRealName;
                this.userCountry = userCountry;

            }

            userSaludo(){
                console.log(`Hola soy el usuario ${this.userName}!`)
            }
        }

        //Tomando los elementos html
        const showUserCount = document.getElementById('userCount')
        const listUserRegistered = document.getElementById('listUsersRegistered')

        //Reacciones de los botones al evento submit
        const formUsers = document.getElementById('formUsers')
        formUsers.addEventListener('submit', (e) => {
            event.preventDefault()
            register()
        } )


        const showUsers = document.getElementById('showUsers')
        showUsers.addEventListener('submit', (e ) => {
            event.preventDefault()
            imprimeLocal()
        } )



        //la puse global a ver si funcinoa
        let userRegister = JSON.parse(localStorage.getItem('userDB'))
        if(!userRegister){
            userRegister = []
        }


        //para que los muestre al iniciar

        const showExistUsers = () => {
            for(let i = 0; i < userRegister.length; i++){
                let itemUser = document.createElement('li')
                itemUser.textContent = userRegister[i].userName
                listUserRegistered.appendChild(itemUser)
            }
        }

        //para que los muestre al iniciar
        showExistUsers()

        showUserCount.textContent = userRegister.length



        const register = () => {
            // let userRegister = JSON.parse(localStorage.getItem('userDB'))



            const name = names.value;
            const country = countrys.value;
            const userName = userNames.value;
            const userpass = userPasss.value;

            let userRegistering = new UserRegistered(name, country, userName, userpass)

            userRegister.push(userRegistering)
            
            localStorage.setItem('userDB',JSON.stringify(userRegister))

            alert(`Gracias ${name} por registrarte! revisa tu casilla de correo ;-)`)

            countrys.value='';
            userNames.value='';
            userPasss.value='';
            names.value ='';

            //para mostrar en caliente
            let itemUser = document.createElement('li')
            itemUser.textContent = userName
            listUserRegistered.appendChild(itemUser)


            showUserCount.textContent = userRegister.length

        }

        const imprimeLocal = () => {
            let estiloActual = listUserRegistered.style.display
            if (estiloActual === 'block') {
                listUserRegistered.style.display = 'none'
            } else {
                listUserRegistered.style.display = 'block'
            }
        }


