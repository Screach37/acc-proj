import { useState } from 'react'
import { Navbar, Footer } from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Footer />
    </div>
  )
}

export default App
