const url = 'http://localhost:8081/rota-users';

// Autenticar usuário
function authUsu() {
    const email = $("#email").val();
    const password = $("#pwd").val();

    // JSON que a API precisa
    const body = JSON.stringify({
        email: email,
        pwd: password
    });

    $.ajax({
        url: url + "/auth",
        method: "POST",
        data: body,
        success: function (res) {
            console.log('post done.');
            // Salva o JSON retornado no localStorage
            const response = $.parseJSON(res);
            localStorage.setItem("userId", response.id_user);
            localStorage.setItem("userEmail", response.email);
            localStorage.setItem("userNick", response.nick);
            window.location.href = '../views/home.html';
        },
        error: function (error) {
            console.log('Error:', error);
        },
        contentType: "application/json"
    });
}
