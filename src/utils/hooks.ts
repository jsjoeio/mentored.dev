import { useEffect } from 'react'
import { isBrowser } from './functions';


export interface dataInterface {
  [key: string]: string
}

/**
 * @enum {EVENT_TYPES}
 */
export enum EVENT_TYPES {
  CLICK = 'click',
  VISIT = 'visit',
  START_LESSON = 'start-lesson',
  COMPLETE_LESSON = 'complete-lesson',
  LOGIN = 'login'
}
/**
 *
 * @param {EVENT_TYPES} event
 * @param data
 */
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
