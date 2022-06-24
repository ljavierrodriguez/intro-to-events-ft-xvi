let form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    // let { username, password, phone } = evento.target;
    // let { username, password, phone } = form;

    let errors = [];

    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let phone = document.querySelector('#phone');

    let empty = /^$/;
    //let formatPass = /^[a-zA-Z0-9@!+&%*.-_]{8,}$/;
    let formatEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let formatPass = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    let formatPhone = /^\+56\s9\s[0-9]{4}\s[0-9]{4}$/; // +56 9 XXXX XXXX

    if(empty.test(username.value)){
        errors.push({ item: 'username', message: 'El campo no puede estar vacio!', input: username })
    }else if(!formatEmail.test(username.value)){
        errors.push({ item: 'username', message: 'El campo debe ser un email valido!', input: username })
    }else{
        username.classList.remove('is-invalid');
    }

    if(empty.test(password.value)){
        errors.push({ item: 'password', message: 'El campo no puede estar vacio!', input: password })
    }else if(!formatPass.test(password.value)){
        errors.push({ item: 'password', message: 'El campo no cumple el formato dado!', input: password })
    }else{
        password.classList.remove('is-invalid');
    }

    if(empty.test(phone.value)){
        errors.push({ item: 'phone', message: 'El campo no puede estar vacio!', input: phone })
    }else if(!formatPhone.test(phone.value)){
        errors.push({ item: 'phone', message: 'El campo no cumple el formato dado! (+56 9 XXXX XXXX)', input: phone })
    }else{
        phone.classList.remove('is-invalid');
    }

    console.log(errors);
    if(errors.length > 0){
        errors.forEach(({ item, message, input }) => {
            input.classList.add('is-invalid');
            document.querySelector(`.${item}`).innerHTML = message;
        });
    } else {
        form.submit();
    }
});