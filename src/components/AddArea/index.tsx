import React, { useState, KeyboardEvent } from 'react'
import * as  Styles from './styles'

type Props = {
  onEnter: (taskname: string) => void
}

export default function AddArea({onEnter} : Props) {
  const [input, setInput] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => { 
    if(e.code === 'Enter' || e.code === 'NumpadEnter'&& input !== '') {
      onEnter(input);
      setInput('')
    }
  }

  return (
    <Styles.Container>
      <div className='image'>➕</div>
      <input type="text" placeholder='Adicione' value={input} onChange={e => setInput(e.target.value)} onKeyUp={handleKeyUp}/>
    </Styles.Container>

  )
}