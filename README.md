# Echo-Show-Tell
Code used to build Alexa Skill that communicates with LibAnswers to produce a basic fact skill.

<img src="https://libapps.s3.amazonaws.com/customers/215/images/decoWelcomePink-wide.png" />


## Skill Architecture
Skill consist of two basic parts, a front end and a back end.
The front end is the voice interface, or VUI.
The voice interface is configured through the voice interaction model.
The back end is where the logic of your skill resides (This is where you add custom responses).

---

## Customization
The node.js file details the following:

* Basic call to the LibAnswers API that establishes communication between the platforms
* Custom code added to the intents (points to the FAQ in LibAnswers, parses the response, and generates a voice reply)

---

## Additional Resources

### Community
* [Amazon Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html) - Join the conversation!
* [Hackster.io](https://www.hackster.io/amazon-alexa) - See what others are building with Alexa.

### Tutorials & Guides
* [Voice Design Guide](https://developer.amazon.com/designing-for-voice/) - A great resource for learning conversational and voice user interface design.
* [Codecademy: Learn Alexa](https://www.codecademy.com/learn/learn-alexa) - Learn how to build an Alexa Skill from within your browser with this beginner friendly tutorial on Codecademy!

### Documentation
* [Official Alexa Skills Kit SDK for Node.js](http://alexa.design/node-sdk-docs) - The Official Node.js SDK Documentation
* [Official Alexa Skills Kit Documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - Official Alexa Skills Kit Documentation
* [LibAnswers API Overview](https://ask.springshare.com/libanswers/faq/1669) - Springshare's "Getting Started" FAQ on the LibAnswers API
