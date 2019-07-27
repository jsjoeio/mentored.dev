import { useEffect } from 'react'
import { isBrowser } from './functions';


interface dataInterface {
  [key: string]: string
}

enum EVENT_TYPES {
  CLICK = 'click',
  VISIT = 'visit',
  START_LESSON = 'start-lesson',
  COMPLETE_LESSON = 'complete-lesson',
  LOGIN = 'login'
}
export function useGTagEvent(event: EVENT_TYPES, data: dataInterface) {
  useEffect(() => {
    // Check for browser because `gatsby build` runs in Node
    if (isBrowser()) {
      // Make sure .gtag exists (i.e only loads in production)
      if ((<any>window).gtag) {
        (<any>window).gtag(event, data)
      }
    }
  })
}
