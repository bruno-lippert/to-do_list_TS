import React, { useState } from 'react'
import { Item } from '../../types/Item'
import * as Style from './styles'

type Props = {
    item: Item
}

export default function ItemList({ item }: Props) {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <Style.Container done={isChecked}>
            <input type="checkbox"  checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
            <label>{item.id} - {item.name}</label>
        </Style.Container>
    )
}
