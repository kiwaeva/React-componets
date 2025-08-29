import React, { useState } from "react";

const Tabs = ({children}) => {
const [activeTab, setActiveTab] = useState(0);

const childrenArray = React.Children.toArray(children);

const activeContent = childrenArray[activeTab];

const tabButtons = React.Children.map(children,(tab,index) => (
    <button
     key={index}
     onClick={()=> setActiveTab(index)}
     style={{
        fontWeight: index === activeTab ? 'bold' : 'normal',
        marginRight: '8px',
      }}
    >
        {tab.props.title}
    </button>
));
    return(
        
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabButtons}
      </div>
      <div className="tab-content">
        {activeContent}
      </div>
    </div>
    
    );
};

export default Tabs; 