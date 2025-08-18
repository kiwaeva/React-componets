import { useState } from "react"

const DropdownMenu = ({}) => {
    const [showMenu, setShowMenu ] = useState(false);
    const toggleMenu = () => { setShowMenu ((prev) =>!prev);
    }

    return(
        <div className="dropdown">
            <button onClick={toggleMenu}>Menu:</button>
            {showMenu && (
            <div className="menu-content" >
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
            </div>
            )};
        </div>
    )
}

export default DropdownMenu;