/**
 * 
 * PORTFOLIO TYPESCRIPT
 * 
 * COMPILER: tsc -watch --outDir ..\ .\default.ts
 * 
 * 
*/

// jquery
declare var $;

var menu = [
    {

        "title": "Sobre mim",
        "link": "#about"
    },
    {

        "title": "Habilidades",
        "link": "#skills"
    },
    {

        "title": "Projetos",
        "link": "#projects"
    },
    {

        "title": "Carreira",
        "link": "#jobs"
    },
    {

        "title": "Formação Acadêmica",
        "link": "#academic"
    }, ,
    {

        "title": "Artigos",
        "link": "#articles"
    },
    {

        "title": "Idiomas",
        "link": "#languages"
    }

]

var social = [
    {

        "title": "Facebook",
        "link": "https://www.facebook.com/luscanck/",
        "icon": "fab fa-facebook-f"
    },
    {

        "title": "Instagram",
        "link": "https://www.instagram.com/luscanck/",
        "icon": "fab fa-instagram"
    },
    {

        "title": "Linkedin",
        "link": "https://br.linkedin.com/in/lucas-ribeiro-73a89511b",
        "icon": "fab fa-linkedin-in"
    },
    {

        "title": "Github",
        "link": "https://github.com/lucasnck",
        "icon": "fab fa-github"
    }
]

var skills = [ 
    {

        "name": "Java",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 90,
        "description": "Desenvolvimento com JSF",
        "experience": ""
    },
    {

        "name": "JavaScript",
        "type": "Front-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {

        "name": "TypeScript",
        "type": "Full Stack",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "Java Android",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "C/C++",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {

        "name": "PHP",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 20,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSF",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSP",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 60,
        "description": "",
        "experience": ""
    },
    {

        "name": "Node",
        "type": "Back-end",
        "technologyType": "JavaScript Framework",
        "knowledgePercentage": 40,
        "description": "",
        "experience": ""
    },
    {

        "name": "Angular",
        "type": "Front-end",
        "technologyType": "JavaScript Framework",
        "knowledgePercentage": 20,
        "description": "",
        "experience": ""
    },
    {

        "name": "React",
        "type": "Front-end",
        "technologyType": "JavaScript Framework",
        "knowledgePercentage": 10,
        "description": "",
        "experience": ""
    },
    {

        "name": "jQuery",
        "type": "Front-end",
        "technologyType": "JavaScript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "FontAwesome",
        "type": "Front-end",
        "technologyType": "Html Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "NetBeans",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "Eclipse",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "Visual Studio Code",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "ATOM",
        "type": "Back-end",
        "technologyType": "IDE",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "PrettyFaces",
        "type": "Back-end",
        "technologyType": "JSF Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Bootstrap",
        "type": "Front-end",
        "technologyType": "Front-end Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "SASS",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "CSS3",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "HTML5",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "XHTML",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "XML",
        "type": "Front-end",
        "technologyType": "Linguagem web",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Primefaces",
        "type": "Front-end",
        "technologyType": "JSF Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "JPA",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Criteria API",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "Hibernate",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "PostgreSQL",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "MongoDB",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 20,
        "description": "",
        "experience": ""
    },
    {

        "name": "Derby",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "DB4O",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "MySQL",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "Jersey",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "Blender",
        "type": "Game Development",
        "technologyType": "Visual software",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "LWJGL",
        "type": "Game Development",
        "technologyType": "Java Library",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "OpenGL",
        "type": "Game Development",
        "technologyType": "C/C++ Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "MVC",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "UML",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "SCRUM",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "AJAX",
        "type": "Front-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {

        "name": "GIT",
        "type": "Full Stack",
        "technologyType": "Version Control System",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Subversion",
        "type": "Full Stack",
        "technologyType": "Version Control System",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSON",
        "type": "Front-end",
        "technologyType": "JavaScript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Astah",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "JAX-RS",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "TOMCAT",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "TOMEE",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {

        "name": "GLASSFISH",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "Ubuntu",
        "type": "Computer Network",
        "technologyType": "Operational System",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "Windows",
        "type": "Computer Network",
        "technologyType": "Operational System",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "macOS",
        "type": "Computer Network",
        "technologyType": "Operational System",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    }

]

var projects = [
    {
        "name": "FARMUP",
        "type": "Back-end",
        "logo": "resources/img/projects/farmup.png",
        "technologies": "Java, JSF, Hibernate, CriteriaAPI, JPA, Bootstrap4, SASS, XHMTL, jQuery, Typescript, Primefaces, PostgreSQL, Font Awesome, DigitalOcean, Ubuntu",
        "description": "ERP para agropecuária",
        "category": "autônomo",
        "link": "http://farmup.com.br",
        "status": "Em desenvolvimento"
    },
    {
        "name": "UCODE",
        "type": "Back-end",
        "logo": "resources/img/projects/ucode.png",
        "technologies": "Java, JSF, Hibernate, CriteriaAPI, JPA, Bootstrap4, SASS, XHMTL",
        "description": "Sistema para auxiliar no desenvolvimento de projetos",
        "category": "autônomo",
        "link": "",
        "status": "Em desenvolvimento"
    },
    {
        "name": "MAGE API",
        "type": "Front-end",
        "logo": "resources/img/favicon.png",
        "technologies": "JavaScript, Typescript, React, JSON, HTML5, SASS",
        "description": "The new way to make requests in API",
        "category": "autônomo",
        "link": "",
        "status": "Em desenvolvimento"
    },
    {
        "name": "eXparser",
        "type": "Back-end",
        "logo": "resources/img/projects/exparser.png",
        "technologies": "Java",
        "description": "Simple XML and XHTML parser for a Java Abstract Tree",
        "category": "autônomo",
        "link": "https://github.com/lucasnck/eXparser",
        "status": "Concluído"
    },
    {
        "name": "ProjectParser",
        "type": "Back-end",
        "logo": "resources/img/projects/projectparser.png",
        "technologies": "Java",
        "description": "API for create and update files structures of a project object",
        "category": "autônomo",
        "link": "https://github.com/lucasnck/ProjectParser",
        "status": "concluído"
    },
    {
        "name": "Ponto das Tintas",
        "type": "Front-end",
        "logo": "https://www.pontodastintas.com.br/static/store/Captura de Tela 2017-11-13 às 11-da541d43-9c1a-4045-b5e4-415fb279b8bc.png",
        "technologies": "Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://www.pontodastintas.com.br/",
        "status": "concluído"
    },
    {
        "name": "Collisione Boutique",
        "type": "Front-end",
        "logo": "",
        "technologies": "Typescript, Twig, jQuey, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Mayra Sartori",
        "type": "Front-end",
        "logo": "",
        "technologies": "Typescript, Twig, jQuey, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Cordeiro Autopeças",
        "type": "Front-end",
        "logo": "https://cordeiro.idealeware.com.br/static/store/Logo top-ec660ecb-c517-4158-b7d9-0993364476ee.png",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://cordeiro.netlify.com/",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Dupé Calçados",
        "type": "Front-end",
        "logo": "https://assets.xtechcommerce.com/assets/47429/1523305233/img/logo.png",
        "technologies": "TypeScript, Bootstrap4, SASS, HTML5, Twig, jQuery",
        "description": "",
        "category": "Admake",
        "link": "https://lojadupe1.xtechcommerce.com/",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Pitangasp",
        "type": "Front-end",
        "logo": "https://images.tcdn.com.br/606773/themes/68/img/logo/logo.png",
        "technologies": "Bootstrap4, Twig, JavaScript, SASS, CSS, HTML5",
        "description": "",
        "category": "Admake",
        "link": "https://www.pitangasp.com.br/",
        "status": "concluído"
    },
    {
        "name": "Grassy Café",
        "type": "Front-end",
        "logo": "https://www.grassycafe.com.br/static/store/logo-379841e1-e3b5-459f-af19-71c52d2ae467.png",
        "technologies": "Bootstrap3, Angular, JavaScript, SASS, CSS, HTML5",
        "description": "",
        "category": "Admake",
        "link": "https://grassycafe.com.br/",
        "status": "concluído"
    },
    {
        "name": "Flor de Coco",
        "type": "Front-end",
        "logo": "https://cdn.awsli.com.br/400x300/500/500121/logo/74282c854e.png",
        "technologies": "Bootstrap, JavaScript, CSS3",
        "description": "",
        "category": "Admake",
        "link": "http://flordecoco.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Refrigás",
        "type": "Front-end",
        "logo": "",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://refrigas.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Walfanger",
        "type": "Front-end",
        "logo": "https://www.walfanger.com.br/static/store/walfanger-54afc0c3-724e-4203-bd7f-6d899d6a1ed6.png",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://walfanger.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Astuti Casa",
        "type": "Front-end",
        "logo": "https://www.astuticasa.com.br/static/store/logo-4779d1fa-e8a4-42c8-a0de-55409ab13825.png",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://astuticasa.com.br/",
        "status": "Concluído"
    },
    {
        "name": "VellBizz",
        "type": "Front-end",
        "logo": "",
        "technologies": "Bootstrap4, JavaScript, SASS, jQuery",
        "description": "",
        "category": "Admake",
        "link": "",
        "status": "Concluído"
    },
    {
        "name": "Berve Enxovais",
        "type": "Front-end",
        "logo": "https://images.tcdn.com.br/605938/themes/56/img/logo-berve-horizontal.png",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "http://berve.com.br/",
        "status": "concluído"
    },
    {
        "name": "Blog Loja Cuba",
        "type": "Front-end",
        "logo": "http://blog.lojacuba.com.br/wp-content/themes/lojacubablog/resources/images/logo.png",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "http://blog.lojacuba.com.br/",
        "status": "concluído"
    },
    {
        "name": "Candy Lover Store",
        "type": "Front-end",
        "logo": "https://cdn.awsli.com.br/400x300/546/546245/logo/6554a068d7.png",
        "technologies": "Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://www.candyloverstore.com.br/",
        "status": "concluído"
    },
    {
        "name": "Lummina",
        "type": "Front-end",
        "logo": "",
        "technologies": "Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "",
        "status": "Em desenvolvimento"
    }
]

var jobs = [
    {
        "name": "Admake",
        "logo": "resources/img/jobs/admake.svg",
        "post": "Desenvolvedor front-end",
        "description": "Desenvolvedor Front-end atuando com JavaScript, Typescript, jQuery, Bootstrap, AJAX, JSON, HTML5. CSS3, SASS, PHP, TWIG, etc.",
        "category": "CLT",
        "link": "http://admake.com.br",
        "start": "21/08/2017",
        "end": ""
    },
    {
        "name": "Secretaria da Educação do Estado de São Paulo",
        "logo": "resources/img/jobs/seesp.png",
        "post": "Servidor Público",
        "description": "Servidor público efetivo, atuando com rotinas administrativas, atendimento ao público, elaboração do documentos e planilhas com excel, word, manutenção de equipamentos, etc.",
        "category": "Efetivo",
        "link": "#",
        "start": "01/03/2013",
        "end": "20/08/2017"
    },
    {
        "name": "Monitor de Estrutura de Dados",
        "logo": "http://www.fateclins.edu.br/v4.0/img/logo-fatec10anos-main.png",
        "post": "Estágio monitor de estrutura de dados",
        "description": "Estágio de Ensino Superior atuando como monitor de Estrutura de Dados para a Linguagem C/C++",
        "category": "Estágiário",
        "link": "#",
        "start": "01/08/2016",
        "end": "01/10/2016"
    },
    {
        "name": "TNT Technology",
        "logo": "resources/img/jobs/tnt.png",
        "post": "Estágio como desenvolvedor front-end",
        "description": "Estágio de Ensino Superior atuando com JavaScript, Applets, Bootstrap, etc.",
        "category": "Estágiário",
        "link": "#",
        "start": "01/08/2016",
        "end": "01/10/2016"
    },
    {
        "name": "Fundap - Secretaria de Educação do Estado de São Paulo",
        "logo": "",
        "post": "Estágio como monitor de laboratório de informática",
        "description": "Estágio de Ensino Médio atuando com manutenção em laboratório de informática de escola pública",
        "category": "Estágiário",
        "link": "#",
        "start": "01/08/2016",
        "end": "01/10/2016"
    }
]

var academic = [
    {
        "school": "Faculdade de Tecnologia de Lins - Prof. Antônio Seabra",
        "course": "Análise e Desenvolvimento de Sistemas",
        "description": "O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta, especifica, testa, implanta e mantém sistemas computacionais de informação. Esse profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação desse profissional.",
        "type": "Ensino Superior",
        "start": "02/2013",
        "end": "06/2016"
    },
    {
        "school": "EE 21 de Abril - Lins/SP",
        "course": "Ensino Médio",
        "description": "",
        "type": "Ensino Médio",
        "start": "2008",
        "end": "12/2010"
    },
    {
        "school": "CETEC - Caxias do Sul/RS",
        "course": "Ensino Médio Técnico",
        "description": "Técnico em Informática",
        "type": "Ensino Médio",
        "start": "",
        "end": "12/2009"
    },
    {
        "school": "Udemy",
        "course": "Web Moderno com JavaScript! COMPLETO 2018 + Projetos",
        "description": "13 cursos - JavaScript React VueJS Node HTML CSS Gulp Webpack jQuery Bootstrap e muito mais",
        "type": "Curso",
        "start": "2018",
        "end": ""
    },
    {
        "school": "Udemy",
        "course": "Java Web Developer's masterclass : Java + JSP + JSF",
        "description": "This Course is consist of couple of sub course. This course is designed for a user, who is planning to become a Java web developer. This course is filled with all the required topics which usually a Java Web Developer requires during the application development process.",
        "type": "Curso",
        "start": "2018",
        "end": ""
    },
    {
        "school": "Udemy",
        "course": "Complete Java Masterclass",
        "description": "",
        "type": "Curso",
        "start": "2018",
        "end": ""
    }
]

var languages = [
    {
        "name": "Português",
        "level": "Nativo",
    },
    {
        "name": "Inglês",
        "level": "Técnico",
    }
]
var publishedArticles = [
    {
        "name": "Web Artifacts Generator support IDE Desktop",
        "image": "resources/img/articles/uspsp.jpg",
        "institution": "USP de São Paulo",
        "eventName": "2º Etapa Internacional do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP - SIICUSP",
        "city": "São Paulo",
        "date": "2016",
        "description": "This work presents a web artifacts generator that with modeling, forms and drag and drop elements, facilitates the development of JavaServer Faces (JSF) applications, automating the generator of major artifacts based on this architecture: ManagedBeans, Data Access Object (DAO), User Interfaces and JPA Persistence Entities. This tools uses the concepts of Fluent Interface and Abstract Syntax Tree (AST). A autenticidade deste documento pode ser verificada na página da Universidade de São Paulo http://uspdigital.usp.br/webdoc"
    },
    {
        "name": "Gerador de Artefatos e Projetos Web",
        "image": "resources/img/articles/fateclins.jpg",
        "institution": "Fatec Lins",
        "eventName": "II Congresso de Iniciação Científica e Tecnológica Fatec Lins",
        "city": "Lins",
        "date": "2016",
        "description": "O presente trabalho apresenta uma ferramenta web para auxiliar no desenvolvimento de aplicações JavaServer Faces automatizando a geração de artefatos e projetos, por meio de modelagem de entidades e relacionamentos, preenchimento de formulários e a utilização de elementos Drag-and-Drop. Os artefatos produzidos são baseados na arquitetura JSF: ManagedBeans, Entidades de Persistência, Data Access Object (DAO) e Interfaces de Usuário e tal ferramenta faz uso de conceitos de Fluent Interfaces e Abstract Syntax Tree (AST). Os artefatos produzidos podem ser utilizados em aplicações Web e o seu funcionamento é satisfatório. Palavras-chave:JAVASERVER FACES; GERADOR DE ARTEFATOS; AUTOMATIZAÇÃO DE CÓDIGO; SISTEMAS WEB"
    },
    {
        "name": "Gerador de Artefatos Web compatível com IDE Desktop",
        "image": "resources/img/articles/uspsc.jpg",
        "institution": "USP de São Carlos",
        "eventName": "1º Etapa do 24º Simpósio Internacional de Iniciação Científica e Tecnológica da USP - SIICUSP",
        "city": "São Carlos",
        "date": "2016",
        "description": "Este trabalho apresenta um gerador de artefatos web que, por meio de modelagem, formulários e elementos drag and drop, facilitando o desenvolvimento de aplicações JavaServer Faces (JSF), automatizando a geração dos principais artefatos de uma aplicação baseada nessa arquitetura: ManagedBeans, Data Access Object (DAO), interfaces de usuário e as Entidades de Persistência JPA. Tal ferramenta faz uso de conceitos de Fluent Interface e Abstract Syntax Tree (AST)."
    }

]


/**
 * Components Helper Class
*/
class Components {

    /**
     * Typing text
    */
    static typeWriter(elementId: any, text: string, index: number) {

        if (index < text.length) {

            let string = elementId.html();
            string += text.charAt(index);
            $(elementId).html(string);
            index++;

            setTimeout(function () {
                Components.typeWriter(elementId, text, index);
            }, 100);
        }
    }

    static smoothScrolling() {
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .on("click", function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    }

    static deactivateHeader() {
        if (!$header.hasClass(scrollClass)) {
            $header.addClass(scrollClass);
        }
    }

    static activateHeader() {
        if ($header.hasClass(scrollClass)) {
            $header.removeClass(scrollClass);
        }
    }

    static checkHeader() {
        if ($(window).scrollTop() > activateAtY) {
            Components.deactivateHeader();
        } else {
            Components.activateHeader();
        }
    }

    static findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }

    static changeDevtype(type) {

        $(".other-skills ul").empty();
        $("#skills .sections").empty();
        $("#projects .card-columns").empty();

        $(".other-skills ul, #skills .sections, #projects .card-columns").prepend(`
            <div class="loader">
                <i class="fas fa-spinner fa-spin"></i>
            </div>
        `)

        setTimeout(function () {

            let skillsByTechType = []

            skillsByTechType.push({ "order": 1, "name": "Linguagem de programação", "elements": [] });
            skillsByTechType.push({ "order": 2, "name": "Linguagem web", "elements": [] });
            skillsByTechType.push({ "order": 4, "name": "Java Framework", "elements": [] });
            skillsByTechType.push({ "order": 5, "name": "JavaScript Library", "elements": [] });
            skillsByTechType.push({ "order": 6, "name": "JavaScript Framework", "elements": [] });

            let skillsByType = [];

            skills.forEach(element => {

                if (type == null || (element.type == type || element.type == "Full Stack")) {
                    skillsByType.push(element);
                }

            });

            let t = setInterval(function () {
                let otherSkillsList = $('.other-skills ul li');
                if (otherSkillsList.length == skillsByType.length) {
                    $('.other-skills ul .loader').remove();
                    clearInterval(t);
                }
            }, 500);

            skillsByType.forEach(element => {
                var imageUrl = `resources/img/skills/${element.name.replace("/", "-").toLowerCase()}.png`;
                var image = new Image();
                image.src = imageUrl;
                image.onload = function () {
                    $(".other-skills ul").append(`
                    <li data-name="${element.name}">
                        <a href="#${element.name}">
                            <img src="${imageUrl}"> 
                            <span class="title">${element.name}</span>
                        </a>
                    </li>
                `);
                }
                image.onerror = function () {
                    imageUrl = `resources/img/favicon.png`;
                    $(".other-skills ul").append(`
                    <li class="no-image" data-name="${element.name}">
                        <a href="#${element.name}">
                            <img src="${imageUrl}"> 
                            <span class="title">${element.name}</span>
                        </a>
                    </li>
                `);
                }

                if (element.knowledgePercentage > 0) {
                    let skill = Components.findObjectByKey(skillsByTechType, "name", element.technologyType);
                    if (skill == null) {
                        skill = { "order": 10, "name": element.technologyType, "elements": [] };
                        skillsByTechType.push(skill);
                    }
                    skill.elements.push(element);
                }
            });

            skillsByTechType.sort(Components.compareByOrder);

            let skillsByTechTypeAux = []
            skillsByTechType.forEach(element => {
                if (element.elements.length > 0) {
                    skillsByTechTypeAux.push(element);
                }
            });

            let t2 = setInterval(function () {

                let sections = $('#skills .sections .section');
                    
                if (sections.length == skillsByTechTypeAux.length) {
                    $('#skills .sections .loader').remove();
                    clearInterval(t2);
                }
            }, 500);

            skillsByTechTypeAux.forEach(element => {
                var section = $(`
                        <div class="section">
                            <h5>${element.name}</h5>
                            <ul>
                            </ul>
                        </div>
                    `)
                section.appendTo("#skills .sections");

                element.elements.forEach(skill => {
                    if (type == null || (skill.type == type || skill.type == "Full Stack")) {

                        section.find("ul").append(`
                            <li data-name="${skill.name}">
                                ${ skill.knowledgePercentage < 30 ? skill.name + " (Iniciante)" : '' }
                                ${ skill.knowledgePercentage >= 30 && skill.knowledgePercentage < 60 ? skill.name + " (Intermediário)" : '' }
                                ${ skill.knowledgePercentage >= 60 && skill.knowledgePercentage <= 100 ? skill.name + " (Avançado)" : '' }
                            </li>
                        `);
                    }
                });
            });

            let projectsByType = [];

            projects.forEach(element => {

                if (type == null || (element.type == type || element.type == "Full Stack")) {
                    projectsByType.push(element)
                }

            });

            projectsByType.forEach(element => {

                var imageUrl = `${element.logo}`;
                var image = new Image();
                image.src = imageUrl;

                image.onload = function () {
                    $("#projects .card-columns").append(`
                        <div class="card${element.status == "Em desenvolvimento" ? ' development' : ''}">
                            <img class="card-img-top" src="${element.logo}" alt="${element.name}">
                            ${element.status == "Em desenvolvimento" ? '<span class="badge badge-dark">' + element.status + '</span>' : ''}
                            <div class="card-body">
                                <h5 class="card-title"><a href="${element.link}" target="_blank">${element.name}</a></h5>
                                <p class="card-text">
                                    ${element.description}
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">${element.technologies}</small>
                                </p>
                            </div>
                        </div>
                    `)
                }
                image.onerror = function () {
                    $("#projects .card-columns").append(`
                        <div class="card${element.status == "Em desenvolvimento" ? ' development' : ''}">
                            ${element.status == "Em desenvolvimento" ? '<span class="badge badge-dark">' + element.status + '</span>' : ''}
                            <div class="card-body">
                                <h5 class="card-title"><a href="${element.link}" target="_blank">${element.name}</a></h5>
                                <p class="card-text">
                                    ${element.description}
                                </p>
                                <p class="card-text">
                                    <small class="text-muted">${element.technologies}</small>
                                </p>
                            </div>
                        </div>
                    `)
                }

            });

            let t3 = setInterval(function () {
                var cards = $('#projects .card-columns .card');
                if (cards.length == projectsByType.length) {
                    $('#projects .card-columns .loader').remove();
                    clearInterval(t3);
                }
            }, 500);

            
            let t4 = setInterval(function () {

                var cards = $('#projects .card-columns .card');
                var sections = $('#skills .sections .section');
                var otherSkillsList = $('.other-skills ul li');

                if ( cards.length == projectsByType.length && sections.length == skillsByTechTypeAux.length && otherSkillsList.length == skillsByType.length ) {
                    $(".dev-type-modal").modal('hide')
                    clearInterval(t4);
                }

            }, 500);

            

        }, 3000);



    }

    static compareByKnowledge(a, b) {
        if (a.knowledgePercentage > b.knowledgePercentage)
            return -1;
        if (a.knowledgePercentage < b.knowledgePercentage)
            return 1;
        return 0;
    }

    static compareByOrder(a, b) {
        if (a.order < b.order)
            return -1;
        if (a.order > b.order)
            return 1;
        return 0;
    }

}

var $header = $('#header'),
    scrollClass = 'on-scroll',
    activateAtY = 80;


$(window).scroll(function () {
    Components.checkHeader();
});


$(document).ready(function () {

    var imageUrl = `resources/img/photo.jpg`;
    var image = new Image();
    image.src = imageUrl;
    image.onload = function () {

        // Title effect
        let title = "LUCAS RIBEIRO";
        let timer = title.length * 100;
        Components.typeWriter($("#full-banner .title"), title, 0);

        // Show Photo
        setTimeout(function () {
            $("#full-banner .title img").addClass("show");
        }, timer);

    }

    // Check header position
    Components.checkHeader();

    menu.forEach(element => {
        $("#header .col-menu ul").append(`
            <li>
                <a class="nav-link" href="${element.link}" alt="${element.title}">${element.title}</a>
            </li>
        `)
    });

    social.forEach(element => {
        $("#header .col-social-links ul").append(`
            <li>
                <a class="nav-link target="_blank" href="${element.link}" alt="${element.title}"><i class="${element.icon}"></i></a>
            </li>
        `)
    });

    skills.sort(Components.compareByKnowledge);
    Components.changeDevtype(null);

    jobs.forEach(element => {

        var imageUrl = `${element.logo}`;
        var image = new Image();
        image.src = imageUrl;

        image.onload = function () {
            $("#jobs .card-columns").append(`
                <div class="card ${element.end == '' ? 'border-success' : ''}">
                    <img class="card-img-top" src="${element.logo}" alt="${element.name}">
                    ${element.end == '' ? '<span class="badge badge-success">Atualmente</span>' : ''}
                    <div class="card-body">
                        <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                        <p class="card-text">
                            ${element.description}
                        </p>
                        <p class="card-text">
                            <small class="text-muted">${element.start} ${element.end != '' ? '- ' + element.end : ''}</small>
                        </p>
                    </div>
                </div>
            `)
        }
        image.onerror = function () {
            $("#jobs .card-columns").append(`
                <div class="card ${element.end == '' ? 'border-success' : ''}">
                    ${element.end == '' ? '<span class="badge badge-success">Atualmente</span>' : ''}
                    <div class="card-body">
                        <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                        <p class="card-text">
                            ${element.description}
                        </p>
                        <p class="card-text">
                            <small class="text-muted">${element.start} ${element.end != '' ? '- ' + element.end : ''}</small>
                        </p>
                    </div>
                </div>
            `)
        }

    });

    academic.forEach(element => {
        $("#academic .card-columns").append(`
            <div class="card ${element.end == '' ? 'bg-secondary' : ''}">
                <div class="card-body">
                    <h5 class="card-title">${element.school}</h5>
                    <span class="d-block course">${element.course}</span>
                    <span class="type badge badge-dark">${element.type}</span>
                    <p class="card-text">
                        ${element.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">${element.start} ${element.end != '' ? '- ' + element.end : ''}</small>
                    </p>
                </div>
            </div>
        `)
    });

    languages.forEach(element => {
        $("#languages .card-columns").append(`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">
                        ${element.level}
                    </p>
                </div>
            </div>
        `)
    });

    publishedArticles.forEach(element => {
        $("#articles .card-columns").append(`
            <div class="card">
                <img class="card-img-top" src="${element.image}" alt="${element.name}">
                <div class="card-body">
                    <h5 class="card-title">
                        ${element.name}
                        <small class="d-block text-muted">${element.eventName}</small>
                    </h5>
                    <span class="badge badge-secondary">
                        ${element.institution}
                    </span>
                    <p class="card-text">
                        ${element.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">${element.date}</small>
                    </p>
                </div>
            </div>
        `)
    });

    // Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbar-section' })

    // Mobile Menu
    if ($(window).width() <= 767) {
        $(".category-menu").insertAfter("#header");
        $(".category-menu").removeClass("my-auto col-sm-6");
    }

    $(document).on("click", ".btn-toggle-menu, #navbar-section .nav-link", function () {
        $(".category-menu").toggleClass("active")
    })

    $(document).on("click", ".dev-type a", function (event) {
        event.preventDefault();
        let element = event.currentTarget;
        if ($(element).parent().hasClass("active")) {
            $(".dev-type").removeClass("active")
            Components.changeDevtype(null);
        } else {
            $(".dev-type").removeClass("active")
            $(element).parent().addClass("active")
            $(".dev-type-modal").modal('show')
            Components.changeDevtype($(element).attr("href"));
            $('html, body').animate({
                scrollTop: $("#skills").offset().top
            }, 2000);
        }
    })


    // Call components
    Components.smoothScrolling();

})