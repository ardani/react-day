import React from 'react';

const Projects = () => (
    <section className="latest section">
    <div className="section-inner">
        <h2 className="heading">Latest Projects</h2>
        <div className="content">    
                               
            <div className="item featured text-center">
                <h3 className="title"><a href="javascript:void(0)">Sistem Recommendation Using Mining</a></h3>
                <p className="summary">Reccomendation sistem using mining data that build on Laravel</p>
                <div className="featured-image">
                    <a href="javascript:void(0)" >
                    <img className="img-responsive project-image" src="assets/images/projects/project-featured.png" alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">New</div>
                        </div>
                    </div>        
            </div>        
            <div className="item row">
                <a className="col-md-4 col-sm-4 col-xs-12" href="javascript:void(0)">
                <img className="img-responsive project-image" src="assets/images/projects/project-2.png" alt="project name" />
                </a>
                <div className="desc col-md-8 col-sm-8 col-xs-12">
                    <h3 className="title"><a href="javascript:void(0)" ></a>Sistem Recommendation Using Mining</h3>
                    <p> Recomendation sistem using mining data that build on Laravel. Reccomendation sistem using Apriori Algorithm. Sistem Build using laravel framework, Bootstrap, and MySql.</p>
                    <p><a className="more-link" href="javascript:void(0)"><i className="fa fa-external-link"></i> Find out more</a></p>
                </div>                          
            </div>
        </div>  
    </div>               
</section>
);


export default Projects;
