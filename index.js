// 3rd parties
require("dotenv").config();
const express = require("express");
const puppeteer = require('puppeteer');

// Application
const fs = require('fs').promises
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const json = require("./package.json");

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json({
    name: json.name,
    version: json.version,
    status: json.status,
  });
});
app.use("/api", routes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});

// async function responderPerguntas(email, nome){
//   const browser = await puppeteer.launch({
//     headless: false,
//   });;
//   const page = await browser.newPage();
//   await page.goto('https://focusgroupit.com/groups/a9ed13b7/participations/join');
//   await page.click('[href="/groups/a9ed13b7/users/new"]');
//   await page.waitForSelector('[name="user[email]"]')
//   await page.type('#user_email', email)
//   await page.type('#user_password', '12345678')
//   await page.type('#user_password_confirmation', '12345678')
//   await page.waitForSelector('#user_terms_of_service')
//   await page.evaluate(() => {
//     document.querySelector("#user_terms_of_service").parentElement.click();
//   });
//   await page.waitForSelector('#user_cookie_policy')
//   await page.evaluate(() => {
//     document.querySelector("#user_cookie_policy").parentElement.click();
//   });
//   await page.click('[type="submit"]')

//   await page.waitForSelector('[name="user[first_name]"]')
//   await page.type('#user_first_name', nome.split(' ')[0])
//   await page.type('#user_last_name', nome.split(' ')[1])
//   await page.click('[type="submit"]')
//   await page.waitForNavigation();
//   console.log('respondendo a p1')  

//   responder()
  
//   async function responder(){
//     if ('[type="checkbox"]') {

//       await page.$$eval( 'input[name="reply[choice_ids][]"]', (checks) => 
//       checks.forEach(c =>c.checked = Math.random() >= 0.5))

//     } else if ('[type="radio"]'){

//         const radios = await page.$$eval('input[name="reply[choice_ids][]"]', inputs => { return inputs.map(input => input.value) })
//         let radiosValue = radios[Math.floor(Math.random()*radios.length)]
//         await page.evaluate( (radiosValue) => {
//           let radio =  document.querySelector(`input[name="reply[choice_ids][]"][value="${radiosValue}"]`);
//           radio.click();
//       },radiosValue);

//     }
//     await page.click('[type="submit"]')
//     await page.waitForNavigation();
//     await page.click('a.btn')
//   }

//   await page.waitForNavigation();
//   setInterval(function(){ responder() }, await page.waitForNavigation())
// }








