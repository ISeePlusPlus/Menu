import React from "react";
import { useGlobalContext } from "../context";

const LegendContainer = () => {
  const { legendId, monitorName, Legends } = useGlobalContext();
  const legend = Legends.find((legend) => legend.Id === legendId);

  return (
    <article className='legend-container'>
      <h3>{monitorName}</h3>
      <div className='legend-main-section'>
        <ul>
          {legend.tags.map((tag, tagIndex) => {
            return (
              <li key={tagIndex}>
                <div className='legend-items'>
                  <div>
                    <span
                      style={{ background: tag.Color }}
                      className='color-box'
                    >
                      &nbsp;
                    </span>
                    <span line-height='1em'> {tag.Label}</span>
                  </div>
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
