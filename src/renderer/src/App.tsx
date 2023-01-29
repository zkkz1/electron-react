import Scan from './components/Scan'
import Versions from './components/Versions'

function App(): JSX.Element {
  return (
    <div className="container">
      <Versions></Versions>
      <Scan></Scan>
    </div>
  )
}

export default App
