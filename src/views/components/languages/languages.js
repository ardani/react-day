import React from 'react';

const Languages = () => (
    <aside className="languages aside section">
        <div className="section-inner">
            <h2 className="heading">Languages</h2>
            <div className="content">
                <ul className="list-unstyled">
                    <li className="item">
                        <span className="title"><strong>English:</strong></span><br/>
                        <span className="level">Native Speaker <br className="visible-xs" /><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span><br/>
                        <span className="level">Pasif <br className="visible-xs" /><i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                    </li>
                    <li className="item">
                        <span className="title"><strong>Indonesia:</strong></span><br/>
                        <span className="level">Professional <br className="visible-sm visible-xs" /><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
);


export default Languages;