
const puppeteer = require('puppeteer');
console.log('Bem vindo ao Bot 🤖');

async function cadastroBot(){
console.log('Realizando Cadastro')
  const browser = await puppeteer.launch({
    headless: false,
  });;
  const page = await browser.newPage();
  await page.goto('https://focusgroupit.com/groups/a9ed13b7/participations/join');
  await page.click('[href="/groups/a9ed13b7/users/new"]');
  await page.waitForSelector('[name="user[email]"]')
  await page.type('#user_email', 'antonioyagocampos_@img.com.br')
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
  await page.type('#user_first_name', 'Antonio ')
  await page.type('#user_last_name', 'Yago Campos')
  await page.click('[type="submit"]')
  //await browser.close();
};


async function loginBot(){

    console.log('Realizando Login')
    const browser = await puppeteer.launch({
      headless: false,
    });;
    const page = await browser.newPage();
    await page.goto('https://focusgroupit.com/groups/c5178c97/session/new');
    await page.waitForSelector('[name=email]')
    await page.type('#email', 'antonioyagocampos_@img.com.br')
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
      await page.click('[type="submit"]')
      await page.waitForNavigation({
        waitUntil: 'networkidle0',
      });
      await page.click('a.btn')
    }

    await page.waitForNavigation();
    setInterval(function(){ responder() }, await page.waitForNavigation())
    };
  loginBot()