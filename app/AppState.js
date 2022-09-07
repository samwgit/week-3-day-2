import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)
  
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'KFC', model: 'Bucket', imgUrl: 'https://i.pinimg.com/originals/9c/8a/5a/9c8a5a35c2581fa4502dc019b9bbefab.jpg', description: 'Yum Yum', price: 1000, year: 1703, id: 'chick-fil-a' }),
    new Car({ make: 'Oscar', model: 'Meyer', imgUrl: 'https://photos.smugmug.com/Cars/Random-Cars/i-Dr3GKsF/0/eed4a4d5/L/Wiener1263-L.jpg', description: 'Haught Digitty Dawwg...', price: 15000, year: 2000, id: '000000' }),
  ]


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
