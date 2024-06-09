const form = document.getElementById('form-cadastro');
const user = document.getElementById('nome');
const number = document.getElementById('tel');
const btn = document.querySelector('#form-cadastro button');
const nomes = [];
const contatos = [];

function validaInputs(){
    let aviso = document.querySelector('.aviso');
    form.addEventListener('keyup', function(){
        aviso.style.opacity = '0';
    });

    if(validaNome(user.value) && validaNumero(number.value)){
        btn.disabled = false;
    }else{
        btn.disabled = true;
    };
};

function validaNome(nomeSobrenome){
    const nomeArray = nomeSobrenome.split(' ');
    return nomeArray.length >= 2;
};

function validaNumero(numeroMaxMin){
    const numeroValido = numeroMaxMin.length >= 10 && numeroMaxMin.length <= 15;
    return numeroValido;
};

function validaDados(){
    let erro = document.querySelector('.erro');
    form.addEventListener('keyup', function(){
        aviso.style.opacity = '0';
        erro.style.opacity = '0';
    });

    if(nomes.includes(user.value) || (contatos.includes(number.value))){
        erro.style.opacity = '1';
    }else{
        nomes.push(user.value);
        contatos.push(number.value);
        renderizarTr();
    };
};

function renderizarTr(){
    const corpoTabela = document.getElementById('corpo-tabela');
    let linha = `<tr>
                    <td>${user.value}</td>
                    <td>${number.value}</td>
                </tr>`;

    corpoTabela.innerHTML += linha;
    user.value = '';
    number.value = '';
    validaInputs();
};

form.addEventListener('input', validaInputs);

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaDados();
});

validaInputs();