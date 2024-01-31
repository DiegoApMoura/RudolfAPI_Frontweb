function carregaS01() {

    const btn = document.querySelector('#button-refresh-S01')
    btn.addEventListener('click', ()=>{
        location.reload()
    })


    let tbody = $("#body-S01");
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8000/secador01/buscaUltimo',


    }).fail(function (xhr, status, errorThrown) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
    }).done(function (resposta) {

        let conta = resposta.length -1;
            console.log(resposta[conta].umidade);

        for (let i = 0; i < resposta.length; i++) {


            let um = resposta[i].umidade;
            let pe = resposta[i].perca;
            let dat = resposta[i].data;
            


            $('#body-S01').append(`
            <div class="div-dados">
            
        <p>
        <a class="ancor-title">UMIDADE=</a> 
        <a class="ancor-dados">${um}</a>
        <a class="ancor-title">PERCA=</a> 
        <a class="ancor-dados">${pe}</a> 
        </p>
        <p>
        <a class="ancor-title">DATA= </a>
        <a class="ancor-dados">${dat}</a> </p>
        </div>
        
        `)
        }
    });
}

function carregaS02() {

    const btn = document.querySelector('#button-refresh-S02')
    btn.addEventListener('click', ()=>{
        location.reload()
    })


    let tbody = $("#body-S02");
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8000/secador02/buscaUltimoS02',


    }).fail(function (xhr, status, errorThrown) {
        console.log(xhr.responseText);
        alert(xhr.responseText);
    }).done(function (resposta) {

        
        for (let i = 0; i < resposta.length; i++) {


            let um = resposta[i].umidade;
            let pe = resposta[i].perca;
            let dat = resposta[i].data;
            


            $('#body-S02').append(`
            <div class="div-dados">
            
        <p>
        <a class="ancor-title">UMIDADE=</a> 
        <a class="ancor-dados">${um}</a>
        <a class="ancor-title">PERCA=</a> 
        <a class="ancor-dados">${pe}</a> 
        </p>
        <p>
        <a class="ancor-title">DATA= </a>
        <a class="ancor-dados">${dat}</a> </p>
        </div>
        
        `)
        }
    });
}