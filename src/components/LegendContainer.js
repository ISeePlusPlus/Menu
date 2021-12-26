import React from "react";
import { useGlobalContext } from "../context";

const LegendContainer = () => {
  const { legendId, monitorName, Legends } = useGlobalContext();
  const legend = Legends.find((legend) => legend.Id === legendId);

  return (
    <article className='legend-container'>
      <div className='legend-header'>
        <h3>{monitorName}</h3>
      </div>
      <div className='legend-main-section'>
        <ul>
          {legend.tags.map((tag, tagIndex) => {
            return (
              <li key={tagIndex}>
                <div className='legend-item'>
                  <span>{tag.Color}</span>
                  <span>{tag.Label}</span>;)
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default LegendContainer;
