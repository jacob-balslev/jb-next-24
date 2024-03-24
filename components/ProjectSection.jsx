import React from 'react';
import slugify from 'react-slugify';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSection = (props) => {
  
  return <section className={"project-section "+slugify(props.title)}>
  <div className="section-container">
      <span className='project-title-container'>
      <h3 className='project-title' id={slugify(props.title)}>{props.title}</h3><Link key={slugify(props.title)} href={`#${slugify(props.title)}`} className='project-title-link'></Link>
      </span>
        <div className="section-info">
               {props.description ? <div className="project-name" >{props.description}</div>: null }
      <div className="project-role" >{props.role ? `${props.role}`: null }   
      </div>
      </div>
      <div className='section-link'>
      {props.link ? <a href={props.linkUrl} className="project-url hvr-underline-from-left" target="_blank">{props.link}</a>: null }
      </div>
      <div className="section-content" >  
      {
          
      props.images.map( (img) => {
             
        return (

            <div 
              key={img.image.src}
              className={'project-image-container '+img.className}
             >
                <Image
            src={img.image}
            key={img.image.src}
            alt={img.image.src}
            title={props.title}
          />     
          </div>

        );
      } )
    }
      </div>
  </div>
</section>;
};

export default ProjectSection;
