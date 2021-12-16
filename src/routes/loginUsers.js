// Application
const puppeteer = require('puppeteer');
const users = require('../../db_users.json')

const login = async(req,res) => {

    let {link} = req.body

    const x = Object.keys(users).map(function(_) { return users[_]; })

      for(var i = 0; i < users.length; i++) {
      
        if(i === 0){
          loginUser1(x[6].email,link)
        } else if ( i === 1){
          setTimeout(function(){ loginUser2(x[1].email,link) }, 5000000)
        }else if ( i === 2){
          setTimeout(function(){ loginUser3(x[2].email,link)  }, 240000)
        }else if ( i === 3){
          setTimeout(function(){ loginUser4(x[3].email,link)  }, 360000)
        }else if ( i === 4){
          setTimeout(function(){ loginUser5(x[4].email,link)  }, 480000)
        }else if ( i === 5){
          setTimeout(function(){ loginUser6(x[5].email,link)  }, 600000)
        }else if ( i === 6){
          setTimeout(function(){ loginUser7(x[6].email,link)  }, 720000)
        }else if ( i === 7){
          setTimeout(function(){ loginUser8(x[7].email,link)  }, 840000)
        }else if ( i === 8){
          setTimeout(function(){ loginUser9(x[8].email,link)  }, 960000)
        }else if ( i === 9){
          setTimeout(function(){ loginUser10(x[9].email,link)  }, 100000)
        }
                
      }

  async function loginUser1(email,link){


        
      console.log(`${email}  realizando login`)

          const browser = await puppeteer.launch({
              headless: false,
            })
            const page = await browser.newPage()
            await page.goto(link+tableCell04Val, {waitUntil: 'load', timeout: 0})
            await page.waitForSelector('[name=email]')
            await page.type('#email', email)
            await page.type('#password', '12345678')
            await page.click('[type="submit"]')
            await page.waitForNavigation()
            console.log('respondendo...')   
        
            responder()
        
            async function responder(){
              if ('[type="checkbox"]') {
        
                await page.$$eval( 'input[name="reply[choice_ids][]"]', (checks) => 
                checks.forEach(c =>c.checked = Math.random() >= 0.5))
                await page.click('[type="submit"]')
              await page.waitForNavigation()
              await page.click('a.btn')
        
              } else if ('[type="radio"]'){
        
                  const radios = await page.$$eval('input[name="reply[choice_ids][]"]', inputs => { return inputs.map(input => input.value) })
                  let radiosValue = radios[Math.floor(Math.random()*radios.length)]
                  await page.evaluate( (radiosValue) => {
                    let radio =  document.querySelector(`input[name="reply[choice_ids][]"][value="${radiosValue}"]`)
                    radio.click()
                    
                },radiosValue)
                await page.click('[type="submit"]')
              await page.waitForNavigation()
              // page.evaluate(()=>{
              //   let button = document.getElementsByClassName()
              // })
              await page.click('a.btn')
        
              } 
              
            }
        
            await page.waitForNavigation()
              setInterval(function(){ 
                responder()
                .then(console.log('aqui'))
                .catch(err => {
                  throw new Error(err)
                }) 
              }, await page.waitForNavigation())

  }



}
        

    module.exports = {
        login,
    }