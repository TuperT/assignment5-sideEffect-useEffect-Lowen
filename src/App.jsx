import './App.css'
import HelloEffect from './components/HelloEffect'
import ToggleMessage from './components/ToggleMessage'
import UpdateDcocumentTitle from './components/UpdateDocumentTitle'
import TimerWithCleanup from './components/TimerWithCleanup'
import ConditionaluseEffect from './components/ConditionaluseEffect'
import FetchDataMount from './components/FetchDataonMount'
import FetchDataonStateChange from './components/FetchDataonStateChange'

function App() {
  return (
    <>
      <HelloEffect />
      <ToggleMessage />
      <UpdateDcocumentTitle />
      <TimerWithCleanup />
      <ConditionaluseEffect />
      <FetchDataMount />
      <FetchDataonStateChange />
    </>
  )
}

export default App
