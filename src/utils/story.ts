export interface Input {
  TYPE: string
  KEY: string
  OPTIONS?: string[]
  PLACEHOLDER?: string
}

export interface NextOptions {
  OPTION_0: string
  OPTION_1: string
}

export interface IStory {
  MESSAGE: string
  NEXT?: string | NextOptions
  PREVIOUS?: string
  INPUT?: Input
  HAS_LOCAL_KEYS?: string[]
  HAS_KEY?: string
  ANSWER?: string[]
  HAS_SPECIAL_MESSAGE?: string[]
  IMAGE?: string
}

const os: IStory = {
  MESSAGE: 'What operating system are you using?',
  NEXT: 'osComment',
  PREVIOUS: 'moreInfo',
  INPUT: {
    TYPE: 'radio',
    KEY: 'os',
    OPTIONS: ['macOS', 'Windows', 'Linux']
  }
}

const initialCommandLine: IStory = {
  MESSAGE: 'Have you used the command line before?',
  NEXT: {
    OPTION_0: 'commandLineExpYes',
    OPTION_1: 'commandLineExpNo'
  },
  PREVIOUS: 'commandLine',
  INPUT: {
    TYPE: 'radio',
    KEY: 'initialCommandLine',
    OPTIONS: ['Yes', 'No']
  }
}

const commandLineLessonPartOne: IStory = {
  MESSAGE:
    "Inside the {application} window, type 'cd Desktop'. You should see the location updated to /Desktop.",
  NEXT: {
    OPTION_0: 'commandLineLessonPartOneSuccessYes',
    OPTION_1: 'commandLineLessonPartOneSuccessNo'
  },
  PREVIOUS: 'commandLineLessonCommandPartOneIntro',
  INPUT: {
    TYPE: 'radio',
    KEY: 'commandLineLessonPartOne',
    OPTIONS: [
      'It worked!',
      'Uh-oh. I see an error message, "no such file or directory."'
    ]
  },
  HAS_LOCAL_KEYS: ['application']
}

const commandLineLessonPartTwoCont: IStory = {
  MESSAGE:
    "You should now see a new folder on your Desktop titled 'coding-stuff'.",
  NEXT: {
    OPTION_0: 'commandLineLessonPartTwoSuccessYes',
    OPTION_1: 'commandLineLessonPartTwoSuccessNo'
  },
  PREVIOUS: 'commandLineLessonPartTwo',
  INPUT: {
    TYPE: 'radio',
    KEY: 'commandLineLessonPartTwoCont',
    OPTIONS: ['Success!', "Oh no...It didn't work."]
  },
  HAS_LOCAL_KEYS: ['application']
}

const commandLineLessonPartThree: IStory = {
  MESSAGE:
    "Inside the same {application} window, cd into 'coding-stuff' and then type '{newFileCommand} intro.txt'.",
  NEXT: {
    OPTION_0: 'commandLineLessonPartThreeSuccessYes',
    OPTION_1: 'commandLineLessonPartThreeSuccessNo'
  },
  PREVIOUS: 'commandLineLessonPartThreeIntro',
  INPUT: {
    TYPE: 'radio',
    KEY: 'commandLineLessonPartThree',
    OPTIONS: ['Yay! I created it successfully.', 'Help! I need a hint.']
  },
  HAS_LOCAL_KEYS: ['application', 'newFileCommand']
}

const story: {
  states: {
    [key: string]: IStory
  }
} = {
  states: {
    initial: {
      MESSAGE:
        "Hooray! You're here at last.\nThey told us you'd be joining soon.",
      NEXT: 'intro'
    },
    intro: {
      MESSAGE:
        'Welcome to mentored.dev! Our goal? To teach you to become a web developer.',
      NEXT: 'instructions',
      PREVIOUS: 'initial',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1559436292/mentored.dev/Welcome.png'
    },
    instructions: {
      MESSAGE:
        'You can navigate the dialog using the left and right arrow keys, and submit with enter.',
      NEXT: 'instructionsCont',
      PREVIOUS: 'intro',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561327158/mentored.dev/instructions.png'
    },
    instructionsCont: {
      MESSAGE: 'Oh! How rude of me - I forgot to introduce myself.',
      NEXT: 'introProfessor',
      PREVIOUS: 'instructions'
    },
    introProfessor: {
      MESSAGE:
        'My name is Professor and I have the delight of calling myself your mentor.',
      NEXT: 'name',
      PREVIOUS: 'instructionsCont'
    },
    name: {
      MESSAGE: 'First things first. What’s your name?',
      NEXT: 'greet',
      PREVIOUS: 'introProfessor',
      INPUT: {
        TYPE: 'text',
        KEY: 'name'
      }
    },
    greet: {
      MESSAGE: 'Nice to meet you, {name}!',
      NEXT: 'moreInfo',
      PREVIOUS: 'name',
      HAS_KEY: 'name'
    },
    moreInfo: {
      MESSAGE:
        'Before we start this journey to becoming a developer, I need more information.',
      NEXT: 'os',
      PREVIOUS: 'greet'
    },
    os,
    osComment: {
      MESSAGE: "{os}, eh? Fantastic choice! We're going to make a great team.",
      NEXT: 'commandLine',
      PREVIOUS: 'os',
      HAS_KEY: 'os'
    },
    commandLine: {
      MESSAGE:
        "Enough chit-chat. Lets dive into your first lesson! Today's lesson is on the command line.",
      NEXT: 'initialCommandLine',
      PREVIOUS: 'osComment',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561325525/mentored.dev/empty-command-line.png'
    },
    initialCommandLine,
    commandLineExpYes: {
      MESSAGE:
        "Hoho! Really? I'll see if you're telling the truth with a mini-quiz.",
      NEXT: 'commandLineQuizQuesOne',
      PREVIOUS: 'initialCommandLine'
    },
    commandLineExpNo: {
      MESSAGE:
        "Good! That means we'll experience the excitement of learning something new today.",
      NEXT: 'commandLineDef',
      PREVIOUS: 'initialCommandLine',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561325618/mentored.dev/yay-learning.png'
    },
    commandLineDef: {
      MESSAGE:
        'We can consider the command line as a place where user communicates with machine.',
      NEXT: 'commandLineImportance',
      PREVIOUS: 'commandLineExpNo',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561334366/mentored.dev/command-line-def.png'
    },
    commandLineImportance: {
      MESSAGE:
        "Being familiar with the command line is important because you'll use it on the daily as a developer.",
      NEXT: 'commandLineLessonExplanation',
      PREVIOUS: 'commandLineDef'
    },
    commandLineLessonExplanation: {
      MESSAGE:
        "Rather than have you use a simulated command line here in the browser, we'll use the one on your local machine.",
      NEXT: 'commandLineLessonOpenApp',
      PREVIOUS: 'commandLineImportance'
    },
    commandLineLessonOpenApp: {
      MESSAGE:
        "The first thing you'll do is open {application}. You can do this by going to {directions}",
      NEXT: 'commandLineLessonStart',
      PREVIOUS: 'commandLineLessonExplanation',
      HAS_LOCAL_KEYS: ['application', 'directions']
    },
    commandLineLessonStart: {
      MESSAGE:
        'Now that we have our environment ready, we can learn a few commands.',
      NEXT: 'commandLineLessonCommands',
      PREVIOUS: 'commandLineLessonOpenApp'
    },
    commandLineLessonCommands: {
      MESSAGE:
        'A command is simply a keyword that the command line recognizes and performs a specific action.',
      NEXT: 'commandLineLessonStartCont',
      PREVIOUS: 'commandLineLessonStart',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561335206/mentored.dev/command-line-lesson-commands.png'
    },
    commandLineLessonStartCont: {
      MESSAGE:
        "We'll be looking at three commands today. The first one is the most basic: 'cd'. ",
      NEXT: 'commandLineLessonCommandCD',
      PREVIOUS: 'commandLineLessonStart',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561335300/mentored.dev/command-line-lesson-command-cd.png'
    },
    commandLineLessonCommandCD: {
      MESSAGE:
        "'cd' stands for 'change directory'. A directory is just a folder on your computer. Nothing magical.",
      NEXT: 'commandLineLessonCommandCDCont',
      PREVIOUS: 'commandLineLessonStartCont',
      IMAGE:
        'https://res.cloudinary.com/dobfxs62e/image/upload/v1561335407/mentored.dev/command-line-lesson-command-cd-dir.png'
    },
    commandLineLessonCommandCDCont: {
      MESSAGE:
        'When we start a new session on the command line, we usually start at the root of our computer.',
      NEXT: 'commandLineLessonCommandPartOneIntro',
      PREVIOUS: 'commandLineLessonCommandCD'
    },
    commandLineLessonCommandPartOneIntro: {
      MESSAGE: "Let's try changing into the 'Desktop' directory.",
      NEXT: 'commandLineLessonPartOne',
      PREVIOUS: 'commandLineLessonCommandCDCont'
    },
    commandLineLessonPartOne,
    commandLineLessonPartOneSuccessYes: {
      MESSAGE:
        "Great job! You have learned your first command on the command line. 5pts for you! Let's keep up the momentum and move onto the next.",
      NEXT: 'commandLineLessonPartTwoIntro',
      PREVIOUS: 'commandLineLessonPartOne'
    },
    commandLineLessonPartOneSuccessNo: {
      MESSAGE:
        "Hmm...that's no good. You may not be in the root folder. Make sure you're not running as admin and restart {application}.",
      NEXT: 'commandLineLessonPartOne',
      PREVIOUS: 'commandLineLessonPartOne',
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartTwoIntro: {
      MESSAGE:
        "'mkdir' is the second command in our lesson, which is short for 'make directory'.",
      NEXT: 'commandLineLessonPartTwo',
      PREVIOUS: 'commandLineLessonPartOneSuccessYes'
    },
    commandLineLessonPartTwo: {
      MESSAGE:
        "Inside the same {application} window, type 'mkdir coding-stuff'. This essentially creates a new folder in the current location. (Desktop)",
      NEXT: 'commandLineLessonPartTwoCont',
      PREVIOUS: 'commandLineLessonPartTwoIntro',
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartTwoCont,
    commandLineLessonPartTwoSuccessYes: {
      MESSAGE:
        "Wow {name}, I knew you were a quick learner. Congrats! That's 2 commands in the book for you. Onward!",
      NEXT: 'commandLineLessonPartThree',
      PREVIOUS: 'commandLineLessonPartTwoCont',
      HAS_KEY: 'name'
    },
    commandLineLessonPartTwoSuccessNo: {
      MESSAGE: "That's no  good...Let's try starting from the beginning again.",
      NEXT: 'commandLineLessonPartTwo',
      PREVIOUS: 'commandLineLessonPartTwoCont'
    },
    commandLineLessonPartThreeIntro: {
      MESSAGE:
        'Directories are wonderful in themselves, but their purpose is to store files. Our last command for this lesson will help us with that.',
      NEXT: 'commandLineLessonPartThree',
      PREVIOUS: 'commandLineLessonPartTwoSuccessYes'
    },
    commandLineLessonPartThree,
    commandLineLessonPartThreeSuccessYes: {
      MESSAGE:
        'Brilliant! You just created your first file using the command line. Another 5pts to you!',
      NEXT: 'commandLineLessonCongrats',
      PREVIOUS: 'commandLineLessonPartThree'
    },
    commandLineLessonPartThreeSuccessNo: {
      MESSAGE:
        "Remember, to change directories, type 'cd' followed by a space followed by the name of the directory.",
      NEXT: 'commandLineLessonPartThree',
      PREVIOUS: 'commandLineLessonPartThree'
    },
    commandLineLessonCongrats: {
      MESSAGE:
        'Look at that. In a short period of time, you learned three commands on the command line.',
      NEXT: 'commandLineLessonCongratsCont',
      PREVIOUS: 'commandLineLessonPartThreeSuccessYes'
    },
    commandLineLessonCongratsCont: {
      MESSAGE:
        'I suggest you memorize these. They are three of the most commonly used commands so this knowledge will serve you for a long time.',
      NEXT: 'commandLineStartQuiz',
      PREVIOUS: 'commandLineLessonCongrats'
    },
    commandLineStartQuiz: {
      MESSAGE:
        "Before we end today's lesson, I want to give you a quick quiz to make sure you were paying attention and not just copying and pasting.",
      NEXT: 'commandLineQuizQuesOne',
      PREVIOUS: 'commandLineLessonCongrats'
    },
    commandLineQuizQuesOne: {
      MESSAGE: 'Write the command to change directories.',
      NEXT: 'commandLineQuizQuesTwo',
      PREVIOUS: 'commandLineStartQuiz',
      INPUT: {
        TYPE: 'text',
        KEY: 'commandLineQuizQuesOne',
        PLACEHOLDER: 'Write command'
      },
      ANSWER: ['cd']
    },
    commandLineQuizQuesTwo: {
      MESSAGE:
        "What would you type to create a new directory called 'studies'?",
      NEXT: 'commandLineQuizQuesThree',
      PREVIOUS: 'commandLineQuizQuesOne',
      INPUT: {
        TYPE: 'text',
        KEY: 'commandLineQuizQuesTwo',
        PLACEHOLDER: 'Write command'
      },
      ANSWER: ['mkdir studies', 'mkdir -p studies']
    },
    commandLineQuizQuesThree: {
      MESSAGE:
        "How would you create a new file named 'hello' with the extension .txt?",
      NEXT: 'commandLineQuizSummary',
      PREVIOUS: 'commandLineQuizQuesTwo',
      INPUT: {
        TYPE: 'text',
        KEY: 'commandLineQuizQuesThree',
        PLACEHOLDER: 'Write command'
      },
      ANSWER: ['touch hello.txt', 'new-item hello.txt']
    },
    commandLineQuizSummary: {
      MESSAGE:
        "{reaction} You scored {score}. {closingMessage} That ends today's lesson. Cheerio!",
      PREVIOUS: 'commandLineQuizQuesThree',
      HAS_SPECIAL_MESSAGE: ['reaction', 'score', 'closingMessage']
    }
  }
}

export type Story = typeof story
export default story
