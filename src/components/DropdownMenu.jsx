import { useState } from "react"

const DropdownMenu = ({}) => {
    const [showMenu, setShowMenu ] = useState(false);
    const toggleMenu = () => { setShowMenu ((prev) =>!prev);
    }

    return(
        <div className="dropdown">
            <button onClick={toggleMenu}>Go to:</button>
            {showMenu && (
            <div className="menu-content" >
                <a href="#my-avatar">My avatar</a>
                <a href="#cards">Cards</a>
            </div>
            )}
        </div>
    )
}

export default DropdownMenu;