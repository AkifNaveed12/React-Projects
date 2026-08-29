
import MenuItems from "./menu-item"

export default function MenuList({list = []}){
    return <ul className="menu-list-container">
        {
            list && list.length ?
            list.map((listItem) => (<MenuItems  
                item={listItem} key={listItem.label}
                />
            ))
            : null
        }

    </ul>
}