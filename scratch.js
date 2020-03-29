// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const http = require('http');
var serverResp = [];
var names = [];
var astroNum;
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function howmanyHandler(agent) {
      return new Promise((resolve, reject)=>{
          http.get('http://api.open-notify.org/astros.json', (response)=>{
              response.on('data', (data)=>{
                  serverResp.push(data);
              }).on('end', ()=>{
                var resp = serverResp.toString();
                astroNum = JSON.parse(resp).number;
                if(astroNum > 1){
                  agent.add('There are ' + astroNum + ' astronauts in space.');
                }
                else{
                  agent.add('There is only 1 astronaut in space.');
                }
                JSON.parse(resp).people.forEach((astronaut)=>{
                  agent.add(new Card({
                    title: astronaut
                  }));
                });
                agent.add(new Card({
                  title: `Title: this is a card title`,
        		  imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
                  text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
                  buttonText: 'This is a button',
                  buttonUrl: 'https://assistant.google.com/'
      			})
    )
                resolve();
              });
          });
      });
  }


  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('howmany', howmanyHandler);
  agent.handleRequest(intentMap);
});
