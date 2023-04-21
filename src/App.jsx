import Demo from "./components/Demo"    
import Dashboard from "./components/Dashboard";

import "./App.css"

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
        </div>
        <div className="app">
            <Dashboard />
            <Demo />
        </div>
    </main>
  )
}

export default App