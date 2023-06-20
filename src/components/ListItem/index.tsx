import React, { useState } from 'react'
import { Item } from '../../types/Item'
import * as Style from './styles'
import { BsFillTrash3Fill  } from 'react-icons/bs';

type Props = {
    item: Item
}

export default function ItemList({ item }: Props) {
    const [isChecked, setIsChecked] = useState(item.done)

    const handleClick = () => {

    }

    return (
        <Style.Container done={isChecked}>
            <input type="checkbox"  checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
            <label>{item.id} - {item.name} - {item.done.toString()}</label>
            <div className='deleteContainer'>
                <div className='deleteButton' onClick={handleClick}><BsFillTrash3Fill /></div>
            </div>
        </Style.Container>
    )
}
