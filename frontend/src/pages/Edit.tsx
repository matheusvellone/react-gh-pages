import { useState } from "react"

function Edit() {
  const [name, setName] = useState('')

  const onClick = () => {
    fetch('http://localhost:3000/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
  }

  return (
    <div className="App">
      <input onChange={e => setName(e.target.value)} value={name}/>
      <button onClick={onClick}>Save</button>
    </div>
  )
}

export default Edit
