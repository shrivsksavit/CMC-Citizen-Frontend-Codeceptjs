/// <reference path="./steps.d.ts" />
Feature('CMC Citizen frontend on AAT');

let envs = [
    { Environment : 'AAT' ,  Url :'https://cmc-citizen-frontend-aat.service.core-compute-aat.internal/dashboard', User :'sumithmcts@gmail.com', Password :'Oimage01' }
]

let referenceNo = [
    {	ref	:		'203MC568'		,	pin	:		'TYCPJVD7'		}
    // {	ref	:		'203MC513'		,	pin	:		'BKD5UY8N'		},
    // {	ref	:		'203MC514'		,	pin	:		'RC3YMQJV'		}
]

let currentEnv = envs[0];

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
    Scenario('ClaimantA Create Claim', (I) => {
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
        }catch(error){
            I.say(error)
        }
    });
}

referenceNo.forEach(function(eachRef){
    Scenario('DefendantA View and respond to this claim', (I) => {
        try {
            I.amOnPage('https://cmc-citizen-frontend-aat.service.core-compute-aat.internal/first-contact/start')
            I.see('Respond to a money claim')
            I.click('//*[@id="content"]/div[3]/div[1]/form/input[2]')
            I.fillField('reference', `${eachRef.ref}`)
            I.click('//*[@id="content"]/div[3]/div/form/div[2]/input')
            I.fillField('pin', `${eachRef.pin}`)
            I.click('//*[@id="command"]/input[1]')
            I.click('//*[@id="content"]/div[3]/div/form/div/input')
            I.click('//*[@id="content"]/article/div/div[2]/p/a')
            I.fillField('username', `${currentEnv.User}`)
            I.fillField('password', `${currentEnv.Password}`)
            I.click('//*[@id="command"]/input')
            I.see('Your money claims account' && 'Claims made against you')
        }catch(error){
            I.say(error)
         }
    });
});


