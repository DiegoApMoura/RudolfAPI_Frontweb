function salvarAnaliseS01() {
    var umidade = $("#umidadeS01").val();
    var perca = $("#percaS01").val();

    if (umidade != null && umidade.trim() != '' && perca != null && perca.trim() != '') {


        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:8000/secador01/salvar");
        xhr.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    console.log(JSON.parse(xhr.responseText));
                    alert("Análise Secador 01 cadastrada com sucesso!")


                }
                else if (this.status == 201) {
                    alert("Análise Secador 01 cadastrada com sucesso!")

                }

                else {
                    console.log(xhr.responseText);
                    var erro = xhr.responseText;
                    alert("Erro ao salvar: " + erro);
                }
            }
        }
        xhr.send(JSON.stringify({ umidade: umidade, perca: perca }));
    } else { alert("Todos os campos devem ser preenchidos!") }
};

function salvarAnaliseS02() {
    var umidade = $("#umidadeS02").val();
    var perca = $("#percaS02").val();

    if (umidade != null && umidade.trim() != '' && perca != null && perca.trim() != '') {


        let xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:8000/secador02/salvarS02");
        xhr.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    console.log(JSON.parse(xhr.responseText));
                    alert("Análise Secador 02 cadastrada com sucesso!")


                }
                else if (this.status == 201) {
                    alert("Análise Secador 02 cadastrada com sucesso!")

                }

                else {
                    console.log(xhr.responseText);
                    var erro = xhr.responseText;
                    alert("Erro ao salvar: " + erro);
                }
            }
        }
        xhr.send(JSON.stringify({ umidade: umidade, perca: perca }));
    } else { alert("Todos os campos devem ser preenchidos!") }
};

function buscarAnaliseS01() {

    var data = $('#analiseBusca').val();
    $('#tbody').html('');



    $.ajax({
        method: 'GET',
        url: 'http://localhost:8000/secador01/buscaData',
        data: "data=" + data

    }).fail(function (xhr, status, errorThrown) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
    }).done(function (resposta) {

        console.log(data);
        console.log(resposta);

        for (let index = 0; index < resposta.length; index++) {

            

            $('#tbody').append(`
                 <tr>
                     <td>${resposta[index].id}</td>
                     <td>${resposta[index].umidade}</td>
                     <td>${resposta[index].perca}</td>
                     <td>${resposta[index].data}</td>    
                     <td><button type="button" onclick="atualiza('${resposta[index].id}')" class="btn btn-success">Ver</button></td>                
                     <td>
                     <button type="button" onclick="remover('${resposta[index].id}')" class="btn btn-danger">DELETE</button>
                     </td>
                     
                </tr>
             `);

        }
    });



};


function remover(id) {
   
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8000/secador01/delete/'+id,
       // data: id 

    }).fail(function (xhr, status, errorThrown) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
    }).done(
        alert("ok")
    );



};
function atualiza(id) {
   
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8000/secador01/buscaIdS01/'+id,
       // data: id 

    }).fail(function (xhr, status, errorThrown) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
    }).done(function(resposta){

        $('#umidadeS01').val(resposta.umidade);
        $('#percaS01').val(resposta.perca);
        $('#modalAnalise').modal(hide);

    }
        
    );



};
