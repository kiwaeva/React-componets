import { useState } from "react";

const MyTabs = ({children}) => {
const [activeTab, setActiveTab] = useState(0);

const activeContent = children[activeTab];

const tabButtons = children.map((tab,index) => (
    <button
     key={index}
     onClick={()=> setActiveTab(index)}
     style={{
        fontWeight: index === activeIndex ? 'bold' : 'normal',
        marginRight: '8px',
      }}
    >
        {tab.props.title}
    </button>
));
    return(
        <>
            {tabButtons}
            {activeContent}

        </>
    )
}

export default MyTabs; 