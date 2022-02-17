const puppeteer = require("puppeteer");

function responseQuestions(req,res) {
  const { email , link } = req.body;

  if (email && link) {
    responderPerguntas(email,link);
  }
  if (!email) {
    return res.status(400).json("Preencha o campo email!");
  } else if (!link) {
    return res.status(400).json("Preencha o campo link!");
  } else {
    return res.status(500).json("Ocorreu um erro");
  }
}

async function responderPerguntas(email, link) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(link);
  await page.waitForSelector("[name=email]");
  await page.type("#email", email);
  await page.type("#password", "12345678");
  await page.click('[type="submit"]');
  setInterval(function () {
    responder();
  }, 5000);
  console.log("respondendo");
  async function responder() {
    try {
      if ('[type="checkbox"]') {
        page.$$eval('input[name="reply[choice_ids][]"]', (checks) =>
          checks.forEach((c) => (c.checked = Math.random() >= 0.5))
        );
      } else if ('[type="radio"]') {
        const radios = await page.$$eval(
          'input[name="reply[choice_ids][]"]',
          (inputs) => {
            return inputs.map((input) => input.value);
          }
        );
        let radiosValue = radios[Math.floor(Math.random() * radios.length)];
        await page.evaluate((radiosValue) => {
          let radio = document.querySelector(
            `input[name="reply[choice_ids][]"][value="${radiosValue}"]`
          );
          radio.click();
        }, radiosValue);
      }

      await Promise.all([
        await page.click('[type="submit"]'),
        await page.waitForNavigation(),
        setInterval(async function () {
          await page.click("a.btn");
        }, 3000),
      ]).catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  }

  await page.waitForNavigation();
  setInterval(function () {
    responder();
  }, 3000);
}

module.exports = {
  responseQuestions,
};
