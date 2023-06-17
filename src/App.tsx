import { useState } from 'react'
import * as Style from './App.styles'
import { Item } from './types/Item'
import ItemList from './components/ListItem'
import AddArea from './components/AddArea'

export default function App() {
const [list, setList] = useState<Item[]>([
  { id: 1, name: 'Ir ao mercado', done: false},
  { id: 2, name: 'Ir a farmácia', done: false}
])

  return (
    <Style.Container>
      <Style.Area>
        <Style.Header>Lista de Tarefas</Style.Header>

        <AddArea />

        {list.map((item, index) => (
          <ItemList key={index} item={item}/>
        ))}
      </Style.Area>
    </Style.Container>
  )

}