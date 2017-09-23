import React from 'react';

const Skills = () => (
    <aside className="skills aside section">
        <div className="section-inner">
            <h2 className="heading">Skills</h2>
            <div className="content">
                <p className="intro">
                My skill until now can you see on right side. I also love to learn new technology and give me some more time to explore.
                </p>
                <div className="skillset">
                    
                    <div className="item">
                        <h3 className="level-title">HTML<span className="level-label">Pro</span></h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="60%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">CSS<span className="level-label">Mid</span></h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="50%">
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">React JS<span className="level-label">Noob</span></h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="10%">
                            </div>
                        </div>
                    </div>
                    <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Coderwall</a></p>
                </div>
            </div>
        </div>
    </aside>
);


export default Skills;