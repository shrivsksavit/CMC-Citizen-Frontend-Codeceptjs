/// <reference path="./steps.d.ts" />
Feature('CMC Citizen frontend on AAT');
function getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day =`${date.getDate()}`.padStart(2, '0');
    const houre =`${date.getHours()}`.padStart(2, '0');
    const min =`${date.getMinutes()}`.padStart(2, '0');
    const sec =`${date.getSeconds()}`.padStart(2, '0');

    return `${year}${month}${day}${houre}${min}${sec}`
}

console.log(`YourClaimNumber:${getDateString()}.png`)


let envs = [
    {	Environment : 'LOCAL' , Url :'http://localhost:9002/login?response_type=code&state=9ac127bb-6650-4fb1-a1a7-ef127fb588e3&client_id=cmc_citizen&redirect_uri=https://localhost:3000/receiver',User	:		'sumithmcts@gmail.com'		,	Password	:		'Password12',  UrlStart : 'https://localhost:3000/first-contact/start'	},
    { Environment : 'AAT' ,  Url :'https://cmc-citizen-frontend-aat.service.core-compute-aat.internal/dashboard', User :'sumithmcts+CCDAAT@gmail.com', Password :'Oimage01',UrlStart : 'https://localhost:3000/first-contact/start'	 },
    { Environment : 'PRO' ,  Url :'https://cmc-citizen-frontend-prod.service.core-compute-prod.internal', User :'sumithmcts@gmail.com', Password :'Oimage01' , UrlStart : 'https://localhost:3000/first-contact/start'	 }

]

let referenceNo = [
    {	ref	:		'000MC005'		,	pin	:		'X4PBPKG3'		}
    // {	ref	:		'214MC379'		,	pin	:		'AMEVRA6S'		},
    // {	ref	:		'214MC380'		,	pin	:		'GGWCUKQQ'		},
    // {	ref	:		'214MC381'		,	pin	:		'KAB8JCXS'		},
    // {	ref	:		'214MC382'		,	pin	:		'DRVDDPK7'		},
    // {	ref	:		'214MC383'		,	pin	:		'HS9V9HMA'		},
    // {	ref	:		'214MC384'		,	pin	:		'HGBJWNYK'		},
    // {	ref	:		'214MC385'		,	pin	:		'RKM4VB5R'		},
    // {	ref	:		'214MC386'		,	pin	:		'7NXN5KNU'		},
    // {	ref	:		'214MC387'		,	pin	:		'XHEYHJBX'		},
    // {	ref	:		'214MC388'		,	pin	:		'GNQXH7Q9'		},
    // {	ref	:		'214MC389'		,	pin	:		'XA4HMMPB'		}

]

let currentEnv = envs[0];
console.log(currentEnv.url)

// Before((I) => { // or Background
//     try {
//         I.amOnPage('https://portal.platform.hmcts.net/vdesk/webtop.eui?webtop=/Common/webtop_full&webtop_type=webtop_full');
//         I.fillField('loginfmt', 'sumit.shrivastava@hmcts.net')
//         I.click('//*[@id="idSIButton9"]')
//         I.fillField('passwd', 'Oimage#01')
//         I.click('Sign in')
//         I.click('Yes')
//         pause();
//         I.see('<span class="description" title="Web Proxy is required">Web Proxy is required</span>')
//         I.click('//*[@id="/Common/netacl_mojvpn"]/span[3]')
//     }catch (error) {
//         I.say(error)
//     }
// });

for(let i=0;i<1;i++) {//*[@id="idSIButton9"]
    Scenario('ClaimantLocal Create Claim', (I) => {
        try {
            I.amOnPage(`${currentEnv.Url}`)
            I.see('Sign in or create')
            I.fillField('username',`${currentEnv.User}`)
            I.fillField('password',`${currentEnv.Password}`)
            I.click('//*[@id="authorizeCommand"]/div[1]/div[1]/div/input[1]')
            I.click('//*[@id="footer"]/div/div/div[1]/ul/li[6]/a')
            I.click('//*[@id="content"]/div[3]/div/div[2]/a')
            I.click('//*[@id="content"]/div[3]/div/form/div/input')
            I.see('Statement of truth'&&'I believe that the facts stated in this claim are true.')
            I.click('//*[@id="signedtrue"]')
            I.click('//*[@id="content"]/form/div/div/div[2]/input')
            I.fillField('cardNo','4444333322221111')
            I.fillField('expiryMonth','11')
            I.fillField('expiryYear','22')
            I.fillField('cardholderName','Zaki Williams')
            I.fillField('cvc','321')
            I.fillField('addressLine1','London London')
            I.fillField('addressCity','London')
            I.fillField('addressPostcode','HP180ER')
            I.fillField('email','sumithmcts@gmail.com')
            I.click('//*[@id="submit-card-details"]')
            I.click('//*[@id="confirm"]')
            I.see('Claim submitted'&&'Your claim number:'&&'Download your claim form')
            I.saveScreenshot(`YourClaimNumber:${getDateString()}.png`)
            // I.fullPageScreenshots()
        }catch(error){
            I.say(error)
        }
    });
}

referenceNo.forEach(function(eachRef){
    Scenario('DefendantA View and respond to this claim', (I) => {
        try {
            I.amOnPage(`${currentEnv.UrlStart}`)
            I.see('Respond to a money claim')
            I.click('//*[@id="content"]/div[3]/div[1]/form/input[2]')
            I.fillField('reference', `${eachRef.ref}`)
            I.click('//*[@id="content"]/div[3]/div/form/div[2]/input')
            I.fillField('pin', `${eachRef.pin}`)
            I.click('//*[@id="command"]/input[1]')
            I.click('//*[@id="content"]/div[3]/div/form/div/input')
            I.click('//*[@id="content"]/article/div/div[2]/p/a')
            I.fillField('username', `sumithmcts+ccdAAT1@gmail.com`)
            I.fillField('password', `${currentEnv.Password}`)
            I.click('//*[@id="command"]/input')
            I.see('Your money claims account' && 'Claims made against you')
        }catch(error){
            I.say(error)
        }
    });
});
