import React, { useState } from 'react'
import { Item } from '../../types/Item'
import * as Style from './styles'
import { BsFillTrash3Fill  } from 'react-icons/bs';

type Props = {
    item: Item,
    position: number,
    handleRemoveTask: (key: number) => void
}

export default function ItemList({ item, position, handleRemoveTask }: Props) {
    const [isChecked, setIsChecked] = useState(item.done)

    const handleClick = (key: number) => {
        handleRemoveTask(key)
    }

    return (
        <Style.Container done={isChecked}>
            <input type="checkbox"  checked={isChecked} onChange={e => setIsChecked(e.target.checked)} onClick={() => (isChecked ? item.done = false : item.done = true)}/>
            <label>{item.id} - {item.name}</label>
            <div className='deleteContainer'>
                <div className='deleteButton' onClick={()=>handleClick(position)}><BsFillTrash3Fill /></div>
            </div>
        </Style.Container>
        
    )
}
