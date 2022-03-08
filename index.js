const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const { exit } = require("process");

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

const baseHtml = 
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>${teamName}</title>
  </head>
  <body>
    <h1>${teamName}</h1>
        <main class="container">
            <section class="row team-container">
                ${compiledCards}
            </section>
        </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html>
`
let compiledCards =+ newCard;


switch (employed.getRole()) {
    case "Manager":
        let newCard = 
            `
            <div class="card col" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{nameX}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>
            `
        break;

    default:
        break;
}

let newCard = 
`
<div class="card col" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{nameX}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`
let team = [];
let mngArray = [];
let engArray = [];
let intArray = [];

async function recruitment() {
    
    let increase = await inquirer.prompt(addMember);
    
    switch (increase.newMember) {
        case "Engineer":{ 
            let addEngineer = await inquirer.prompt(engPrompt);
            let newEngineer = new Engineer(addEngineer.engName, addEngineer.engID, addEngineer.engEmail, addEngineer.engGithub);
            engArray.push(newEngineer);
            console.log(engArray);
            await recruitment() 
            break}; 
        case "Intern":{
            let addIntern = await inquirer.prompt(intPrompt);
            let newIntern = new Intern (addIntern.intName, addIntern.intID, addIntern.intEmail, addIntern.intSchool);
            intArray.push(newIntern);
            console.log(intArray);
            await recruitment ()   
            break};
        case "No Additional Members":
            console.log(engArray);
            console.log(intArray);
            
            break;
    }
    return
}

async function teamBuilder() {

    let manager = await inquirer.prompt(mgrPrompt);
    if (manager) {
        let teamName = manager.teamName;
        let teamMgr = new Manager(manager.mgrName, manager.mgrID, manager.mgrEmail, manager.mgrOffice) 
        console.log(teamMgr);
        team.push(teamName);
        mngArray.push(teamMgr);
    }

    await recruitment();

}


teamBuilder();
