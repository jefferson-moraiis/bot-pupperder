// 3rd parties
const puppeteer = require('puppeteer');

// Application
const users = require('../../db_users.json')

const cadastroBot = async ()=>{


  const x = Object.keys(users).map(function(_) { return users[_]; })

    for(let i = 0; i < users.length; i++) {

      if(i === 0){
        createUser1(x[0].email,x[0].first_name,x[0].last_name)
      }
      else if ( i === 1){
        setTimeout(function(){ createUser2(x[1].email,x[1].first_name,x[1].last_name)}, 10000)
      }else if ( i === 2){
        setTimeout(function(){createUser3(x[2].email,x[2].first_name,x[2].last_name)}, 20000)
      }else if ( i === 3){
        setTimeout(function(){createUser4(x[3].email,x[3].first_name,x[3].last_name)}, 30000)
      }else if ( i === 4){
        setTimeout(function(){createUser5(x[4].email,x[4].first_name,x[4].last_name)}, 40000)
      }else if ( i === 5){
        setTimeout(function(){createUser6(x[5].email,x[5].first_name,x[5].last_name)}, 50000)
      }else if ( i === 6){
        setTimeout(function(){createUser7(x[6].email,x[6].first_name,x[6].last_name)}, 60000)
      }else if ( i === 7){
        setTimeout(function(){createUser8(x[7].email,x[7].first_name,x[7].last_name)}, 70000)
      }else if ( i === 8){
        setTimeout(function(){createUser9(x[8].email,x[8].first_name,x[8].last_name)}, 80000)
      }else if ( i === 9){
        setTimeout(function(){createUser10(x[9].email,x[9].first_name,x[9].last_name)}, 90000)
      }
}


        
async function createUser1(email,name,lastName){
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

       await page.close()
}
async function createUser2(email,name,lastName){
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

 await page.close()
}
async function createUser3(email,name,lastName){
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

 await page.close()
}
async function createUser4(email,name,lastName){
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

 await page.close()
}
async function createUser5(email,name,lastName){
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

 await page.close()
}
async function createUser6(email,name,lastName){
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

 await page.close()
}
async function createUser7(email,name,lastName){
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

 await page.close()
}
async function createUser8(email,name,lastName){
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

 await page.close()
}
async function createUser9(email,name,lastName){
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

 await page.close()
}
async function createUser10(email,name,lastName){
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

 await page.close()
}


};

module.exports = {
    cadastroBot
}