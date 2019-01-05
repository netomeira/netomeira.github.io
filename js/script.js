// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("DB-ALUNOS", 1);

// Create the schema
open.onupgradeneeded = function() {
	var db = open.result;
	var store = db.createObjectStore("alunosOS", {keyPath: "id"});
	// var indexNome = store.createIndex("NomeIndex", 'nome');
};

open.onsuccess = function() {
	// Start a new transaction
	var db = open.result;
	var tx = db.transaction("alunosOS", "readwrite");
	var alunosOS = tx.objectStore("alunosOS");
	// var indexNome = alunosOS.index("NomeIndex");

	// Add some data
	var jsonAlunos = JSON.parse(getJSONAlunos()).alunos;

	for (var i = 0; i < jsonAlunos.length; i++) {
		alunosOS.put(jsonAlunos[i]);
	}
			
	// Query the data
	var requestGetAll = alunosOS.getAll();

	requestGetAll.onsuccess = function() {
		var resultado = requestGetAll.result;
		for (var i = 0; i < resultado.length; i++) {
			adicionarAluno(resultado[i]);
		}
	};

	// Close the db when the transaction is done
	tx.oncomplete = function() {
		db.close();
	};

}

function adicionarAluno(aluno){
	var divAlunos = document.getElementById("divAlunos");

	var wrapperLink = document.createElement('a');
	wrapperLink.setAttribute('href', aluno.url);
	divAlunos.appendChild(wrapperLink);

	var wrapperDiv = document.createElement('div');
	wrapperDiv.setAttribute('class','aluno transition-sombra');
	wrapperLink.appendChild(wrapperDiv);
	
	var imgTag = document.createElement('img');
	imgTag.setAttribute('class','aluno__foto');
	imgTag.setAttribute('src', aluno.imagem);
	wrapperDiv.appendChild(imgTag);
	
	var divDetalhes = document.createElement('div');
	divDetalhes.setAttribute('class','aluno__detalhes');
	wrapperDiv.appendChild(divDetalhes);
					
	var nomeAluno = document.createElement('h2');
	nomeAluno.innerHTML = aluno.nome;
	divDetalhes.appendChild(nomeAluno);
	
	var grupoAluno = document.createElement('p');
	grupoAluno.innerHTML = aluno.grupo;
	grupoAluno.setAttribute('class','aluno__grupo');
	divDetalhes.appendChild(grupoAluno);
	
	var descAluno = document.createElement('p');
	descAluno.innerHTML = aluno.descricaoTarefa;
	descAluno.setAttribute('class','aluno__desc');
	divDetalhes.appendChild(descAluno);
}

function getJSONAlunos(){
	return '{"alunos":'+
			'[{"id":1, "nome":"Adriano", "grupo":"Grupo 1", "imagem":"images/alunos/Grupo1-Adriano.png",'+
			'"descricaoTarefa":"Página das disciplinas", "url":"/Grupo 1 - Adriano/index.html"},'+

			'{"id":2, "nome":"Wandesson", "grupo":"Grupo 2", "imagem":"images/alunos/Grupo2-Wandesson.png",'+
			'"descricaoTarefa":"Fórum", "url":"/Grupo 2 - Wandesson/index.html"},'+

			'{"id":3, "nome":"Jakson", "grupo":"Grupo 3", "imagem":"images/alunos/Grupo3-Jakson.png",'+
			'"descricaoTarefa":"Tutorial Koala", "url":"/Grupo 3 - Jackson/tutorialkoala.html"},'+

			'{"id":4, "nome":"Jakson", "grupo":"Grupo 3", "imagem":"images/alunos/Grupo3-Jakson.png",'+
			'"descricaoTarefa":"Grade do Curso", "url":"/Grupo 3 - Jackson/gradecurso.html"},'+

			'{"id":5, "nome":"Kennety", "grupo":"Grupo 4", "imagem":"images/alunos/Grupo4-Kennety.png",'+
			'"descricaoTarefa":"Tutorial Bootstrap", "url":"/Grupo 4 - Kennethy/boostrap_tutorial.html"},'+

			'{"id":6, "nome":"Kennety", "grupo":"Grupo 4", "imagem":"images/alunos/Grupo4-Kennety.png",'+
			'"descricaoTarefa":"Relatório de Validação", "url":"/Grupo 4 - Kennethy/relatorio_validacao.html"},'+
			
			'{"id":7, "nome":"Andrew", "grupo":"Grupo 5", "imagem":"images/alunos/default.png",'+
			'"descricaoTarefa":"Pág. Notícias", "url":"#"},'+

			'{"id":8, "nome":"Andrew", "grupo":"Grupo 5", "imagem":"images/alunos/default.png",'+
			'"descricaoTarefa":"Revisão de Integração", "url":"#"},'+

			'{"id":9, "nome":"Gian", "grupo":"Grupo 6", "imagem":"images/alunos/Grupo6-Gian.png",'+
			'"descricaoTarefa":"Tutorial Propriedades CSS", "url":"#"},'+

			'{"id":10, "nome":"Rodolfo", "grupo":"Grupo 7", "imagem":"images/alunos/Grupo7-Rodolfo.png",'+
			'"descricaoTarefa":"Modelo de página", "url":"/Grupo 7 - Rodolfo/index.html"},'+

			'{"id":11, "nome":"Neto", "grupo":"Grupo 8", "imagem":"images/alunos/Grupo8-Neto.png",'+
			'"descricaoTarefa":"Listagem de alunos", "url":"/Grupo 8 - Neto e Rikson/neto/index.html"},'+

			'{"id":12, "nome":"Rikson", "grupo":"Grupo 8", "imagem":"images/alunos/Grupo8-Rikson.png",'+
			'"descricaoTarefa":"Listagem de alunos", "url":"/Grupo 8 - Neto e Rikson/rikson/index.html"},'+

			'{"id":13, "nome":"Hugo", "grupo":"Grupo 9", "imagem":"images/alunos/Grupo9-Hugo.png",'+
			'"descricaoTarefa":"Teste Acessibilidade", "url":"/Grupo 9 - Rebeca e Hugo/index.html"},'+

			'{"id":14, "nome":"Rebeca", "grupo":"Grupo 9", "imagem":"images/alunos/Grupo9-Rebeca.png",'+
			'"descricaoTarefa":"Notícias de Acessibilidade", "url":"/Grupo 9 - Rebeca e Hugo/index.html"},'+

			'{"id":15, "nome":"Lílian", "grupo":"Grupo 10", "imagem":"images/alunos/Grupo10-Lilian.png",'+
			'"descricaoTarefa":"Página de avisos", "url":"/Grupo 10 - Lílian e Paulo/interna.html"},'+

			'{"id":16, "nome":"Paulo", "grupo":"Grupo 10", "imagem":"images/alunos/Grupo10-Paulo.png",'+
			'"descricaoTarefa":"Tutorial Flex e Grid", "url":"/Grupo 10 - Lílian e Paulo/tutorial.html"},'+

			'{"id":17, "nome":"Rafael", "grupo":"Grupo 11", "imagem":"images/alunos/Grupo11-Rafael.png",'+
			'"descricaoTarefa":"Tutorial Transform", "url":"/Grupo 11 - Rafael e Vínicius/transform.html"},'+

			'{"id":18, "nome":"Rafael", "grupo":"Grupo 11", "imagem":"images/alunos/Grupo11-Rafael.png",'+
			'"descricaoTarefa":"Tutorial Transition", "url":"/Grupo 11 - Rafael e Vínicius/transition.html"},'+

			'{"id":19, "nome":"Vinicius", "grupo":"Grupo 11", "imagem":"images/alunos/Grupo11-Vinicius.png",'+
			'"descricaoTarefa":"Tutorial Animation", "url":"/Grupo 11 - Rafael e Vínicius/animation.html"},'+

			'{"id":20, "nome":"Vinicius", "grupo":"Grupo 11", "imagem":"images/alunos/Grupo11-Vinicius.png",'+
			'"descricaoTarefa":"Pág. de Contatos", "url":"/Grupo 11 - Rafael e Vínicius/contatos.html"},'+

			'{"id":21, "nome":"Thyago", "grupo":"Grupo 12", "imagem":"images/alunos/Grupo12-Thyago.png",'+
			'"descricaoTarefa":"Tutorial Flex e Grid", "url":"#"},'+
		
			'{"id":22, "nome":"Arthur", "grupo":"Grupo 12", "imagem":"images/alunos/default.png",'+
			'"descricaoTarefa":"Tutorial Flex e Grid", "url":"#"},'+

			'{"id":23, "nome":"Gleydson", "grupo":"Grupo 13", "imagem":"images/alunos/Grupo13-Gleydson.png",'+
			'"descricaoTarefa":"Tutorial SASS", "url":"/Grupo 13 - Heverton e Gleydson/tutorialSASS.html"},'+

			'{"id":24, "nome":"Heverton", "grupo":"Grupo 13", "imagem":"images/alunos/Grupo13-Heverton.png",'+
			'"descricaoTarefa":"Acadêmico", "url":"/Grupo 13 - Heverton e Gleydson/informacoes_academicas.html"}'+
		']}';

}