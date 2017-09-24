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
                <a className="col-md-4 col-sm-4 col-xs-12" href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">
                <img className="img-responsive project-image" src="assets/images/projects/project-2.png" alt="project name" />
                </a>
                <div className="desc col-md-8 col-sm-8 col-xs-12">
                    <h3 className="title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta - Designed for Mobile Apps</a></h3>
                    <p> You can put one of your secondary projects here. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                    <p><a className="more-link" href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank"><i className="fa fa-external-link"></i> Find out more</a></p>
                </div>                          
            </div>
        </div>  
    </div>               
</section>
);


export default Projects;
