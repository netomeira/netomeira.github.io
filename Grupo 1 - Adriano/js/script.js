
function insertDisciplina(codigo, nome, carga, id_professor, ementa, referencia){ 
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO DISCIPLINAS (DIS_CODIGO, DIS_NOME_DISCIPLINA, DIS_CARGA_HORARIA, DIS_PRO_CODIGO,  DIS_EMENTA, DIS_REFERENCIA) VALUES ("' + codigo + '","' + nome + '","' + carga + '","' + id_professor + '","' + ementa + '","' + referencia + '")'); });   
}

function insertDisciplinaAnexo(codigo, codigo_disciplina, descricao, link){ 
   db.transaction(function (tx) 
    { 
    sql = 'INSERT INTO DISCIPLINAS_ANEXOS (DIA_CODIGO, DIA_DIS_CODIGO, DIA_DESCRICAO, DIA_LINK) VALUES ("' 
          + codigo + '","' + codigo_disciplina + '","' + descricao + '","' + link+ '")';
        tx.executeSql(sql); 
      });   
}

function insertInstituicoes(codigo, nome){ 
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO INSTITUICOES (INS_CODIGO, INS_NOME) VALUES ("' + codigo + '","' + nome + '")'); });   
}

function insertProfessores(codigo, nome, id_instituicao, link){ 
	
 	 db.transaction(function (tx) 
		{ tx.executeSql('INSERT INTO PROFESSORES (PRO_CODIGO, PRO_NOME, PRO_INS_CODIGO, PRO_LINK) VALUES ("' + codigo + '","' + nome + '","' +id_instituicao+'", "'+link+'")'); });   
}

document.querySelector('#lista').innerHTML += "<img alt='Carregando dados' border='0' width='200' src='images/carregando.gif' title='Carregando dados! Aguarde...'> <h4>Carregando dados! Aguarde...<h4>"; 


var db = openDatabase('BANCO_POS', '1.0', 'UNIPE', 2 * 1024 * 1024); 
db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE DISCIPLINAS'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS DISCIPLINAS (DIS_CODIGO unique, DIS_NOME_DISCIPLINA, DIS_CARGA_HORARIA, DIS_PRO_CODIGO, DIS_EMENTA, DIS_REFERENCIA)'); 
   });

db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE DISCIPLINAS_ANEXOS'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS DISCIPLINAS_ANEXOS (DIA_CODIGO unique, DIA_DIS_CODIGO, DIA_DESCRICAO, DIA_LINK)'); 
   });

db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE PROFESSORES'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS PROFESSORES (PRO_CODIGO unique, PRO_NOME, PRO_INS_CODIGO, PRO_LINK)'); 
   });

db.transaction(function (tx) 
   { tx.executeSql('DROP TABLE INSTITUICOES'); 
   });
db.transaction(function (tx) 
   { tx.executeSql('CREATE TABLE IF NOT EXISTS INSTITUICOES (INS_CODIGO unique, INS_NOME)'); 
   });

insertInstituicoes(1,'Unipê');
insertInstituicoes(2,'TJ');
insertInstituicoes(3,'Emater');
insertInstituicoes(4,'Indra');
insertInstituicoes(5,'Vox Tecnologia');
insertInstituicoes(6,'IFPB');
insertInstituicoes(7,'Conductor');
insertInstituicoes(8,'TriadWorks - Fortaleza');
insertInstituicoes(9,'Alfa Consultoria');

insertProfessores('1', 'Jeferson Barbosa', '1', 'http://lattes.cnpq.br/9441692553425964');
insertProfessores('2', 'Ms. João Paulo Fechine Sette ', '2', 'http://lattes.cnpq.br/3477271592797947');
insertProfessores('3', 'Ms. Thyago Maia', '3', 'http://lattes.cnpq.br/5322422063512353');
insertProfessores('4', 'Ms. Pedro Amorin', '1', '');
insertProfessores('5', 'Esp. Hélio Cardoso', '1', '');
insertProfessores('6', 'Neto Cavalcanti', '4', 'http://lattes.cnpq.br/7872949807196616');
insertProfessores('7', 'Esp. Nélio Frazão', '5', '');
insertProfessores('8', 'MS. Ivson Santos', '5', 'http://lattes.cnpq.br/3762142722427704');
insertProfessores('9', 'Ms. Samara Martins', '1', '');
insertProfessores('10', 'Prof. Dr Rodrigo da Cruz Fujioka', '1', 'http://lattes.cnpq.br/0843668802633139');
insertProfessores('11', 'Ms. Lysiane Couto', '1', '');
insertProfessores('12', 'Rafael Ponte', '8', 'https://br.linkedin.com/in/rponte');
insertProfessores('13', 'Esp Carlos Barbosa', '9', '');
insertProfessores('14', 'Humberto Junior', '7', '');
insertProfessores('15', 'Ms. Gustavo Sávio', '4', '');
insertProfessores('16', 'Ms. Pedro Amorin', '4', '');

insertDisciplina('1','Design Think em projetos de sistemas para Web e Startups','16', '1', 'Metodologia de Design (Design Thinking). Experiência de usuário. Pesquisa'+
'e análise de informações para identificação de oportunidades e possíveis mercados.'+
'Geração de alternativas. Prototipagem de conceitos e validação de ideias por meio de'+
'feedback de usuários. Refinamento da ideia a partir do modelo de negócios.'+
'Comunicação da ideia a clientes e usuários.', 
'Stickdorn M. Isto É Design Thinking De Serviços : Fundamentos, Ferramentas, Casos'+
'[e-book]. Porto Alegre: Bookman; 2014. Available from: Minha Biblioteca, Ipswich,'+
'MA. Accessed December 20, 2017. <br>' + 
'BROWN, Tim. n.d. Design Thinking. uma metodologia poderosa para decretar o fim'+
'das velhas ideias. n.p.: Rio de Janeiro Elsevier 2010, n.d. Catálogo do Centro'+
'Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).<br>' + 
'VIANNA ET AL. Design thinking. Disponível em: http://livrodesignthinking.com.br/'+
'Rio de Janeiro: MJV Press, 2012.');

insertDisciplinaAnexo('1', '1', 'Material principal', 'www.unipro.com.br/mat1.pdf');
insertDisciplinaAnexo('2', '1', 'Material extra', 'www.unipro.com.br/mat1.pdf');

insertDisciplina('2','Desenvolvimento de Interfaces Web','16', '2',
  'Conceitos Básicos; Desenvolvimento Web com HTML, CSS. Programação front-end  jQuery e Ajax. HTML 5.',
  'Teruel, Evandro Carlos. HTML 5 : guia prático. São Paulo: Erica, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. 2014. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'DUCKETT, Jon. n.d. HTM e CSS. Projeto e construa websites. n.p.: Rio de Janeiro Alta Books 2014, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017');

insertDisciplinaAnexo('3', '2', 'Slide do curso', 'www.unipro.com.br/se1.pdf');
insertDisciplinaAnexo('4', '2', 'Vídeos sobre aulas', 'www.unipro.com.br/s2.avi');
insertDisciplinaAnexo('5', '2', 'Modelos de Páginas', 'www.unipro.com.br/s2.pdf');

insertDisciplina('3','UX User Experience','16', '',
  'Introdução à usabilidade. Usabilidade para sistemas web. Usabilidade x Ergonomia. Critérios e recomendações ergonômicas e de usabilidade. Especificação de requisitos de usabilidade. Prototipação de interfaces web. Técnicas de avaliações de usabilidade em interfaces web. ',
  'Chesnut, Donald, and Kevin Nichols. UX for dummies. n.p.: West Sussex, England : John Wiley & Sons, 2014., 2014. Ebook Central, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('4','Fundamentos da Programação PHP ','16', '3',
  'Princípios da programação Orientada a Objetos (OO). Recursos e fundamentos das linguagens de programação PHP com foco no desenvolvimento Web. Introdução a arquitetura de sistemas para Web e processos de requisição utilizando o protocolo HTTP GET e POST. Acesso a banco de dados, padrões de projeto e boas práticas de desenvolvimento de sistemas com PHP. Ambientes de desenvolvimento e infraestrutura básica para execução de sistemas web.Acesso a banco de dados, padrões de projeto e boas práticas de desenvolvimento de sistemas com PHP. Ambientes de desenvolvimento e infraestrutura básica para execução de sistemas web.',
  'Soares, Walace. Php 5 : conceitos, programação e integração com banco de dados. São Paulo: Erica, 2013. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'SKLAR, David. n.d. Aprendendo PHP. introdução amigável à linguagem mais popular da web. n.p.: São Paulo Novatec 2016, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('5','Desenvolvimento de Sistemas web com PHP Frameworks','16', '3',
  'Programação Orientada a Objetos com PHP (Classes, Objetos, Métodos, Construtores, etc) Manipulação de arquivos, Envio de e-mails, Sessões e cookies e Autenticação e Autorização. Introdução a programação com Frameworks.',
  'Soares, Walace. Php 5 : conceitos, programação e integração com banco de dados. São Paulo: Erica, 2013. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'SKLAR, David. n.d. Aprendendo PHP. introdução amigável à linguagem mais popular da web. n.p.: São Paulo Novatec 2016, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).'+
'McCool, Shawn. 2012. Laravel starter. [electronic resource] : the definitive introduction to the Laravel PHP web development framework. n.p.: Birminghan, UK : Packt Pub., 2012., 2012. Ebook Central, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('6','Desenvolvimento Responsivo de Aplicações Web','16', '',
  'Introdução do Design Responsivo, Grids Flexíveis, testando nos dispositivos, Imagens flexíveis, Media Queries. Frameworks para desenvolvimento responsivo (BootStrap e JQuery). Otimização de CSS,JS, Imagens e boas práticas de design responsivo.',
  'Teruel, Evandro Carlos. HTML 5 : guia prático. São Paulo: Erica, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. 2014. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).' + 
'DUCKETT, Jon. n.d. HTM e CSS. Projeto e construa websites. n.p.: Rio de Janeiro Alta Books 2014, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('7','Projeto Aplicativo ','16', '4',
  'Orientação do Trabalho de Conclusão de Curso. Acompanhamento do Trabalho. Apresentação de Resultados.',
  'ESTEVAM, Izequias. Manual de Métodos e Técnicas de Pesquisa Científica. 9. ed.. Niterói, RJ: Impetus, 2012.'+
'GONÇALVES, Hortência de Abreu. Manual de Metodologia da Pesquisa Científica. São Paulo, SP: Avercamp, 2005.'+
'MARCONI, Marina de Andrade & LAKATOS, Eva Maria. Metodologia do Trabalho Científico: procedimentos básicos, pesquisa bibliográfica, projeto e relatório, publicações e trabalhos científicos. 6. ed.,  7. reimp.. São Paulo, SP: Atlas, 2006.'+
'OLIVEIRA NETTO, Alvim Antonio de. Metodologia da Pesquisa Científica: Guia prático para apresentação de trabalhos. 3. ed.. Florianópolis, SC: Visual Books, 2008.'+
'PEREIRA, Maurício Gomes. Artigos Científicos: Como redigir, publicar e avaliar. Rio de Janeiro, RJ: Guanabara Koogan, 2012.'+
'SEVERINO, Antônio Joaquim. Metodologia do Trabalho Científico. 23. ed. rev. atual.. 3. reimp.. São Paulo, SP: Cortez, 2007.');
insertDisciplina('8','Desenvolvimento de Sistemas web com PHP Frameworks 2 (Synfony)','16', '5',
  'Conceituar Frameworks e Padrões de Projeto. Frameworks para projeto e implementação em PHP: vantagens e desvantagens da aplicação de Frameworks. Conceito de Microframeworks. PHP Frameworks (Lavarel, Zend,  Symfony).',
  'Soares, Walace. Php 5 : conceitos, programação e integração com banco de dados. São Paulo: Erica, 2013. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'SKLAR, David. n.d. Aprendendo PHP. introdução amigável à linguagem mais popular da web. n.p.: São Paulo Novatec 2016, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('9','Gestão de Configuração e Mudança de Software','16', '6',
  'Métodos ágeis de desenvolvimento, Introdução à integração contínua, Práticas de integração contínua, Repositório de códigos fonte CVS, SVN, Git. ',
  'CAMERON, E. Gerenciamento de mudanças. São Paulo: Clio Editora, 2009. '+
'CHACON, S. Pro Git. Dialetica. 2009. 14-302-1833-9. '+
'MOLINARI, L. Gerência de configuração - técnicas e práticas no desenvolvimento do software. Florianópolis: Visual Books, 2007.');
insertDisciplina('10','Introdução a programação com Scripts','16', '7',
'Introdução a programação com Java Script. ',
'Flanagan, David. ""JavaScript : o guia definitivo."" (2014): Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'DUCKETT, Jon. JavaScript eamp; jQuery. desenvolvimento de interfaces web interativas. n.p.: Rio de Janeiro Alta Books 2015, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('11','Desenvolvimento de aplicações com Frameworks JavaScript ','16', '',
  'Aprender os conceitos de componentes, templates, diretivas, serviços, data-binding, validação de formulários, formulários reativos, roteamento (single page application – SPA) e como conectar ao servidor e trabalhar com RxJS (Observables). Utilizando frameworks JavaScript, tais como Angular, React, Vue entre outros.',
  'Flanagan, David. ""JavaScript : o guia definitivo."" (2014): Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Miletto, Evandro Manara. Desenvolvimento de software ii : introdução ao desenvolvimento web com html, css, javascript e php. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'DUCKETT, Jon. JavaScript eamp; jQuery. desenvolvimento de interfaces web interativas. n.p.: Rio de Janeiro Alta Books 2015, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('12','Programação Multiplataforma (Android/IOS)','16', '8',
  'Novas tecnologias utilizadas em desenvolvimento de sistemas Multiplataforma, tais como atualizações de frameworks em novas linguagens de programação, tais como: AngularJS, Codova, PhoneGap, Ionic, React, PWA. Desenvolvimento Web multiplataforma, utilizando ferramentas de geração de Aplicativos para smartphone.',
  'LOPES, Sérgio. Aplicações mobile híbridas com cordova e phoneGap. São Paulo: Casa do Código, 2016');
insertDisciplina('13','Banco de dados não convencionais','16', '9',
  'Novos Requisitos de Aplicações de Banco de Dados. Bancos de Dados NoSQL: Definição; Motivação; Modelo de Transações. Principais categorias: Chave / Valor, Documentos, Famílias de Colunas, Grafos. Modelo de Computação MapReduce: Definição; Motivação; MapReduce X SGBD Paralelo; Aplicações com Hadoop. Relações entre Big Data, MapReduce e NoSQL.',
  'Organizadora Claudia, Vicci. Banco de Dados. n.p.: Pearson, n.d. Pearson eBooks, EBSCOhost (accessed December 20, 2017). ' + 
'2009. Business intelligence : um enfoque gerencial. Porto Alegre: Bookman, 2009. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).' +
'Ramez Elmasri, Shamkant B. Navathe. Sistemas de Banco de Dados - 6ª Ed. Pearson Education, 2011. '+
'Paul A. Longley; Michael F. Goodchild; David J. Maguire; David W. Rhind. Sistemas e Ciência da Informação Geográfica. Editora Bookman. 3ª Edição, 2013 '+
'A. Silberschatz, H. Korth , S Sudarshan. Sistema de Banco de Dados. Elsevier. 6a. Edição, 2012.');
insertDisciplina('14','Fundamentos de Programação Java para Web','16', '10',
  'Introdução ao modelo de camadas Java EE. Programação com Servlets Construção de Páginas JSP e JSTL, Filtros. Servidores de Aplicação e Containers Web.',
  'Alves, William Pereira. Java para Web : desenvolvimento de aplicações. São Paulo: Erica, 2015. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Machado, Rodrigo Prestes. ""Desenvolvimento de software, v.3 : programação de sistemas web orientada a objetos em Java."" (2016): Minha Biblioteca, EBSCOhost (accessed December 20, 2017)'+
'COELHO, Hébert. Jpa eficaz. as melhores práticas de persistência de dados em Java. n.p.: São Paulo 2016, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).'+
'BASHAM, Brian. Use a cabeça. servlets eamp; JSP. n.p.: são, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('15','Teste de Software','16', '11',
  'Conceitos e classificação de Testes de Desempenho, Carga e Stress, identificação de Requisitos Não Funcionais, identificação dos casos de testes para requisitos de desempenho, classificação dos tipos de dados e formas de manipulação, Silk Performer, Profiler, agents, workloads, JMeter, execução dos testes e ambientes web e mobile',
  'Adzic, G.; Bridging the Communication Gap: Specification by Example and Agile Acceptance Testing; London, UK: Neuri; Kindle edition; 2009 '+
'Beck, K.; Test-driven development by example. Addison Wesley, 2002. '+
'Borba, P.; Cavalcanti, A.; Sampaio, A.; Woodcock, J.; eds.; Testing Techniques in Software Engineering; LNCS 6153; Berlin: Springer, Lecture Notes in Computer Science; 2010');
insertDisciplina('16','Desenvolvimento Java Web Frameworks','16', '12',
  'Introdução ao SpringFramework. Controle de Acesso e Segurança com o Spring Security. Desenvolvimento web com Spring MVC. Criptografia, Programação Orientada a Aspectos, Injeção de Dependência. Frameworks ORM e Java Persistente API. ',
  'Alves, William Pereira. Java para Web : desenvolvimento de aplicações. São Paulo: Erica, 2015. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Machado, Rodrigo Prestes. ""Desenvolvimento de software, v.3 : programação de sistemas web orientada a objetos em Java."" (2016): Minha Biblioteca, EBSCOhost (accessed December 20, 2017)'+
'KONDA, Madhusudhan. ntrodução ao Hibernate. n.p.: São Paulo Novatec 2014, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).'+
'COELHO, Hébert. Jpa eficaz. as melhores práticas de persistência de dados em Java. n.p.: São Paulo 2016, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('17','Desenvolvimento Java Web Frameworks 2 ','16', '13',
  'Programação para web utilizando a linguagem de programação Java e suas tecnologias (JSF e PrimeFaces); Bibliotecas de Tags JSF, Managed Beans, Navegação, Suporte a Internacionalização. Ajax com JSF utilizando Primefaces e seus componentes. Criação de componentes personalizados.',
  'Alves, William Pereira. Java para Web : desenvolvimento de aplicações. São Paulo: Erica, 2015. Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'Machado, Rodrigo Prestes. ""Desenvolvimento de software, v.3 : programação de sistemas web orientada a objetos em Java."" (2016): Minha Biblioteca, EBSCOhost (accessed December 20, 2017)'+
'KONDA, Madhusudhan. ntrodução ao Hibernate. n.p.: São Paulo Novatec 2014, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('18','Desenvolvimento de Micro Serviços, API e Containers','16', '10',
  'Introdução ao CDI, fundamentos de Sistemas corporativos. Introdução aos Serviços Web. Desenvolvimento de Serviços Web com SOAP e WSDL. Desenvolvimento de Serviços Web RESTful. Web Services SOAP com JAX-WS; RESTful Services e API com JAX-RS;',
  'Machado, Rodrigo Prestes. ""Desenvolvimento de software, v.3 : programação de sistemas web orientada a objetos em Java."" (2016): Minha Biblioteca, EBSCOhost(accessed December 20, 2017).'+
'ABINADER, Jorge Abilio. Web services em java. n.p.: são, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('19','Back-End as a Service','16', '',
  'Introduzir conceitos de desenvolvimento com Back End as A Service, utilizando tecnologias emergentes e promissoras, tais como Google Firebase, Amazon Ws, entre outras.',
  'Machado, Rodrigo Prestes. ""Desenvolvimento de software, v.3 : programação de sistemas web orientada a objetos em Java."" (2016): Minha Biblioteca, EBSCOhost (accessed December 20, 2017).'+
'ABINADER, Jorge Abilio. Web services em java. n.p.: são, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('20','Ferramentas de Integração Contínua','16', '',
  'Automatização de BUILD, Jenkins, hudson, Qualidade de software, Sonar, Gerência de Configuração. Criação, Organização e Gerenciamento de Jobs, Plugins, Builds com parâmetros, Relatórios, Criando pipelines com Jenkins.',
  'CAMERON, E. Gerenciamento de mudanças. São Paulo: Clio Editora, 2009. '+
'CHACON, S. Pro Git. Dialetica. 2009. 14-302-1833-9. ' +
'MOLINARI, L. Gerência de configuração - técnicas e práticas no desenvolvimento do software. Florianópolis: Visual Books, 2007.');
insertDisciplina('21','Segurança em Aplicações Web','16', '14',
  'Conceitos básicos de segurança computacional. Vulnerabilidades e ataques em aplicações Web. Mecanismos de segurança, Identificação de Vulnerabilidades, Google Hacking, Spidering. Principais Ameaças, Cross-Site Scripting (XSS); Quebra de Autenticação / Roubo de Sessão;Referência direta à objetos;Cross-Site Request Forgery (CSRF); Falhas em serviços e SOs; Vulnerabilidades Client-Side;Falha na Restrição de Acesso à URLs; SQL Injection; Blind SQL Injection;HTTP Header Injection;Session Fixation e Captura de tráfego. Projeto e desenvolvimento de aplicações Web Seguras.',
  'FONTES, Edison. (12/2001). Segurança da informção - 1ª edição. [Minha Biblioteca]. Retirado de https://integrada.minhabiblioteca.com.br/#/books/9788502122185/'+
'BEAL, Adriana. (07/2008). Segurança da informação: Princípios e Melhores Práticas para a Proteção dos Ativos de Informação nas Organizações. [Minha Biblioteca]. Retirado de https://integrada.minhabiblioteca.com.br/#/books/9788522472109/'+
'McClure, Stuart. Hackers expostos : segredos e soluções para a segurança de redes. Porto Alegre: Bookman, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017). '+
'Basta, Alfred. Segurança de computadores e teste de invasão. São Paulo: Cengage Learning, 2014. Minha Biblioteca, EBSCOhost (accessed December 20, 2017). ');
insertDisciplina('22','DevOps, Servidores de Aplicação e Cloud Computing','16', '15',
  'Apresentar e capacitar os alunos nas práticas mais inovadoras existentes relacionadas a DevOps, que utilizando ferramentas para automatizar todo o processo de desenvolvimento e operação de software, permite o desenvolvimento com mais qualidade em menos tempo Definição de DevOps: Entendimento dos alunos com relação a tudo que envolve o conceito de DevOps; apresentação do histórico dos termos; benefícios da utilização de DevOps tanto para empresa, quanto para profissionais de TI; ferramentas que podem ser utilizadas; empresas que utilizam DevOps; e em especial a cultura DevOps que hoje está influenciando profissionais em todo o mundo.] Planejamento inicial de um projeto com uma arquitetura DevOps: Definição de como planejar um projeto que implemente o ambiente DevOps; atividades que precisam ser previstas para implementar um projeto com qualidade e agilidade. Ambientes de Desenvolvimento. Nuvens e como isso pode ser utilizado para todo o ambiente de automação DevOps',
  'VELTE, Anthony T. Computação em nuvem. uma abodagem prática. n.p.: são Alta Books 2012, n.d. Catálogo do Centro Universitário de João Pessoa - Unipê, EBSCOhost (accessed December 20, 2017).');
insertDisciplina('23','Engenharia de Software Experimental','16', '16',
  'Fundamentos da Metodologia Científica. A Comunicação Científica. Métodos e técnicas de pesquisa. A comunicação entre orientados/orientadores. Normas para Elaboração de Trabalhos Acadêmicos. O pré-projeto de pesquisa. O Projeto de Pesquisa. O Experimento. A organização de texto científico (Normas ABNT). ',
  'ESTEVAM, Izequias. Manual de Métodos e Técnicas de Pesquisa Científica. 9. ed.. Niterói, RJ: Impetus, 2012.'+
'GONÇALVES, Hortência de Abreu. Manual de Metodologia da Pesquisa Científica. São Paulo, SP: Avercamp, 2005.'+
'MARCONI, Marina de Andrade & LAKATOS, Eva Maria. Metodologia do Trabalho Científico: procedimentos básicos, pesquisa bibliográfica, projeto e relatório, publicações e trabalhos científicos. 6. ed.,  7. reimp.. São Paulo, SP: Atlas, 2006.'+
'OLIVEIRA NETTO, Alvim Antonio de. Metodologia da Pesquisa Científica: Guia prático para apresentação de trabalhos. 3. ed.. Florianópolis, SC: Visual Books, 2008.'+
'PEREIRA, Maurício Gomes. Artigos Científicos: Como redigir, publicar e avaliar. Rio de Janeiro, RJ: Guanabara Koogan, 2012.'+
'SEVERINO, Antônio Joaquim. Metodologia do Trabalho Científico. 23. ed. rev. atual.. 3. reimp.. São Paulo, SP: Cortez, 2007.');

function ObtemCabecalho()
{
  mensagem = '';
  mensagem +='<article>';
  mensagem +='<h2>Lista de Disciplinas</h2>';
  mensagem +='<p>Postado em <time datetime="2018-09-04T16:31:24+02:00">05 Janeiro 2019</time> por <a href="#">Adriano Barroso</a> - Matrícula: POS136012 - <a href="#comments">6 Comentários</a></p>';
  mensagem +='<p><b>Objetivo:</b> Relação das disciplinas com a utilização do Web SQL da disciplina de Desenvolvimento de Interfaces Web ministrada pelo professor Ms. João Paulo Fechine </p>';
  mensagem +='<p></p></article>';
  document.querySelector('#cabecalho').innerHTML +=  mensagem;           
          
}
var lista_anexos = new Array();
var iIndice = 0;
function ObtemAnexos(codigo_disciplina)
{
     lista_anexo = lista_anexos[codigo_disciplina];

     if (!lista_anexos[codigo_disciplina]) 
     {
       lista_anexo = "Não foi disponibilizado pelo professor os anexos."
     }
     return lista_anexo;
}

db.transaction(function (tx1) { 
            tx1.executeSql('SELECT * FROM DISCIPLINAS_ANEXOS ORDER BY DIA_DIS_CODIGO', [], function (tx, results) { 
               var len = results.rows.length, i; 
               iCodigo = results.rows.item(i).DIA_DIS_CODIGO;
               sAux = "";
               for (i = 0; i < len; i++) {                  
                  lista_anexos[results.rows.item(i).DIA_DIS_CODIGO] = ' ';
               }
               for (i = 0; i < len; i++) {    
                  lista_anexos[results.rows.item(i).DIA_DIS_CODIGO] += '- <a href="'+results.rows.item(i).DIA_LINK + '">' + results.rows.item(i).DIA_DESCRICAO + '</a><br>';
               }
               }, null); 
            
         });

function principal()
{
db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM DISCIPLINAS LEFT JOIN PROFESSORES ON PRO_CODIGO = DIS_PRO_CODIGO LEFT JOIN INSTITUICOES ON PRO_INS_CODIGO = INS_CODIGO', [], function (tx, results) { 
               var len = results.rows.length, i; 
               msg = "Total de <b>" + len + "</b> disciplinas."; 
               document.querySelector('#status').innerHTML +=  msg; 
               document.querySelector('#lista').innerHTML = ""; 
               var nome_professor;
               for (i = 0; i < len; i++) { 
                 //              alert("1");
                if (results.rows.item(i).PRO_NOME == null) {
                  nome_professor = "Não definido";
                }
                else
                {
                    nome_link = results.rows.item(i).PRO_NOME;
                    if (results.rows.item(i).PRO_LINK != "") {
                      nome_link = "<a href='"+results.rows.item(i).PRO_LINK+"' target='_blank'>"+nome_link+"</a>"
                    }
                    nome_professor = nome_link + "("+results.rows.item(i).INS_NOME+")";
                }

                msg = "<details><div class='texto'>- Professor: "+nome_professor+ "</div>" +
                  "<summary>"+results.rows.item(i).DIS_CODIGO +" - <b>" + results.rows.item(i).DIS_NOME_DISCIPLINA+"</b></summary>"+
				          "<div class='texto'><p> - Carga Horária:" +  results.rows.item(i).DIS_CARGA_HORARIA+"Hs</p>"+
				          "<p><b>Ementa</b>:<br> " + results.rows.item(i).DIS_EMENTA +
                  "<br><b>Referências Básicas:</b><br>"+results.rows.item(i).DIS_REFERENCIA + 
                  "<br><b>Anexos:</b><br>";
				        msg_temp = ObtemAnexos(results.rows.item(i).DIS_CODIGO);
                msg = msg + msg_temp;
                msg += "</div></p></details>";

				        document.querySelector('#lista').innerHTML +=  msg; 
               } 
             ObtemCabecalho();
            }, null); 
         }); 
}


principal();
 
