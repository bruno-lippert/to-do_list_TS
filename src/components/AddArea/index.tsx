import React from 'react'
import * as  Styles from './styles'

export default function AddArea() {
  return (
    <Styles.Container>
      <div className='image'>➕</div>
      <input type="text" placeholder='Adicione' />
    </Styles.Container>

  )
}