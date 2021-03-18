import React from 'react';
import './ItemList.css';
import Item from '../item/item';
import {useFirestore} from '../../firebase/useFirestore';

const ItemList = () => {
    const { items } = useFirestore();
    return (
        <div className="item-List">
                {items.map((item)=>{
                    return <Item item={item} key={item.id}/>
                })}
            </div>
    )
}
export default ItemList; 