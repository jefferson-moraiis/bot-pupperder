// Application
const puppeteer = require('puppeteer');
  

async function loginBot(req,res){

    let {email}= req.body
    console.log(`${email}  realizando login`)

    try {
        const browser = await puppeteer.launch({
            headless: false,
          });;
          const page = await browser.newPage();
          await page.goto('https://focusgroupit.com/groups/c5178c97/session/new');
          await page.waitForSelector('[name=email]')
          await page.type('#email', email)
          await page.type('#password', '12345678')
          await page.click('[type="submit"]')
          await page.waitForNavigation();
          console.log('respondendo a p1')  
      
          responder()
          
          async function responder(){
            if ('[type="checkbox"]') {
      
              await page.$$eval( 'input[name="reply[choice_ids][]"]', (checks) => 
              checks.forEach(c =>c.checked = Math.random() >= 0.5))
      
            } else if ('[type="radio"]'){
      
                const radios = await page.$$eval('input[name="reply[choice_ids][]"]', inputs => { return inputs.map(input => input.value) })
                let radiosValue = radios[Math.floor(Math.random()*radios.length)]
                await page.evaluate( (radiosValue) => {
                  let radio =  document.querySelector(`input[name="reply[choice_ids][]"][value="${radiosValue}"]`);
                  radio.click();
              },radiosValue);
      
            }else{
                await page.close()
            }
            await page.click('[type="submit"]')
            await page.waitForNavigation();
            await page.click('a.btn')
          }
      
          await page.waitForNavigation();
          setInterval(function(){ responder() }, await page.waitForNavigation())
          
          res.status(200).json('efetuando o login e respondendo a perguntas')
     }
     catch(error){
        await page.close()
    }
}

    module.exports = {
        loginBot
    }