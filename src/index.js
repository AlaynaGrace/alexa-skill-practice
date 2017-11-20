var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hello! Did you know, ' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn everything you need to know about cats by asking for a cat fact. You can start by saying, Grace give me a cat fact.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye cat lovers!');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye cat lovers!');
     }
};

//  helper functions  ===================================================================


function getFact() {
    var myFacts = [
        "Cats should not be fed tuna exclusively, as it lacks taurine, an essential nutrient required for good feline health.  Make sure you have the proper Pet supplies to keep your cat happy and healthy.",
        "The strongest climber among the big cats, a leopard can carry prey twice its weight up a tree.",
        "A cat’s hearing is better than a dog’s. A cat can hear high-frequency sounds up to two octaves higher than a human.",
        "Tylenol and chocolate are both poisionous to cats.",
        "Cats have 30 teeth (12 incisors, 10 premolars, 4 canines, and 4 molars), while dogs have 42. Kittens have baby teeth, which are replaced by permanent teeth around the age of 7 months.",
        "It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses.",
        "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
        "Cats are subject to gum disease and to dental caries. They should have their teeth cleaned by the vet or the cat dentist once a year.",
        "A domestic cat can run at speeds of 30 mph.",
        "Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.",
        "A cat’s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34.",
        "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn.",
        "Cat paws act as tempetature regulators, shock absorbers, hunting and grooming tools, sensors, and more",
        "Cats see six times better in the dark and at night than humans.",
        "The cat's tail is used to maintain balance.",
        "Cats have 300 million neurons; dogs have about 160 million",
        "Both humans and cats have identical regions in the brain responsible for emotion.",
        "The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.",
        "An adult lion's roar can be heard up to five miles (eight kilometers) away.",
        "You check your cats pulse on the inside of the back thigh, where the leg joins to the body. Normal for cats: 110-170 beats per minute.",
        "The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k).",
        "A cat's normal temperature varies around 101 degrees Fahrenheit.",
        "Unlike other cats, lions have a tuft of hair at the end of their tails.",
        "Cats don’t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.",
        "The average cat food meal is the equivalent to about five mice.",
        "The first official cat show in the UK was organised at Crystal Palace in 1871.",
        "In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens."
    ];

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
