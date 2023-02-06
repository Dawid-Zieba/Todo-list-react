import React from "react";
import "./style.css";

const Section = ({title,body,extraHeaderContent}) => (
    <section className="section section--tasks">
                    <div className="section__container">
                        <h2 className="section__header section__header-second">{title}</h2>
                      {extraHeaderContent}
                    </div>
                    {body}
                   
                </section>
);

export default Section;