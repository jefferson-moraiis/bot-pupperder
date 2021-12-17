const puppeteer = require('puppeteer');

const users = require('../../db_users.json')

const login = async(req,res) => {
  
    
    let link ='https://focusgroupit.com/groups/90bd601b/session/new'

    // let {email} = req.body

    // loginBot(email,link)

    const x = Object.keys(users).map(function(_) { return users[_]; })

      for(var i = 0; i < users.length; i++) {
      
        if(i === 0){
          loginBot(x[7].email,link)
        } else if ( i === 1){
          setTimeout(function(){ loginBot(x[1].email,link) }, 90000)
        }else if ( i === 2){
          setTimeout(function(){ loginBot(x[2].email,link)  }, 180000)
        }else if ( i === 3){
          setTimeout(function(){ loginBot(x[3].email,link)  }, 270000)
        }else if ( i === 4){
          setTimeout(function(){ loginBot(x[4].email,link)  }, 360000)
        }else if ( i === 5){
          setTimeout(function(){ loginBot(x[5].email,link)  }, 450000)
        }else if ( i === 6){
          setTimeout(function(){ loginBot(x[6].email,link)  }, 540000)
        }else if ( i === 7){
          setTimeout(function(){ loginBot(x[7].email,link)  }, 630000)
        }else if ( i === 8){
          setTimeout(function(){ loginBot(x[8].email,link)  }, 720000)
        }else if ( i === 9){
          setTimeout(function(){ loginBot(x[9].email,link)  }, 810000)
        }else if(i === 10){
          setTimeout(function(){ loginBot(x[10].email,link)}, 900000)
        }else if ( i === 11){
          setTimeout(function(){ loginBot(x[11].email,link)}, 990000)
        }else if ( i === 12){
          setTimeout(function(){loginBot(x[12].email,link)}, 1080000)
        }else if ( i === 13){
          setTimeout(function(){loginBot(x[13].email,link)}, 1170000)
        }else if ( i === 14){
          setTimeout(function(){loginBot(x[14].email,link)}, 1260000)
        }else if ( i === 15){
          setTimeout(function(){loginBot(x[15].email,link)}, 1350000)
        }else if ( i === 16){
          setTimeout(function(){loginBot(x[16].email,link)}, 1440000)
        }else if ( i === 17){
          setTimeout(function(){loginBot(x[17].email,link)}, 1530000)
        }else if ( i === 18){
          setTimeout(function(){loginBot(x[18].email,link)}, 1620000)
        }else if ( i === 19){
          setTimeout(function(){loginBot(x[19].email,link)}, 1710000)
        } else if(i === 20){
          setTimeout(function(){ loginBot(x[20].email,link)}, 1800000)
        }else if ( i === 21){
          setTimeout(function(){ loginBot(x[21].email,link)}, 1890000)
        }else if ( i === 22){
          setTimeout(function(){loginBot(x[22].email,link)}, 1980000)
        }else if ( i === 23){
          setTimeout(function(){loginBot(x[23].email,link)}, 2070000)
        }else if ( i === 24){
          setTimeout(function(){loginBot(x[24].email,link)}, 2160000)
        }else if ( i === 25){
          setTimeout(function(){loginBot(x[25].email,link)}, 2250000)
        }else if ( i === 26){
          setTimeout(function(){loginBot(x[26].email,link)}, 2430000)
        }else if ( i === 27){
          setTimeout(function(){loginBot(x[27].email,link)}, 2520000)
        }else if ( i === 28){
          setTimeout(function(){loginBot(x[28].email,link)}, 2610000)
        }else if ( i === 29){
          setTimeout(function(){loginBot(x[29].email,link)}, 2700000)
        }else if(i === 30){
          setTimeout(function(){ loginBot(x[30].email,link)}, 2790000)
        }else if ( i === 31){
          setTimeout(function(){ loginBot(x[31].email,link)}, 2880000)
        }else if ( i === 32){
          setTimeout(function(){loginBot(x[32].email,link)}, 2970000)
        }else if ( i === 33){
          setTimeout(function(){loginBot(x[33].email,link)}, 3060000)
        }else if ( i === 34){
          setTimeout(function(){loginBot(x[34].email,link)}, 3150000)
        }else if ( i === 35){
          setTimeout(function(){loginBot(x[35].email,link)}, 3240000)
        }else if ( i === 36){
          setTimeout(function(){loginBot(x[36].email,link)}, 3330000)
        }else if ( i === 37){
          setTimeout(function(){loginBot(x[37].email,link)}, 3420000)
        }else if ( i === 38){
          setTimeout(function(){loginBot(x[38].email,link)}, 3510000)
        }else if ( i === 39){
          setTimeout(function(){loginBot(x[39].email,link)}, 3600000)
        }else if(i === 40){
          setTimeout(function(){ loginBot(x[40].email,link)},3690000)
        }else if ( i === 41){
          setTimeout(function(){ loginBot(x[41].email,link)}, 3780000)
        }else if ( i === 42){
          setTimeout(function(){loginBot(x[42].email,link)}, 3870000)
        }else if ( i === 43){
          setTimeout(function(){loginBot(x[43].email,link)}, 3960000)
        }else if ( i === 44){
          setTimeout(function(){loginBot(x[44].email,link)}, 4050000)
        }else if ( i === 45){
          setTimeout(function(){loginBot(x[45].email,link)}, 4140000)
        }else if ( i === 46){
          setTimeout(function(){loginBot(x[46].email,link)}, 4230000)
        }else if ( i === 47){
          setTimeout(function(){loginBot(x[47].email,link)}, 4320000)
        }else if ( i === 48){
          setTimeout(function(){loginBot(x[48].email,link)}, 4410000)
        }else if ( i === 49){
          setTimeout(function(){loginBot(x[49].email,link)}, 4500000)
        }else if(i === 50){
          setTimeout(function(){loginBot(x[50].email,link)},  4590000)
        }else{
          return res.status(200).send('Por favor verifique se tudo ocorreu bem!')
        }
      }        
      
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
  setInterval(function(){ responder() }, 5000)
  console.log('respondendo')  
  async function responder(){
    
    try {
      if ('[type="checkbox"]') {

        page.$$eval( 'input[name="reply[choice_ids][]"]', (checks) => 
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
    catch (e) {
      console.log(e)
    } 
  }

  await page.waitForNavigation();
  setInterval(function(){ responder() }, 3000)
};

  module.exports = {
    login
  }
  