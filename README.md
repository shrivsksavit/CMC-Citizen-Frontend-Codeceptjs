					# CMC-Citizen-Frontend-Codeceptjs
					
JavaScript Version : ECMAScript versions : 6+ 
Run npm install, 
Run Visual studio form terminal :- 		https://code.visualstudio.com/docs/setup/mac 

Install codeceptjs webdriverio :- 		'npm i' or 'npm add' after run 'npm install codeceptjs webdriverio --save-dev'
						https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm

Install selenium server + chromeDriver	:- 	 sudo npm install -g selenium-standalone, 
                                        	 selenium-standalone install, 
                                         	 selenium-standalone start
						 
Run Test					./node_modules/.bin/codeceptjs run --grep "ClaimantA"

Run test with HMCL reporting                   ./node_modules/.bin/codeceptjs run --grep "Claim_created" --reporter mochawesome

Reporter HTML Support URL  		https://medium.com/@armno/generate-beautiful-angular-e2e-test-reports-with-mochawesome-77ac29d119d9

Getting issue with webdirverIO 5 please refer to : https://webdriver.io/blog/2018/12/19/webdriverio-v5-released.html
