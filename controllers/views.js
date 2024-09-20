const path = require('path');
const express = require('express');
const { register } = require('module');
const db = require('../database/dbConnection');


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

registerUser = (req, res) => {

    // console.log('before: ',req.body);

    // console.log('********************************************************');

    const {
        teamName,
        name,
        phone,
        email,
        branch,
        year,
        event,
        teamSize,
        transactionID,
        amount
    } = req.body;

    // // Log the request body to verify data
    // console.log('Request body:', req.body);

    // Initialize member fields
    let memberValues = [];

    // Start from member 2 since the leader's data is already captured
    for (let i = 2; i <= teamSize; i++) {
        const memberName = req.body[`name${i}`];
        const memberPhone = req.body[`phone${i}`];
        const memberEmail = req.body[`email${i}`];
        const memberBranch = req.body[`branch${i}`];
        const memberYear = req.body[`year${i}`];

        // Push the values, ensuring all values are passed correctly
        memberValues.push(
            memberName || null,
            memberPhone || null,
            memberEmail || null,
            memberBranch || null,
            memberYear || null
        );

        // console.log('membername',memberName);
        // console.log('memberphone',memberPhone);
        // console.log('memberemail',memberEmail);
        // console.log('memberbranch',memberBranch);
        // console.log('memberyear',memberYear);
    }

    // console.log(memberValues);

    // Fill in null values for missing team members if less than 4 members
    while (memberValues.length < 15) { // 3 members x 5 fields
        memberValues.push(null, null, null, null, null);
    }

    // Insert the main team data and team members into Teams table
    const registrationSql = `
        INSERT INTO Teams (
            TeamName, LeaderName, PhoneNo, Email, Branch, Year, Event, TeamSize, TransactionID, Amount,
            Member2Name, Member2PhoneNo, Member2Email, Member2Branch, Member2Year,
            Member3Name, Member3PhoneNo, Member3Email, Member3Branch, Member3Year,
            Member4Name, Member4PhoneNo, Member4Email, Member4Branch, Member4Year
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9,
            $10, $11, $12, $13, $14,
            $15, $16, $17, $18, $19,
            $20, $21, $22, $23, $24, $25
        )
    `;

    // Merge leader and member values into a single array
    const registrationValues = [
        teamName, name, phone, email, branch, year, event, teamSize, transactionID, amount,
        ...memberValues
    ];

    // Log the registration values for debugging

    // console.log('Registration values:', registrationValues);

    // Execute the query
    db.query(registrationSql, registrationValues, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error saving data.');
            return;
        }

        res.send('Data saved successfully!');
    });
};



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
    registerUser
};
