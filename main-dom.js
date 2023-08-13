import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const div = document.createElement('div')
document.body.append(div)
createRoot(div).render(<App />)