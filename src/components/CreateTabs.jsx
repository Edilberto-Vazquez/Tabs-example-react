import React, { useState } from "react";

export const Tabs = ({ children }) => {
  console.log(children);
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div>
      <div className="tab-list">
        {children.map((item) => {
          const { label } = item.props;
          let className = "tab-list-item";
          if (activeTab === label) {
            className += " tab-list-active";
          }
          return (
            <div className={className} onClick={() => setActiveTab(label)}>
              <>{label}</>
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        {children.map((item) => {
          if (item.props.label !== activeTab) return undefined;
          return item.props.children;
        })}
      </div>
    </div>
  );
};

export const Tab = ({ label }) => {
  return <>{label}</>;
};
