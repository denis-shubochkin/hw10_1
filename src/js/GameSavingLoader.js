import read from './reader'
import json from './parser'

export default class GameSavingLoader {
    load() {
     return  read().then((response) =>
        {
          return json(response)
        }).catch((error) => 
        {
            console.log(`в функции read ошибка ${error}`)
        }).then((data) => 
        {
            return data
        }).catch((error) => 
        {
            console.log(`в функции json ошибка ${error}`)
        }).then((t) => 
        {
            return JSON.parse(t)
        });
   }
 }