const urlCadUsu = 'http://localhost:8081/rota-users/add/';
const base_url = 'http://localhost:5500/';
let movie;

//Cadastrar usuario
function cadUsuario() {
    const nickname = $("#usuario").val();
    const email = $("#email").val();
    const password = $("#password").val();

    // const body = `{
    //     "nick":"${nickname}",
    //     "email":"${email}",
    //     "pwd":"${password}"
    // }`;

    const body = {
        "nick": nickname,
        "email": email,
        "pwd": password
    };

    $.ajax({
        type: "POST",
        url: urlCadUsu,
        data: body,
        success: (res) => {
            console.log('post done.');
            window.location.href = ../index.html;
        },
        contentType: "application/json",
        dataType: "json"
    });
}



