import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import IntelkinPage from './pages/IntelkinPage'
import LoopedPage from './pages/LoopedPage'
import RecollabPage from './pages/RecollabPage'
import WriteupsPage from './pages/WriteupsPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intelkin" element={<IntelkinPage />} />
        <Route path="/looped" element={<LoopedPage />} />
        <Route path="/recollab" element={<RecollabPage />} />
        <Route path="/writeups" element={<WriteupsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
