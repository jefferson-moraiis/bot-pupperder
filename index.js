
const puppeteer = require('puppeteer');
console.log('Bem vindo ao Bot 🤖');

// async function cadastroBot(){
// console.log('Realizando Cadastro')
//   const browser = await puppeteer.launch({
//     headless: false,
//   });;
//   const page = await browser.newPage();
//   await page.goto('https://focusgroupit.com/groups/a9ed13b7/participations/join');
//   await page.click('[href="/groups/a9ed13b7/users/new"]');
//   await page.waitForSelector('[name="user[email]"]')
//   await page.type('#user_email', 'antonioyagocampos_@img.com.br')
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
//   await page.type('#user_first_name', 'Antonio ')
//   await page.type('#user_last_name', 'Yago Campos')
//   await page.click('[type="submit"]')

//   const text = await page.evaluate(() => Array.from(document.querySelectorAll('name="reply[choice_ids][]"'), element => element.textContent));
//   //await browser.close();
// };
// cadastroBot()

async function loginBot(){
    console.log('Realizando Login')
    const browser = await puppeteer.launch({
      headless: false,
    });;
    const page = await browser.newPage();
    await page.goto('https://focusgroupit.com/groups/a9ed13b7/session/new');
    await page.waitForSelector('[name=email]')
    await page.type('#email', 'jefferson.14.104@gmail.com')
    await page.type('#password', '12345678')
    await page.click('[type="submit"]')
  
  };
  loginBot()