


const responseQuestions = async (page) => {
        responseOneQuestions(page)
        try {
        async function responseOneQuestions(page){
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
        await page.waitForNavigation();
        await page.click('a.btn')
    }
        await page.waitForNavigation();
        setInterval(async function(page){ 
            responseOneQuestions(page) 
        }, await page.waitForNavigation())
        } catch (error) {
        console.log(erro)
        }
    }

    
    


  module.exports ={
    responseQuestions
  }
  