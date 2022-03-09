//variables for app dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//arrays containing prompt questions
const mgrPrompt = [
    {
        type: "input",
        name: "teamName",
        message: "What is your team's name?",
        default: "Dude Team"
    },
    {
        type: "input",
        name: "mgrName",
        message: "What is the team manager name?",
        default: "Bro"
    },
    {
        type: "input",
        name: "mgrID",
        message: "What is the team manager ID?",
        default: 1
    }, 
    {
        type: "input",
        name: "mgrEmail",
        message: "What is the team manager's Email?",
        default: "bro@dudemail.com"
    },
    {
        type: "input",
        name: "mgrOffice",
        message: "What is the team manager's office number?",
        default: 42
    }
]

const engPrompt = [
    {
        type: "input",
        name: "engName",
        message: "What is the engineer's name?",
        default: "Friend"
    },
    {
        type: "input",
        name: "engID",
        message: "What is the engineer's ID?",
        default: 2,
    }, 
    {
        type: "input",
        name: "engEmail",
        message: "What is the engineer's Email?",
        default: "friend@friendlymail.com"
    },
    {
        type: "input",
        name: "engGithub",
        message: "What is the engineer's Github?",
        default: "friendship1"
    },
]

const intPrompt = [
    {
        type: "input",
        name: "intName",
        message: "What is the intern's name?",
        default: "Plato"
    },
    {
        type: "input",
        name: "intID",
        message: "What is the intern's ID?",
        default: 4
    }, 
    {
        type: "input",
        name: "intEmail",
        message: "What is the intern's Email?",
        default: "plato@athens.edu"
    },
    {
        type: "input",
        name: "intSchool",
        message: "What is the intern's school?",
        default: "School of Athens"
    },
]

const addMember = [    
    {
        type: "list",
        name: "newMember",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No Additional Members"],
    },
    
]

//arrays for various empoyee-derived objects
let mngArray = [];
let engArray = [];
let intArray = [];
let team = [];

//Function that builds the cards for the team
async function buildCards(team) {
    let compiledCards = '';
    team.forEach(teamMember => {
        switch (teamMember.getRole()) {
            case "Manager":{ 
                let newCard = 
            `   
                <div class="card col  card-color" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${teamMember.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${teamMember.getRole()}</h6>
                        <p class="card-text">${teamMember.name}'s id is ${teamMember.id}, and their office number is ${teamMember.officeNumber}</p>
                        <a href="mailto:${teamMember.email}" class="card-link">Email</a>
                    </div>
                </div>
            `   
                compiledCards += newCard;
                break;
            }
            case "Engineer":{ 
                let newCard = 
            `   
                <div class="card col card-color" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${teamMember.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${teamMember.getRole()}</h6>
                        <p class="card-text">${teamMember.name}'s id is ${teamMember.id}</p>
                        <a href="mailto:${teamMember.email}" class="card-link">Email</a>
                        <a href="https://github.com/${teamMember.github}" class="card-link">Github</a>
                    </div>
                </div>
            `   
                compiledCards += newCard;
                break;
            }
            case "Intern":{ 
                let newCard = 
            `   
                <div class="card col card-color" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${teamMember.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${teamMember.getRole()}</h6>
                        <p class="card-text">${teamMember.name}'s id is ${teamMember.id}, they are a part of ${teamMember.school}'s coding internship program.</p>
                        <a href="mailto:${teamMember.email}" class="card-link">Email</a>
                    </div>
                </div>
            `   
                compiledCards += newCard;
                break;
            }
        }
    });
    return compiledCards;
} 

async function htmlCompiler(compiledCards) {
    return baseHtml = 
    `<!doctype html>
    <html lang="en">
      <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>Tech Team!</title>
      </head>
      <body>
            <header class="header">
                <h1>Tech Team!</h1>
            </header>
            <main class="container">
                <section class="row team-container">
                    ${compiledCards}
                </section>
            </main>
    
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
        </body>
    </html>
    `
}

async function fileHandler() {
    fs.writeFileSync("./dist/index.html", baseHtml, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("HTML file sucessfully created! YAY!")
        }
    })
}


async function recruitment() {
    
    let increase = await inquirer.prompt(addMember);
    
    switch (increase.newMember) {
        case "Engineer":{ 
            let addEngineer = await inquirer.prompt(engPrompt);
            let newEngineer = new Engineer(addEngineer.engName, addEngineer.engID, addEngineer.engEmail, addEngineer.engGithub);
            engArray.push(newEngineer);
            await recruitment() 
            break}; 
        case "Intern":{
            let addIntern = await inquirer.prompt(intPrompt);
            let newIntern = new Intern (addIntern.intName, addIntern.intID, addIntern.intEmail, addIntern.intSchool);
            intArray.push(newIntern);
            await recruitment ()   
            break};
        case "No Additional Members":
            break;
    }
    return
}

async function teamBuilder() {

    let manager = await inquirer.prompt(mgrPrompt);
    if (manager) {
        let teamMgr = new Manager(manager.mgrName, manager.mgrID, manager.mgrEmail, manager.mgrOffice) 
        mngArray.push(teamMgr);
    }

    await recruitment();

    team = [...mngArray, ...engArray, ...intArray]

    let cards = await buildCards(team);
    await htmlCompiler(cards);
    await fileHandler(baseHtml, cards);
}


teamBuilder();
