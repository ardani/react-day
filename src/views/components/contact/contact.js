import React from 'react';

const Contact = () => (
    <aside className="info aside section">
        <div className="section-inner">
            <h2 className="heading sr-only">Basic Information</h2>
            <div className="content">
                <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker"></i><span className="sr-only">Location:</span>Surakarta</li>
                    <li><i className="fa fa-envelope-o"></i><span className="sr-only">Email:</span><a href="#">missfitrina@gmail.com</a></li>
                    <li><i className="fa fa-user"></i><span className="sr-only">Full Name:</span><a href="#">Nur Fitrina</a></li>
                </ul>
            </div>
        </div>                 
    </aside>
);


export default Contact;