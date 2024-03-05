import {createContext} from 'react'


const HandlerContext = createContext({
    language: 'english',
    setLanguage: () => {}
})

export default HandlerContext