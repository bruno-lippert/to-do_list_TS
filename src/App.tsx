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
 
const handleAddTask = (taskName: string) => {
  const newList = [...list]
  newList.push({
    id: list.length +1,
    name: taskName,
    done: false
  });
  setList(newList)     
}

  return (
    <Style.Container>
      <Style.Area>
        <Style.Header>Lista de Tarefas</Style.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ItemList key={index} item={item}/>
        ))}
      </Style.Area>
    </Style.Container>
  )

}