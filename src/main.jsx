import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { SimpleFrom } from './01-UseState/02-UseEffect/SimpleFrom'
// import { CounterApp } from './01-UseState/CounterApp'
// import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <SimpleFrom />
  </StrictMode>,
)
