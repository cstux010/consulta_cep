function limpar() {
    document.getElementById('txtcep').value = ("")
    document.getElementById('res').style.display = 'none';
}

function pesquisacep() {
    let cep = document.getElementById('txtcep').value;
    let a = cep.length;
    cep = cep.replace(/\D/g, '');

    if (a == 0) {
        window.alert('Digite o CEP');
    } 
    else if (a > 0 && a < 8) {
        window.alert('Número de CEP incompleto');
    } 
    else {
        // Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        // Valida o formato do CEP.
        if (validacep.test(cep)) {
            // Cria um elemento javascript.
            let script = document.createElement('script');
            document.getElementById('res').style.display = 'block';

            // Define a URL da API do ViaCEP com o parâmetro de callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            // Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        } else {
            window.alert('CEP inválido');
        }
    }
}

function meu_callback(conteudo) {
    document.getElementById('ncep').textContent = 'CEP: ' + conteudo.cep;
    document.getElementById('end').textContent = 'Endereço: ' + conteudo.logradouro;
    document.getElementById('bair').textContent = 'Bairro: ' + conteudo.bairro;
    document.getElementById('cid').textContent = 'Cidade: ' + conteudo.localidade;
    document.getElementById('est').textContent = 'Estado: ' + conteudo.uf;
}
