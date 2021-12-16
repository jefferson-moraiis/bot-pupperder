// Application
const puppeteer = require('puppeteer');
const users = require('../../db_users.json')

const login = async(req,res) => {

    let link = 'https://focusgroupit.com/groups/a9ed13b7/session/new'

    const x = Object.keys(users).map(function(_) { return users[_]; })

      for(var i = 0; i < users.length; i++) {
      
        if(i === 0){
          loginUser(x[0].email,link)
        } else if ( i === 1){
          setTimeout(function(){ loginUser(x[1].email,link) }, 120000)
        }else if ( i === 2){
          setTimeout(function(){ loginUser(x[2].email,link)  }, 240000)
        }else if ( i === 3){
          setTimeout(function(){ loginUser(x[3].email,link)  }, 360000)
        }else if ( i === 4){
          setTimeout(function(){ loginUser(x[4].email,link)  }, 480000)
        }else if ( i === 5){
          setTimeout(function(){ loginUser(x[5].email,link)  }, 600000)
        }else if ( i === 6){
          setTimeout(function(){ loginUser(x[6].email,link)  }, 720000)
        }else if ( i === 7){
          setTimeout(function(){ loginUser(x[7].email,link)  }, 840000)
        }else if ( i === 8){
          setTimeout(function(){ loginUser(x[8].email,link)  }, 960000)
        }else if ( i === 9){
          setTimeout(function(){ loginUser(x[9].email,link)  }, 100000)
        }else{
          console.log(terminei)
        }
                
      }

  async function loginUser(email,link){

    console.log('Realizando Login')
    const browser = await puppeteer.launch({
      headless: false,
    });;
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0); 
    await page.goto(link);
    await page.waitForSelector('[name=email]')
    await page.type('#email', email)
    await page.type('#password', '12345678')
    await page.click('[type="submit"]')
    await page.waitForNavigation()
    setTimeout(() => {
      responder()
    }, 3000);
   
    async function responder(){

      console.log('começando a responder')
      const radios = await page.$$eval('input[name="reply[choice_ids][]"]', 
      inputs => { return inputs.map(input => input.value)})
      const checks = await page.$$eval('input[name="reply[choice_ids][]"]', 
      inputs => { return inputs.map(input => input.value)})


      if ( checks.length === 0){

        console.log('usuario ja respondeu todas perguntas!')
        await browser.close()

      } else if ('[type="checkbox"]') {
        console.log('respondendo ...')
            await page.$$eval( 'input[name="reply[choice_ids][]"]', (checks) => 
            checks.forEach(c =>c.checked = Math.random() >= 0.5))
            await page.click('[type="submit"]')
            await page.waitForNavigation()
            await page.click('a.btn')


      } else if('[type="radio"]'){
        console.log('respondendo ...')
        let radiosValue = radios[Math.floor(Math.random()*radios.length)]
        await page.evaluate( (radiosValue) => {
          let radio =  document.querySelector(`input[name="reply[choice_ids][]"][value="${radiosValue}"]`);
          radio.click();
      },radiosValue);
      } 

      await page.waitForNavigation();
      responder() 
    }
  }
}
login()
    module.exports = {
        login,
    }