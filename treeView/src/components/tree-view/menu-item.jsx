import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'


export default function MenuItems({ item }){
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

    function handleToggleChildren(){
        setDisplayCurrentChildren(!displayCurrentChildren);
    }

    return <li>
        <div className="menu-item">
            
            <p>{item.label}</p>
            {
                item.children && item.children.length > 0 ? 
                (
                <span onClick={handleToggleChildren}>
                    {displayCurrentChildren ? <FaMinus color="#fff"  size={25}/> : <FaPlus color="#fff"  size={25}/>}
                    </span>) 
                    : null
            }
        </div>
        {
            item.children && 
            item.children.length > 0 && 
            displayCurrentChildren 
            ?
            <MenuList list={item.children}/>
            : null
        }
    </li>
}