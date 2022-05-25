import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
const ENDPOINT = 'localhost:3000'

function Overlay() {
  const [value, setValue] = useState('')

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('FromAPI', data => {
      setValue(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <p>
      Name is <span>{value}</span>
    </p>
  )
}

export default Overlay