import { FollowMouse } from "./FollowMouse"
import { useState } from "react"

function App() {

  const [mounted, setMounted]=useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}

      <button onClick={()=>setMounted(!mounted)}>Toggle mounted FollowMouse Component</button>
    </main>
  )
}

export default App
