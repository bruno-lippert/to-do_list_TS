import { useState } from 'react'
import * as Style from './App.styles'
import { Item } from './types/Item'
import ItemList from './components/ListItem'
import AddArea from './components/AddArea'

export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Ir ao mercado', done: false },
    { id: 2, name: 'Ir a farmácia', done: false }
  ])

  const handleAddTask = (taskName: string) => {
    const newList = [...list]
    
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList)
  }

  const handleRemoveTask = (position: number) => {
    const newList = [...list]
    newList.splice(position, 1)

    let newSequence: number = 1
    newList.forEach((e) => {
      e.id = newSequence
      newSequence++;
    })

    setList(newList)
  }

  return (
    <Style.Container>
      <Style.Area>
        <Style.Header>Lista de Tarefas</Style.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ItemList key={index} position={index} item={item} handleRemoveTask={handleRemoveTask} />
        ))}
      </Style.Area>
    </Style.Container>
  )

}