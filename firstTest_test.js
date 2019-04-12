/// <reference path="./steps.d.ts" />
Feature('CMC Citizen frontend');

let referenceNo = [
    {	ref	:		'000MC042'		,	pin	:		'JVGPP5kh'		}
]

referenceNo.forEach(function(eachRef){
    Scenario('Defendant View and respond to this claim', (I) => {
        I.amOnPage('https://localhost:3000/first-contact/start')
        I.see('Respond to a money claim')
        I.click('//*[@id="content"]/div[3]/div[1]/form/input[2]')
        I.fillField('reference',`${eachRef.ref}`)
        I.click('//*[@id="content"]/div[3]/div/form/div[2]/input')
        I.fillField('pinnumber',`${eachRef.pin}`)
        I.click('//*[@id="content"]/div[2]/div/form/div[2]/input[7]')
        I.click('//*[@id="content"]/div[3]/div/form/div/input')
        I.click('//*[@id="content"]/div[2]/div/form/p[1]/a')
        I.fillField('username','sumithmcts@gmail.com')
        I.fillField('password','Password12')
        I.click('//*[@id="content"]/div[2]/div[1]/form/div[3]/input[10]')
    });
});
for(let i=0;i<10;i++) {
Scenario('Claimant Create Claim', (I) => {
    I.amOnPage('https://localhost:8000/login?response_type=code&state=d7d8c7b2-b789-4335-8230-a50a091ce0e3&client_id=cmc_citizen&redirect_uri=https://localhost:3000/receiver')
    I.see('Sign in or create account')
    I.fillField('username','sumithmcts@gmail.com')
    I.fillField('password','Password12')
    I.click('//*[@id="content"]/div[2]/div[1]/form/div[3]/input[10]')
    I.click('//*[@id="footer"]/div/div/div[1]/ul/li[6]/a')
    I.click('//*[@id="content"]/div[3]/div/div[2]/a')
    I.click('//*[@id="content"]/div[3]/div/form/div/input')
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
});
}
