// 3rd parties
const puppeteer = require('puppeteer');

// Application
const users = require('../../db_users.json')

const cadastroBot = async (req,res )=>{

    const createUser = async(email,name,lastName) =>{
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
    }

    try {
        
        users.map((value)=>{
            
            let ids = value.id

            for(var i = 0; i < users.length; i++) {
                createUser(value.email,value.first_name,value.last_name)
                break;
            }
        })
        
        return  res.status(201).json("criando usuarios na plataforma")
      } catch (error) {
          return  res.status(500).json({error: error})
      }

    
  
    // const browser = await puppeteer.launch({
    //         headless: false,
    //       });;
    //       const page = await browser.newPage();
    //       await page.goto('https://focusgroupit.com/groups/a9ed13b7/participations/join');
    //       await page.click('[href="/groups/a9ed13b7/users/new"]');
    //       await page.waitForSelector('[name="user[email]"]')
    //       await page.type('#user_email', email)
    //       await page.type('#user_password', '12345678')
    //       await page.type('#user_password_confirmation', '12345678')
    //       await page.waitForSelector('#user_terms_of_service')
    //       await page.evaluate(() => {
    //         document.querySelector("#user_terms_of_service").parentElement.click();
    //       });
    //       await page.waitForSelector('#user_cookie_policy')
    //       await page.evaluate(() => {
    //         document.querySelector("#user_cookie_policy").parentElement.click();
    //       });
    //       await page.click('[type="submit"]')
};

module.exports = {
    cadastroBot
}