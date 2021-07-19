const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {nome, email};
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    let content = document.getElementById('content');
    let carregando = '<p>carregando...</p>';
    let ready = '<p>E-mail cadastrado com sucesso, breve você receberá o cupom em seu e-mail.</p>';

    content.innerHTML = carregando;

    setTimeout(() =>
    {
        content.innerHTML = ready
    }, 1000)
})