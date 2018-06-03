/**
 *
 * PORTFOLIO TYPESCRIPT
 *
 * COMPILER: tsc -watch --outDir ..\ .\default.ts
 *
 *
*/
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
];
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
];
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
];
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
];
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
];
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
];
/**
 * Components Helper Class
*/
var Components = /** @class */ (function () {
    function Components() {
    }
    /**
     * Typing text
    */
    Components.typeWriter = function (elementId, text, index) {
        if (index < text.length) {
            var string = elementId.html();
            string += text.charAt(index);
            $(elementId).html(string);
            index++;
            setTimeout(function () {
                Components.typeWriter(elementId, text, index);
            }, 100);
        }
    };
    Components.smoothScrolling = function () {
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .on("click", function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                    location.hostname == this.hostname) {
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
                        }
                        else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
    };
    Components.deactivateHeader = function () {
        if (!$header.hasClass(scrollClass)) {
            $header.addClass(scrollClass);
        }
    };
    Components.activateHeader = function () {
        if ($header.hasClass(scrollClass)) {
            $header.removeClass(scrollClass);
        }
    };
    Components.checkHeader = function () {
        if ($(window).scrollTop() > activateAtY) {
            Components.deactivateHeader();
        }
        else {
            Components.activateHeader();
        }
    };
    Components.findObjectByKey = function (array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    };
    return Components;
}());
var $header = $('#header'), scrollClass = 'on-scroll', activateAtY = 80;
$(window).scroll(function () {
    Components.checkHeader();
});
$(document).ready(function () {
    // Title effect
    var title = "LUCAS RIBEIRO";
    var timer = title.length * 100;
    Components.typeWriter($("#full-banner .title"), title, 0);
    // Show Photo
    setTimeout(function () {
        $("#full-banner .title img").addClass("show");
    }, timer);
    // Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbar-section' });
    // Call components
    Components.smoothScrolling();
    // Check header position
    Components.checkHeader();
    menu.forEach(function (element) {
        $("#header .col-menu ul").append("\n            <li>\n                <a class=\"nav-link\" href=\"" + element.link + "\" alt=\"" + element.title + "\">" + element.title + "</a>\n            </li>\n        ");
    });
    social.forEach(function (element) {
        $("#header .col-social-links ul").append("\n            <li>\n                <a class=\"nav-link\" href=\"" + element.link + "\" alt=\"" + element.title + "\"><i class=\"" + element.icon + "\"></i></a>\n            </li>\n        ");
    });
    var skillsByTechType = [];
    skills.forEach(function (element) {
        var imageUrl = "resources/img/skills/" + element.name.replace("/", "-").toLowerCase() + ".png";
        var image = new Image();
        image.src = imageUrl;
        image.onload = function () {
            $(".other-skills ul").append("\n                <li data-name=\"" + element.name + "\">\n                    <a href=\"#" + element.name + "\">\n                        <img src=\"" + imageUrl + "\"> \n                        <span class=\"title\">" + element.name + "</span>\n                    </a>\n                </li>\n            ");
        };
        image.onerror = function () {
            imageUrl = "resources/img/favicon.png";
            $(".other-skills ul").append("\n                <li class=\"no-image\" data-name=\"" + element.name + "\">\n                    <a href=\"#" + element.name + "\">\n                        <img src=\"" + imageUrl + "\"> \n                        <span class=\"title\">" + element.name + "</span>\n                    </a>\n                </li>\n            ");
        };
        var skill = Components.findObjectByKey(skillsByTechType, "name", element.technologyType);
        if (skill == null) {
            skill = { "name": element.technologyType, "elements": [] };
            skillsByTechType.push(skill);
        }
        skill.elements.push(element);
    });
    skillsByTechType.forEach(function (element) {
        var section = $("\n            <div class=\"section\">\n                <h5>" + element.name + "</h5>\n                <ul>\n                </ul>\n            </div>\n        ");
        section.appendTo("#skills .sections");
        element.elements.forEach(function (skill) {
            section.find("ul").append("\n                <li data-name=\"" + skill.name + "\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: " + skill.knowledgePercentage + "%\" aria-valuenow=\"" + skill.knowledgePercentage + "\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                            " + skill.name + "\n                        </div>\n                    </div>\n                </li>\n            ");
        });
    });
    projects.forEach(function (element) {
        var imageUrl = "resources/img/skills/" + element.name.replace("/", "-").toLowerCase() + ".png";
        var image = new Image();
        image.src = imageUrl;
        image.onload = function () {
            $("#projects .card-columns").append("\n                <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"imageUrl\" alt=\"" + element.name + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"" + element.link + "\">" + element.name + "</a></h5>\n                        <p class=\"card-text\">\n                            " + element.description + "\n                        </p>\n                        <p class=\"card-text\">\n                            <small class=\"text-muted\">" + element.technologies + "</small>\n                        </p>\n                    </div>\n                </div>\n            ");
        };
        image.onerror = function () {
            $("#projects .card-columns").append("\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"" + element.link + "\">" + element.name + "</a></h5>\n                        <p class=\"card-text\">\n                            " + element.description + "\n                        </p>\n                        <p class=\"card-text\">\n                            <small class=\"text-muted\">" + element.technologies + "</small>\n                        </p>\n                    </div>\n                </div>\n            ");
        };
    });
    jobs.forEach(function (element) {
        $("#jobs .card-columns").append("\n            <div class=\"card " + (element.end == '' ? 'bg-success' : '') + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><a href=\"" + element.link + "\">" + element.name + "</a></h5>\n                    <p class=\"card-text\">\n                        " + element.description + "\n                    </p>\n                    <p class=\"card-text\">\n                        <small class=\"text-muted\">" + element.start + "</small>\n                    </p>\n                </div>\n            </div>\n        ");
    });
    academic.forEach(function (element) {
        $("#academic .card-columns").append("\n            <div class=\"card " + (element.end == '' ? 'bg-secondary' : '') + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><a href=\"" + element.link + "\">" + element.school + "</a></h5>\n                    <span class=\"course\">" + element.course + "</span>\n                    <span class=\"type\">" + element.type + "</span>\n                    <span class=\"workload\">" + element.workload + "</span>\n                    <p class=\"card-text\">\n                        " + element.description + "\n                    </p>\n                    <p class=\"card-text\">\n                        <small class=\"text-muted\">" + element.start + "</small>\n                    </p>\n                </div>\n            </div>\n        ");
    });
});
