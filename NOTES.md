This is a place to keep random notes....


For the Game.tsx,

I need to figure out a way to update MESSAGE but I know I only

something like

```
  if (storyState['HAS_KEY']) {
    message = getMessage(state, storyState)
  } else {
    message = storyState['MESSAGE]
  }
```