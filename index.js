//STANDARD CONSTANTS FOR ALEXA SKILLS
const Alexa = require("ask-sdk");
const https = require("https");


//FUNCTION TO CALL THE LIBANSWERS API
function httpGet(param) {
    return new Promise(((resolve, reject) => {
        var options = {
            host: /* UPDATE WITH YOUR HOST INFORMATION */,
            path: param /* "param" IS BUILT IN THE INTENT AND POINTS TO THE RIGHT ANSWER */,
            method: 'GET',
            rejectUnauthorized: false
        };

        const request = https.request(options, (response) => {
            response.setEncoding('utf8');
            let returnData = '';

            response.on('data', (chunk) => {
                returnData += chunk;
            });

            response.on('end', () => {
                resolve(JSON.parse(returnData));
            });

            response.on('error', (error) => {
                reject(error);
            });
        });
        request.end();
    }));
}

//SKIPPING CUSTOM INTENT HANDLERS
//EXAMPLE: IF A USER ASKS HOW TO PRINT, THIS HANDLER WILL RUN. 

const howprint_Handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'howprint';
    },
    async handle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        const responseBuilder = handlerInput.responseBuilder;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        
        //GREETING THAT GIVES "SAY" A VALUE
        let say = 'Hello from ' + invocationName + ', your F. I. U. Libraries voice assistant.';
        
        //RETRIEVES THE ANSWER FROM YOUR INSTANCE OF LIBANSWERS
        let answerId = /* ENTER THE ANSWER ID FROM YOUR SYSTEM */;
        
        //INSPECT YOUR URL STRUCTURE TO MAKE SURE "PARAM" WILL BUILD THE URL CORRECTLY. IT IS YOUR "HOST" + "API VERSION" + "ANSWER ID" + "GROUP ID"
        //MODIFY "PARAM" WITH YOUR GROUP ID & LIBANSWERS SYSTEM ID (iid)
        let param = '/1.0/faqs/' + answerId + '?group_id=000&iid=000';
        let slotStatus = '';
        let resolvedSlot;
        
        //SENDS THE REQUEST TO YOUR HTTPGET FUNCTION AND WAITS FOR THE PARSED JSON DATA
        const response = await httpGet(param);
        console.log(response);
        say += slotStatus;
        
        //USE DOT NOTATION TO FEED DATA INTO YOUR SKILL
        return responseBuilder
            .speak(response.faqs[0].answer)
        
        //THE STANDARD CARD DISPLAYS TEXT ON ECHO SHOW SCREENS. I USED A "stripHtml" FUNCTION TO REMOVE HTML TAGS BEFORE DISPLAYING ON THE SCREEN.
            .withStandardCard(stripHtml(response.faqs[0].question),
                '\n' + stripHtml(response.faqs[0].answer),
                welcomeCardImg.smallImageUrl, welcomeCardImg.largeImageUrl
            )
            .withShouldEndSession(true)
            .getResponse();
    },
};