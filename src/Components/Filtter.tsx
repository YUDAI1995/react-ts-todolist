import React from "react";
import classNames from 'classnames';
import "../css/Filtter.scss";
import { Tab } from "../models/tab.model";

interface Filtterprops {
    tabItem: Tab[];
    activeTab: Tab;
    onFiltterHandler: (tab: Tab) => void;
}

export const Filtter:React.FC<Filtterprops> = props => {
  return (
    <div className="inner">
      <ul className="tabList">
        {props.tabItem.map((tab) => (
          <li className={
            classNames("tab", {"is_active" : props.activeTab === tab}) 
          } key={tab}>
            <button onClick={props.onFiltterHandler.bind(null, tab)}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
