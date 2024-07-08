// OpenAI was not allowing me to use their apiKey and wanted me to run a paid account, so I found and used Eden AI api for this chatbot project

// step 1 - initialize chatgpt api

import axios from "axios"
//import prompt from "prompt-sync"()

import { createRequire } from 'module'
import { exit } from "process"
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()

// Bearer key is a public key for test purposes
const authorizationKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTJjMTQ3MjAtNjI4MC00NGRiLWI5YzAtNjQ4YjY3OWM1ZGM2IiwidHlwZSI6ImFwaV90b2tlbiJ9.d5rF_wMNi6qlDs7f77AjcwtXIguBawzFfB2cj9Nryuo"
const apiUrl = "https://api.edenai.run/v2/text/generation"
const providerName = "cohere"



// step 2 - give it messages that have context embedded, giving it a personality

let userMessages = []




// step 3 - define the function to retrieve the api message based on user input

async function sendPrompt() {
    //let currentMessages = [...userMessages]
    

    const options = await {
        method: "POST",
        url: apiUrl,
        headers: {
          authorization: authorizationKey,
        },
        data: {
          providers: providerName,
          text: userMessages,
          temperature: 0.2,
          max_tokens: 250,
        },
      };
      
      axios
        .request(options)
        .then((response) => {
          console.log('\n',response.data.cohere.generated_text)
          getUserInput()
        })
        .catch((error) => {
          console.error(error);
        })
}


// step 4 - create a run function that will in turn run the user prompt function 

async function run() {
    getUserInput()
}


// step 5  -  create a function to give the user a promt

function getUserInput() {

    if ( userMessages = prompt(console.log("=======\n", 'How would you like to respond? '))) {
        sendPrompt()
    }
    
    else if (userMessages === 0) {
      exit
    } 
    else if (userMessages === "") {
      getUserInput()
    }
    
}


run()