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
    }

]

var social = [
    {

        "title": "Facebook",
        "link": "facebook.com/luscanck",
        "icon": "fab fa-facebook-f"
    },
    {

        "title": "Instagram",
        "link": "instagram.com/luscanck",
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
        "experience": "3 anos"
    },
    {

        "name": "JavaScript",
        "type": "Front-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": "1 ano"
    },
    {

        "name": "TypescriptScript",
        "type": "Full Stack",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": "1 ano"
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
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSF",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": "2"
    },
    {

        "name": "JSP",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 50,
        "description": "",
        "experience": "0"
    },
    {

        "name": "Node.js",
        "type": "Back-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 50,
        "description": "",
        "experience": "0"
    },
    {

        "name": "Angular",
        "type": "Front-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 20,
        "description": "",
        "experience": "1"
    },
    {

        "name": "React",
        "type": "Front-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 10,
        "description": "",
        "experience": "2 meses"
    },
    {

        "name": "React",
        "type": "Front-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 10,
        "description": "",
        "experience": "2 meses"
    },
    {

        "name": "jQuery",
        "type": "Front-end",
        "technologyType": "Javascript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": "3"
    },
    {

        "name": "Bootstrap",
        "type": "Front-end",
        "technologyType": "Javascript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": "3"
    }
]

var projects = [
    {
        "name": "FARMUP",
        "technologies": "Java, JSF, Hibernate, CriteriaAPI, JPA, Bootstrap4, SASS, XHMTL",
        "description": "teste",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "Em desenvolvimento"
    },
    {
        "name": "UCODE",
        "technologies": "Java, JSF, Hibernate, CriteriaAPI, JPA, Bootstrap4, SASS, XHMTL",
        "description": "teste",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "Em desenvolvimento"
    },
    {
        "name": "MAGE API",
        "technologies": "JavaScript, Typescript, React, JSON",
        "description": "teste",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "Em desenvolvimento"
    },
    {
        "name": "eXparser",
        "technologies": "Java",
        "description": "teste",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "Concluído"
    },
    {
        "name": "ProjectParser",
        "technologies": "Java",
        "description": "teste",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "concluído"
    },
    {
        "name": "Berve Enxovais",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "teste",
        "category": "Admake",
        "link": "http://teste.com",
        "status": "concluído"
    },
]

var jobs = [
    {
        "name": "Admake",
        "post": "Desenvolvedor front-end",
        "description": "",
        "category": "CLT",
        "link": "http://admake.com.br",
        "start": "21/08/2017",
        "end": ""
    }
]

var academic = [
    {
        "school": "Faculdade de Tecnologia de Lins - Prof. Antônio Seabra",
        "course": "Análise e Desenvolvimento de Sistemas",
        "description": "",
        "type": "Ensino Superior",
        "workload": 2400,
        "start": "02/2013",
        "end": "06/2016"
    },
    {
        "school": "Udemy",
        "course": "Front-end",
        "description": "",
        "type": "Curso",
        "workload": 80,
        "start": "2018",
        "end": ""
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

}

var $header = $('#header'),
    scrollClass = 'on-scroll',
    activateAtY = 80;


$(window).scroll(function () {
    Components.checkHeader();
});

$(document).ready(function () {

    // Title effect
    let title = "LUCAS RIBEIRO";
    let timer = title.length * 100;
    Components.typeWriter($("#full-banner .title"), title, 0);

    // Show Photo
    setTimeout(function () {
        $("#full-banner .title img").addClass("show");
    }, timer);

    // Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbar-section' })

    // Call components
    Components.smoothScrolling();

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
                <a class="nav-link" href="${element.link}" alt="${element.title}"><i class="${element.icon}"></i></a>
            </li>
        `)
    });


    let skillsByTechType = []
    skills.forEach(element => {

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

        let skill = Components.findObjectByKey(skillsByTechType, "name", element.technologyType);
        if (skill == null) {
            skill = { "name": element.technologyType, "elements": [] };
            skillsByTechType.push(skill);
        }
        skill.elements.push(element);

    });

    skillsByTechType.forEach(element => {

        var section = $(`
            <div class="section">
                <h5>${element.name}</h5>
                <ul>
                </ul>
            </div>
        `)
        section.appendTo("#skills .sections");

        element.elements.forEach(skill => {

            section.find("ul").append(`
                <li data-name="${skill.name}">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${skill.knowledgePercentage}%" aria-valuenow="${skill.knowledgePercentage}" aria-valuemin="0" aria-valuemax="100">
                            ${skill.name}
                        </div>
                    </div>
                </li>
            `);
        });

    });

    projects.forEach(element => {

        var imageUrl = `resources/img/skills/${element.name.replace("/", "-").toLowerCase()}.png`;
        var image = new Image();
        image.src = imageUrl;
        
        image.onload = function () {
            $("#projects .card-columns").append(`
                <div class="card">
                    <img class="card-img-top" src="imageUrl" alt="${element.name}">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
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
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
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

    jobs.forEach(element => {
        $("#jobs .card-columns").append(`
            <div class="card ${element.end == '' ? 'bg-success' : ''}">
                <div class="card-body">
                    <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                    <p class="card-text">
                        ${element.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">${element.start}</small>
                    </p>
                </div>
            </div>
        `)
    });

    academic.forEach(element => {
        $("#academic .card-columns").append(`
            <div class="card ${element.end == '' ? 'bg-secondary' : ''}">
                <div class="card-body">
                    <h5 class="card-title"><a href="${element.link}">${element.school}</a></h5>
                    <span class="course">${element.course}</span>
                    <span class="type">${element.type}</span>
                    <span class="workload">${element.workload}</span>
                    <p class="card-text">
                        ${element.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">${element.start}</small>
                    </p>
                </div>
            </div>
        `)
    });

})