import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { SimpleFrom } from './02-UseEffect/SimpleFrom'
import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-UseRef/FocusScreen'
import { Memorize } from './06-memos/Memorize'
// import { CounterApp } from './01-UseState/CounterApp'
// import { HooksApp } from './HooksApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleFrom /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    <Memorize />
  </StrictMode>,
)
