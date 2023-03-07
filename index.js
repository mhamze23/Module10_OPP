// Import packages
const inquirer = require("inquirer");
const fs = require("fs");

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Import HTML templates
const addManagerProfile = require('./src/Manager-Profile');
const addEngineerProfile = require('./src/Engineer-Profile');
const addInternProfile = require('./src/Intern-Profile');
const addHeaderCard = require('./src/Header-Card');
const headerCard = require("./src/Header-Card");

// Team members start off as an empty array
const team = [];

// Add manager
const addManager = [
    {
        name: 'name',
        type: 'input',
        message: 'Please provide the name of the manager:'
      },
      {
        name: 'id',
        type: 'input',
        message: 'Please input your ID number?:'
      },
      {
        name: 'email',
        type: 'input',
        message: 'Please provide your email address:'
      },
      {
        name: 'officeNumber',
        type: 'input',
        message: 'Please input your office number?:'
      },
      {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish building my team!'],
        message: 'What would you like to do next?'
      },
      
];

// Add new engineer
const addEngineer = [
    {
      name: 'name',
      type: 'input',
      message: "Please provide the name of the engineer.:"
    },
    {
      name: 'id',
      type: 'input',
      message: "Please input their ID number.:"
    },
    {
      name: 'email',
      type: 'input',
      message: "Please provide their email address.:"
    },
    {
      name: 'github',
      type: 'input',
      message: "Please input the engineer's Github username:"
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Finish building my team!'],
      message: 'What would you like to do next?'
    },
   
  ];

  // Add intern
  const addIntern = [
    {
      name: 'name',
      type: 'input',
      message: "Please provide the name of the intern.:"
    },
    {
      name: 'id',
      type: 'input',
      message: "Please input their ID number.:"
    },
    {
      name: 'email',
      type: 'input',
      message: "Please provide the intern's email address.:"
    },
    {
      name: 'school',
      type: 'input',
      message: "What college or university does the intern attend?"
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Finish building my team!'],
      message: 'What would you like to do next?'
    },
    
   
  ];
  
// Initialize application
ask(addManager); 

// Cycle through questions if member needs to be added
function ask(questionArr) {
    inquirer
      .prompt(questionArr)
      .then((member) => {
        team.push(member);
  
        if (member.upNext === 'Add Engineer') {
          ask(addEngineer);
        } else if (member.upNext === 'Add Intern') {
          ask(addIntern);
        } else {
          createProfiles(team);
        }
      })
      .catch((err) => console.log(err));
  }


function createProfiles(team) {
    
    const profiles = team.map((member) => {
      const { name, id, email } = member;
  
      // If you're adding a manager, ask for office number
      if (member.hasOwnProperty('officeNumber')) {
        const { officeNumber } = member;
        return new Manager(name, id, email, officeNumber);
      }
  
      // if you're adding an engineer, as for github
      if (member.hasOwnProperty('github')) {
        const { github } = member;
        return new Engineer(name, id, email, github);
      }
  
     // if you're adding an intern, ask for school
      if (member.hasOwnProperty('school')) {
        const { school } = member;
        return new Intern(name, id, email, school);
      }
    });
  
    // Generate HTML from the profiles made
    generateHtml(profiles);
  }

  const generateHtml = (profiles) => {
    let profileCards = '';
    profiles.forEach((profile) => {
      if (profile instanceof Manager) {
        const card = addManagerProfile(profile);
        profileCards += card;
      } else if (profile instanceof Engineer) {
        const card = addEngineerProfile(profile);
        profileCards += card;
      } else if (profile instanceof Intern) {
        const card = addInternProfile(profile);
        profileCards += card;
      }
    });
  
    const newHtml = headerCard(profileCards);
  
    writeHtml(newHtml);
  };

// Function to write the final HTML document in dist folder
function writeHtml(newHtml) {
    fs.writeFile('./dist/Team_Profile-Cards.html', newHtml, (err) => {
      if (err) throw err;
      console.log('HTML document successfully created in the /dist folder.');
    });
  };