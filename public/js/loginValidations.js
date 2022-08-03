window.onload = function(){
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById('password');
    let form = document.getElementById("form");

    console.log(form)

    // Se capturan los Ul de errores -------------
    let emailErrors = document.getElementById("emailErrors");
    let passwordErrors = document.getElementById('passwordErrors');

    form.addEventListener("submit", (e) => {

    e.preventDefault();

    // Se inicializan los Arr de errores -------------
    let emailErrorsAcu = 0;
    let passwordErrorsAcu = 0;

    // Se definen las validaciones -------------

    // Validaciones de Email
    if (inputEmail.value === "") {
        /* inputEmail.classList.add('control-error') */
        emailErrors.innerHTML = "";
        emailErrors.innerHTML += '<li class="feedback">' + "Debes introducir un email" + '</li>';
        emailErrorsAcu++;
    } else {
        /* inputEmail.classList.remove('control-error') */
        emailErrors.innerHTML = "";
        emailErrorsAcu = 0;
    }

    // Validaciones de Password
    if (inputPassword.value === "") {
        /* inputPassword.classList.add('control-error'); */
        passwordErrors.innerHTML = "";
        passwordErrors.innerHTML += '<li class="feedback">' + "Debes introducir una contraseña" + '</li>';
        passwordErrorsAcu++;
    } else {
        /* inputPassword.classList.remove('control-error') */
        passwordErrors.innerHTML = "";
        passwordErrorsAcu = 0;
    }

    // Se suman los acumuladores de errores ------------------
    let AcuErrors =
        emailErrorsAcu +
        passwordErrorsAcu;


    // Si no hay errores se hace el submit del formulario
    if (AcuErrors === 0) {
        form.submit();
    }

    })
}