const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setActivity('A Daniel Dad joke!', {type : 'PLAYING'} )
  console.log(`Logged in as ${client.user.tag}!`);
});








client.on('message', message => {
  // Here is where you need to code
 if(message.content == ",info") {
    message.channel.send(`Introducing Daniel Dad, With a seemingly endless supply of dad jokes and snappy comebacks, Daniel Dad is sure to keep your server members entertained. And the best part? Daniel Dad is available for anyone to invite to their own server! Simply check out the bot's profile for the invite link. 

But we're not just here for the laughs - if you encounter any issues with the bot, please let us know! Head over to bots description to report the problem and our team will do their best to resolve any issues. We're committed to making sure Daniel Dad runs smoothly and provides the best possible experience for all of our users.`);
 }

  if(message.content == ",responses") {
    message.channel.send(`list of words I will respond to!
    __1__ __shut ass ####__
    __2__ __true dad__
    __3__ __lol__
    __4__ __cat__
    __5__ __ty__
    __6__ __brb__
    __7__ __rip__
    __8__ __positive__
    __9__ __howdy__
    __10__ __happy father's day__`);
  }

  if(message.content == ",answers") {
    message.channel.send(`Here are the riddle answers!
    __1__ __A doc-tor__
    __2__ __To get to the other slide__
    __3__ __A dad-ician__
    __4__ __Clock__
    __5__ __Chatting__
    __6__ __Discord__
    __7__ __Roles__
    __8__ __To get to the otter side__
    __9__ __A road__
    __10__ __Time__
    __11__ __A Map__
    __12__ __A River__`);
  }

  if(message.content === `,dad`){
  const advices = [
  'So I scheduled you a dentist appointment for tooth hurty!',
  'When I go to the store I like to make sure I level it out',
  'What do you call a well-balanced horse? Stable.',
  'Where do polar bears keep their money? In a snowbank.',
  'Why did the bicycle fall over? Because it was two tired.',
  `Did you hear the rumor about butter? well I'm not going to spread it!`,
`What did the triangle say to the circle? You’re pointless.`,
    'RIP, boiling water. You will be mist.',
    `I ordered a chicken and an egg online. I’ll let you know what comes first.`,
    'What did one toilet say to another? You look flushed.',
    'What do you call cheese that isn’t yours? Nacho cheese!',
    'Why can’t you send a duck to space? Because the bill would be astronomical.',
    'What side of a tree grows the most branches? The outside!',
    'Why are elevator jokes so good? They work on many levels.',
    'What’s the best way to watch a fly-fishing tournament? Live stream it.',
    'Why did the broom decide to go to bed? It was very sweepy.',
    'Why are nurses always running out of red crayons? Because they often have to draw blood.',
    'Why can’t you ever run through a campsite? You can only ran — it’s always past tents.',
    'Why is it hard to understand volunteers? Because they make no cents.',
    'What did the police officer say to his belly-button? You’re under a vest.',
    'What did the drummer call his twin daughters? Anna One, Anna Two',
    'Did you hear about the king who was exactly 12 inches tall? He was a great ruler!',
    'How do you cure a fear of a speed bump? You slowly get over it.',
    `What's the difference between a "dad joke" and a "bad joke?" The direction of the first letter.`,
    `When does a regular joke become a “dad joke?” When it becomes apparent.`,
    `I wouldn't buy anything with velcro. It's a total rip-off.`,
    `Why is The Rock moving? because it's rocking roll.`,
    `Have you ever tried to eat a clock?
It's very time-consuming!`
    //27
];
  // get a random number based on the array's length
var randomIndex = Math.floor(Math.random() * advices.length);
// creates the random output of your array
var randomElement = advices[randomIndex];
    
  message.reply(`Here's a dad joke: ${randomElement}`);
  }

  if(message.content == ",dad") {
    message.delete();
  }
    });

//Selection
client.on('message', message => {
  if (message.mentions.users.has(client.user.id) && !message.author.bot) {
  message.reply(`**Hi I'm Dad and here are my commands!**
  __1__. __,dad__ - "This will give you a dad joke"
  __2__. __,info__ - "information if you didn't know what it was"
  __3__ __,dadpuzzle__ - "You can solve a dad puzzle"
  __4__ __,responses__ - "list of all the words I will respond to"
  **My prefix is ,**`)
  return
}
  });

// Keep track of last reply time to avoid spamming
let lastReplyTime = 0;



client.on('message', async message => {
  if (message.author.bot) return;

  // List of messages to check for
  const messagesToCheck = [
    {words: ['dick', 'cock', 'kill yourself', 'bitch', 'motherfucking', 'die'], reply: 'One more time like that, and there might be consequences!'},
    {words: ['ass', 'shut', 'cunt', 'piss', 'bullshit', 'sex'], reply: 'Hey now, let\'s keep it clean in here!'},
    {words: ['true dad'], reply: 'Sorry but I\'m the true Dad!'},
    {words: ['lol'], reply: '🤣'},
    {words: ['cat'], reply: 'ᓚᘏᗢ'},
    {words: ['ty', 'thank you'], reply: 'You\'re welcome!'},
    {words: ['brb'], reply: 'Take your time!'},
    {words: ['rip'], reply: 'You made an impact on our lives, and we\'ll always remember you. Rest in peace.'},
    {words: ['positive'], reply: 'I\'m always happy to keep it a nice and positive space!'},
    {words: ['howdy'], reply: 'Howdy!'},
    {words: [`happy father's day`], reply: `Thank you I am a great father aren't I!`},
    {words: ['monkey'], reply: '🐵'},
    {words: ['farther gamer'], reply: `If you mention Pinocchio nose one more time, he's going to sniff you up!!`},
    {words: ['shot', 'shoot'], reply: `Bud, you don't even know how to shoot a gun! You shouldn't be talking like that!`},
  ];

  for (const messageToCheck of messagesToCheck) {
    if (messageToCheck.words.some(word => message.content.toLowerCase().includes(word)) &&
        (Date.now() - lastReplyTime) > 10000) {
      await message.reply(messageToCheck.reply);
      lastReplyTime = Date.now();
      break;
    }
  }
});




const riddles = [
  {
    question: "What do you call a dad who's also a doctor?",
    answer: "A doc-tor"
  },
  {
    question: "Why did the dad cross the road?",
    answer: "To get to the other side"
  },
  {
    question: "What do you call a dad who's also a magician?",
    answer: "A dad-ician"
  },
  {
question: "What runs but never walks?",
    answer: "A River"
},
  {
question: "Could you unscramble this please: klCco",
    answer: "Clock"
},
  {
question: "Could you unscramble this please: tghiCnta",
    answer: "Chatting"
},
  {
question: "Could you unscramble this please: cDrodsi",
    answer: "Discord"
},
  {
question: "Could you unscramble this please: oRles",
    answer: "Roles"
},
  {
question: "Why did the otter cross the road?",
    answer: "To get to the otter side"
},
  {
question: "What goes through cities and fields but never moves?",
    answer: "A road"
},
  {
question: "What flies but doesn't have wings?",
    answer: "Time"
},
  {
question: "What has rivers, roads, and forests but no trees?",
    answer: "A Map"
},
  // Add more riddles to the array as desired
];

let riddleInProgress = false;
let currentRiddle;
let currentAuthor;
let timeout;

client.on('message', message => {
  if (message.content === ',dadpuzzle' && !message.author.bot) {
    if (!riddleInProgress) {
      currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
      message.channel.send(currentRiddle.question);
      currentAuthor = message.author;
      riddleInProgress = true;

      const filter = m => m.author === currentAuthor;
      const collector = message.channel.createMessageCollector(filter, { time: 60000 });

      collector.on('collect', m => {
        if (m.content.toLowerCase() === currentRiddle.answer.toLowerCase()) {
          message.channel.send("That's correct! You're a true dad master!");
          collector.stop();
          riddleInProgress = false;
          clearTimeout(timeout);
        } else if (m.content.toLowerCase() === 'cancel') {
          message.channel.send("Riddle canceled.");
          collector.stop();
          riddleInProgress = false;
          clearTimeout(timeout);
        } else {
          message.channel.send("Oops, that's not quite right. Keep trying!");
        }
      });

      collector.on('end', collected => {
        if (riddleInProgress && !collected.size) {
          timeout = setTimeout(() => {
            message.channel.send("Riddle timed out. Type `,dadpuzzle` to start a new riddle.");
            riddleInProgress = false;
          }, 15000);
        }
      });
    } else {
      message.channel.send("There's already a riddle in progress. Type 'cancel' to end the current riddle and start a new one.");
    }
  }
}); 





client.login("");
//client.login(process.env.Token);
client.on('ready', () => {
console.log(`Key is accepted now running the bot!`);
  });
