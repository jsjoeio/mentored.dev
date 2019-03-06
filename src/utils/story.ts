const story = {
  states: {
    initial: {
      MESSAGE:
        "Hooray! You're here at last.^1000\nThey told us you'd be joining soon.",
      NEXT: 'intro'
    },
    intro: {
      MESSAGE:
        'Welcome to the Life of Code!^1000\nOur goal?^1000\nTo teach you to become a developer.',
      NEXT: 'name'
    },
    name: {
      MESSAGE:
        'First things first.^500\n\nWhat’s your name? I want to make sure I address you correctly.',
      NEXT: 'greet',
      PREVIOUS: 'intro',
      INPUT: {
        TYPE: 'text',
        KEY: 'name'
      }
    },
    greet: {
      MESSAGE: 'Nice to meet you, {name}',
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
      MESSAGE: 'What operating system are you using?^1000\n',
      NEXT: 'osComment',
      PREVIOUS: 'moreInfo',
      INPUT: {
        TYPE: 'radio',
        KEY: 'os',
        OPTIONS: ['macOS', 'Windows', 'Linux']
      }
    },
    osComment: {
      MESSAGE:
        "{os}, eh?^500Fantastic choice! We're going to make a great team.",
      PREVIOUS: 'os',
      HAS_KEY: 'os'
    }
  }
}

export default story
