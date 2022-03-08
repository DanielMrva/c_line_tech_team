const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const { exit } = require("process");

/**
 * Function Run though mgr prompt
 *  new manager 
 *  function call  
 */

const mgrPrompt = [
    {
        type: "input",
        name: "teamName",
        message: "What is your team's name?",
    },
    {
        type: "input",
        name: "mgrName",
        message: "What is the team manager name?",
    },
    {
        type: "input",
        name: "mgrID",
        message: "What is the team manager ID?",
    }, 
    {
        type: "input",
        name: "mgrEmail",
        message: "What is the team manager's Email?",
    },
    {
        type: "input",
        name: "mgrOffice",
        message: "What is the team manager's office number?",
    },
]

const engPrompt = [
    {
        type: "input",
        name: "engName",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "engID",
        message: "What is the engineer's ID?",
    }, 
    {
        type: "input",
        name: "engEmail",
        message: "What is the engineer's Email?",
    },
    {
        type: "input",
        name: "engGithub",
        message: "What is the engineer's Github?",
    },
]

const intPrompt = [
    {
        type: "input",
        name: "ingName",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "ingID",
        message: "What is the intern's ID?",
    }, 
    {
        type: "input",
        name: "intEmail",
        message: "What is the intern's Email?",
    },
    {
        type: "input",
        name: "intSchool",
        message: "What is the intern's school?",
    },
]

const addMember = {
    type: "list",
    name: "addMember",
    message: "Who else would you like to add?",
    choices: ["Engineer", "Intern", "No additional members."]
}

const init = () => {
    teamBuild
}

// const teamPrompt = (content) => {
//     inquirer.prompt(content).then(buildTeam()).then((answers) => {
//         answersArray = answers;
//         exitPrompt(answers);
//     });
// };

// function exitPrompt(answers) {
//     console.log(answers)
// }


// function buildTeam() {
//     inquirer.prompt(addMember).then((answers) => {
//         switch (answers.addMember) {
//             case "Engineer":
//                 teamPrompt(engPrompt);
//                 break;
//             case "Intern":
//                 teamPrompt(intPrompt);
//                 break;
//             case "No additional members.":
//                 exitPrompt(answers);
//         }
//     })
//     return answers;
// }



// teamPrompt(mgrPrompt);