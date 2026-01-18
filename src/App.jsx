import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Approach from './pages/Approach'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const leftTabs = ['Home', 'About', 'Services']
  const rightTabs = ['Approach', 'FAQ', 'Contact']

  const renderPage = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      case 'Services':
        return <Services />
      case 'Approach':
        return <Approach />
      case 'FAQ':
        return <FAQ />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav-tabs nav-tabs-left">
          {leftTabs.map(tab => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
        <h1 className="header-title">Louise Pham</h1>
        <nav className="nav-tabs nav-tabs-right">
          {rightTabs.map(tab => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
