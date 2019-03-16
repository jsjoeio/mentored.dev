const story = {
  states: {
    initial: {
      MESSAGE:
        "Hooray! You're here at last.\nThey told us you'd be joining soon.",
      NEXT: 'intro'
    },
    intro: {
      MESSAGE:
        'Welcome to the Life of Code! Our goal? To teach you to become a developer.',
      NEXT: 'name'
    },
    name: {
      MESSAGE:
        'First things first. What’s your name? I want to make sure I address you correctly.',
      NEXT: 'greet',
      PREVIOUS: 'intro',
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
    os: {
      MESSAGE: 'What operating system are you using?',
      NEXT: 'osComment',
      PREVIOUS: 'moreInfo',
      INPUT: {
        TYPE: 'radio',
        KEY: 'os',
        OPTIONS: ['macOS', 'Windows', 'Linux']
      }
    },
    osComment: {
      MESSAGE: "{os}, eh? Fantastic choice! We're going to make a great team.",
      NEXT: 'initialCommandLine',
      PREVIOUS: 'os',
      HAS_KEY: 'os'
    },
    initialCommandLine: {
      MESSAGE:
        "Enough chit-chat. Lets dive into your first lesson! Today's lesson is on the command line. Have you used the command line before?",
      NEXT: {
        OPTION_0: 'commandLineExpYes',
        OPTION_1: 'commandLineExpNo'
      },
      PREVIOUS: 'osComment',
      INPUT: {
        TYPE: 'radio',
        KEY: 'initialCommandLine',
        OPTIONS: ['Yes', 'No']
      }
    },
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
      PREVIOUS: 'initialCommandLine'
    },
    commandLineDef: {
      MESSAGE:
        'I like to think of the command line as a place where the user (you) can communicate with the machine (your computer) by typing in commands the machine will recognize.',
      NEXT: 'commandLineImportance',
      PREVIOUS: 'commandLineExpNo'
    },
    commandLineImportance: {
      MESSAGE:
        "Being familiar with the command line is important because you'll use it on the daily as a developer. Let's get started!",
      NEXT: 'commandLineLessonOpenApp',
      PREVIOUS: 'commandLineDef'
    },
    commandLineLessonOpenApp: {
      MESSAGE:
        "Rather than have you use a simulated command line here in the browser, we're going to be using the one on your local machine. The first thing you'll do is open {application}. You can do this by going to {directions}",
      NEXT: 'commandLineLessonStart',
      PREVIOUS: 'commandLineImportance',
      HAS_LOCAL_KEYS: ['application', 'directions']
    },
    commandLineLessonStart: {
      MESSAGE:
        'Now that we have our environment ready, we can learn a few commands. A command is simply a keyword that the command line will recognize and perform a specific action.',
      NEXT: 'commandLineLessonStartCont',
      PREVIOUS: 'commandLineLessonOpenApp'
    },
    commandLineLessonStartCont: {
      MESSAGE:
        "We'll be looking at three commands today. The first one is the most basic: 'cd'. 'cd' stands for change directory. A directory is just a folder on your computer. Nothing special. When we start a new session on the command line, we usually start at the root of our computer.",
      NEXT: 'commandLineLessonPartOne',
      PREVIOUS: 'commandLineLessonStart'
    },
    commandLineLessonPartOne: {
      MESSAGE:
        "Let's try changing into the 'Desktop' directory. Inside the {application} window, type 'cd Desktop'. If everything worked smoothly, you should see the location update to show /Desktop.",
      NEXT: {
        OPTION_0: 'commandLineLessonPartOneSuccessYes',
        OPTION_1: 'commandLineLessonPartOneSuccessNo'
      },
      PREVIOUS: 'commandLineLessonStartCont',
      INPUT: {
        TYPE: 'radio',
        KEY: 'commandLineLessonPartOne',
        OPTIONS: [
          'It worked!',
          'Uh-oh. I see an error message, "no such file or directory."'
        ]
      },
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartOneSuccessYes: {
      MESSAGE:
        "Great job! 😄 You have learned your first command for the command line. 5pts for you! Let's keep up the momentum and move onto the next.",
      NEXT: 'commandLineLessonPartTwo',
      PREVIOUS: 'commandLineLessonPartOne'
    },
    commandLineLessonPartOneSuccessNo: {
      MESSAGE:
        "Hmm...that's no good. Desktop may not be a folder in your root. Try restarting {application}.",
      NEXT: 'commandLineLessonPartOne',
      PREVIOUS: 'commandLineLessonPartOne',
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartTwo: {
      MESSAGE:
        "Inside the same {application} window, type 'mkdir coding-stuff'. 'mkdir' is the second command in our lesson, which is short for 'make directory'. This essentially creates a new folder in the current location.",
      NEXT: 'commandLineLessonPartTwoCont',
      PREVIOUS: 'commandLineLessonPartOneSuccessYes',
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartTwoCont: {
      MESSAGE:
        "Since we 'cd'ed' into the Desktop directory, you should now see a new folder on your Desktop titled 'coding-stuff'.",
      NEXT: {
        OPTION_0: 'commandLineLessonPartTwoSuccessYes',
        OPTION_1: 'commandLineLessonPartTwoSuccessNo'
      },
      PREVIOUS: 'commandLineLessonStartCont',
      INPUT: {
        TYPE: 'radio',
        KEY: 'commandLineLessonPartTwoCont',
        OPTIONS: ['Success!💯', "Oh no...It didn't work."]
      },
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartTwoSuccessYes: {
      MESSAGE:
        "Wow {name}, I knew you were a quick learner when we first met. Congrats on your success! 🙌🏼 That's 2 commands in the book for you my friend. Onto the next one.",
      NEXT: 'commandLineLessonPartThree',
      PREVIOUS: 'commandLineLessonPartTwoCont',
      HAS_KEY: 'name'
    },
    commandLineLessonPartTwoSuccessNo: {
      MESSAGE: "That's no  good...Let's try starting from the beginning again.",
      NEXT: 'commandLineLessonPartTwo',
      PREVIOUS: 'commandLineLessonPartTwoCont'
    },
    commandLineLessonPartThree: {
      MESSAGE:
        "Directories are cool and all, but their purpose is to store files. Our last command for this lesson will help us with that. Inside the same {application} window, change directories into 'coding-stuff' and then type 'touch first-file.txt'.",
      NEXT: {
        OPTION_0: 'commandLineLessonPartThreeSuccessYes',
        OPTION_1: 'commandLineLessonPartThreeSuccessNo'
      },
      PREVIOUS: 'commandLineLessonPartTwoSuccessYes',
      INPUT: {
        TYPE: 'radio',
        KEY: 'commandLineLessonPartThree',
        OPTIONS: ['Aw yeah! I created it successfully.', 'Help! I need a hint.']
      },
      HAS_LOCAL_KEYS: ['application']
    },
    commandLineLessonPartThreeSuccessYes: {
      MESSAGE:
        "Hooray! You just created your first file using the command line. If you haven't yet, give yourself a big high-5!😎",
      NEXT: 'commandLineLessonCongrats',
      PREVIOUS: 'commandLineLessonPartThree'
    },
    commandLineLessonPartThreeSuccessNo: {
      MESSAGE:
        "Remember, to change directories you type 'cd' followed by a space followed by the name of the directory. So type in 'cd coding-stuff'. Then type 'touch first-file.txt'.",
      NEXT: 'commandLineLessonCongrats',
      PREVIOUS: 'commandLineLessonPartThree'
    },
    commandLineLessonCongrats: {
      MESSAGE:
        'Look at that. In a short period of time, you learned three commands for the command line. These are three of the most commonly used commands so this knowledge will serve you for a long time.',
      NEXT: 'commandLineStartQuiz',
      PREVIOUS: 'commandLineLessonPartThreeSuccessYes'
    },
    commandLineStartQuiz: {
      MESSAGE:
        "Before we end today's lesson, I want to give you a quick quiz to make sure you were paying attention and not just copying and pasting 😉",
      NEXT: 'commandLineQuizQuesOne',
      PREVIOUS: 'commandLineLessonCongrats'
    },
    commandLineQuizQuesOne: {
      MESSAGE: 'Write the command to change directories.',
      NEXT: 'commandLineQuizQuesTwo',
      PREVIOUS: 'commandLineStartQuiz',
      INPUT: {
        TYPE: 'text',
        KEY: 'commandLineQuizQuesOne'
      },
      ANSWER: 'cd'
    },
    commandLineQuizQuesTwo: {
      MESSAGE:
        "What would you type to create a new directory called 'awesome'?",
      NEXT: 'commandLineQuizQuesThree',
      PREVIOUS: 'commandLineQuizQuesOne',
      INPUT: {
        TYPE: 'text',
        KEY: 'commandLineQuizQuesTwo'
      },
      ANSWER: 'mkdir awesome'
    },
    commandLineQuizQuesThree: {
      MESSAGE:
        "How would you create a new file named 'hello' with the extension .txt?",
      NEXT: 'commandLineQuizSummary',
      PREVIOUS: 'commandLineQuizQuesTwo',
      INPUT: {
        TYPE: 'text',
        KEY: 'commandLineQuizQuesThree'
      },
      ANSWER: 'touch hello.txt'
    },
    commandLineQuizSummary: {
      MESSAGE:
        "{reaction} You scored {score}. {closingMessage} That ends today's lesson. I'll see you here again tomorrow. Cheerio!",
      PREVIOUS: 'commandLineQuizQuesThree',
      HAS_SPECIAL_MESSAGE: ['reaction', 'score', 'closingMessage']
    }
  }
}

export default story
