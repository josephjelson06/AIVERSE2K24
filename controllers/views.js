const path = require('path');
const express = require('express');
const { register } = require('module');
// const db = require('../database/dbConnection');


const renderPage = (page) => (req, res) => {
    res.render(page);
};

const renderPageEvents = (page) => (req, res) => {
    res.render(`templates/${page}`);
};

index = renderPage('index');
explore = renderPage('explore');
team = renderPage('team');
about = renderPage('about_dept');

emperor_conquest = renderPageEvents('emperor_conquest');
giga_gen = renderPageEvents('giga_gen');
beatbots = renderPageEvents('beat_bots');
OptiML = renderPageEvents('opti_ml');
uxplore = renderPageEvents('uxplore');

reg = renderPage('reg');
payment = renderPage('payment');

// registerUser = (req, res) => {
//     const {
//         teamName,
//         name,
//         phone,
//         email,
//         branch,
//         year,
//         event,
//         teamSize,
//         transactionID
//     } = req.body;

//     // Initialize member fields
//     let memberValues = [];
//     for (let i = 2; i <= teamSize; i++) {
//         const memberName = req.body[`memberName${i}`] || null;
//         const memberPhone = req.body[`memberPhone${i}`] || null;
//         const memberEmail = req.body[`memberEmail${i}`] || null;
//         const memberBranch = req.body[`memberBranch${i}`] || null;
//         const memberYear = req.body[`memberYear${i}`] || null;

//         memberValues.push(memberName, memberPhone, memberEmail, memberBranch, memberYear);
//     }

//     // Set null values for members not present (for teams smaller than 4)
//     while (memberValues.length < 20) {
//         memberValues.push(null, null, null, null, null);
//     }

//     // Insert main team data and team members into Teams table
//     const registrationSql = `
//         INSERT INTO Teams (
//             TeamName, Name, PhoneNo, Email, Branch, Year, Event, TeamSize, TransactionID,
            
//             Member2Name, Member2PhoneNo, Member2Email, Member2Branch, Member2Year,
//             Member3Name, Member3PhoneNo, Member3Email, Member3Branch, Member3Year,
//             Member4Name, Member4PhoneNo, Member4Email, Member4Branch, Member4Year
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;
   
//     const registrationValues = [
//         teamName, name, phone, email, branch, year, event, teamSize, transactionID,
//         ...memberValues
//     ];

//     db.query(registrationSql, registrationValues, (err, results) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             res.status(500).send('Error saving data.');
//             return;
//         }

//         res.send('Data saved successfully!');
//     });
// };


module.exports = {
    index,
    explore,
    team,
    about,
    emperor_conquest,
    giga_gen,
    beatbots,
    OptiML,
    uxplore,
    reg,
    payment,
    // registerUser
};
