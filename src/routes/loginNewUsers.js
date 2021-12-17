const puppeteer = require('puppeteer');

const users = require('../../db_users.json')

const login = async(req,res) => {
  
    
    let link ='https://focusgroupit.com/groups/a9ed13b7/session/new'

    let {email} = req.body

    loginBot(email,link)



    // const x = Object.keys(users).map(function(_) { return users[_]; })

    //   for(var i = 0; i < users.length; i++) {
      
    //     if(i === 0){
    //       loginBot(x[7].email,link)
    //     } else if ( i === 1){
    //       setTimeout(function(){ loginBot(x[1].email,link) }, 120000)
    //     }else if ( i === 2){
    //       setTimeout(function(){ loginBot(x[2].email,link)  }, 240000)
    //     }else if ( i === 3){
    //       setTimeout(function(){ loginBot(x[3].email,link)  }, 360000)
    //     }else if ( i === 4){
    //       setTimeout(function(){ loginBot(x[4].email,link)  }, 480000)
    //     }else if ( i === 5){
    //       setTimeout(function(){ loginBot(x[5].email,link)  }, 600000)
    //     }else if ( i === 6){
    //       setTimeout(function(){ loginBot(x[6].email,link)  }, 720000)
    //     }else if ( i === 7){
    //       setTimeout(function(){ loginBot(x[7].email,link)  }, 840000)
    //     }else if ( i === 8){
    //       setTimeout(function(){ loginBot(x[8].email,link)  }, 960000)
    //     }else if ( i === 9){
    //       setTimeout(function(){ loginBot(x[9].email,link)  }, 100000)
    //     }else{
    //       console.log(terminei)
    //     }
    //   }        
      
}

async function loginBot(email,link){
  //let link = 'https://focusgroupit.com/groups/a9ed13b7/session/new'
 

  console.log('Realizando Login')
  const browser = await puppeteer.launch({
    headless: false,
  });;
  const page = await browser.newPage();
  await page.goto(link);
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

    }

    await Promise.all([
      await page.click('[type="submit"]'),
      await page.waitForNavigation({
        waitUntil: 'networkidle0',
      }),
      await page.click('a.btn') ,
  ]).catch(e => console.log(e));
    
  }

  await page.waitForNavigation();
  setInterval(function(){ responder() }, await page.waitForNavigation())
};

  module.exports = {
    login
  }