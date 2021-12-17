// 3rd parties
const puppeteer = require('puppeteer');

// Application
const users = require('../../db_users.json')

const cadastroBot = async ()=>{


  const x = Object.keys(users).map(function(_) { return users[_]; })

    for(let i = 0; i < users.length; i++) {

      if(i === 0){
        createUser(x[0].email,x[0].first_name,x[0].last_name)
      }
      else if ( i === 1){
        setTimeout(function(){ createUser(x[1].email,x[1].first_name,x[1].last_name)}, 10000)
      }else if ( i === 2){
        setTimeout(function(){createUser(x[2].email,x[2].first_name,x[2].last_name)}, 20000)
      }else if ( i === 3){
        setTimeout(function(){createUser(x[3].email,x[3].first_name,x[3].last_name)}, 30000)
      }else if ( i === 4){
        setTimeout(function(){createUser(x[4].email,x[4].first_name,x[4].last_name)}, 40000)
      }else if ( i === 5){
        setTimeout(function(){createUser(x[5].email,x[5].first_name,x[5].last_name)}, 50000)
      }else if ( i === 6){
        setTimeout(function(){createUser(x[6].email,x[6].first_name,x[6].last_name)}, 60000)
      }else if ( i === 7){
        setTimeout(function(){createUser(x[7].email,x[7].first_name,x[7].last_name)}, 70000)
      }else if ( i === 8){
        setTimeout(function(){createUser(x[8].email,x[8].first_name,x[8].last_name)}, 80000)
      }else if ( i === 9){
        setTimeout(function(){createUser(x[9].email,x[9].first_name,x[9].last_name)}, 90000)
      }else if(i === 10){
        setTimeout(function(){ createUser(x[10].email,x[10].first_name,x[10].last_name)}, 100000)
      }else if ( i === 11){
        setTimeout(function(){ createUser(x[11].email,x[11].first_name,x[11].last_name)}, 110000)
      }else if ( i === 12){
        setTimeout(function(){createUser(x[12].email,x[12].first_name,x[12].last_name)}, 120000)
      }else if ( i === 13){
        setTimeout(function(){createUser(x[13].email,x[13].first_name,x[13].last_name)}, 130000)
      }else if ( i === 14){
        setTimeout(function(){createUser(x[14].email,x[14].first_name,x[14].last_name)}, 140000)
      }else if ( i === 15){
        setTimeout(function(){createUser(x[15].email,x[15].first_name,x[15].last_name)}, 150000)
      }else if ( i === 16){
        setTimeout(function(){createUser(x[16].email,x[16].first_name,x[16].last_name)}, 160000)
      }else if ( i === 17){
        setTimeout(function(){createUser(x[17].email,x[17].first_name,x[17].last_name)}, 170000)
      }else if ( i === 18){
        setTimeout(function(){createUser(x[18].email,x[18].first_name,x[18].last_name)}, 180000)
      }else if ( i === 19){
        setTimeout(function(){createUser(x[19].email,x[19].first_name,x[19].last_name)}, 190000)
      } else if(i === 20){
        setTimeout(function(){ createUser(x[20].email,x[20].first_name,x[20].last_name)}, 200000)
      }else if ( i === 21){
        setTimeout(function(){ createUser(x[2].email,x[2].first_name,x[2].last_name)}, 210000)
      }else if ( i === 22){
        setTimeout(function(){createUser(x[22].email,x[22].first_name,x[22].last_name)}, 220000)
      }else if ( i === 23){
        setTimeout(function(){createUser(x[23].email,x[23].first_name,x[23].last_name)}, 230000)
      }else if ( i === 24){
        setTimeout(function(){createUser(x[24].email,x[24].first_name,x[24].last_name)}, 240000)
      }else if ( i === 25){
        setTimeout(function(){createUser(x[25].email,x[25].first_name,x[25].last_name)}, 250000)
      }else if ( i === 26){
        setTimeout(function(){createUser(x[26].email,x[26].first_name,x[26].last_name)}, 260000)
      }else if ( i === 27){
        setTimeout(function(){createUser(x[27].email,x[27].first_name,x[27].last_name)}, 270000)
      }else if ( i === 28){
        setTimeout(function(){createUser(x[28].email,x[28].first_name,x[28].last_name)}, 290000)
      }else if ( i === 29){
        setTimeout(function(){createUser(x[29].email,x[29].first_name,x[29].last_name)}, 300000)
      }else if(i === 30){
        setTimeout(function(){ createUser(x[30].email,x[30].first_name,x[30].last_name)}, 310000)
      }else if ( i === 31){
        setTimeout(function(){ createUser(x[31].email,x[31].first_name,x[31].last_name)}, 320000)
      }else if ( i === 32){
        setTimeout(function(){createUser(x[32].email,x[32].first_name,x[32].last_name)}, 340000)
      }else if ( i === 33){
        setTimeout(function(){createUser(x[33].email,x[33].first_name,x[33].last_name)}, 350000)
      }else if ( i === 34){
        setTimeout(function(){createUser(x[34].email,x[34].first_name,x[34].last_name)}, 360000)
      }else if ( i === 35){
        setTimeout(function(){createUser(x[35].email,x[35].first_name,x[35].last_name)}, 370000)
      }else if ( i === 36){
        setTimeout(function(){createUser(x[36].email,x[36].first_name,x[36].last_name)}, 390000)
      }else if ( i === 37){
        setTimeout(function(){createUser(x[37].email,x[37].first_name,x[37].last_name)}, 400000)
      }else if ( i === 38){
        setTimeout(function(){createUser(x[38].email,x[38].first_name,x[38].last_name)}, 410000)
      }else if ( i === 39){
        setTimeout(function(){createUser(x[39].email,x[39].first_name,x[39].last_name)}, 420000)
      }else if(i === 40){
        setTimeout(function(){ createUser(x[40].email,x[40].first_name,x[40].last_name)},430000)
      }else if ( i === 41){
        setTimeout(function(){ createUser(x[41].email,x[41].first_name,x[41].last_name)}, 450000)
      }else if ( i === 42){
        setTimeout(function(){createUser(x[42].email,x[42].first_name,x[42].last_name)}, 460000)
      }else if ( i === 43){
        setTimeout(function(){createUser(x[43].email,x[43].first_name,x[43].last_name)}, 470000)
      }else if ( i === 44){
        setTimeout(function(){createUser(x[44].email,x[44].first_name,x[44].last_name)}, 480000)
      }else if ( i === 45){
        setTimeout(function(){createUser(x[45].email,x[45].first_name,x[45].last_name)}, 490000)
      }else if ( i === 46){
        setTimeout(function(){createUser(x[46].email,x[46].first_name,x[46].last_name)}, 510000)
      }else if ( i === 47){
        setTimeout(function(){createUser(x[47].email,x[47].first_name,x[47].last_name)}, 520000)
      }else if ( i === 48){
        setTimeout(function(){createUser(x[48].email,x[48].first_name,x[48].last_name)}, 530000)
      }else if ( i === 49){
        setTimeout(function(){createUser(x[49].email,x[49].first_name,x[49].last_name)}, 540000)
      }else if(i === 50){
        setTimeout(function(){console.log("terminou"),createUser(x[50].email,x[50].first_name,x[50].last_name)},  550000)
      }
}


        
async function createUser(email,name,lastName){
        const browser = await puppeteer.launch({
            headless: false,
        });;
        const page = await browser.newPage();
        await page.goto('https://focusgroupit.com/groups/a9ed13b7/participations/join');
        await page.click('[href="/groups/a9ed13b7/users/new"]');
        await page.waitForSelector('[name="user[email]"]')
        await page.type('#user_email', email)
        await page.type('#user_password', '12345678')
        await page.type('#user_password_confirmation', '12345678')
        await page.waitForSelector('#user_terms_of_service')
        await page.evaluate(() => {
          document.querySelector("#user_terms_of_service").parentElement.click();
        });
        await page.waitForSelector('#user_cookie_policy')
        await page.evaluate(() => {
          document.querySelector("#user_cookie_policy").parentElement.click();
        });
        await page.click('[type="submit"]')
    
        await page.waitForSelector('[name="user[first_name]"]')
        await page.type('#user_first_name', name)
        await page.type('#user_last_name', lastName)
        await page.click('[type="submit"]')
        await page.waitForNavigation()

       await browser.close()
}
};

module.exports = {
    cadastroBot
}