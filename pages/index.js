import ProjectSection from '../components/ProjectSection';
import ScrollToBottomButton from '../components/ScrollToBottomButton';
import ScrollToTopButton from '../components/ScrollToTopButton';
import TableOfContentsWork from '../components/TableOfContents_Work';
import { IconArrowFillDown } from '../components/icons';
import IconJacobBalslev from '../components/icons/jacobbalslev';
import styles from '../styles/Home.module.css';
import AnimationOnScroll from '../components/AnimationOnScroll';
import react from 'react';
import { useRef, useState } from 'react';
import { useInView, InView } from 'react-intersection-observer';


// Billeder til projekter

// FDA billeder
import fda01 from '/img/fda/fda-01.jpg';
import fda02 from '/img/fda/fda-02.jpg';

// CSF
import csf01 from '/img/csf/CSF01.jpg';
import csf02 from '/img/csf/CSF02.jpg';
import csf03 from '/img/csf/CSF03.jpg';
import csf04 from '/img/csf/CSF04.jpg';

// Be Absolutely
import be01 from '/img/be/be01.jpg';
import be02 from '/img/be/be02.jpg';
import be03 from '/img/be/be03.jpg';
import be04 from '/img/be/be04.jpg';
import be05 from '/img/be/be05.jpg';
import be06 from '/img/be/be06.jpg';
import be07 from '/img/be/be07.jpg';

// Play-doh
import playdoh01 from '/img/play-doh/playdoh01.jpg';
import playdoh02 from '/img/play-doh/playdoh02.jpg';
import playdoh03 from '/img/play-doh/playdoh03.jpg';
import playdoh04 from '/img/play-doh/playdoh04.jpg';
import playdoh05 from '/img/play-doh/playdoh05.jpg';
import playdoh06 from '/img/play-doh/playdoh06.jpg';
import playdoh07 from '/img/play-doh/playdoh07.jpg';
import playdoh08 from '/img/play-doh/playdoh08.jpg';

// Ta Rummet
import tarummet01 from '/img/ta-rummet/tarummet01.jpg';
import tarummet02 from '/img/ta-rummet/tarummet02.jpg';
import tarummet03 from '/img/ta-rummet/tarummet03.jpg';
import tarummet04 from '/img/ta-rummet/tarummet04.jpg';
import tarummet05 from '/img/ta-rummet/tarummet05.jpg';

// Relate billeder
import relate01 from '/img/relate/relate01.jpg';
import relate02 from '/img/relate/relate02.jpg';
import relate03 from '/img/relate/relate03.jpg';
import relate04 from '/img/relate/relate04.jpg';

const fda = [
  {
    number: 1,
    image: fda01,
    className:'w-full',
    height: '200px'
  },
  {
    number: 2,
    image: fda02,
    className:'w-full',
    height: '200px'
  } 
]

// Niels Brock billeder
import nielsbrock_04 from '/img/niels-brock/nielsbrock.gif';
import nielsbrock_05 from '/img/niels-brock/nielsbrock_browser_01.png';
import nielsbrock_07 from '/img/niels-brock/nielsbrock_browser_06.png';
import nielsbrock_02 from '/img/niels-brock/nielsbrock_ipad_02.png';
import nielsbrock_03 from '/img/niels-brock/nielsbrock_ipad_03.png';
import nielsbrock_01 from '/img/niels-brock/nielsbrock_mac_02.png';
import nielsbrock_09 from '/img/niels-brock/nielsbrock_mac_03.png';
import nielsbrock_06 from '/img/niels-brock/nielsbrock_mac_04.png';
import nielsbrock_08 from '/img/niels-brock/nielsbrock_stjerner.png';

// Nanna billeder
import nanna_mockup_04 from '/img/nannabalslev/nanna_mockup_04.jpg';
import nanna_mockup_05 from '/img/nannabalslev/nanna_mockup_05.jpg';
import nanna_mockup_06 from '/img/nannabalslev/nanna_mockup_06.jpg';
import nanna_mockup_07 from '/img/nannabalslev/nanna_mockup_07.jpg';

// Leo billeder
import leoilab_mockup from '/img/leo/leoilab_mockup.jpg';
import leoilab_mockup_04 from '/img/leo/leoilab_mockup_04.png';
import leoilab_mockup_05 from '/img/leo/leoilab_mockup_05.png';
import psohappy_01 from '/img/leo/psohappy_01.jpg';

// Nets billeder
import nets_mockup from '/img/itera/nets_mockup.jpg';

// SydEnergi billeder
import se_mockup from '/img/itera/se_mockup.jpg';

// TheColorRun billeder
import tcr_bannere from '/img/the-color-run/tcr_bannere.jpg';
import tcr_mockup from '/img/the-color-run/tcr_mockup.jpg';

// Planetariet billeder
import plan_01 from '/img/planetariet/plan_01.jpg';
import plan_03 from '/img/planetariet/plan_03.jpg';
import plan_04 from '/img/planetariet/plan_04.jpg';
import plan_06 from '/img/planetariet/plan_06.jpg';
import plan_07 from '/img/planetariet/plan_07.jpg';
import plan_08 from '/img/planetariet/plan_08.jpg';
import plan_10 from '/img/planetariet/plan_10.jpg';
import plan_11 from '/img/planetariet/plan_11.jpg';
import plan_12 from '/img/planetariet/plan_12.jpg';
import planetariet_folie from '/img/planetariet/planetariet_folie.jpg';
import planetariet_gif_fed_gifgif from '/img/planetariet/planetariet_gif_fed_gifgif.gif';

// Carter billeder
import carter_01 from '/img/carter/carter_01.jpg';
import carter_02 from '/img/carter/carter_02.jpg';
import carter_03 from '/img/carter/carter_03.jpg';
import carter_06 from '/img/carter/carter_06.jpg';
import carter_07 from '/img/carter/carter_07.jpg';

// Skolernes sangdag billeder
import skolernes_sangdag_01 from '/img/skolernes-sangdag/skolernes_sangdag_01.jpg';
import skolernes_sangdag_02 from '/img/skolernes-sangdag/skolernes_sangdag_02.jpg';
import skolernes_sangdag_03 from '/img/skolernes-sangdag/skolernes_sangdag_03.jpg';
import skolernes_sangdag_04 from '/img/skolernes-sangdag/skolernes_sangdag_04.jpg';
import skolernes_sangdag_05 from '/img/skolernes-sangdag/skolernes_sangdag_05.jpg';
import skolernes_sangdag_06 from '/img/skolernes-sangdag/skolernes_sangdag_06.jpg';
import skolernes_sangdag_07 from '/img/skolernes-sangdag/skolernes_sangdag_07.jpg';
import skolernes_sangdag_10 from '/img/skolernes-sangdag/skolernes_sangdag_10.jpg';

// Skolernes sangdag billeder
import engodportion_01 from '/img/engodportion/engodportion_01.jpg';
import engodportion_02 from '/img/engodportion/engodportion_02.jpg';
import engodportion_03 from '/img/engodportion/engodportion_03.jpg';

// Skolernes sangdag billeder
import slurp01 from '/img/slurp/slurp01.jpg';
import slurp02 from '/img/slurp/slurp02.jpg';
import slurp03 from '/img/slurp/slurp03.jpg';
import slurp04 from '/img/slurp/slurp04.jpg';
import slurp05 from '/img/slurp/slurp05.jpg';




const CSF = [
  {
    number: 1,
    image: csf01,
    className:'w-half row-4',
    height:'200px'
  },  {
    number: 2,
    image: csf02,
    className:'w-half',
    height:'200px'
  },
  {
    number: 3,
    image: csf03,
    className:'w-fourth',
    height:'200px'
  },
  {
    number: 4,
    image: csf04,
    className:'w-fourth',
    height:'200px'
  }
]
  
const be = [

  {
    number: 5,
    image: be05,
    className:'w-half',
    height:'200px'
  },
  {
    number: 1,
    image: be01,
    className:'w-half',
    height:'200px'
  },
  {
    number: 4,
    image: be04,
    className:'w-half',
    height:'200px'
  },
  {
    number: 2,
    image: be02,
    className:'w-half',
    height:'200px'
  },  
  {
    number: 6,
    image: be06,
    className:'w-60p row-2',
    height:'200px'
  },
  {
    number: 3,
    image: be03,
    className:'w-40p',
    height:'200px'
  },
  {
    number: 7,
    image: be07,
    className:'w-40p',
    height:'200px'
  },
 ]
 
 const tarummet = [
  {
    number: 4,
    image: tarummet01,
    className:'w-60p one row-4',
    height:'200px'
  },
  {
    number: 5,
    image: tarummet02,
    className:'w-40p',
    height:'200px'
  },
  {
    number: 2,
    image: tarummet05,
    className:'w-40p',
    height:'200px'
  },  {
    number: 1,
    image: tarummet04,
    className:'w-40p',
    height:'200px'
  },
  {
    number: 3,
    image: tarummet03,
    className:'w-40p',
    height:'200px'
  },
 ]
 const relate = [
  {
    number: 1,
    image: relate01,
    className:'w-40p',
    height:'200px'
  },
  {
    number: 2,
    image: relate02,
    className:'w-60p',
    height:'200px'
  },
  {
    number: 3,
    image: relate03,
    className:'w-60p',
    height:'200px'
  },
  {
    number: 4,
    image: relate04,
    className:'w-40p',
    height:'200px'
  },
 ]
const NielsBrock = [
    {
      number: 1,
      image: nielsbrock_01,
      className:'w-full',
      height:'200px',
    },{
      number: 2,
      image: nielsbrock_02,
      className:'w-half',
      height:'200px',
    },
    {
      number: 3,
      image: nielsbrock_03,
      className:'w-half',
      height:'200px',
    },
    {
        number: 4,
        image: nielsbrock_04,
        className:'w-full',
        height:'200px',
      },
      {
        number: 5,
        image: nielsbrock_05,
        className:'w-full',
        height:'200px',
      },
      {
        number: 6,
        image: nielsbrock_06,
        className:'w-full',
        height:'200px',
      },
      {
        number: 7,
        image: nielsbrock_07,
        className:'w-full',
        height:'200px',
      },
      {
        number: 8,
        image: nielsbrock_08,
        className:'w-full',
        height:'200px',
      },
      {
        number: 9,
        image: nielsbrock_09,
        className:'w-full',
        height:'200px',
      },
  ]
  const Leo = [
    {
      number: 1,
      title: leoilab_mockup,
      image: leoilab_mockup,
      className:'w-full',
      height: '200px'
    },{
      number: 2,
      title: leoilab_mockup_04,
      image: leoilab_mockup_04,
      className:'w-full',
      height: '200px'
    },
    {
      number: 3,
      title: leoilab_mockup_05,
      image: leoilab_mockup_05,
      className:'w-half',
      height: '200px'
    },
    {
        number: 4,
        title: psohappy_01,
        image: psohappy_01,
        className:'w-half',
        height: '200px'
      },   
  ]
  const Nets = [
    {
      number: 1,
      title: nets_mockup,
      image: nets_mockup,
      className:'w-full',
      height: '200px'
    }
  ]

  const SydEnergi = [
    {
      number: 1,
      title: se_mockup,
      image: se_mockup,
      className:'w-full',
      height:'200px'
    }
  ]
  const TheColorRun = [
    {
      number: 1,
      title: tcr_mockup,
      image: tcr_mockup,
      className:'w-full',
      height:'200px'
    },
    {
        number: 1,
        title: tcr_bannere,
        image: tcr_bannere,
        className:'w-full',
        height:'200px'
      }
  ]
  const Planetariet = [
    {
      number: 1,
      title: plan_04,
      image: plan_04,
      className:'w-full',
      height:'200px'
    },
    {
        number: 2,
        title: plan_12,
        image: plan_12,
        className:'w-half',
        height:'200px'
      },
      {
        number: 3,
        title: plan_01,
        image: plan_01,
        className:'w-half',
        height:'200px'
      },
      {
        number: 4,
        title: plan_03,
        image: plan_03,
        className:'w-half',
        height:'200px'
      },
      {
        number: 5,
        title: planetariet_folie,
        image: planetariet_folie,
        className:'w-half',
        height:'200px'
      },
      {
        number: 6,
        title: planetariet_gif_fed_gifgif,
        image: planetariet_gif_fed_gifgif,
        className:'w-full',
        height:'200px'
      },
      {
        number: 7,
        title: plan_11,
        image: plan_11,
        className:'w-full',
        height:'200px'
      },
      {
        number: 8,
        title: plan_06,
        image: plan_06,
        className:'w-full',
        height:'200px'
      },
      {
        number: 9,
        title: plan_07,
        image: plan_07,
        className:'w-half',
        height:'200px'
      },
      {
        number: 10,
        title: plan_08,
        image: plan_08,
        className:'w-half',
        height:'200px'
      },
      {
        number: 11,
        title: plan_10,
        image: plan_10,
        className:'w-full',
        height:'200px'
      }  
  ]
  const NannaBalslev = [
    {
      number: 1,
      title: nanna_mockup_04,
      image: nanna_mockup_04,
      className:'w-full',
      height:'200px',
    },
    {
        number: 2,
        title: nanna_mockup_05,
        image: nanna_mockup_05,
        className:'w-full',
        height:'200px',
      },
      {
        number: 3,
        title: nanna_mockup_07,
        image: nanna_mockup_07,
        className:'w-half',
        height:'200px',
      },
      {
        number: 4,
        title: nanna_mockup_06,
        image: nanna_mockup_06,
        className:'w-half',
        height:'200px',
      }
  ]
  const Carter = [
    {
      number: 1,
      title: carter_01,
      image: carter_01,
      className:'w-full',
      height:'200px'
    },
    {
        number: 2,
        title: carter_02,
        image: carter_02,
        className:'w-full',
        height:'200px'
      },
      {
        number: 3,
        title: carter_07,
        image: carter_07,
        className:'w-full',
        height:'200px'
      },
      {
        number: 4,
        title: carter_03,
        image: carter_03,
        className:'w-full',
        height:'200px'
      },
      {
        number: 6,
        title: carter_06,
        image: carter_06,
        className:'w-full',
        height:'200px'
      }
  ]
  const SkolernesSangdag = [
    {
      number: 1,
      title: skolernes_sangdag_10,
      image: skolernes_sangdag_10,
      className:'w-half row-6',
      height:'200px'
    },
    {
        number: 2,
        title: skolernes_sangdag_01,
        image: skolernes_sangdag_01,
        className:'w-half',
        height:'200px'
      },
      {
        number: 3,
        title: skolernes_sangdag_02,
        image: skolernes_sangdag_02,
        className:'w-fourth',
        height:'200px'
      },
      {
        number: 4,
        title: skolernes_sangdag_03,
        image: skolernes_sangdag_03,
        className:'w-fourth',
        height:'200px'
      },
      {
        number: 5,
        title: skolernes_sangdag_04,
        image: skolernes_sangdag_04,
        className:'w-half',
        height:'200px'
      },
      {
        number: 6,
        title: skolernes_sangdag_06,
        image: skolernes_sangdag_06,
        className:'w-fourth',
        height:'200px'
      },
      {
        number: 7,
        title: skolernes_sangdag_07,
        image: skolernes_sangdag_07,
        className:'w-fourth',
        height:'200px'
      },
      {
        number: 8,
        title: skolernes_sangdag_05,
        image: skolernes_sangdag_05,
        className:'w-half',
        height:'200px'
      }
  ]
  const EnGodPortion = [
    {
      number: 1,
      title: engodportion_01,
      image: engodportion_01,
      className:'w-40p full-row',
      height:'200px'
    },
    {
        number: 2,
        title: engodportion_03,
        image: engodportion_03,
        className:'w-60p',
        height:'200px'
      },
      {
          number: 3,
          title: engodportion_02,
          image: engodportion_02,
          className:'w-40p',
          height:'200px'
        },
  ]
  const Slurp = [
    {
        number: 2,
        image: slurp02,
        className:'w-40p',
        height:'200px'
      },
      {
        number: 1,
        image: slurp01,
        className:'w-60p row-4',
        height:'200px'
      },
      {
          number: 3,
          image: slurp03,
          className:'w-40p',
          height:'200px'
        },
        {
            number: 4,
            image: slurp04,
            className:'w-40p',
            height:'200px'
          },
          {
            number: 5,
            image: slurp05,
            className:'w-40p',
            height:'200px'
          },
  ]
  const PlayDoh = [
    {
      number: 1,
      image: playdoh02,
      className:'w-half',
      height:'200px'
    },
        {
          number: 5,
          image: playdoh05,
          className:'w-half',
          height:'200px'
        },    
    {
      number: 7,
      image: playdoh07,
      className:'w-half',
      height:'200px'
    },              
    {
      number: 4,
      image: playdoh04,
      className:'w-half',
      height:'200px'
    },
    {
      number: 8,
      image: playdoh08,
      className:'w-60p row-4',
      height:'200px'
    },
    {
        number: 1,
        image: playdoh01,
        className:'w-40p',
        height:'200px'
      },
      {
          number: 3,
          image: playdoh03,
          className:'w-40p',
          height:'200px'
        },
       {
            number: 6,
            image: playdoh06,
            className:'w-40p',
            height:'200px'
          },
  ]
  
  
  
export default function Home() {
  return (
    
    
    <div className={styles.container}>

                <div id="work">
            <div className='hero'>    
                <h1>Hi, I'm Jacob. I like to make websites, apps, user experiences, interfaces, illustrations, infographics, posters, books, magazines and many other things.</h1>
                    <IconJacobBalslev />
                <div className='arrow-down flex justify-center'><a href="#projects"><IconArrowFillDown /></a></div>
            </div>
        <div className='connect-container'>
        <div className='connect-content'>
          <h3>If you want to contact me for work. Write me a mail at <a className="contact hvr-underline-from-left" href="mailto:jacobbalslev@gmail.com">jacobbalslev@gmail.com</a>, call me at <a className="contact hvr-underline-from-left" href="tel:004526281131">+45 26281131</a>,<br /> or find me on <a className="contact hvr-underline-from-left" href="https://dk.linkedin.com/pub/jacob-balslev/50/139/b33" target="_blank">Linkedin</a>.</h3>
        </div>
        </div>
                   <div id="projects" className='work-title'><h2>Projects</h2></div>
                                <main>
                                <TableOfContentsWork />
                <div className='work-content'>
                
                <ProjectSection
                    title='Digitaliseringsstyrelsen'
                    description='Redesign of the site for FDA (Fællesoffentlig Digital Arkitektur). A part of the Danish Agency for Digitalisation. The site guides data-engineers, architechts and project managers in chosing open-source solutions.'
                    role={('The developer got another job and I took the chance with mixed results but a great opportunity and lesson. Digital design, UI&UX, Drupal, Print, Infographics, Icons')}
                    link='arkitektur.digst.dk'
                    linkUrl='https://arkitektur.digst.dk'
                    images={fda}
                />
                <ProjectSection
                    title='Mit Niels Brock'
                    description='Redesign of Niels Brocks Learning Management System and design of WordPress support-site. Interviews, research, focusgroups, workshops with the students, teachers and team from Learning Hub.'
                    role='Digital design, UI&amp;UX, WordPress, Print, Icons.'
                    link='mitnielsbrock.dk'
                    linkUrl='https://www.mitnielsbrock.dk/'
                    images={NielsBrock}
                />
                 <ProjectSection
                    title='LEO Innovation Lab'
                    description='Visual designer on various projects. Lead Designer on PsoHappy and InTouch.'
                    role={("Credits: Josef Kjaergaard, Max Gozal among others.")}
                    link='leoinnovationlab.com'
                    linkUrl='http://www.leoinnovationlab.com/'
                    images={Leo}
                />
                 <ProjectSection
                    title='Nanna Balslev'
                    description='Website for my sister and journalist Nanna Balslev.'
                    role='Custom WordPress theme. PHP, CSS.'
                    images={NannaBalslev}
                />
                <ProjectSection
                    title='Nets'
                    description='Multilingual website & intranet for Nets. UX&UI, Information Architechture.'
                    role={("Credits: Jing Pang, Maria Houlberg-Laursen")}
                    link='nets.eu'
                    linkUrl='http://www.nets.eu/'
                    images={Nets}
                />
                <ProjectSection
                    title='Syd Energi'
                    description='Intranet for Syd Energi. UX&UI, Information Architechture.'
                    role={("Credits: Jing Pang")}
                    images={SydEnergi}
                />
                 <ProjectSection
                    title='The Color Run'
                    description='Website and print publishing for The Color Run.'
                    role={("Digital design, UX&UI, Print, SoMe")}
                    link='thecolorrun.dk'
                    linkUrl='https://thecolorrun.dk/'
                    images={TheColorRun}
                />
                <ProjectSection
                    title='Planetariet'
                    description='Signage & Wayfinding for Tycho Brahe Planetarium.'
                    role={("Bachelor project.")}
                    images={Planetariet}
                />
                <ProjectSection
                    title='Carter'
                    description='Typeface inspired by Matthew Carter.'
                    role={("School project.")}
                    images={Carter}
                />
                <ProjectSection
                    title='Skolernes Sangdag'
                    description='Winner of poster competetion for Skolernes Sangdag & DR Ramasjang. We beat a bunch of 4thgraders as new designers. Papercut and photography inspired by Jørgen Clevin'
                    role={("Credits: Henrik Steen")}
                    images={SkolernesSangdag}
                />
                <ProjectSection
                    title='En God Portion'
                    description='Packaging designed to serve portions for one person. Inspired by ration coupons.'
                    role={("School project.")}
                    images={EnGodPortion}
                />
                <ProjectSection
                    title='Slurp'
                    description={("Logotype for chocolatier.\nPrint, Logotype")}
                    role={("School project.")}
                    images={Slurp}
                />
                <ProjectSection
                    title='Relate'
                    description='Print Logotype & magazine.'
                    role={("School project.")}
                    images={relate}
                />
                <ProjectSection
                    title='Ta Rummet'
                    description='Winner of poster competition for the danish femi-festival Ta Rummet. Poster & flyers.'
                    role={("Credits:\nLilith Louise Hasbeck\nSebastian Ly Serena")}
                    images={tarummet}
                />
                <ProjectSection
                    title='Play-doh'
                    description='Print, 150 pages Helvetica Neue 75 Bold in play-doh. Printed by Onestar Press.'
                    role={("School project.")}
                    images={PlayDoh}
                />
                <ProjectSection
                    title='Be'
                    description='Silk-Screen Print Poster Assignment.'
                    role={("School project.\nCredits: Siggy Starfish")}
                    images={be}
                />
                <ProjectSection
                    title='CSF'
                    description='Identity for Copenhagen Summer Festival.'
                    role={("School project.")}
                    images={CSF}
                /> 
                
             </div>
             </main>
             <div id="cv" className="cv">

             <InView>
    {({ inView, ref, entry }) => (
      <div ref={ref} className={"cv-outer-container " + (inView ? 'classNameInView' : 'classNameNotInView')}>
        
      
           <div className="cv-container">
            <div className="cv-title">
      <h2>Resume</h2>
           </div>
           
           <div className="cv-row">
           <div className="cv-blok"><h3>Work Experience</h3>
           <div className="cv-job-row">
           <div className="cv-year">2021-2021</div>
           <div className="cv-jobs">Digitaliseringstyrelsen<br></br>Digital Designer</div>
           </div>
           <div className="cv-job-row"><div className="cv-year">2017-2018</div>
           <div className="cv-jobs">Niels Brock<br></br>Digital Designer
           </div></div>
           <div className="cv-job-row"><div className="cv-year">2016-2017</div><div className="cv-jobs">Leo Innovation Lab<br></br>Visual Designer</div></div><div className="cv-job-row"><div className="cv-year">2015-2016</div><div className="cv-jobs">Itera<br></br>Graphic Designer</div></div><div className="cv-job-row"><div className="cv-year">2015-2015</div><div className="cv-jobs">The Color Run Denmark<br></br>Graphic Designer</div></div><div className="cv-job-row"><div className="cv-year">2013-2015</div><div className="cv-jobs">Freelance Graphic Designer</div></div><div className="cv-job-row"><div className="cv-year">2012-2014</div><div className="cv-jobs">Manipulation<br></br>Graphic Designer</div></div><div className="cv-job-row"><div className="cv-year">2011-2012</div><div className="cv-jobs">Bysted<br></br>Graphic Design Intern</div></div></div><div className="cv-blok"><h3>Education</h3><div className="cv-job-row"><div className="cv-year">2021-2021</div><div className="cv-jobs">User Experience<br></br>KEA</div></div><div className="cv-job-row"><div className="cv-year">2009-2012</div><div className="cv-jobs">BA in Visual Communication<br></br>Danish School of Media &amp; Journalism</div></div><div className="cv-job-row"><div className="cv-year">2008-2009</div><div className="cv-jobs">Graphic Design<br></br>Krabbesholm Højskole</div></div><div className="cv-job-row"><div className="cv-year">2002-2005</div><div className="cv-jobs">Aurehøj Amtsgymnasium</div></div></div>
           
           <div className="cv-blok"><h3>Software</h3>
           Figma, Photoshop, Illustrator, InDesign, WordPress, Javascript, CSS, jQuery, React, node.js, Next.js, PHP, Drupal, FontLab Studio and Cinema 4D.</div>
                      
           <div className="cv-row">
           
           <div className="cv-blok"><h3>Service and capabilities</h3>
           Brand identity and design systems, digital design and user experiences, concept development and strategy, art direction, web development, illustrations, infographics, editorial design, interactive design, package design, outdoor and exhibition graphics, wayfinding.</div>
           
           <div className="cv-blok"><h3>Clients</h3>
ATEA, Betalingsservice, Chr. Hansen, DFDS, Digitaliseringstyrelsen, DONG, Fakta, Folketinget, LEO Innovation Lab, LEO Pharma, L'OREAL, Nets, Niels Brock, NOVOZYMES, Roskilde Festival, SONY, Syd Energi, Totalkredit, Tuborg and The Color Run among others.</div>
<div className="cv-blok"><h3>About me</h3>I am a Copenhagen based graphic designer with a BA in visual communication and a strong digital approach. I consider myself a jack-of-all-trades profile with a focus on user experience, web development and communication.<br></br><br></br>Currently available for hire, project-based or fulltime position.</div>

</div></div>

           <div className="companies">
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path id="path16514" className="cls-1" d="m113.58,59.54c-9.8,0-17.75,7.96-17.75,17.78h0c0,9.82,7.95,17.78,17.75,17.78,4.86,0,9.69-2.26,13.08-5.95h-.02c.36-.39.58-.92.58-1.49,0-1.24-1.01-2.25-2.25-2.25-.65,0-1.23.27-1.64.71h-.02c-2.57,2.78-6.2,4.47-9.73,4.47-7.32,0-13.24-5.94-13.24-13.26s5.92-13.27,13.24-13.27c3.53,0,7.16,1.69,9.73,4.47h.01c.41.44.99.71,1.64.71,1.24,0,2.26-1.01,2.26-2.25,0-.58-.22-1.11-.58-1.51h.02c-3.4-3.68-8.22-5.94-13.08-5.94Zm-17.81.09h-25.19v4.37h10.41v30.96s4.37,0,4.37,0l.02-30.95h10.41s-.02-4.38-.02-4.38Zm-38.46.02c-9.67,0-14.5,11.33-14.88,12.24,0,.05-8.38,18.37-10.52,23.03h4.83l7.02-15.4h17.38v15.4h4.39v-35.27h-8.22Zm77.15,0v35.28h4.39v-15.4h17.38l7.02,15.4h4.83c-2.14-4.66-10.51-22.98-10.53-23.03-.38-.92-5.21-12.25-14.88-12.25,0,0-8.21,0-8.21,0Zm4.17,4.17h3.83c6.88,0,10.83,9.57,10.83,9.57l.63,1.38h-1.16s-14.14,0-14.14,0v-10.95h.01Zm-77.49.21v10.95h-14.14s-1.15,0-1.15,0l.62-1.38s3.96-9.56,10.84-9.56h3.83Zm46.25,10.82c-1.34,0-2.42,1.07-2.42,2.38s1.08,2.39,2.42,2.39h17.58c1.34,0,2.43-1.07,2.43-2.39s-1.09-2.38-2.43-2.38h-17.58Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <g id="_Layer_" data-name="&amp;lt;Layer&amp;gt;">
    <path className="cls-1" d="m55.25,74.67s-1.27-.94-3.04-1.01H9.59s-1.62,7.57-1.62,7.57h24.67c-.03-1.56-.64-3.06-2.13-4.24,1.47-.43,2.71-1.58,3.51-3.05-.05.43-.08.83-.09,1.24-.04,2.25.95,3.86,2.37,5,.29.22,1.56,1.06,4.05,1.06h17.2c.08-.62.14-1.27.16-1.94.06-2-1.01-3.51-2.47-4.62Zm-10.99-10.37c-.29,0-2.75.05-4.38.95-1.63.91-3.71,2.56-4.92,5.19.04-1.87-.65-3.74-2.36-5.05-1.27-.9-3.29-1.1-4.45-1.13h-.89s-15.67.06-15.67.06l-1.6,7.49h49s1.64-7.56,1.64-7.56l-16.36.05ZM6,90.4s16.39-.06,19.38-.06c2.31,0,5.6-3.05,6.79-6.47l-1.41,6.48h16.38c3.15,0,4.84-.64,5.09-.76,2.51-1.21,4.16-3.5,4.94-6.49H7.56l-1.56,7.31Z"></path>
    <g>
      <path className="cls-1" d="m69.42,73h3.86c.9,0,2.45.37,2.45,2.11,0,1.24-.91,2.16-2.28,2.34v.03c1,.16,1.68.77,1.68,1.78,0,1.95-1.58,2.88-3.58,2.9l-3.96.05,1.82-9.21Zm.82,7.47h.62c1.17,0,1.96-.34,1.96-1.24,0-.81-.55-.92-1.59-.92h-.56l-.42,2.16Zm.76-3.83h.87c.97,0,1.54-.41,1.54-1.04,0-.74-.57-.86-1.44-.86h-.6l-.37,1.9Z"></path>
      <path className="cls-1" d="m78.5,73h6.12l-.34,1.74h-3.82l-.4,1.9h3.62l-.36,1.74h-3.61l-.42,2.09h3.97l-.34,1.74h-6.29l1.87-9.21Z"></path>
      <path className="cls-1" d="m87.75,74.82h-2.17l.37-1.82h6.69l-.37,1.82h-2.17l-1.48,7.39h-2.35l1.48-7.39Z"></path>
      <path className="cls-1" d="m96.09,73h2.92l1.42,9.21h-2.34l-.24-1.97h-3.38l-1.03,1.97h-2.52l5.17-9.21Zm1.16,1.9h-.03l-1.84,3.6h2.24l-.37-3.6Z"></path>
      <path className="cls-1" d="m103.43,73h2.35l-1.44,7.39h3.64l-.36,1.82h-5.99l1.81-9.21Z"></path>
      <path className="cls-1" d="m110.66,73h2.34l-1.81,9.21h-2.34l1.81-9.21Z"></path>
      <path className="cls-1" d="m115.62,73h2.9l1.78,6.39h.03l1.22-6.39h2.19l-1.84,9.21h-2.89l-1.82-6.38h-.03l-1.21,6.38h-2.19l1.86-9.21Z"></path>
      <path className="cls-1" d="m133,75.17c-.76-.36-1.51-.5-2.52-.5-2.33,0-3.26,1.74-3.26,3.48,0,1.64.98,2.4,2.17,2.4.3,0,.6-.05.92-.16l.39-1.82h-1.38l.34-1.74h3.65l-1.03,5.14c-.87.28-2.28.41-3.03.41-2.8,0-4.41-1.76-4.41-4.29,0-3.06,1.73-5.24,5.77-5.24,1.06,0,1.96.19,2.9.45l-.5,1.87Z"></path>
      <path className="cls-1" d="m141.54,75.02c-.45-.23-.96-.39-1.86-.45-.92-.07-1.75.24-1.75.98,0,1.31,3.38.82,3.38,3.62,0,2.55-2.23,3.21-4.25,3.21-.9,0-1.93-.23-2.69-.48l.53-1.71c.61.29,1.45.45,2.21.45s1.8-.23,1.8-1.18c0-1.48-3.38-.92-3.38-3.52,0-2.38,1.97-3.09,3.87-3.09,1.07,0,2.02.19,2.61.48l-.48,1.7Z"></path>
      <path className="cls-1" d="m149.08,74.58c-.42-.26-.95-.45-1.64-.45-.86,0-1.81.34-1.83,1.44-.04,1.54,3.06,1.43,3,3.85-.04,1.39-1.03,2.96-3.21,2.96-1.05,0-1.8-.24-2.52-.53l.45-1.21c.53.34,1.26.58,1.9.58,1.38,0,1.99-.87,2.01-1.64.05-1.87-3.06-1.42-2.99-3.98.04-1.68,1.58-2.63,3.08-2.63.75,0,1.49.14,2.18.44l-.4,1.17Z"></path>
      <path className="cls-1" d="m152.25,73h4.72l-.26,1.16h-3.44l-.58,2.69h3.23l-.22,1.16h-3.26l-.66,3.04h3.65l-.25,1.16h-4.91l1.99-9.21Z"></path>
      <path className="cls-1" d="m159.75,73h1.71c1.22,0,3.25,0,3.23,2.24-.01,1.27-.98,2.31-2.14,2.49.66.44.83,1.82,1,2.53l.46,1.94h-1.32l-.5-2.42c-.31-1.48-.52-1.68-1.17-1.68h-1.11l-.85,4.09h-1.24l1.93-9.21Zm.41,3.96h.98c.88,0,2.21-.3,2.22-1.53,0-.96-.5-1.27-1.46-1.27h-1.16l-.59,2.8Z"></path>
      <path className="cls-1" d="m169.6,82.21h-1.5l-1.33-9.21h1.25l1.03,7.89h.03l4.45-7.89h1.37l-5.3,9.21Z"></path>
      <path className="cls-1" d="m176.7,73h1.26l-1.95,9.21h-1.26l1.95-9.21Z"></path>
      <path className="cls-1" d="m185.14,82.12c-.51.17-1.06.25-1.6.25-2.32,0-4.07-1.29-4.05-4.21.02-2.26,1.52-5.32,5.27-5.32.7,0,1.42.15,2.06.42l-.37,1.14c-.52-.24-1.09-.4-1.68-.4-2.64,0-3.94,2.06-3.96,4.22-.02,2.02,1.24,2.98,2.94,2.98.52,0,1.07-.1,1.56-.32l-.17,1.23Z"></path>
      <path className="cls-1" d="m189.28,73h4.72l-.26,1.16h-3.44l-.58,2.69h3.23l-.22,1.16h-3.26l-.66,3.04h3.65l-.25,1.16h-4.91l1.99-9.21Z"></path>
    </g>
  </g>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path id="svg_14" data-name="svg 14" className="cls-1" d="m29.73,62.09v29.81h41.53l10.01-10.65,10.22,10.65h78.79v-29.81H29.73Zm17.68,8.41c1.28,0,2.45.32,3.62.64l-.21,2.66c-1.06-.53-2.13-.85-3.19-.85-2.34,0-3.83,1.7-3.83,3.94,0,2.45,1.7,3.83,4.05,3.83,1.06,0,2.13-.32,3.09-.85l.11,2.56c-.96.32-1.92.53-3.62.53-3.19,0-6.92-1.6-6.92-6.18,0-4.15,2.87-6.28,6.92-6.28Zm84.33.11c1.17,0,2.24.11,3.09.43l-.21,2.45c-.85-.32-1.7-.53-2.66-.53-.75,0-2.13.11-2.13,1.17,0,1.92,5.75.64,5.64,5.11,0,3.09-2.66,3.94-5.32,3.94-1.17,0-2.56-.21-3.62-.53l.32-2.66c.75.43,1.92.75,3.3.75,1.06,0,2.02-.21,2.02-1.17,0-2.24-5.75-.85-5.75-5.22,0-2.98,2.87-3.73,5.32-3.73Zm-79.22.21h3.3v4.58h3.73v-4.58h3.3v12.03h-3.3v-5.11h-3.73v5.11h-3.3v-12.03Zm12.46,0h5.75c2.24,0,3.94,1.06,3.94,3.09,0,1.6-.75,2.66-2.34,3.09,1.06.21,1.17,1.17,1.7,2.45l1.17,3.3h-3.41l-.75-2.13c-.64-2.02-1.06-2.56-2.24-2.56h-.64v4.79h-3.19s0-12.03,0-12.03Zm22.36,0h3.19v4.58h3.83v-4.58h3.19v12.03h-3.19v-5.11h-3.83v5.11h-3.19v-12.03Zm16.18,0h3.94l4.58,12.03h-3.51l-.85-2.56h-4.58l-.96,2.56h-3.19l4.58-12.03Zm9.9,0h4.15l4.05,8.2h.11l-.11-8.2h2.98v12.03h-4.05l-4.26-8.2.11,8.2h-2.98v-12.03Zm23.96,0h8.62v2.34h-5.32v2.45h5v2.24h-5v2.77h5.54v2.24h-8.84s0-12.03,0-12.03Zm10.75,0h4.15l4.15,8.2v-8.2h2.87v12.03h-3.94l-4.26-8.2h-.11l.11,8.2h-2.98v-12.03Zm-79.86,2.24v2.77h.85c.96,0,2.34,0,2.34-1.38,0-1.17-1.06-1.38-2.34-1.38,0,0-.85,0-.85,0Zm37.16.32l-1.6,4.68h3.09l-1.49-4.68Z"></path>
  <path id="svg_16" data-name="svg 16" className="cls-1" d="m71.25,91.91l10.22,10.65,10.01-10.65h-20.23Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path id="path3048" className="cls-1" d="m98.01,88.55c-.43,0-.54-.16-.54-.53v-21.34c0-.37.11-.53.54-.53h10.4c4.04,0,6.36,2.24,6.36,5.92v10.51c0,3.73-2.32,5.98-6.36,5.98h-10.4Zm9.75-4.54c1.51,0,2.1-.64,2.1-2.24v-8.86c0-1.6-.59-2.25-2.1-2.25h-5.39v13.34s5.39,0,5.39,0Zm14.66,4c0,.37-.16.53-.54.53h-3.82c-.43,0-.54-.16-.54-.53v-21.34c0-.37.11-.53.54-.53h13.85c.37,0,.54.16.54.53v3.47c0,.42-.16.53-.54.53h-9.49v4.86h8.3c.38,0,.48.11.48.48v3.53c0,.37-.11.48-.48.48h-8.3s0,7.99,0,7.99Zm13.15.53c-.38,0-.48-.16-.48-.53v-21.34c0-.37.11-.53.48-.53h10.46c3.99,0,6.31,2.24,6.31,5.92v10.51c0,3.73-2.32,5.98-6.31,5.98h-10.46Zm9.76-4.54c1.5,0,2.15-.64,2.15-2.24v-8.86c0-1.6-.65-2.25-2.15-2.25h-5.39v13.34s5.39,0,5.39,0Zm10.24,4.59c-.37,0-.54-.16-.54-.53v-3.47c0-.42.17-.53.54-.53,0,0,4.58.11,8.09.11,1.5,0,2.1-.11,2.1-1.7v-.53c0-1.17-.32-1.49-1.46-1.81l-4.96-1.65c-2.15-.64-4.47-1.33-4.47-5.34v-1.7c0-3.73,2.32-5.44,6.36-5.44,3.5,0,7.55.11,7.55.11.37,0,.54.11.54.53v3.47c0,.37-.17.53-.54.53,0,0-3.67-.11-6.9-.11-1.51,0-2.1,0-2.1,1.6v.42c0,1.23.27,1.44,1.4,1.76l5.01,1.65c2.16.69,4.47,1.33,4.47,5.39v1.76c0,3.73-2.32,5.6-6.36,5.6-4.05,0-8.74-.12-8.74-.12"></path>
  <path className="cls-1" d="m97.08,53.02h-39.3c-.16,0-.27.11-.32.22l-28.08,47.85c-.16.27,0,.53.32.53h39.3c.11,0,.22-.05.32-.16l28.08-47.85c.17-.27-.05-.59-.32-.59Zm-22.43,31.59s-.11.1-.16.05l-9.11-5.39c-.06-.06-.16.05-.11.11l5.45,8.96c.06.11,0,.22-.05.22h-14.61c-.06,0-.11-.11-.11-.22l5.5-8.96c.06-.11-.06-.16-.11-.16l-9.11,5.45s-.16,0-.16-.05v-14.47c0-.11.11-.16.16-.11l9.11,5.39c.05.06.16-.05.11-.11l-5.5-9.01s.05-.16.11-.16h14.61s.11.11.05.16l-5.39,9.01c-.05.06,0,.16.11.11l9.05-5.39c.06-.06.16,0,.16.11v14.46Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m101.38,58.89c.86.12,1.72.22,2.57.36,4.41.77,8.25,2.72,11.49,5.8,3.83,3.63,6.1,8.1,6.83,13.32.17,1.18.15,2.38.21,3.58,0,.09-.02.19-.04.3h-14.28c-.04-1.69-.08-3.36.79-4.87.14-.25.46-.45.74-.56.47-.17.83-.39,1.05-.86.56-1.2,1.12-2.41,1.27-3.75.19-1.69-.81-2.78-2.52-2.74-.62.02-1.23.16-1.85.22-.12.01-.31-.02-.36-.1-.45-.69-1.16-.91-1.88-.82-.89.1-1.75.37-2.61.59-.17.04-.34.15-.45.28-.11.11-.14.3-.2.45.15.04.3.1.44.1.41,0,.82-.08,1.23-.06.65.03,1.04.4,1.11,1.04.18,1.87-.11,3.66-1.05,5.31-.18.31-.43.59-.69.83-.52.48-1.15.64-1.82.34-.66-.3-.79-.9-.79-1.55.48-.16.95-.31,1.41-.46.31-.1.42-.26.31-.62-.51-1.81-.99-3.63-1.49-5.48.6-.36,1.09-.82,1.22-1.56.15-.86-.14-1.73-.93-2.09-.79-.36-.64-1.02-.84-1.7.47.09.84.2,1.22.23.18.02.44-.06.53-.19.09-.14.09-.43,0-.57-.09-.13-.35-.21-.53-.2-.37.03-.74.14-1.21.23.08-.36.18-.67.2-.98.01-.22-.02-.52-.15-.65-.11-.11-.49-.11-.61,0-.14.13-.17.43-.16.65.02.3.12.6.21.98-.45-.09-.83-.2-1.21-.23-.18-.02-.44.05-.54.18-.1.13-.11.44-.02.56.11.14.38.22.57.21.37-.02.73-.13,1.19-.23-.2.65-.03,1.27-.79,1.68-1.32.7-1.35,2.54-.13,3.41.12.09.25.16.39.25-.49,1.84-.97,3.67-1.49,5.49-.09.34-.02.5.27.6.46.16.93.31,1.43.48.02.54-.09,1.05-.55,1.41-.47.36-1.03.4-1.53.11-.4-.23-.8-.55-1.05-.93-1.09-1.65-1.39-3.51-1.21-5.45.07-.81.5-1.13,1.33-1.13.36,0,.72.07,1.08.08.12,0,.25-.09.37-.14-.05-.13-.09-.27-.16-.39-.05-.08-.14-.14-.23-.18-1.04-.54-2.14-.8-3.31-.71-.66.05-1.19.34-1.53.94-.7-.09-1.39-.22-2.09-.25-1.34-.07-2.41.64-2.52,1.76-.07.73.03,1.51.23,2.22.25.88.68,1.7,1.01,2.55.18.46.53.72.98.79.47.08.7.39.89.75.48.91.61,1.9.68,2.89.05.59,0,1.18,0,1.8h-14.33c0-.52-.02-1.05,0-1.59.29-5.7,2.31-10.67,6.26-14.82,3.44-3.6,7.63-5.81,12.53-6.64.77-.13,1.55-.21,2.33-.32.92,0,1.84,0,2.75,0Z"></path>
  <path className="cls-1" d="m5.6,86.22c1.36,0,2.72,0,4.07.04.65.02,1.31.09,1.94.25,1.41.35,2.42,1.22,2.71,2.67.19.95.27,1.96.15,2.91-.26,2.07-1.64,3.31-3.77,3.46-1.47.1-2.95.05-4.42.08-.23,0-.45.02-.68.03v-9.44Zm1.99,1.57v6.29c1.06,0,2.11.08,3.14-.02.82-.08,1.36-.68,1.6-1.48.32-1.04.33-2.1,0-3.14-.27-.88-.85-1.52-1.78-1.62-.96-.1-1.95-.02-2.97-.02Z"></path>
  <path className="cls-1" d="m194.4,95.66c-.85-.02-1.7-.05-2.55-.05-.3,0-.46-.09-.59-.37-.77-1.66-1.57-3.31-2.36-4.96-.07-.13-.11-.28-.2-.39-.08-.09-.22-.14-.34-.21-.05.11-.14.21-.15.32-.02.41,0,.82,0,1.23v4.35h-1.48v-7.11c.57,0,1.17.07,1.73-.02.96-.15,1.45.23,1.81,1.12.6,1.48,1.35,2.9,2.04,4.35.07.16.22.28.33.42.05-.02.1-.05.15-.08v-5.78h1.6c0,2.39,0,4.79,0,7.18Z"></path>
  <path className="cls-1" d="m108.65,95.76c-.39-.1-.8-.16-1.18-.3-1.73-.59-2.54-1.82-2.47-3.72.06-1.57,1.11-2.81,2.75-3.23,1.18-.3,2.36-.3,3.54,0,.43.11.64.29.42.75-.09.2-.15.43-.19.55-.82-.06-1.57-.18-2.33-.16-1.63.06-2.56.94-2.56,2.31,0,1.45,1.09,2.52,2.64,2.62,1.16.08,1.23.02,1.23-1.15v-.71h-1.41v-1.23h3.05v3.85c-.6.14-1.21.28-1.83.42-.55,0-1.11,0-1.67,0Z"></path>
  <path className="cls-1" d="m25.17,95.76c-.39-.1-.79-.18-1.18-.31-1.64-.57-2.52-1.87-2.45-3.61.06-1.62,1.08-2.88,2.72-3.32,1.19-.32,2.39-.32,3.59,0,.11.03.22.07.32.12.07.03.14.07.23.13-.11.39-.23.75-.31,1.03-.88-.05-1.7-.16-2.52-.14-1.37.05-2.3.91-2.38,2.09-.09,1.34.76,2.45,2.1,2.74,1.66.35,2,0,1.71-1.77h-1.33v-1.23h3.07v.92c0,.84-.01,1.67,0,2.51,0,.29-.08.45-.38.51-.51.09-1.02.22-1.52.33-.55,0-1.11,0-1.67,0Z"></path>
  <path className="cls-1" d="m66.76,95.76c-.57-.12-1.14-.26-1.71-.37-.43-.08-.64-.26-.45-.73.08-.2.09-.44.13-.66.6.16,1.16.35,1.73.43.48.06.98.02,1.45-.07.34-.06.63-.28.66-.7.03-.43-.24-.63-.57-.76-.67-.25-1.36-.45-2.04-.71-.93-.36-1.27-.86-1.26-1.77,0-.84.43-1.45,1.29-1.78,1.26-.49,2.53-.41,3.79.05.1.04.2.24.19.34-.03.25-.14.5-.23.77-.42-.1-.83-.23-1.24-.27-.45-.04-.91-.02-1.36.04-.35.05-.66.22-.68.65,0,.43.3.59.64.7.59.2,1.18.38,1.77.59,1.09.4,1.57,1.12,1.49,2.2-.07.95-.67,1.58-1.75,1.84-.32.07-.64.13-.95.19-.29.01-.58.01-.88.01Z"></path>
  <path className="cls-1" d="m124.98,95.76c-.61-.12-1.22-.22-1.82-.36-.65-.16-.64-.18-.51-.84.04-.19.1-.37.15-.55.61.15,1.19.34,1.78.42.44.06.91.01,1.36-.06.37-.06.66-.31.68-.73.02-.41-.25-.62-.6-.74-.68-.24-1.36-.45-2.04-.71-.86-.33-1.25-.88-1.24-1.75.01-.84.42-1.43,1.19-1.75,1.36-.57,2.71-.44,4.13.08-.09.35-.18.69-.25.99-.68-.1-1.3-.21-1.93-.28-.24-.02-.49.03-.73.09-.33.08-.63.23-.66.63-.02.43.28.61.61.73.57.2,1.15.37,1.72.57,1.33.47,1.92,1.66,1.41,2.87-.31.74-.96,1.04-1.68,1.22-.33.08-.67.13-1,.19-.2,0-.4,0-.59,0Z"></path>
  <path className="cls-1" d="m116.91,95.76c-.59-.13-1.17-.27-1.76-.37-.43-.08-.58-.28-.43-.71.07-.21.09-.45.13-.68.59.15,1.14.35,1.71.43.44.07.91.03,1.36-.03.39-.05.72-.25.76-.71.05-.47-.27-.67-.64-.81-.66-.23-1.33-.45-1.99-.69-.79-.29-1.22-.83-1.23-1.7,0-.87.39-1.47,1.18-1.8,1.38-.58,2.74-.44,4.15.08-.1.35-.19.68-.28,1.03-.43-.1-.84-.25-1.25-.27-.5-.03-1,.02-1.5.09-.31.05-.59.26-.51.6.06.25.26.54.48.64.58.26,1.2.42,1.8.63,1.15.4,1.66,1.13,1.57,2.25-.07.95-.66,1.58-1.76,1.84-.4.09-.81.13-1.21.19-.2,0-.39,0-.59,0Z"></path>
  <path className="cls-1" d="m100.96,88.51h1.52c.01.16.04.31.04.47,0,2.05,0,4.1,0,6.14,0,.36-.07.54-.48.52-.69-.03-1.38-.02-2.07,0-.29,0-.44-.09-.56-.35-.82-1.75-1.66-3.49-2.51-5.22-.07-.15-.25-.25-.38-.37-.06.16-.17.33-.17.49-.01,1.78,0,3.57,0,5.43-.46,0-.9.01-1.33-.01-.07,0-.19-.18-.19-.27-.01-2.26,0-4.52,0-6.85,1,0,1.96-.01,2.92.02.1,0,.22.21.29.35.82,1.7,1.62,3.4,2.44,5.09.07.14.23.23.34.34.05-.15.15-.3.15-.45.01-1.59,0-3.18,0-4.77,0-.17,0-.35,0-.55Z"></path>
  <path className="cls-1" d="m148.4,92.79v2.79h-1.66v-7.06c.09-.02.16-.05.24-.05,1.29,0,2.59-.02,3.88.03,1.49.07,2.28,1.2,1.85,2.56-.18.58-.52.89-1.5,1.34.77,1.04,1.54,2.07,2.38,3.2-.73,0-1.35.01-1.97-.01-.11,0-.23-.17-.3-.28-.43-.66-.88-1.3-1.27-1.99-.24-.43-.54-.61-1.02-.54-.17.02-.35,0-.61,0Zm0-1.09c.75-.07,1.44-.09,2.1-.22.45-.09.64-.52.6-1-.04-.47-.31-.72-.76-.75-.55-.04-1.11-.05-1.67-.04-.09,0-.26.16-.26.25-.02.55-.01,1.1-.01,1.76Z"></path>
  <path className="cls-1" d="m82.59,92.78v2.8h-1.65v-7.08c.16,0,.32-.02.48-.02,1.03,0,2.06,0,3.09,0,.34,0,.69.03,1.02.11.91.21,1.36.72,1.44,1.57.09.94-.3,1.66-1.12,2.04-.13.06-.26.12-.46.21.78,1.06,1.55,2.09,2.38,3.21-.73,0-1.36.01-1.98-.01-.1,0-.22-.18-.3-.29-.41-.63-.85-1.25-1.21-1.9-.27-.5-.61-.72-1.17-.63-.15.02-.3,0-.52,0Zm.03-3.05v1.96c.72-.07,1.41-.08,2.07-.21.45-.09.64-.53.58-1.05-.05-.45-.34-.67-.75-.69-.62-.03-1.23,0-1.89,0Z"></path>
  <path className="cls-1" d="m42.25,95.59c.49-1.29.95-2.51,1.41-3.73.37-.98.75-1.95,1.1-2.94.11-.32.25-.48.62-.46.78.03,1.57,0,2.36.02.14,0,.37.11.41.22.9,2.27,1.77,4.56,2.69,6.91-.65,0-1.23.02-1.81-.01-.11,0-.25-.18-.3-.31-.47-1.23-.46-1.23-1.78-1.23-.67,0-1.34.01-2.01,0-.27,0-.4.06-.49.34-.43,1.25-.44,1.24-1.77,1.22-.11,0-.23-.02-.42-.03Zm2.68-2.75h2.97c-.36-1.02-.7-1.98-1.07-2.94-.05-.12-.25-.24-.39-.25-.14-.02-.41.06-.44.16-.37.98-.7,1.98-1.07,3.03Z"></path>
  <path className="cls-1" d="m77.95,94.42v1.17h-5.05v-7.07h4.92v1.16h-3.2v1.68h3.02v1.16h-3.01v1.89c1.11,0,2.19,0,3.31,0Z"></path>
  <path className="cls-1" d="m180.84,92.51v1.88h3.31v1.2h-5.03v-7.07h4.89v1.16h-2.06q-1.15,0-1.14,1.16c0,.16.02.32.03.54h2.37q.72,0,.7.72c0,.11-.02.23-.03.41-1.02,0-2.02,0-3.05,0Z"></path>
  <path className="cls-1" d="m155.99,88.5h4.88v1.17h-2.2q-.99,0-.99.98v.72h2.18q1.05,0,.9,1.13h-3.04v1.87h3.31v1.2h-5.05v-7.08Z"></path>
  <path className="cls-1" d="m176.07,89.74c-.68-.09-1.32-.2-1.97-.27-.17-.02-.36.02-.53.06-.38.08-.77.21-.79.67-.02.46.34.63.72.75.57.19,1.16.36,1.72.57,1.2.45,1.7,1.42,1.39,2.61-.16.59-.53.99-1.07,1.2-1.57.62-3.13.42-4.71-.14.08-.43.16-.83.23-1.2.63.16,1.2.36,1.79.43.46.06.95,0,1.41-.08.35-.06.63-.31.65-.71.02-.41-.25-.62-.59-.75-.68-.24-1.36-.45-2.04-.71-.86-.33-1.27-.88-1.26-1.74,0-.86.43-1.45,1.22-1.78,1.27-.52,2.56-.45,3.83,0,.11.04.16.25.22.39.02.05-.03.12-.05.18-.06.19-.12.38-.16.51Z"></path>
  <path className="cls-1" d="m140.35,95.55c0-.1-.03-.19-.02-.27.24-1.49-.3-2.73-1.12-3.93-.59-.86-1.07-1.8-1.6-2.7-.02-.02,0-.06-.02-.18.59,0,1.16-.02,1.74.02.11,0,.24.19.32.32.44.8.87,1.61,1.32,2.41.07.13.25.3.37.29.13,0,.3-.16.38-.3.45-.78.88-1.57,1.3-2.37.14-.27.31-.42.65-.39.4.03.8,0,1.31,0-.33.54-.6,1-.88,1.46-.56.93-1.1,1.86-1.69,2.77-.26.41-.4.82-.34,1.29,0,.08,0,.16,0,.25,0,1.57-.06,1.61-1.7,1.33Z"></path>
  <path className="cls-1" d="m132.29,89.69h-2.26v-1.18h6.22v1.16h-2.22v5.92h-1.75v-5.89Z"></path>
  <path className="cls-1" d="m37.86,95.63v-5.94h-2.25v-1.17h6.24v1.15h-2.23c-.01.24-.03.41-.03.59,0,1.61-.02,3.21.01,4.82,0,.47-.15.6-.59.56-.36-.03-.72,0-1.16,0Z"></path>
  <path className="cls-1" d="m164.2,88.5h1.67v5.89h3.45v1.19h-5.12c0-2.36,0-4.7,0-7.08Z"></path>
  <path className="cls-1" d="m52.81,88.51h1.65v5.87h3.43v1.21h-5.08v-7.08Z"></path>
  <path className="cls-1" d="m107.58,70.7c1.26-.46,2.18.12,2.02,1.4-.25,1.95-.93,3.77-2.22,5.31-.36.43-.82.69-1.41.66-.77-.05-1.29-.86-.95-1.55.07-.13.26-.25.41-.29.65-.17,1.04-.54,1.3-1.19.55-1.4.9-2.83.85-4.33Z"></path>
  <path className="cls-1" d="m92.41,70.62c-.07,1.63.31,3.1.89,4.54.22.54.56.85,1.09,1.02.62.2.69.34.61.95-.07.58-.36.87-.9.93-.61.07-1.08-.19-1.48-.61-.81-.85-1.27-1.9-1.66-2.97-.22-.61-.38-1.25-.54-1.88-.06-.22-.07-.45-.06-.68.02-.95.4-1.33,1.36-1.33.21,0,.42.03.68.05Z"></path>
  <path className="cls-1" d="m18.91,95.58c-.09.02-.14.04-.18.05q-1.5.09-1.5-1.39v-5.72h1.68v7.06Z"></path>
  <path className="cls-1" d="m89.99,88.52h1.6v7.1c-.49,0-.98.01-1.46-.01-.08,0-.22-.16-.22-.25,0-2.26.01-4.52.02-6.77,0-.01.02-.02.06-.07Z"></path>
  <path className="cls-1" d="m61.63,95.6h-1.63v-7.07h1.63v7.07Z"></path>
  <path className="cls-1" d="m31.77,88.51h1.62v7.07h-1.62c0-2.34,0-4.68,0-7.07Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path id="path3186" className="cls-1" d="m45.82,95.94v-8.4s0-.61,0-.61c0-.04.19-.16.52-.16h6.59c6.11,0,6.12,1.03,6.12,3.8v5.33c0,.16-.08.17-.24.17h-3.43c-.18,0-.2-.09-.2-.17v-7.23c0-.57-.52-.96-1.29-.98,0,0-4.26-.12-4.26-.12v8.36q0,.14-.14.14h-3.51q-.14,0-.14-.14"></path>
  <path id="path3190" className="cls-1" d="m84.04,86.77v.44c0,.25-.11.61-.88.65l-2.35.23v.1s0,7.8,0,7.8c0,.04-.07.1-.16.1h-3.59c-.1,0-.17-.06-.17-.1v-8.89c0-.09.05-.12.24-.14,2.53-.25,6.91-.19,6.91-.19"></path>
  <path id="path3192" className="cls-1" d="m109.86,95.01h.1v-8.12c0-.07.07-.12.17-.12h3.57c.1,0,.17.05.17.09v6.08s0,4.78,0,4.78c0,.93-1.28,1.8-2.63,1.8h-9.42v-.3c.02-.31.05-.79.87-.89l7.29-.17v-2.06h-5.64c-1.9,0-3.46-.97-3.46-2.18v-7.02c0-.09.09-.12.16-.12h3.58c.1,0,.17.05.17.09v7.28c0,.44.44.79.98.79l4.07.09"></path>
  <path id="path3194" className="cls-1" d="m66.07,87.55c-.55,0-1.01.36-1.01.79v2.31h5.77v-2.31c0-.43-.43-.79-.98-.79h-3.78Zm-1.08,8.53c-1.9,0-3.46-1.08-3.46-2.21v-4.92c0-1.35,1.55-2.18,3.46-2.18h5.94c1.9,0,3.45.98,3.45,2.18v2.93h-9.31v2.08c0,.46.45.79,1,.79,2.11,0,8.03.16,8.03.16v.53c0,.26,0,.64-1.31.64h-7.81"></path>
  <path id="path3196" className="cls-1" d="m34.99,87.55c-.55,0-1.01.36-1.01.79v2.31h5.78v-2.31c0-.43-.44-.79-.99-.79h-3.78Zm-1.08,8.53c-1.9,0-3.46-1.08-3.46-2.21v-4.92c0-1.35,1.55-2.18,3.46-2.18h5.94c1.9,0,3.45.98,3.45,2.18v2.93h-9.31v2.08c0,.46.45.79,1,.79,2.11,0,8.04.16,8.04.16v.53c0,.26,0,.64-1.31.64h-7.81"></path>
  <path id="path3198" className="cls-1" d="m89.3,88.36v5.79c0,.44.45.79.99.79l4.16.06v-6.65c0-.44-.44-.79-.99-.79h-.56s-2.62,0-2.62,0c-.55,0-.99.37-.99.8Zm-3.92,5.54v-4.95c0-1.2,1.55-2.18,3.46-2.18h6.06c1.91,0,3.46.94,3.46,2.14v8.93c0,.89-1.22,1.67-2.62,1.67h-9.43v-.3c-.01-.33.04-.87.87-.89l7.29-.15v-2.08h-5.64c-1.9,0-3.45-.97-3.45-2.18"></path>
  <path id="path3200" className="cls-1" d="m168.45,64.61h-16.24v.65c0,.66.04,1.4.85,1.63l8.27,1.83v2.82c0,.81-.29,1.26-1,1.38l-11.38,2.01c-1.51.22-1.9-.38-1.9-1.79v-12.83c0-.47.48-.85,1.09-.85l16.85-.39c2.41-.11,2.47-1.21,2.53-2.12v-1.08h-21.76c-4.15,0-7.53,2.31-7.53,5.15v11.25c0,2.86,3.38,5.18,7.53,5.18h16.24c4.15,0,7.53-2.32,7.53-5.18l.02-1.42v-5.14c0-.61-.45-1.1-1.1-1.1"></path>
  <path id="path3202" className="cls-1" d="m39.8,73.49c0,.78.63,1.42,1.41,1.42.05,0,.1,0,.15,0l10.84-1.91c.75-.14.99-.67.99-1.38v-11.61c0-.61-.5-1.1-1.11-1.1h-11.18c-.61,0-1.11.49-1.11,1.1v13.48Zm22.73-10.02v6.29c0,4.26-3.46,7.69-7.72,7.69h-23.01c-.75,0-1.36-.58-1.36-1.25v-19.17c0-.67.61-1.28,1.36-1.28h23.01c4.26,0,7.72,3.45,7.72,7.72"></path>
  <path id="path3204" className="cls-1" d="m75.57,73.49c0,.78.63,1.42,1.42,1.42.05,0,.1,0,.15,0l10.84-1.91c.75-.14.99-.67.99-1.38v-11.61c0-.61-.5-1.1-1.11-1.1h-11.18c-.61,0-1.11.49-1.11,1.1v13.48h0Zm22.33-12.46v11.25c0,2.86-3.37,5.18-7.53,5.18h-16.38c-4.15,0-7.53-2.32-7.53-5.18v-11.25c0-2.84,3.38-5.16,7.53-5.16h16.38c4.16,0,7.53,2.32,7.53,5.17"></path>
  <path id="path3206" className="cls-1" d="m111.52,55.58c.48.53,12.97,14.26,14.12,15.43,0-1.14,0-14.03,0-14.06,0-.59.44-1.08.98-1.08h5.92c.41,0,.98.39.98,1.08v18.93c0,.57-.47,1.06-1.18,1.18,0,0-6.87,1.21-6.95,1.21-.38.07-.64-.15-.93-.49,0,0-13.05-14.3-14.23-15.51,0,1.14,0,14.04,0,14.07,0,.59-.43,1.08-.98,1.08h-5.91c-.41,0-.99-.38-.99-1.08v-18.87c0-.52.52-1.07,1.18-1.18l6.39-1.12c.57-.1,1.27.05,1.6.42"></path>
  <path id="path3208" className="cls-1" d="m31.85,77.43s-.07-.04-.07-.1.03-.1.07-.1.07.04.07.1-.02.1-.07.1h0"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m53.6,65.51c-.96-.46-1.95-.76-2.99-.89-.72-.09-1.45-.09-2.16.06-1.54.34-2.59,1.42-2.76,3.02-.12,1.12-.06,2.26-.09,3.39,0,.02.02.05.07.14,2.51-.01,5.05-.06,7.63-.15.06.33.12.64.16.94.14,1.42.14,2.83-.32,4.2-.04.12-.08.24-.12.35-.7,1.74-2.01,2.6-3.88,2.57-.93-.02-1.86-.03-2.79-.04h-.53c-.06,3.3.02,6.56.01,9.83-.01,3.25,0,6.51,0,9.75-.38.11-9.29.14-10.1.05,0-.64,0-1.3,0-1.95v-17.7c-1.88-.14-3.73,0-5.63.05-.06-.31-.12-.6-.17-.89-.19-1.4-.18-2.8.25-4.16.14-.48.36-.96.63-1.4.64-1.02,1.59-1.54,2.8-1.54h2.08c0-.16.02-.32.02-.5,0-1.12-.02-2.24.01-3.35.05-2.07.46-4.06,1.4-5.92,1.38-2.7,3.54-4.46,6.46-5.27,2.73-.74,5.48-.7,8.22-.06.87.2,1.66.58,2.38,1.1,1.13.81,1.71,1.92,1.77,3.29.02.58,0,1.17-.1,1.74-.22,1.35-1.06,2.56-2.26,3.34Z"></path>
  <path className="cls-1" d="m170.18,95.02c-.03.12-.06.27-.11.42-.5,1.56-1.53,2.62-3.08,3.15-1.48.51-2.99.56-4.51.21-1.67-.4-2.79-1.46-3.49-2.98-.1-.21-.19-.42-.3-.64-.05.04-.08.06-.1.08-1.04,1.73-2.63,2.73-4.53,3.25-2.93.81-5.85.8-8.71-.33-1.71-.67-3.14-1.72-4.14-3.3-.96-1.52-1.27-3.2-1.09-4.98.28-2.89,1.86-4.87,4.37-6.18,1.64-.85,3.4-1.3,5.23-1.51,2.56-.3,5.09-.02,7.6.42.34.06.67.12,1,.18.2-1.43-.58-2.91-1.86-3.59-.69-.37-1.44-.55-2.21-.65-2.15-.26-4.27-.17-6.36.45-1.04.31-2.04.75-2.96,1.32-.24.15-.44.18-.69.03-.27-.17-.55-.3-.81-.48-.91-.63-1.43-1.49-1.55-2.59-.18-1.7.34-3.13,1.71-4.22,1-.8,2.18-1.24,3.41-1.56,2.02-.53,4.1-.67,6.17-.71,2.21-.04,4.4.09,6.56.62,1.37.34,2.67.84,3.84,1.64,1.98,1.33,3.14,3.22,3.72,5.5.37,1.46.48,2.95.48,4.45,0,2.13-.01,4.25,0,6.38,0,.93.1,1.85.32,2.76.29,1.17.85,2.17,1.96,2.76.04.03.05.06.09.12Zm-11.75-7.16c-.12-.06-.19-.09-.26-.12-.09-.04-.18-.07-.27-.1-1.7-.55-3.44-.71-5.21-.46-.7.1-1.39.29-2,.67-.9.55-1.26,1.38-1.07,2.41.19,1.04.87,1.64,1.82,1.97.74.25,1.51.32,2.28.3,1.32-.03,2.46-.51,3.39-1.42.9-.88,1.36-1.94,1.31-3.23Z"></path>
  <path className="cls-1" d="m83.04,95.01c-.43,1.74-1.43,2.94-3.1,3.55-1.49.54-3.02.6-4.55.25-1.71-.38-2.85-1.46-3.57-3.03-.09-.19-.18-.39-.3-.66-.06.1-.08.14-.11.18-.96,1.59-2.4,2.56-4.14,3.1-3.11.95-6.2.96-9.24-.29-1.36-.55-2.54-1.38-3.47-2.53-1.32-1.65-1.78-3.54-1.59-5.61.14-1.58.69-2.99,1.73-4.2.99-1.15,2.24-1.92,3.63-2.48,2.13-.86,4.35-1.22,6.65-1.18,1.92.03,3.83.28,5.71.63.15.03.31.05.5.08.02-.13.05-.23.04-.33-.09-1.66-.83-2.85-2.44-3.48-.81-.32-1.67-.45-2.53-.51-2.24-.15-4.43.05-6.53.92-.67.27-1.3.62-1.94.97-.24.13-.43.17-.65.02-.15-.09-.31-.16-.45-.25-1.5-.86-2.11-2.21-1.94-3.98.14-1.4.85-2.48,2-3.28,1.05-.73,2.23-1.15,3.47-1.44,1.89-.45,3.82-.58,5.76-.63,2.21-.04,4.4.08,6.56.61,1.57.39,3.05.99,4.34,1.98,1.83,1.41,2.86,3.31,3.37,5.52.31,1.36.4,2.74.4,4.13,0,1.92-.02,3.84,0,5.76,0,1.15.07,2.3.37,3.42.21.82.55,1.58,1.2,2.15.24.21.53.38.83.61Zm-11.78-7.17c-.24-.09-.44-.18-.64-.24-1.65-.53-3.32-.67-5.03-.43-.8.11-1.57.32-2.24.8-.73.53-1.02,1.24-.9,2.13.15,1.04.75,1.7,1.71,2.05.9.34,1.84.43,2.79.33,1.68-.18,2.99-.99,3.84-2.48.37-.65.54-1.36.47-2.17Z"></path>
  <path className="cls-1" d="m137.6,89.46c.36.48.57.99.73,1.52.28.99.43,2,.31,3.03-.16,1.4-.84,2.49-1.97,3.29-1.03.74-2.2,1.15-3.42,1.4-2.28.47-4.57.51-6.82-.15-3.61-1.04-5.64-3.51-6.24-7.17-.12-.76-.16-1.53-.17-2.3-.02-3.16,0-6.33,0-9.49v-.61c-1.71-.11-3.39.03-5.08.04-.21-.4-.22-.83-.28-1.25-.15-1.28-.16-2.54.22-3.79.12-.39.28-.77.48-1.13.67-1.18,1.71-1.77,3.06-1.8.5-.01,1,0,1.56,0,.01-.21.03-.39.03-.57,0-1.87-.01-3.75,0-5.62,0-.38.04-.76.12-1.12.22-1.03.83-1.78,1.78-2.26.91-.45,1.88-.6,2.88-.61,1.6-.04,3.16.22,4.71.61.4.1.41.11.41.54,0,2.79,0,5.57-.01,8.36v.67c2.4.07,4.76-.05,7.15-.13.17.24.15.54.19.81.17,1.37.17,2.73-.22,4.07-.11.38-.25.74-.43,1.09-.71,1.39-1.89,2.07-3.43,2.1-.82.02-1.64-.01-2.46-.02h-.53c-.02.14-.05.25-.05.35,0,2.41-.01,4.82.02,7.23,0,.57.11,1.16.27,1.72.37,1.28,1.25,1.95,2.57,2.05,1.46.12,2.85-.15,4.2-.69.15-.04.27-.09.44-.17Z"></path>
  <path className="cls-1" d="m95.21,98.77h-9.92c-.01-.15-.04-.28-.04-.42,0-.66,0-1.32,0-1.98,0-11.81,0-23.61,0-35.42,0-.44.02-.89.11-1.32.22-1.09.86-1.87,1.87-2.35.72-.34,1.49-.5,2.28-.55,1.87-.12,3.7.15,5.51.63.06.02.11.05.19.08,0,13.77,0,27.54,0,41.33Z"></path>
  <path className="cls-1" d="m114.33,71.75c-.97,1.42-1.93,2.76-2.84,4.14-1.41,2.13-2.79,4.26-4.19,6.4-.15.24-.28.5-.43.73-.14.21-.14.4,0,.61.3.46.57.94.88,1.4,2.37,3.51,4.91,6.9,7.58,10.19.25.3.52.58.86.97-.11.07-.23.14-.34.22-1.84,1.42-3.89,2.29-6.2,2.57-1.07.13-2.14.12-3.19-.11-1.1-.24-2.03-.77-2.73-1.65-.38-.48-.74-.98-1.06-1.5-2.25-3.66-4.46-7.34-6.41-11.17-.21-.41-.19-.72.02-1.12,1.62-2.99,3.21-5.99,4.81-8.99.06-.12.14-.25.2-.37.77-1.68,2.17-2.51,3.91-2.88,1.71-.36,3.44-.35,5.17-.24,1.05.07,2.1.21,3.11.51.28.08.56.19.85.3Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <g id="layer1">
    <g id="g2510">
      <path id="path2512" className="cls-1" d="m65.01,93.71c-.61-.68-1.09-1.45-1.42-2.3-.34-.87-.52-1.78-.52-2.7,0-.44-.37-.8-.81-.8-.45,0-.81.37-.8.81,0,.4.03.8.09,1.19h-.01c.05.36-.15.72-.51.86l-2.38.93h0c-.32.12-.66,0-.77-.25l-.18-.47c-.07-.18-.01-.46.22-.58.15-.07.45-.25.69-.42.36-.26.44-.77.18-1.13-.27-.36-.77-.44-1.13-.18-.17.12-.35.23-.53.32-.72.35-1.51.46-2.28.3-.44-.09-.86.2-.95.63-.09.44.2.86.63.95.38.08.77.11,1.15.1.23.02.43.16.52.38l.22.56c.12.31-.03.67-.35.79h0s-2.05.8-2.05.8h0c-.81.29-1.69-.1-2-.88h0c-.05-.14-.11-.28-.15-.43-.02-.08-.05-.16-.07-.24h.01c-.48-1.8-.52-3.08,1.31-4.27.14-.09.46-.27.63-.37.39-.22.5-.73.27-1.11-.23-.38-.73-.5-1.11-.27-.18.11-.37.2-.57.28-.83.32-1.73.32-2.56.02-.41-.15-.85.05-1.02.43-.12.28-.07.71.25.97.39.31.88.85.88,1.89h0c-.04,1.07.1,2.14.44,3.17.34,1.05.86,2.03,1.54,2.89.27.34.51.7.72,1.08,0,0,0,.01.01.02.1.19.18.4.22.61.11.49.05,1-.17,1.46-.19.4-.02.88.39,1.07.4.19.88.02,1.07-.39.25-.53.37-1.09.37-1.65.02-.28.19-.54.46-.67l7.19-3.44s.05-.02.07-.03c.35-.14.74-.02.94.27.21.3.43.59.68.86.3.33.81.36,1.14.06.33-.3.36-.81.06-1.14"></path>
    </g>
    <g id="g2514">
      <path id="path2516" className="cls-1" d="m59.82,71.2c-.73-.79-1.62-1.38-2.61-1.76-1.43-.71-2.15-1.33-2.15-1.33-.02-.03-.06-.04-.1-.05-.04,0-.08.02-.11.05-.09.07-.87.61-2.27,1.18-2.69.83-4.69,3.21-4.79,6.08-.11,2.88,1.7,5.4,4.33,6.43,1.36.67,2.08,1.27,2.17,1.34.03.03.07.05.12.05.04,0,.07-.02.1-.04h0s.78-.57,2.28-1.18c2.7-.82,4.7-3.21,4.81-6.08.06-1.73-.56-3.39-1.75-4.68m-.09,4.61c-.02.36-.09.7-.26,1.05-.18.33-.42.6-.63.8-.99.93-2.6,1.44-4.29,1.37-1.7-.06-3.26-.69-4.18-1.69-.2-.22-.41-.5-.57-.85-.18-.4-.18-.93-.17-1.06.02-.36.08-.66.25-1.04.73-1.33,2.71-2.27,4.93-2.18,2.22.08,4.13,1.17,4.75,2.55.14.44.18.69.17,1.04"></path>
    </g>
    <g id="g2518">
      <path id="path2520" className="cls-1" d="m66.99,57.74c0-.45-.35-.83-.8-.83-.88-.02-1.72-.37-2.35-.99-.15-.15-.29-.3-.41-.47-.27-.36-.77-.45-1.14-.18-.36.26-.45.77-.19,1.14.11.16.49.58.64.73,1.35,1.45,1.08,2.46.54,3.66-.58,1.27-1.39,1.62-2.39,1.06-.93-.52-6.51-3.54-6.51-3.54-.35-.15-.63-.53-.56-.9h0c.04-.32.06-.64.07-.97,0-.45-.35-.82-.8-.83-.45,0-.82.35-.83.8-.02.94-.2,1.87-.55,2.76-.35.87-.83,1.67-1.45,2.36-.29.34-.26.85.07,1.15.33.3.85.27,1.15-.07.27-.31.52-.64.71-.9.23-.31.56-.41.86-.25.7.35,6.88,3.44,7.12,3.56.17.09,0,0,0,0,.29.14.5.46.46.71-.14.76-.02,1.54.31,2.26.18.41.66.59,1.08.41.41-.19.59-.67.41-1.08-.59-1.3.11-2.18.12-2.2.54-.68,1.11-1.25,1.53-1.98.3-.51.99-1.7,1.25-3.21.14-.82.71-1.24,1.19-1.49.41-.21.47-.57.47-.72"></path>
    </g>
    <g id="g2522">
      <path id="path2524" className="cls-1" d="m76.59,46.03c.08-.42.25-1.32-.19-2.09-.21-.37-.51-.54-.87-.47-.55.11-.63.55-.67.91-.03.31-.13.58-.31.77-.18.19-.83.72-1.91-.24-.86-.9-2.94-2.13-4.88-.6-.03.02-.05.05-.07.07,0,0,.31-3.55.41-4.84.01-.19,0-.83.19-1.19.07-.13.4-.58.4-.58.14-.21.28-.43.4-.66.21-.39.07-.88-.32-1.09-.39-.21-.88-.07-1.09.32-.44.81-.75,1.29-1.47,1.9-.7.59-1.49,1.04-2.35,1.34-.42.15-.64.61-.49,1.03.15.42.62.65,1.03.49.13-.05.39-.16.57-.23.47-.17,1.28.32,1.29,1.27l-.35,4.16c-.01.08-.05.16-.11.22-.17.18-.46.2-.65.05l-2.49-1.99c-.22-.23-.3-.57-.18-.86h0c.13-.31.25-.63.36-.95.13-.42-.1-.88-.52-1.01-.43-.14-.88.1-1.01.53-.28.88-.6,1.56-1.19,2.29-.57.71-1.25,1.31-2.03,1.78-.38.23-.51.73-.28,1.11.23.38.72.51,1.11.28.33-.2.64-.41.94-.65h0c.28-.2.64-.1.93.08h0s6.51,4.75,6.54,4.77c.37.26.49.68.35,1.01-.18.38-.34.78-.47,1.18-.13.42.1.88.52,1.01.43.13.88-.1,1.01-.53.27-.87.7-1.67,1.26-2.39.57-.73,1.18-1.24,1.97-1.72.38-.23.5-.73.27-1.11-.23-.38-.73-.5-1.11-.27-.36.22-.7.46-1.03.72-.28.22-.68.23-.98,0,0,0-.77-.59-1.55-1.2-.19-.15-.18-.62-.18-.75,0-1.64.95-2.06,1.35-2.25,1.47-.71,2.49.86,2.61,1.04l.02.03.02.03c.61.84,1.34,1.33,2.15,1.46,1.07.16,1.74-.32,1.95-.45.74-.47,1.02-1.29,1.1-1.71"></path>
    </g>
    <g id="g2526">
      <path id="path2528" className="cls-1" d="m90.21,39.08c-.61-.65-1.16-1.57-.96-2.91.06-.44-.25-.88-.69-.95-.44-.07-.92.26-.96.88-.02.4-.02.68-.02.97-.05,1.79-1.17,2.56-2.43,2.96-.74.18-1.48-.18-1.83-.93-.32-.67-.88-1.88-.88-1.88-.14-.31-.05-.66.2-.78l.45-.21c.18-.08.47-.02.58.17s.29.45.48.68c.29.34.79.39,1.13.1.35-.29.39-.79.1-1.14-.13-.16-.25-.33-.35-.51-.4-.69-.58-1.47-.48-2.25.06-.44-.25-.85-.69-.91-.44-.06-.84.25-.9.69-.06.38-.03.76,0,1.14,0,.23-.13.45-.35.55l-.54.25c-.31.14-.67,0-.81-.3h0s-.93-2-.93-2h0c-.34-.79,0-1.63.77-2.04,2.23-1.17,3.79-.99,5.12.97.09.14.16.25.26.39.26.36.76.46,1.12.2.37-.25.46-.76.2-1.12-.12-.17-.22-.36-.31-.55-.37-.81-.45-1.56-.2-2.53.12-.46-.09-.89-.52-1.03-.18-.06-.59-.09-.88.29-.28.38-.72.76-1.2.92-.22.07-.44.11-.67.11-1.07.03-1.87.15-2.88.54-1.03.4-1.91.83-2.73,1.56,0,0-1.05.97-1.72,1.2-.48.16-.99.11-1.47-.08-.41-.17-.91.02-1.05.45-.17.51.12.9.56,1.1.4.18,1.04.27,1.56.23.28-.02.55.16.69.42l3.76,6.81c.15.32.07.55-.23.77h0c-.61.45-1.09,1.05-1.37,1.77-.16.41.04.88.46,1.04.41.16.81-.08,1.04-.46.22-.36.66-.88,1.14-1.13.72-.37,1.42-.25,2.48-.44,1.12-.21,1.8-.54,2.12-.72.29-.17,1.11-.9,1.44-1.02.48-.17,1.13-.07,1.47.05.35.12.69-.03.84-.16.33-.3.35-.82.05-1.14"></path>
    </g>
    <g id="g2530">
      <path id="path2532" className="cls-1" d="m107.14,25.77c-.16-.14-.57-.3-.94-.05-.39.26-.94.34-1.33.32-.71-.03-1.45-.79-3.12-.79-.89,0-1.42.11-1.75.27-.34-.16-.87-.27-1.76-.27-1.67,0-2.42.76-3.12.79-.38.02-.94-.07-1.33-.32-.37-.24-.78-.08-.94.05-.32.28-.37.78-.1,1.11.56.66.86,1.53.85,2.43,0,.21-.02.43-.06.63-.08.43.21.84.63.91.43.08.88-.2.92-.63.19-2.26,1.38-3.16,2.38-3.26.79-.08.78.74.8,1.7,0,0,.24,7.39.24,7.42,0,.38-.24.69-.56.78,0,0-.7.22-1.05.36-.41.16-.61.62-.45,1.02.16.4.62.6,1.02.45.8-.32,1.68-.48,2.54-.48.86,0,1.74.16,2.54.48.41.16.86-.04,1.02-.45.16-.4-.04-.86-.44-1.02-.35-.14-1.06-.36-1.06-.36-.32-.09-.56-.4-.56-.78,0-.03.23-7.42.23-7.42.03-.96.02-1.78.8-1.7,1,.09,2.19,1,2.38,3.26.03.43.49.71.91.63.43-.08.71-.49.63-.91-.04-.21-.06-.42-.06-.63-.02-.9.28-1.76.84-2.43.27-.33.22-.83-.1-1.11"></path>
    </g>
    <g id="g2534">
      <path id="path2536" className="cls-1" d="m134.43,38.27c-.83-.82-1.74-1.35-2.7-1.74-.93-.38-1.57-.72-2.26-1.29-.68-.57-1.24-1.25-1.67-2.02-.21-.38-.69-.52-1.08-.31-.38.21-.52.7-.31,1.08.21.37.44.72.69,1.06.12.22.09.48-.46,1.15h-.01s-4.16,5.48-4.49,5.92c-.23.3-.63.38-.94.25,0,0-.69-.28-1.05-.4-.42-.13-.87.1-1,.52-.13.42.1.86.52,1,.84.27,1.61.69,2.3,1.24.7.56,1.28,1.25,1.73,2.03.22.38.7.52,1.08.3.38-.22.52-.7.3-1.08-.19-.33-.39-.66-.61-.96-.2-.29-.21-.69.03-.99l4.93-5.58c.66-.76.84-.73,1.13-.69.43.05,1.66.62,2.53,1.49,1.19,1.19,1.19,3.07-.07,4.59-.71.87-1.98,1.34-2.87,1.34-.61,0-1.6.16-2.32.49-.93.44-1.5,1.09-1.79,1.85-.3.8-.07,1.69.03,1.95.34.83.98,1.25,1.44,1.48.47.23,1.26.56,2.21.25.32-.1.6-.4.61-.76.01-.45-.35-.8-.82-.85-.57-.06-1.29-1-.63-1.78.79-.92,2.55-.72,2.73-.71.18.02,0,0,0,0,1.7.2,3.18-.32,4.11-1.45,1.59-1.94.99-5.09-1.29-7.37"></path>
    </g>
    <g id="g2538">
      <path id="path2540" className="cls-1" d="m118.92,29.23c-.9.04-1.79-.09-2.64-.39-.83-.29-1.6-.73-2.27-1.3-.33-.28-.83-.24-1.12.09-.28.34-.24.84.09,1.12.32.27.75.57.9.66.38.23.37.48.1,1.32-.18.55-1.84,6.23-2.12,7.13-.13.42-.49.6-.78.58-.39-.03-.75-.04-1.13-.02-.44.02-.78.4-.75.83.02.44.39.78.83.75.88-.05,1.75.07,2.6.35.86.28,1.64.71,2.32,1.29.34.28.84.23,1.12-.1.28-.34.24-.84-.1-1.12-.29-.25-.62-.49-.91-.69-.27-.18-.44-.57-.32-.93,0,0,2.37-6.28,2.64-6.99.33-.89.49-1.05.95-1,.34.03.46.03.69,0,.45-.05.76-.39.74-.83-.02-.44-.39-.78-.83-.76"></path>
    </g>
    <g id="g2542">
      <path id="path2544" className="cls-1" d="m147.87,57.74c-.62-3.24-1.56-4.7-1.56-4.71-1.3-2.57-3.76-3.92-6.9-3.51-1.51.07-2.44-.09-2.55-.12-.04-.02-.08-.01-.12,0-.03.02-.06.05-.07.08h0s-.4.87-1.4,2.11c-.74.76-1.28,1.67-1.63,2.69-.51,1.52-.62,3.39.73,5.96.71,1.36,2.29,2.42,2.66,2.98.32.5.38.85.38,1.56,0,.41.28.65.51.74.38.14.79-.04.96-.39,0,0,0,0,0,0,0-.02.02-.04.03-.07.24-.64.65-1.16,1.19-1.5.86-.4,1.93-.3,2.75.26.3.2.71.13.91-.17.21-.3.13-.71-.17-.91-.63-.43-1.35-.67-2.08-.72-.02-.04-.05-.08-.09-.12.36-.63.57-1.33.62-2.05.03-.42-.3-.79-.72-.82-.43-.03-.77.3-.83.72-.05.42-.23.96-.4,1.17-1.72,2.08-3.92-.54-4.51-2.72-.8-2.79,1.52-4.33,3.03-5.09,1.51-.77,3.18-.97,4.48-.55.21.07,1.16.44,1.75,1.4.08.13.87,1.33,1.12,3.35.1.79-.48,1.52-1.33,2.22-.12.08-.23.16-.34.25-.35.29-.4.8-.12,1.15.29.35.8.4,1.15.11.16-.13.42-.3.52-.35.74-.42,1.5-.52,2.53-.31.4.08.86-.2.9-.62.11-1.11-1.19-1-1.39-2.03"></path>
    </g>
    <g id="g2546">
      <path id="path2548" className="cls-1" d="m139.25,79.96c.81-.36,1.72-.41,2.56-.14.2.07.39.15.57.24.39.21.88.06,1.09-.33.21-.39.13-.92-.45-1.15-2.09-.83-3.02-1.22-2.89-3.58.04-.75.69-1.35,1.48-1.43.64-.07,2.05-.22,2.05-.22.35-.04.65.16.67.44l.05.5c.02.19-.09.37-.28.48-.29.06-.59.14-.87.25-.41.16-.63.63-.47,1.04.16.42.63.63,1.04.47.19-.08.4-.13.6-.17.79-.15,1.57-.04,2.28.31.4.2.89.04,1.08-.36.2-.4.04-.88-.36-1.08-.34-.17-.7-.3-1.07-.39-.22-.08-.38-.27-.4-.51l-.06-.59c-.04-.34.21-.63.55-.67h0s2.19-.23,2.19-.23h0c.86-.07,1.57.58,1.7,1.4.4,2.67-.47,4.08-3.05,4.64-.43.09-.67.57-.55,1,.12.43.56.68.99.55.2-.05.41-.1.62-.12.88-.09,1.81.17,2.47.66.37.27.88.16,1.13-.18.11-.16.29-.6-.01-.97-.28-.34-.47-.89-.46-1.39,0-.23.03-.45.11-.67.32-1.03.46-2.09.41-3.17-.05-1.11-.29-2.18-.73-3.19h0c-.17-.4-.31-.81-.4-1.23,0,0,0,0,0-.02-.05-.21-.07-.43-.06-.65.03-.5.21-.98.55-1.37.29-.34.25-.85-.09-1.14-.34-.29-.85-.25-1.14.09-.38.44-.64.95-.8,1.49-.09.27-.32.47-.62.52l-7.66,1.39c-.35.04-.54-.11-.65-.46h0c-.22-.72-.64-1.36-1.23-1.85-.34-.28-.85-.24-1.13.1-.29.34-.24.85.1,1.14.39.33.71.75.77,1.26.14,1.23-.27,1.23-.48,2.84-.15,1.12.07,2.17.32,3.16.28,1.1-.23,1.8-.42,2.04-.25.3-.19.67-.12.85.18.41.66.59,1.07.41"></path>
    </g>
    <g id="g2550">
      <path id="path2552" className="cls-1" d="m63.74,76.85c0,19.99,16.26,36.26,36.25,36.26s36.25-16.26,36.25-36.26-16.26-36.25-36.25-36.25-36.25,16.26-36.25,36.25m1.86,0c0-18.96,15.42-34.39,34.39-34.39s34.4,15.43,34.4,34.39-15.43,34.39-34.4,34.39-34.39-15.43-34.39-34.39"></path>
    </g>
    <g id="g2554">
      <path id="path2556" className="cls-1" d="m42.91,77.32c0,31.48,25.61,57.08,57.08,57.08s57.09-25.61,57.09-57.08-25.61-57.08-57.09-57.08-57.08,25.61-57.08,57.08m2.32,0c0-30.19,24.57-54.76,54.76-54.76s54.76,24.56,54.76,54.76-24.56,54.75-54.76,54.75-54.76-24.56-54.76-54.75"></path>
    </g>
    <g id="g2558">
      <path id="path2560" className="cls-1" d="m108.56,60.66c-1.99-1.44-.77-2.2-.77-2.2,0,0-.32-.69-1.02-1.43-.39-.48-.63-.3-.63-.3l-2.66,1.45,1.53,1.58c-1.51.21-2.3,1.22-2.3,1.22l-2.11-.14c-.3,0-.5.09-.5.09,0,0-.18.05-.29.33-.15.36-.02.88.41.97l.09.02.12-.91.86.54c-.84.56-.59,1.08-.59,1.08.13.7,1.54.48,1.54.48l-.79-.64,1.06-.91.38.19c-.38,1.09.46,1.15.46,1.15.48.12,1.31-.12,1.31-.12l-.77-1.1c2.03-.34,4.81-1.25,4.69-1.33"></path>
    </g>
    <g id="g2562">
      <path id="path2564" className="cls-1" d="m108.49,103.81c-1.86-1.98-.39-3.27-.39-3.27-.6-1.12-.84-1.43-1.25-1.89-.31-.39-.63-.25-.63-.25l-2.65,1.5,1.59,2.66c-1.42,1.2-2.15,2.02-2.15,2.02l-1.98-.2c-.28,0-.47.12-.47.12,0,0-.17.07-.28.46-.14.5-.01,1.21.39,1.34l.09.02.11-1.25.8.73c-.79.78-.55,1.48-.55,1.48.12.96,1.44.65,1.44.65l-.73-.88.99-1.25.35.26c-.35,1.5.43,1.58.43,1.58.45.16,1.22-.17,1.22-.17l-.71-1.51c1.9-.46,4.5-2.05,4.38-2.17"></path>
    </g>
    <g id="g2566">
      <path id="path2568" className="cls-1" d="m112.67,83.66c-3.08-2.14-1.2-3.28-1.2-3.28,0,0-.5-1.04-1.58-2.12-.6-.71-.99-.45-.99-.45l-4.14,2.15,2.37,2.35c-2.35.31-3.57,1.82-3.57,1.82l-3.28-.21c-.46,0-.78.13-.78.13,0,0-.28.08-.46.5-.23.54-.02,1.31.64,1.45l.15.03.19-1.35,1.33.8c-1.3.84-.92,1.6-.92,1.6.2,1.04,2.39.71,2.39.71l-1.22-.96,1.65-1.36.58.29c-.58,1.62.71,1.71.71,1.71.75.17,2.03-.19,2.03-.19l-1.19-1.63c3.16-.51,7.46-1.86,7.28-1.99"></path>
    </g>
    <g id="g2570">
      <path id="path2572" className="cls-1" d="m79.53,117.85s.6-.58.61-.58c.68-.77,1.32-1.55,2.04-1.91.04-.02.17-.08.19-.08.29-.12.61-.18.95-.14.8.09,1.42.65,1.64,1.37.03.05.05.09.08.14.33.49,1.01.66,1.47.3.53-.42.47-.91.47-.94-.04-1.57-1.86-2.77-4.04-2.77-.57,0-1.11.1-1.6.24-.35.1-1.03.41-1.43.77-.81.64-1.53,1.53-2.38,2.43-1.63,1.7-2.89,2.81-4.81,2.13-.38-.13-.81-.38-1.21-.76-.84-.76-1.32-1.89-1.2-3.1.21-2.02,2.26-3.77,4.71-3.23h0c.67.15,1.19.7,1.25,1.39.06.44.47.76.91.7.44-.06.75-.47.69-.91-.05-.69-.56-1.66-1.22-2.08l-.08-.05c-1.35-.89-3.43-.8-5.75.25,0,0-1.98.91-2.51,1.05-.72.19-1.66.15-2-.39-.09-.15-.12-.29-.07-.44.11-.34.58-.7,1.41-1.24.89-.57,1.68-1.2,1.94-2,.16-.52.1-1.1-.33-1.79-.48-.76-1.23-1.32-2.29-1.7h0c.06-.36.06-.92-.32-1.53-1.13-1.79-3.07-3.21-5.08-2.93l-.12.02c-.42.09-.83.25-1.22.47-.38.23-.51.73-.27,1.11.22.38.73.54,1.11.31,0,0,.11-.06.16-.12.43-.45,1.04-.71,1.7-.64,1.14.12,1.96,1.13,1.84,2.25,0,.12-.04.23-.07.34-.02.1-.05.2-.12.32-.19.41-1.12,1.13-1.24,1.22-1.4,1.02-2.62,2.48-1.78,4.04.38.69.87,1.01,1.88,1.37-.08.44.04.95.33,1.41.86,1.38,2.83,1.97,4.84,1.27-1.29,3.22.65,6.77,3.41,7.61,2.62.79,4.34-.56,5.12-.99.8-.54,1.64-1.48,2.37-2.18m-15.12-8.27c-.74-.07-1.28-.74-1.2-1.48.03-.36.21-.67.47-.89l1.9-1.4h0c.27-.2.61-.31.97-.27.74.08,1.28.74,1.21,1.48-.04.33-.19.62-.41.83l-1.84,1.33c-.38.27-.76.43-1.1.4"></path>
    </g>
    <g id="g2574">
      <path id="path2576" className="cls-1" d="m123.51,120.85c-.57-.41-1.37-.28-1.79.29-.04.06-.07.11-.11.17-.29.86-.89,1.68-1.86,1.75-.4.03-.98-.06-1.5-.32-.96-.56-1.33-1.18-2.12-2.13,0,0-1-1.16-1-1.16-.84-.89-1.72-1.83-2.75-2.73-1.15-.91-2.95-2.26-6.13-1.41-2.56.68-4.61,3.27-4.82,6.2h-2.83c-.21-2.93-2.26-5.52-4.82-6.2-3.18-.84-4.97.5-6.13,1.41-1.03.9-1.91,1.85-2.75,2.73,0,0-1,1.15-1,1.16-.79.96-1.17,1.57-2.11,2.13-.52.25-1.1.35-1.5.32-.96-.08-1.57-.89-1.86-1.75-.04-.05-.07-.11-.11-.17-.42-.57-1.22-.71-1.79-.29-.58.41-.58,1.14-.3,1.78,0,.01.02.02.02.03h-.02c.65,1.47,2.46,2.53,4.6,2.53,1.5,0,2.85-.53,3.74-1.36.95-.81,1.77-1.92,2.77-3.06,1.63-1.83,2.95-3.11,4.79-2.95h0s.03,0,.05,0c0,0,.02,0,.03,0,2.18.16,3.9,1.71,4.26,3.68h-1.12c-.5,0-.91.46-.91,1.02s.41,1.02.91,1.02h1c-.6,1.97-2.54,3.48-4.74,3.35,0,0-.75-.06-1.15-.46-.52-.41-.53-.82-.63-1.41-.1-.58-.66-.97-1.24-.86-.58.1-1.05.59-.98,1.29.02.12.02.24.04.34.18,1.14.67,1.8,1.6,2.47l.15.08c1.67.94,4.24.77,6.38-.79,1.98-1.44,2.44-3.24,2.44-3.24.09-.26.17-.52.23-.77h3.15c.06.26.13.52.22.77,0,0,.47,1.8,2.45,3.24,2.13,1.56,4.71,1.73,6.38.79l.15-.08c.93-.67,1.43-1.32,1.6-2.47.02-.11.02-.22.04-.34.07-.7-.4-1.19-.98-1.29-.58-.11-1.13.29-1.24.86-.1.59-.11,1-.63,1.41-.4.39-1.15.46-1.15.46-2.2.13-4.14-1.38-4.74-3.35h1.03c.51,0,.91-.46.91-1.02s-.4-1.02-.91-1.02h-1.15c.36-1.96,2.09-3.52,4.26-3.68.01,0,.02,0,.03,0,.02,0,.03,0,.05,0h0c1.85-.16,3.17,1.13,4.8,2.96,1,1.14,1.82,2.26,2.77,3.06.89.83,2.24,1.36,3.74,1.36,2.14,0,3.95-1.06,4.6-2.54h-.02s.02-.02.02-.03c.28-.65.28-1.37-.3-1.78"></path>
    </g>
    <g id="g2578">
      <path id="path2580" className="cls-1" d="m139.77,100.54c-.39-.23-.79-.39-1.22-.47l-.12-.02c-2.01-.28-3.95,1.14-5.08,2.93-.38.61-.38,1.17-.32,1.53h0c-1.06.39-1.8.94-2.28,1.7-.43.68-.5,1.27-.33,1.79.25.79,1.05,1.42,1.94,2,.83.54,1.3.9,1.41,1.24.04.15.02.29-.07.44-.34.54-1.27.58-2,.39-.52-.14-2.51-1.05-2.51-1.05-2.32-1.04-4.4-1.14-5.75-.25l-.08.05c-.66.41-1.17,1.39-1.22,2.08-.07.44.25.85.69.91.44.06.85-.26.91-.7.06-.69.58-1.23,1.25-1.39h0c2.44-.55,4.49,1.2,4.7,3.22.12,1.21-.35,2.34-1.2,3.1-.39.38-.83.63-1.21.76-1.93.68-3.19-.43-4.81-2.13-.85-.9-1.57-1.79-2.38-2.43-.4-.36-1.08-.66-1.43-.77-.5-.15-1.03-.24-1.6-.24-2.17,0-4,1.2-4.03,2.77,0,.03-.06.52.47.94.46.36,1.15.19,1.47-.3.03-.05.06-.09.08-.14.22-.72.84-1.29,1.64-1.37.34-.04.66.02.95.14.02,0,.15.06.19.08.73.36,1.37,1.14,2.04,1.91,0,0,.61.58.61.58.73.71,1.57,1.64,2.37,2.18.79.43,2.51,1.78,5.12.99,2.77-.84,4.71-4.39,3.41-7.61,2.01.7,3.97.12,4.84-1.27.29-.46.41-.97.33-1.41.97-.35,1.49-.71,1.87-1.4.86-1.58-.37-2.98-1.77-4-.12-.09-1.04-.81-1.24-1.22-.06-.12-.1-.22-.12-.32-.03-.11-.06-.22-.07-.34-.12-1.13.7-2.14,1.84-2.25.66-.07,1.28.19,1.7.64.05.06.16.12.16.12.38.23.89.07,1.11-.31.23-.38.11-.88-.27-1.11m-3.43,6.66c.26.22.43.53.47.89.08.74-.46,1.41-1.2,1.48-.34.03-.72-.13-1.1-.4l-1.84-1.33c-.22-.22-.38-.5-.41-.83-.08-.74.46-1.41,1.2-1.48.36-.04.7.08.97.28h0s1.9,1.39,1.9,1.39"></path>
    </g>
    <g id="g2582">
      <path id="path2584" className="cls-1" d="m100.5,68c0,.62-.15.76-.44.77-.29,0-.45-.13-.46-.76,0-.62-.36-.78-.8-.77-.43,0-.88.42-.8,1.27.05.47.47,1.59,2.08,2.49,1.59-.93,1.99-2.06,2.03-2.53.07-.86-.39-1.26-.82-1.26-.43,0-.79.17-.79.79"></path>
    </g>
    <g id="g2586">
      <path id="path2588" className="cls-1" d="m130.6,75.48c-.43,0-.79.17-.78.79,0,.62-.16.76-.45.76-.29,0-.46-.13-.46-.75,0-.62-.37-.78-.8-.77-.43,0-.88.42-.8,1.28.04.47.47,1.59,2.08,2.49,1.59-.93,1.99-2.06,2.03-2.53.06-.86-.4-1.26-.83-1.26"></path>
    </g>
    <g id="g2590">
      <path id="path2592" className="cls-1" d="m72.49,77.34c.06-.86-.4-1.26-.83-1.26-.43,0-.79.17-.78.79,0,.62-.16.76-.45.77-.29,0-.45-.14-.46-.76,0-.62-.37-.78-.8-.77-.43,0-.88.42-.8,1.28.05.47.47,1.59,2.08,2.49,1.59-.93,2-2.06,2.03-2.53"></path>
    </g>
    <g id="g2594">
      <path id="path2596" className="cls-1" d="m124.16,94.27c-.43,0-.79.17-.78.79,0,.62-.15.76-.44.77-.29,0-.45-.14-.46-.76,0-.62-.36-.78-.79-.77-.43,0-.89.41-.8,1.27.04.47.47,1.6,2.08,2.49,1.59-.93,1.99-2.06,2.03-2.54.07-.86-.4-1.26-.83-1.26"></path>
    </g>
    <g id="g2598">
      <path id="path2600" className="cls-1" d="m78.41,94.74c-.43,0-.79.17-.79.79,0,.63-.15.76-.44.77-.29,0-.45-.13-.46-.76,0-.62-.37-.77-.8-.77-.43,0-.88.41-.8,1.27.05.47.47,1.59,2.08,2.49,1.59-.93,1.99-2.06,2.03-2.53.07-.86-.39-1.26-.82-1.26"></path>
    </g>
    <g id="g2602">
      <path id="path2604" className="cls-1" d="m100.3,93.23c1.59-.93,1.99-2.06,2.03-2.54.07-.86-.39-1.26-.82-1.26-.43,0-.79.17-.79.79.01.62-.15.76-.44.77-.29,0-.45-.14-.46-.76,0-.62-.37-.78-.8-.77-.43,0-.88.42-.8,1.28.04.47.47,1.59,2.08,2.49"></path>
    </g>
    <g id="g2606">
      <path id="path2608" className="cls-1" d="m122.58,60.59c1.59-.93,1.99-2.06,2.03-2.53.07-.86-.39-1.26-.82-1.26-.43,0-.79.17-.78.79,0,.62-.15.76-.44.77-.29,0-.46-.13-.46-.76,0-.62-.37-.78-.8-.77-.43,0-.88.42-.8,1.27.05.47.47,1.59,2.08,2.49"></path>
    </g>
    <g id="g2610">
      <path id="path2612" className="cls-1" d="m76.82,61.06c1.59-.93,2-2.06,2.03-2.53.06-.86-.39-1.26-.83-1.26-.43,0-.79.17-.78.79,0,.62-.15.76-.44.77-.29,0-.46-.13-.46-.76,0-.62-.37-.78-.8-.77-.43,0-.89.42-.8,1.27.05.47.47,1.6,2.08,2.49"></path>
    </g>
    <g id="g2614">
      <path id="path2616" className="cls-1" d="m99.92,49.44c1.59-.93,1.99-2.06,2.03-2.54.07-.86-.39-1.26-.82-1.26-.43,0-.79.17-.78.79,0,.62-.15.76-.44.77-.29,0-.46-.14-.46-.76,0-.62-.37-.78-.8-.77-.43,0-.88.42-.79,1.27.04.47.47,1.59,2.08,2.49"></path>
    </g>
    <g id="g2618">
      <path id="path2620" className="cls-1" d="m107.15,52.17c.46-.03,1-.13,2.54-.33,1.81-.24,4.47-.33,5.14-.33.84-.04,2.35.08,2.86.59.12.12.19.28.19.44,0,.17-.06.33-.18.45-.87.89-3.12.77-3.91.66h0s-1.31-.13-1.31-.13c.74.25,1.44,1.13,1.44,1.13h.09s0,0,0,0c.02,0,.04,0,.05,0h.05c.97.09,3.19.14,4.28-.99.3-.31.47-.71.46-1.14,0-.43-.18-.83-.48-1.13-1-.98-3.32-.96-3.58-.95-.69,0-3.36.11-5.22.42-1.46.24-2.01.3-2.45.33-.85.05-2.34-.08-2.86-.59-.12-.12-.19-.28-.19-.45,0-.17.07-.32.18-.45.87-.89,2.97-.77,3.6-.65.02,0,.85.14.85.14.65.11.94.21,1.76.37.75.11,2.35.07,2.84-.82l.59-1.51-.2-.1-.94.91c-.41.5-1.43.67-2.26.55-.57-.01-.88-.2-1.7-.37l-.83-.14c-.09-.02-3.01-.49-4.4.93-.3.31-.47.71-.46,1.14,0,.43.18.83.49,1.13.99.97,3.31.88,3.57.86"></path>
    </g>
    <g id="g2622">
      <path id="path2624" className="cls-1" d="m83.52,51.06l1.17,1.09-.19.17c-1.49-.57-1.67.11-1.67.11-.22.37.3,1.06.3,1.06l.99-.74c.88,3.27,4.96,6.33,4.96,6.33,0,0,.22-1.54,1.43-3.12l-1.62-.27-.59-.09c-.82-1.85-2.26-3.16-2.26-3.16.46-1.33.49-1.7.49-1.7,0-.29-.09-.44-.09-.44,0,0-.05-.24-.43-.4-.49-.21-1.25-.14-1.43.19l-.08.2,1.27.31-.81.45c-.7-.83-1.45-.74-1.45-.74-1,.1-.85,1.16-.85,1.16l.87-.4"></path>
    </g>
    <g id="g2626">
      <path id="path2628" className="cls-1" d="m96.02,49.59h.09s.06-2.08.06-2.08l-.36-.02-.97,1.32-.47-1.2h-.34s-.06-.02-.06-.02l-.58,1.15-.85-1.4-.36-.02-.12,2.08h.11s3.85.17,3.85.17Z"></path>
    </g>
    <g id="g2630">
      <path id="path2632" className="cls-1" d="m83.58,91.98c-1,.11-.85,1.16-.85,1.16l.87-.4,1.17,1.09-.19.17c-1.49-.57-1.67.1-1.67.1-.22.37.3,1.06.3,1.06l.99-.74c.88,3.28,4.96,6.33,4.96,6.33,0,0,.22-1.54,1.43-3.12l-1.62-.27-.59-.09c-.82-1.85-2.26-3.16-2.26-3.16.46-1.33.49-1.7.49-1.7,0-.29-.09-.44-.09-.44,0,0-.04-.23-.43-.4-.49-.21-1.25-.14-1.43.19l-.08.2,1.27.31-.81.45c-.7-.83-1.45-.74-1.45-.74"></path>
    </g>
    <g id="g2634">
      <path id="path2636" className="cls-1" d="m96.21,91.27l.06-2.08-.36-.02-.97,1.32-.47-1.19h-.06s-.28-.02-.28-.02h-.06s-.58,1.15-.58,1.15l-.85-1.4h-.36s-.12,2.07-.12,2.07h.11s3.85.17,3.85.17h.09Z"></path>
    </g>
    <g id="g2638">
      <path id="path2640" className="cls-1" d="m114.56,98.3s-2.2-7.45-15.43-1.45h0c-.08.04-.21.09-.3.13-1.21.52-1.96.46-2.34.32-.03-.01-.02-.15-.02-.15.52.1.98.07.98.07l.14-.61c-.33-.52-.97-1.18-.97-1.18v-.31c.41.1,1.11,1.03,1.11,1.03l.15-1.15c-.44-.68-.91-1.14-1.26-1.34l.02-.24c.34.01,1.28.92,1.28.92l-.04-1.03c-.52-.75-.93-1.38-1.95-1.48h0s0,0,0,0c0,0,0,0-.02,0l-.39-.02-3.93-.17-.71.54c-.68.13-1.13.25-1.52.58,0,0,.06.54.15,1.1.05.35.18.48.81.32.84-.21.47-.8,1.17-.77.9.03.84.88.85,1.43.05,1.53-1.16,1.1-1.16,1.1-.52-.18-.48-.42-1.12-.42-.39,0-.32.83-.32.83.05.45,1.33.54,1.33.54h.34c-1.99,3.13-2.04,4.57-2.04,4.57-2.47.21-4.2.61-4.2.61-1.23-1.71-2.2-1.7-2.57-1.62-.59.12-.83.64-.65,1.13l1.08-.45v.79c-1.18-.25-1.46.26-1.46.26-.41.83.7,1.42.7,1.42v-.77s1.76-.01,1.76-.01v.39c-1.36.42-.76,1.06-.76,1.06.25.42,1.33.71,1.33.71l.02-1.39c7.5,1.22,11.96-.63,11.96-.63.34-.69.5-1.26.5-1.26,3.18-.65,8.94-4.01,8.94-4.01,1.28-.55,2.83,2.91,2.83,2.91,1.36,1.87,6.28.44,6.28.44-.57.88-.8,1.57-.8,1.57-1.46.99-1.78,1.3-1.78,1.3-.24.2-.29.42-.29.42,0,0-.08.16.09.44.22.36.82.64,1.23.42l.09-.05-.59-.82h.96c.02,2.47,2.23.97,2.22.19h-1.22s0-.99,0-.99l.54-.3c.63.88,1.22.44,1.22.44.41-.21.83-.79.83-.79h-1.44s.7-.38.7-.38c0,0,2.55-1.37.96-3.08,0,0-2.61,1.18-3.28-1.07"></path>
    </g>
    <g id="g2642">
      <path id="path2644" className="cls-1" d="m115.05,92.01c-.69,0-2,.11-3.88.33-1.81.22-3.13.33-3.8.33-.85.04-2.35-.08-2.86-.59-.12-.12-.19-.28-.19-.45s.06-.33.18-.45c.87-.89,2.97-.77,3.6-.65.02,0,.5.08.5.08l.34.06c.66.11,2.27.36,3.11.38.19.02,2.35.07,2.83-.82,0,0,1.1-2.35,1.1-2.35l-.21-.1-1.44,1.75c-.41.5-1.61.61-2.26.55-.57-.01-1.7-.15-3.04-.37l-.34-.06-.5-.08c-.1-.02-3-.49-4.4.94-.31.31-.47.71-.46,1.14,0,.43.18.83.48,1.13,1,.97,3.32.88,3.58.87.69,0,2-.12,3.88-.34,1.81-.21,3.13-.33,3.79-.33.85-.04,2.35.08,2.87.59.12.12.19.27.19.44s-.06.33-.18.45c-.87.89-3.12.77-3.91.66h0s-1.3-.13-1.3-.13c.74.25,1.43,1.13,1.43,1.13h.09s.04.01.05.02h.05s0,0,0,0c.97.08,3.19.13,4.28-.99.3-.31.47-.72.46-1.14,0-.43-.18-.83-.49-1.13-.99-.97-3.31-.88-3.57-.87"></path>
    </g>
    <g id="g2646">
      <path id="path2648" className="cls-1" d="m114.81,65.45l-.98-.12c-.19-.03-5.18-.73-7.35,1.41-.47.46-.72,1.07-.71,1.71,0,.64.28,1.25.75,1.7,1.54,1.46,5.14,1.32,5.55,1.3,1.06,0,1.95-.17,4.86-.5,2.81-.32,4.85-.49,5.88-.49,1.31-.07,3.63.12,4.44.88.19.18.29.41.29.66,0,.25-.1.49-.28.67-1.35,1.33-4.83,1.16-6.06.98h0s-2.02-.19-2.02-.19c1.15.37,2.22,1.7,2.22,1.7h.14s0,.01,0,.01c.02,0,.05,0,.07,0h.09c1.5.13,4.94.2,6.64-1.48.46-.46.72-1.07.71-1.71,0-.64-.28-1.25-.75-1.7-1.54-1.46-5.14-1.32-5.54-1.3-1.07,0-3.11.17-6.02.5-2.81.32-3.69.49-4.73.49-1.31.07-3.63-.11-4.44-.88-.19-.18-.29-.41-.3-.66,0-.25.1-.49.28-.67,1.35-1.33,4.84-1.16,6.07-.98.02,0,.97.12.97.12l.67.08c1.28.16,2.61.53,4.23.55.37.02,4.58.09,5.52-1.25,0,0,2.15-3.53,2.15-3.53l-.39-.15-2.82,2.63c-.81.75-3.14.91-4.41.83-1.11-.02-1.5-.22-4.1-.54l-.66-.08"></path>
    </g>
    <g id="g2650">
      <path id="path2652" className="cls-1" d="m73.81,69.63l1.8,1.62-.29.26c-2.32-.84-2.59.16-2.59.16-.34.55.47,1.57.47,1.57l1.54-1.1c1.35,4.87,7.69,9.42,7.69,9.42,0,0,.33-2.29,2.22-4.65l-2.51-.41-.92-.14c-1.27-2.76-3.51-4.7-3.51-4.7.72-1.98.77-2.53.77-2.53,0-.42-.14-.65-.14-.65,0,0-.07-.35-.66-.59-.77-.31-1.94-.21-2.22.28l-.13.3,1.97.47-1.27.68c-1.08-1.23-2.25-1.1-2.25-1.1-1.55.15-1.32,1.72-1.32,1.72l1.35-.6"></path>
    </g>
    <g id="g2654">
      <path id="path2656" className="cls-1" d="m90.67,64.77h-.09s-.44-.02-.44-.02h-.09s-.89,1.71-.89,1.71l-1.32-2.08-.57-.02-.19,3.1h.17s5.98.25,5.98.25h.15s.09-3.09.09-3.09l-.57-.02-1.5,1.97-.73-1.77Z"></path>
    </g>
    <g id="g2658">
      <path id="path2660" className="cls-1" d="m121.85,77.89s-3.42-11.08-23.95-2.15c0,0-.2.08-.28.12-1.76.78-2.87.68-3.42.46-.04-.02-.02-.22-.02-.22.77.14,1.44.1,1.44.1l.21-.89c-.49-.76-1.43-1.73-1.43-1.73l.02-.45c.59.15,1.6,1.51,1.6,1.51l.22-1.68c-.65-.99-1.33-1.67-1.84-1.97l.02-.35c.5.02,1.88,1.34,1.88,1.34l-.05-1.5c-.77-1.11-1.37-2.04-2.89-2.18l-7.15-.27-1.11.68c-1.05.19-1.74.46-2.35.94,0,0,.1.72.23,1.56.08.51.28.71,1.25.48,1.31-.32.73-1.19,1.82-1.15,1.39.05,1.15,1.32,1.17,2.15.06,2.28-1.64,1.87-1.64,1.87-.8-.27-.74-.72-1.74-.71-.61,0-.51,1.16-.51,1.16.08.66,2.08.79,2.08.79h.51c-3.08,4.66-3.16,6.8-3.16,6.8-3.84.32-7.05,1.42-7.05,1.42-1.89-2.54-3.41-2.53-3.98-2.42-.9.19-1.29.95-1.01,1.68l1.67-.66v1.17c-1.83-.37-2.26.38-2.26.38-.64,1.24,1.08,2.11,1.08,2.11l-.02-1.15,2.74-.02v.59c-2.11.63-1.18,1.57-1.18,1.57.37.63,2.07,1.06,2.07,1.06l.04-2.06c11.69.91,19.08-1.44,19.08-1.44.53-1.03.78-1.88.78-1.88,4.93-.97,13.88-5.98,13.88-5.98,1.71-.8,4.4,4.32,4.4,4.32,2.1,2.79,9.74.65,9.74.65-.89,1.31-1.24,2.33-1.24,2.33-2.27,1.47-2.78,1.94-2.78,1.94-.36.29-.45.62-.45.62,0,0-.13.24.14.66.35.54,1.27.96,1.92.62l.14-.08-.91-1.22,1.49-.02c.04,3.69,3.46,1.45,3.45.29l-1.9.02v-1.5s.83-.45.83-.45c.97,1.31,1.88.65,1.88.65.63-.31,1.29-1.18,1.29-1.18l-2.23.02,1.08-.59s3.97-2.05,1.5-4.58c0,0-4.06,1.75-5.09-1.59"></path>
    </g>
    <g id="g2662">
      <path id="path2664" className="cls-1" d="m84.64,73.06c1.3-.41,1.59.36,1.59.36,0,0,.28.3.33-.93.04-.83.19-1.06-2.8-.12-2.99.94-4.64-1.65-4.64-1.65l-.26.08c2.04,3.63,5.78,2.26,5.78,2.26"></path>
    </g>
    <g id="g2666">
      <path id="path2668" className="cls-1" d="m90.33,53.42c.82-.24.99.24.99.24,0,0,.17.19.22-.58.03-.52.13-.66-1.75-.1-1.88.56-2.88-1.08-2.88-1.08l-.17.05c1.23,2.29,3.59,1.47,3.59,1.47"></path>
    </g>
    <g id="g2670">
      <path id="path2672" className="cls-1" d="m90.43,95.12c.81-.24.99.24.99.24,0,0,.17.19.22-.58.03-.52.13-.66-1.75-.1-1.88.56-2.88-1.08-2.88-1.08l-.17.05c1.23,2.29,3.59,1.47,3.59,1.47"></path>
    </g>
    <g id="g2674">
      <path id="path2676" className="cls-1" d="m117.75,57.69s-2.61,1.18-3.28-1.07c0,0-2.15-7.25-14.89-1.69-.23.09-.82.35-.86.37-1.2.53-1.96.46-2.34.32-.02-.01,0-.15,0-.15.53.1.98.07.98.07l.14-.61c-.33-.52-.97-1.18-.97-1.18l.02-.31c.4.1,1.1,1.03,1.1,1.03l.15-1.15c-.44-.68-.91-1.14-1.27-1.34l.02-.24c.35.01,1.28.92,1.28.92l-.03-1.03c-.52-.76-.94-1.39-1.97-1.48l-.56-.02h0s-3.75-.16-3.75-.16l-.71.54c-.68.13-1.13.25-1.52.58,0,0,.07.54.15,1.1.05.35.18.48.81.32.84-.21.47-.8,1.17-.77.9.03.84.88.85,1.43.05,1.53-1.16,1.1-1.16,1.1-.52-.18-.48-.42-1.12-.42-.39,0-.32.83-.32.83.05.45,1.33.54,1.33.54h.33c-1.99,3.13-2.04,4.57-2.04,4.57-2.47.21-4.54.95-4.54.95-1.22-1.71-2.2-1.7-2.57-1.62-.59.12-.83.64-.65,1.13l1.08-.45v.79c-1.17-.25-1.45.26-1.45.26-.41.83.7,1.41.7,1.41v-.77s1.75-.01,1.75-.01v.39c-1.36.42-.76,1.06-.76,1.06.24.42,1.33.71,1.33.71l.02-1.38c7.53.61,12.29-.97,12.29-.97.34-.69.5-1.26.5-1.26,3.18-.65,8.94-4.01,8.94-4.01,1.1-.54,2.83,2.9,2.83,2.9,1.36,1.87,6.27.44,6.27.44-.57.88-.8,1.57-.8,1.57-1.47.99-1.79,1.3-1.79,1.3-.24.2-.29.42-.29.42,0,0-.08.16.09.44.23.36.82.65,1.24.42l.09-.05-.59-.82h.96c.02,2.47,2.23.97,2.22.19h-1.22s0-.99,0-.99l.54-.3c.63.88,1.22.44,1.22.44.41-.21.83-.79.83-.79l-1.44.02.69-.39s2.56-1.38.97-3.08"></path>
    </g>
    <g id="g2678">
      <path id="path2680" className="cls-1" d="m147.1,99.18c.18-.11.45-.46.33-.88-.13-.45-.04-1,.09-1.36.24-.67,1.19-1.2,1.69-2.79.26-.85.32-1.38.26-1.75.25-.27.52-.74.78-1.59.5-1.59,0-2.59.18-3.27.1-.37.34-.88.7-1.17.35-.28.32-.72.23-.91-.17-.39-.63-.59-1.03-.43-.8.33-1.71.36-2.57.08-.2-.07-.4-.15-.59-.25-.38-.2-.86-.05-1.06.33-.2.39-.07.9.33,1.06,2.1.86,2.61,2.32,2.4,3.3-.17.77-.94.52-1.86.25,0,0-7.13-1.99-7.15-1.99-.36-.11-.59-.43-.58-.77,0,0,0-.74-.03-1.11-.03-.43-.41-.76-.84-.73-.43.03-.76.41-.73.84.06.86-.05,1.74-.3,2.57-.26.83-.67,1.61-1.21,2.28-.28.34-.22.83.12,1.11s.83.22,1.11-.12c.24-.29.66-.9.66-.9.18-.28.56-.42.91-.3.03,0,7.01,2.44,7.01,2.44.9.31,1.69.55,1.38,1.27-.39.92-1.6,1.84-3.82,1.34-.42-.09-.82.25-.88.68-.05.43.25.82.68.88.21.03.42.07.62.13.86.25,1.59.8,2.06,1.53.23.36.73.46,1.09.24"></path>
    </g>
  </g>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m45.91,80.98c0,2.61-.01,5.23,0,7.84,0,.6-.15.98-.71,1.3-5,2.86-9.98,5.77-14.99,8.62-.31.18-.89.19-1.2.01-5.07-2.86-10.13-5.74-15.17-8.67-.31-.18-.59-.69-.6-1.05-.05-3.39-.04-6.79,0-10.18,0-.33.28-.78.57-.97,1.21-.77,2.46-1.51,3.74-2.17.65-.33.82-.74.79-1.41-.05-1.08-.07-2.17.02-3.24.03-.4.32-.91.64-1.12,1.21-.77,2.48-1.46,3.76-2.13.49-.26.66-.59.66-1.13-.03-2.19.01-4.39-.02-6.58-.01-.7.24-1.09.84-1.42,1.52-.84,3.03-1.72,4.51-2.63.61-.38,1.03-.38,1.56.17,5.05,5.22,10.13,10.42,15.18,15.64.27.28.4.79.41,1.2.04,2.64.02,5.29.02,7.93Zm-15.79,16.56c.27-.12.44-.17.59-.26,4.52-2.62,9.03-5.25,13.57-7.84.5-.29.53-.64.53-1.1-.01-4.66-.01-9.31-.02-13.97,0-.22-.02-.45-.04-.81-1.43.84-2.76,1.58-4.05,2.39-.21.13-.34.55-.34.83-.03,1.38.03,2.77-.04,4.14-.02.36-.3.84-.6,1.03-1.27.79-2.62,1.46-3.9,2.25-.28.17-.54.62-.56.96-.07,1.17-.06,2.34-.01,3.51.03.64-.22.98-.76,1.27-1.27.68-2.52,1.4-3.75,2.15-.25.15-.57.45-.58.69-.05,1.55-.03,3.11-.03,4.76Zm-5.3-37.85c1.06,1.09,2.05,2.13,3.05,3.15,3.81,3.92,7.61,7.84,11.44,11.74.22.22.72.45.92.34,1.43-.75,2.82-1.58,4.3-2.42-.27-.3-.49-.54-.71-.77-2.61-2.69-5.23-5.38-7.84-8.07-1.99-2.04-3.97-4.1-5.97-6.12-.2-.2-.67-.39-.86-.29-1.43.75-2.82,1.58-4.32,2.45Zm4.14,37.89c0-1.57-.03-2.97.01-4.37.02-.63-.18-1.04-.66-1.45-4.48-3.8-8.95-7.64-13.42-11.46-.14-.12-.32-.21-.6-.39,0,2.89.02,5.65-.02,8.4,0,.65.25.96.76,1.26,4.32,2.48,8.63,4.98,12.94,7.47.27.16.56.3.98.53Zm-14.13-18.96c.08.15.09.19.11.21,4.78,4.1,9.55,8.21,14.34,12.3.15.13.48.24.62.17,1.28-.69,2.53-1.42,3.9-2.2-1.6-1.37-3.07-2.65-4.54-3.91-3.28-2.81-6.55-5.63-9.85-8.42-.22-.19-.69-.36-.9-.26-1.24.65-2.43,1.39-3.68,2.12Zm9.82-17.51c-.07.04-.14.07-.21.11,0,1.78.02,3.57-.01,5.35-.01.59.2.89.7,1.2,1.8,1.11,3.84,1.85,5.33,3.45,1,1.07,2.08,2.08,3.12,3.11,1.83,1.8,3.65,3.6,5.65,5.58,0-1.2.05-2.18-.02-3.15-.03-.4-.21-.88-.49-1.16-4.27-4.42-8.57-8.81-12.87-13.21-.41-.42-.8-.85-1.21-1.28Zm.26,12.32c3.21,3.28,6.37,6.52,9.55,9.74.14.14.52.21.68.12,1.23-.67,2.43-1.4,3.5-2.03-3.19-3.27-6.35-6.52-9.53-9.73-.14-.14-.57-.17-.76-.06-1.19.64-2.34,1.32-3.45,1.96Zm-5.51-2.11c0,1.34-.05,2.33.02,3.31.03.39.22.87.51,1.11,4.33,3.75,8.69,7.47,13.04,11.19.35.3.72.58,1.21.97,0-1.03-.04-1.87.01-2.7.04-.62-.16-1.05-.61-1.49-3.2-3.12-6.32-6.33-9.6-9.36-1.27-1.17-2.9-1.94-4.59-3.04Zm.54-.75c1.33.75,2.49,1.41,3.66,2.05.11.06.31.08.41.03,1.19-.66,2.37-1.33,3.69-2.08-1.29-.75-2.42-1.43-3.57-2.05-.18-.1-.53-.04-.73.07-1.1.6-2.18,1.24-3.46,1.98Z"></path>
  <path className="cls-1" d="m178.22,88.08c-.02.45-.04.81-.06,1.23h-2.13v-14.57h2.13v5.87c1.2-1.5,2.53-2.12,4.17-1.88,1.23.18,2.29.71,3.12,1.64,1.73,1.92,1.77,5.25.09,7.32-1.82,2.25-3.91,2.38-7.32.41Zm6.32-3.81c0-2.05-1.38-3.65-3.19-3.65-1.84,0-3.21,1.53-3.22,3.6-.01,1.84,1.34,3.3,3.07,3.32,1.89.01,3.33-1.39,3.34-3.27Z"></path>
  <path className="cls-1" d="m166.32,81.4c-.28-.42-.57-.83-.84-1.23,1.63-1.91,5.66-2.27,7.4-.6.53.5.8,1.3,1.09,2,.13.31.04.71.04,1.07,0,2.21,0,4.42,0,6.68h-2.14c-.02-.38-.04-.72-.07-1.21-1.15,1.12-2.44,1.53-3.92,1.43-2.14-.15-3.63-2.02-3.22-4.12.24-1.24,1.26-2.12,2.85-2.37.74-.11,1.49-.1,2.24-.12.62-.02,1.25,0,1.86,0,.29-1.49-.35-2.47-1.75-2.42-1.19.04-2.36.41-3.54.63,0,.09,0,.17,0,.26Zm5.28,3.16c-1.23.07-2.49.1-3.75.24-.65.08-1.03.58-1.04,1.27-.02.68.34,1.12.94,1.38,1.87.81,4.37-.24,3.85-2.89Z"></path>
  <path className="cls-1" d="m104.1,81.44c-.34-.5-.63-.92-.9-1.33,1.64-1.58,4.52-2.1,6.5-1.19,1.28.59,2.04,1.61,2.08,3.02.06,2.42.02,4.85.02,7.34h-2.12c-.04-.33-.09-.66-.16-1.16-1.16,1.13-2.46,1.51-3.93,1.4-1.72-.13-3.05-1.4-3.19-3.09-.16-1.92.93-3.15,3.1-3.43.65-.09,1.32-.07,1.97-.08.63-.01,1.26,0,1.87,0,.36-1.36-.26-2.31-1.58-2.46-1.31-.15-2.48.24-3.65.97Zm5.12,3.23c-1.13,0-2.27-.1-3.38.05-.48.07-1.08.58-1.28,1.04-.15.36.13,1.07.45,1.4.7.71,2.27.72,3.22.16.93-.55,1.22-1.32.99-2.65Z"></path>
  <path className="cls-1" d="m59.02,89.25h-2.21v-10.34h2.17c.02.49.05.96.07,1.43.06.05.12.1.18.16.16-.23.29-.49.49-.69,1.22-1.2,2.69-1.41,4.25-.93,1.54.48,2.4,1.66,2.47,3.22.11,2.36.03,4.73.03,7.15h-2.18c-.01-.28-.04-.56-.04-.85,0-1.68.02-3.36-.02-5.04-.04-1.74-.89-2.6-2.44-2.59-1.6.02-2.74,1.11-2.76,2.69-.02,1.91,0,3.82,0,5.79Z"></path>
  <path className="cls-1" d="m85.25,89.53c-3.1.01-5.49-2.31-5.5-5.34-.01-3.08,2.38-5.46,5.5-5.47,3.02,0,5.49,2.43,5.48,5.41,0,3.03-2.4,5.38-5.47,5.39Zm-.22-2c2.01.01,3.4-1.41,3.39-3.48,0-1.99-1.37-3.45-3.23-3.45-1.98,0-3.33,1.39-3.35,3.43-.02,2,1.33,3.49,3.18,3.5Z"></path>
  <path className="cls-1" d="m136.74,84.13c.01,3.06-2.33,5.39-5.42,5.4-3.1,0-5.49-2.28-5.52-5.32-.04-3.04,2.41-5.48,5.49-5.48,3.09,0,5.44,2.34,5.46,5.39Zm-8.75,0c-.03,1.92,1.33,3.39,3.17,3.41,1.98.02,3.38-1.36,3.41-3.38.03-2.03-1.29-3.53-3.13-3.55-2.06-.03-3.42,1.35-3.45,3.53Z"></path>
  <path className="cls-1" d="m138.4,78.9h2.16c.03.5.06.97.1,1.61,1.01-1.28,2.19-1.9,3.71-1.83,2.01.09,3.58,1.46,3.66,3.48.09,2.33.02,4.68.02,7.08h-2.23c0-1.37,0-2.71,0-4.06,0-.72,0-1.44-.07-2.16-.16-1.6-1-2.32-2.55-2.25-1.42.06-2.54,1.11-2.57,2.5-.04,1.68-.01,3.36-.02,5.04,0,.29-.03.59-.05.94h-2.16v-10.35Z"></path>
  <path className="cls-1" d="m68.55,89.25v-10.32h2.18c.02.48.05.94.08,1.54.21-.2.36-.32.48-.46,1.17-1.31,2.65-1.59,4.27-1.17,1.61.42,2.54,1.59,2.63,3.18.13,2.39.04,4.78.04,7.24h-2.23c0-1.08,0-2.12,0-3.16,0-.9.01-1.8-.01-2.7-.04-1.74-.87-2.62-2.41-2.61-1.59,0-2.76,1.1-2.79,2.68-.03,1.59,0,3.18,0,4.77,0,.32,0,.65,0,1.03h-2.21Z"></path>
  <path className="cls-1" d="m163.52,87.1v2.2h-8.58v-13.71h2.28v11.51h6.3Z"></path>
  <path className="cls-1" d="m91.09,78.86c.68,0,1.28-.06,1.86.03.24.04.52.34.63.6.87,2.07,1.71,4.16,2.56,6.24.11.26.24.52.43.94.88-2.16,1.69-4.14,2.5-6.13q.76-1.86,2.84-1.61c-.04.17-.05.35-.11.5-1.21,3.07-2.45,6.13-3.64,9.2-.22.58-.51.76-1.11.75-1.82-.02-1.82,0-2.48-1.65-1.05-2.65-2.1-5.3-3.15-7.95-.11-.27-.2-.55-.33-.93Z"></path>
  <path className="cls-1" d="m114.31,80.74c-1.48-.34-1.52-.4-1.21-1.84.34-.02.7-.05,1.18-.08v-3.24h2.25v3.25h2.78v1.72h-2.81c0,1.01,0,1.93,0,2.84,0,.75,0,1.5,0,2.25.02,1.76,1.1,2.38,2.61,1.5.1-.06.2-.11.37-.21.3.48.57.94.85,1.38-.75,1-2.25,1.42-3.58,1.02-1.34-.4-2.35-1.58-2.4-2.95-.06-1.56-.02-3.12-.03-4.68,0-.33,0-.65,0-.96Z"></path>
  <path className="cls-1" d="m52.09,75.55h2.22v13.74h-2.22v-13.74Z"></path>
  <path className="cls-1" d="m67.36,73.09c-1.92,0-3.48-1.58-3.46-3.5.01-1.93,1.57-3.48,3.5-3.47,1.92,0,3.49,1.59,3.48,3.5-.01,1.92-1.59,3.46-3.51,3.46Zm-.06-1.6c1.02.02,1.98-.91,1.99-1.91.01-.99-.89-1.89-1.9-1.89-1.04,0-1.87.82-1.9,1.87-.02,1.07.77,1.91,1.8,1.93Z"></path>
  <path className="cls-1" d="m57.82,72.86v-6.39h5.25v1.31h-3.58v1.13h3.48v1.38h-3.46v1.21h3.54v1.37h-5.24Z"></path>
  <path className="cls-1" d="m124,89.33h-2.16v-10.4h2.16v10.4Z"></path>
  <path className="cls-1" d="m52.1,66.44h1.48v5.05h3.29v1.39h-4.77v-6.44Z"></path>
  <path className="cls-1" d="m124.29,75.78c.02.72-.63,1.4-1.35,1.41-.71.01-1.37-.64-1.39-1.37-.02-.71.63-1.39,1.35-1.41.7-.02,1.37.64,1.39,1.37Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m48.11,102.6v-2.14h3.45c-.03-.09-.03-.16-.07-.21-.77-1.32-.92-2.76-.78-4.23.13-1.41.41-2.8.55-4.21.15-1.53.22-3.06.33-4.6.06-.95.06-1.92.2-2.86.24-1.65,1.19-2.88,2.59-3.74.83-.51,1.71-.94,2.58-1.39.3-.16.6-.31.92-.44,1.5-.6,2.31-1.76,2.68-3.29.44-1.76.51-3.55.53-5.35.02-1.56.29-3.08.91-4.51.46-1.06,1.05-2.02,1.98-2.73.07-.05.1-.16.12-.25.1-.56.17-1.12.3-1.67.05-.25.02-.32-.23-.38-5.65-1.39-10.67-3.98-14.95-7.94-2-1.85-3.68-3.97-4.73-6.51-.98-2.36-1.23-4.78-.46-7.25.82-2.64,3.08-4.41,5.84-4.64,1.1-.09,2.18-.03,3.23.27,1.91.55,3.06,1.86,3.68,3.7.08.24.18.47.22.71.1.56.36,1.03.76,1.43.83.83,1,1.79.64,2.89-.25.74-.52,1.47-.98,2.11-.09.13-.19.25-.3.37-.6.63-1.1.59-1.57-.15-.09-.14-.18-.29-.25-.44-.26-.52-.57-1-.98-1.42-.76-.8-1.02-1.74-.81-2.84.1-.54.15-1.12.07-1.66-.18-1.09-1.19-1.83-2.45-1.91-2.03-.13-3.3.87-3.74,2.94-.49,2.31.12,4.36,1.44,6.25,1.16,1.66,2.64,2.99,4.28,4.15,2.72,1.92,5.68,3.34,8.91,4.18,1.84.48,3.59.27,5.31-.48,1.51-.65,3.02-1.32,4.61-1.73,1.98-.52,3.99-.75,6.02-.58,2.41.2,4.81.44,7.21.72,5.18.6,10.36.86,15.57.68,1.9-.06,3.79-.14,5.67-.42,2.55-.38,4.87-1.33,7.05-2.68,2.29-1.42,4.34-3.16,6.34-4.95,2.23-1.98,4.44-4,6.72-5.92,1.97-1.67,4.13-3.07,6.57-3.99,1.54-.58,3.12-.91,4.76-.92,1.11,0,2.09.35,2.95,1.06.11.09.26.14.4.17,2.25.36,4.38,1.05,6.33,2.23.07.05.16.08.25.1.78.13,1.28.6,1.64,1.27.07.12.18.22.29.31.54.41,1.08.82,1.62,1.22.12.09.24.18.38.22,1.24.38,2.2,1.11,2.8,2.28.08.16.21.28.33.42.23.26.49.51.68.79.54.77.47,1.7-.17,2.39-.21.22-.45.44-.72.57-.35.17-.53.44-.72.75-.35.58-.72,1.16-1.14,1.68-.47.58-1.11.87-1.89.73-.08-.01-.19.07-.26.14-.38.35-.72.76-1.14,1.05-.31.21-.73.28-1.11.39-.16.05-.28-.04-.28-.21,0-.45,0-.9,0-1.34,0,0-.05.02-.1.04-.28.13-.49.09-.66-.19-.05-.07-.2-.16-.27-.13-.27.11-.49,0-.64-.18-.22-.26-.4-.56-.61-.86-.03.1-.09.22-.1.34-.13,1.02-.06,2.03.1,3.04.02.13.04.25.07.46-.39-.06-.74-.12-1.13-.19.22.58.72.88,1.18,1.24.46-.53.64-1.15.78-1.81.35.13.56.39.73.69.37.66.41,1.37.27,2.09-.04.18-.03.3.13.45.55.5.32,1.79-.39,2.27-.58.4-1.24.49-1.92.38-.59-.09-1.17-.24-1.76-.36-.44-.09-.85.01-1.25.28.05.1.1.19.15.28,1.09,1.88,1.58,3.94,1.8,6.09.31,3.09-.63,5.82-2.26,8.35-.75,1.16-1.63,2.24-2.45,3.36-.07.09-.13.26-.09.35,1.04,2.4,1.75,4.9,2.4,7.42.36,1.39.63,2.8,1.03,4.18.5,1.72,1.28,3.33,2.38,4.76.05.07.12.13.17.21.36.5.85.59,1.43.51.53-.07,1.07-.1,1.61-.07.66.04,1.18.4,1.6.9.13.15.26.31.36.47.31.48.72.84,1.18,1.17.44.32.82.72,1.23,1.08.04.03.07.07.11.09,1.03.69,1.37,1.55,1.08,2.76-.01.05-.01.1-.02.17h2.24v2.15H48.11Zm62.47-49.35c-.13.04-.21.06-.28.09-2.02.8-4.12,1.17-6.27,1.29-1.75.1-3.51.16-5.27.21-4.2.11-8.38-.08-12.55-.58-2.37-.28-4.73-.6-7.1-.84-2.24-.22-4.46-.04-6.65.53-1.56.4-3.03,1.06-4.51,1.66-.86.35-1.73.65-2.67.76-1.35.15-2.65-.1-3.93-.47-3.58-1.02-6.8-2.74-9.71-5.03-1.6-1.26-3.03-2.69-4.14-4.42-1.3-2.02-1.81-4.2-1.26-6.57.37-1.59,1.21-2.81,2.82-3.37.78-.27,1.58-.29,2.4-.21,1.67.17,2.87,1.18,3.25,2.77.16.66.2,1.33.06,2.02-.13.67-.05,1.31.38,1.88.28.37.55.76.81,1.15.25.37.44.39.7.02.36-.5.53-1.07.6-1.67.05-.45-.04-.83-.41-1.15-.46-.4-.67-.95-.79-1.55-.07-.35-.14-.7-.24-1.05-.5-1.78-1.6-2.98-3.45-3.34-.76-.15-1.55-.2-2.32-.14-1.76.12-3.18.91-4.18,2.4-.76,1.14-1.07,2.42-1.14,3.76-.09,1.87.39,3.62,1.24,5.27,1.26,2.45,3.08,4.43,5.18,6.17,2.96,2.46,6.28,4.3,9.89,5.61,1.03.37,2.08.71,3.15.92.75.14,1.55.06,2.33.04,2.2-.05,3.57.86,4.29,2.91.2.57.35,1.17.44,1.77.25,1.61.57,3.2,1.16,4.72.81,2.1,1.96,3.96,3.69,5.44.64.54,1.26,1.11,1.83,1.72.37.39.7.85.95,1.33.45.87.26,1.77-.44,2.46-.08.08-.18.14-.3.23.15.11.23.18.32.24,1.13.85,2,1.89,2.41,3.26.24.81.31,1.64.29,2.49-.01.49,0,.98,0,1.52.84-.43,1.15-.39,1.7.23.25.29.48.62.62.97.11.27.1.61.05.9-.07.5-.47.76-.89.99.12.16.23.31.34.45,1.72,2.31,3.42,4.64,5.17,6.94.58.77,1.28,1.45,1.92,2.17.2.23.46.31.77.31,1.74-.01,3.47,0,5.21,0,.14,0,.27-.02.49-.03-.12-.64-.23-1.24-.34-1.86.21-.14.46-.31.79-.53-.27-.19-.49-.33-.68-.5-.16-.14-.39-.3-.41-.47-.05-.51-.34-.84-.69-1.14-.24-.2-.5-.37-.76-.56,0-.03,0-.06,0-.1.17,0,.36-.06.5,0,.69.34,1.28.78,1.46,1.59.01.06.06.12.11.15.33.2.66.39,1.04.62.09-.15.32-.37.3-.55-.02-.16-.31-.3-.49-.43-.07-.05-.17-.08-.25-.08-.2,0-.26-.1-.33-.27-.48-1.28-1.69-1.97-3.03-1.71-.51.1-.95.35-1.32.72-.04-.04-.07-.06-.1-.09-.84-.98-1.58-2.03-2.17-3.18-.87-1.69-1.35-3.49-1.66-5.35-.11-.64-.41-1.14-.93-1.54-.75-.58-1.49-1.17-2.21-1.79-.68-.58-1.18-1.31-1.4-2.19-.23-.93-.31-1.86.14-2.75.69-1.35,2.55-1.86,4.02-1.1.69.36,1.22.9,1.68,1.51.06.08.13.16.19.24l.09-.03c0-.24.04-.5,0-.73-.07-.35-.18-.69-.31-1.03-.35-.92-.62-1.85-.56-2.85.06-1.04.77-1.95,1.77-2.15.36-.07.77.01,1.15.06.07,0,.12.15.18.24-.08.05-.16.12-.24.14-.15.03-.3.01-.45.02-.71.05-1.12.39-1.29,1.08-.18.75-.04,1.46.26,2.16.1.22.23.38.47.46.75.25,1.48.55,2.23.76,3.38.95,6.83,1.32,10.33,1.22,1.89-.05,3.77-.14,5.62-.56.93-.21,1.85-.49,2.78-.71,1.22-.28,2.46-.17,3.7-.17,1.29,0,2.57-.03,3.86-.05.1,0,.19-.02.29-.03-.08-.06-.14-.06-.21-.07-.42-.07-.84-.14-1.26-.21-.17-.03-.34-.1-.51-.08-1,.1-1.99.05-2.97-.21-.07-.02-.16-.01-.23,0-1.04.18-2.09.13-3.06-.26-.49-.2-.8-.13-1.23.12-1.31.76-2.69,1.02-4.16.44-.1-.04-.23-.02-.35,0-1.02.13-1.99.06-2.85-.59-.08-.06-.2-.07-.31-.09-1.25-.16-2.41-.6-3.29-1.49-.47-.48-.97-.81-1.55-1.08-.12-.05-.23-.12-.34-.18-.72-.42-1.41-.87-1.93-1.54-.14-.18-.27-.35.01-.52-.06-.05-.1-.08-.14-.12-.53-.57-1.07-1.13-1.58-1.71-.19-.22-.15-.31.15-.37.21-.05.42-.07.66-.11-.08-.13-.16-.23-.22-.34-.07-.12-.14-.24-.19-.37-.2-.46-.18-.52.33-.49.5.02,1,.09,1.5.14-.07-.41-.01-.48.42-.44.06,0,.12.02.18.03.86.18,1.63.53,2.3,1.09.08.07.18.11.28.14.5.11,1,.17,1.49.31,1.22.35,2.41.78,3.47,1.5.2.14.36.18.6.15.94-.12,1.87-.09,2.77.27.07.03.16.04.22,0,.44-.2.87-.4,1.3-.61.07-.03.14-.09.17-.15.23-.43.6-.69,1.02-.9.42-.22.86-.41,1.3-.62-.16-.41.04-.67.37-.83.75-.36,1.52-.7,2.28-1.04.09-.04.2-.06.26-.13.26-.29.5-.59.77-.9-.22-.2-.46-.41-.71-.65.49-.69,1.23-1.01,1.99-1.38-.11-.07-.19-.13-.27-.18-.85-.53-1.61-1.15-2.24-1.92-1.15-1.43-1.91-3.02-1.83-4.91.02-.5.16-.99.24-1.5-.12,0-.27.01-.49.02.18-.37.32-.69.49-1.03-.73.3-1.46.4-2.23.3.09-.4.16-.76.25-1.16Zm-22.39,47.19c-.19-.26-.35-.48-.51-.7-2.26-3.02-4.52-6.04-6.8-9.05-.58-.76-1.03-1.57-1.14-2.53-.07-.61-.1-1.23-.15-1.85-.05-.64-.01-1.29-.16-1.91-.41-1.73-1.6-2.8-3.17-3.49-.08-.04-.22.01-.32.06-.69.36-1.36.76-2.06,1.08-1.11.52-2.31.74-3.49,1.02-.71.17-1.3.48-1.8,1.04-1.1,1.23-2.43,2.13-4.04,2.56-.81.22-1.62.4-2.44.58-.38.08-.69.24-.92.55-.3.41-.62.81-.89,1.24-.65,1.03-1.16,2.12-1.32,3.34-.07.54-.05.57.48.76,1.15.42,2.11,1.08,2.66,2.23.12.25.28.38.53.47.94.34,1.51,1.02,1.69,2,.13.75-.08,1.46-.34,2.16-.05.14-.11.27-.17.43h24.37Zm50.15-2.2c-1.12.4-1.93.06-2.45-1.08-.12-.27-.2-.56-.28-.85-.06-.2-.05-.43-.15-.6-.42-.72-.6-1.5-.68-2.31-.15-1.46-.61-2.79-1.4-4.03-1.52-2.4-3.27-4.63-5.3-6.63-.63-.62-1.31-1.19-1.98-1.79-.08.1-.11.14-.15.19-.87,1.02-1.69,2.08-2.61,3.04-2.24,2.33-4.75,4.36-7.24,6.4-.97.8-1.93,1.61-2.89,2.42-.14.12-.25.26-.41.44.13,0,.18.01.23.01,1.58.05,2.77.96,3.18,2.5.09.32.23.44.53.52.6.16,1.1.48,1.22,1.17.01.07.07.14.12.2.39.5.53,1.07.42,1.69-.06.3-.14.59-.21.89h22.11c-.68-.74-1.35-1.45-2.04-2.2Zm-33.67,2.21s0-.07,0-.09c-.28-.79-.32-1.58.02-2.37.03-.07,0-.2-.04-.28-.33-.58-.43-1.2-.32-1.85.09-.53.02-1.02-.22-1.51-.5-1.01-.5-2.05-.2-3.12.38-1.37,1.18-2.5,2.03-3.6.71-.93,1.51-1.8,2.11-2.79,1.26-2.1,2.42-4.25,3.59-6.32-6.74,2.01-13.52,1.36-20.27-.49.08.87-.14,1.68-.56,2.45-.05.09-.06.21-.07.32-.15,1.62-.47,3.21-1.02,4.75-.09.24-.11.53-.08.78.14,1.13.42,2.23.81,3.3.49,1.35,1.11,2.63,2.03,3.74.12.14.22.16.4.15.55-.05,1.12-.13,1.66-.07,1.3.14,2.28.79,2.82,2.03.05.11.16.22.28.28.75.38,1.41.87,1.93,1.54.64.84.82,1.73.28,2.7-.07.12-.09.26-.15.43h4.99Zm-40.42-36.06c-.12.11-.18.15-.23.21-.62.76-1.09,1.6-1.26,2.58-.14.78-.24,1.58-.29,2.37-.12,1.72.01,3.45-.3,5.17-.27,1.44-.72,2.8-1.68,3.94-.77.91-1.78,1.46-2.84,1.93-.72.32-1.44.64-2.14,1-1.17.6-1.96,1.53-2.21,2.85-.13.67-.28,1.35-.34,2.03-.09,1.05-.08,2.11-.18,3.17-.15,1.72-.37,3.43-.52,5.15-.1,1.12-.19,2.25.03,3.37.15.81.42,1.57,1.09,2.1.14.11.34.18.51.18,1.26.01,2.52,0,3.77,0,.1,0,.19,0,.26-.01-.21-.47-.46-.92-.62-1.39-.23-.63-.65-1.01-1.28-1.19-.42-.12-.85-.23-1.27-.33-.68-.16-1.06-.59-1.2-1.26-.18-.88-.21-1.76-.11-2.65.01-.13.12-.25.19-.37l.09.04c0,.11,0,.21,0,.32.04.67.05,1.34.14,1.99.1.68.52,1.1,1.2,1.25.27.06.54.13.82.18,1,.19,1.83.61,2.34,1.54.12.21.3.38.4.5.39-.13.7-.24,1.01-.35.06-.02.15-.03.18-.08.28-.43.65-.72,1.16-.8-.04-.43-.3-.66-.6-.88-.12-.08-.24-.19-.3-.31-.23-.5-.59-.87-1.07-1.13-.26-.14-.55-.26-.79-.43-.22-.15-.39-.36-.58-.55-.03-.04-.02-.12-.02-.18.07.01.15.01.2.04.3.18.59.37.89.54.26.15.54.26.81.39.46.24.87.53,1.08,1.03.03.07.12.13.19.18.4.28.67.64.76,1.14.02.14.13.26.16.34.53-.14,1-.27,1.47-.39,0,0,0-.02,0-.03-.14-.49-.48-.76-.95-.91-.34-.11-.66-.24-.81-.6-.21-.49-.56-.89-1-1.16-.51-.31-1.05-.57-1.58-.83-.73-.36-.98-.81-.88-1.62.13-1.01.4-1.98.9-2.86.56-1,1.13-2,1.77-2.95.54-.82.85-1.69.98-2.66.18-1.41.58-2.77,1.38-3.98.82-1.25,1.94-2.01,3.48-2.05,1.8-.06,3.11,1.12,3.17,2.89.01.43-.07.87-.11,1.31,1.81-.52,3.72-.76,5.3-1.87-6.08-3.6-9.61-8.86-10.55-15.91Zm56.4.66c-.4,1.15-.63,2.33-.45,3.57.33,2.25,1.29,4.16,3.06,5.62.84.69,1.78,1.23,2.92,1.1.67-.07,1.36-.23,1.99-.5,2-.85,4.04-1.19,6.22-1.02,1.54.13,2.74-.58,3.5-1.96.49-.9.7-1.88.63-2.89-.15-2.37-1.16-4.33-2.93-5.89-.73-.65-1.59-1.03-2.6-.96-.73.05-1.45.18-2.11.5-.96.46-1.91.95-2.85,1.44-1.55.81-3.18,1.28-4.94,1.16-.79-.06-1.59-.12-2.42-.19Zm-4.29,13.19c-.76,0-1.47.02-2.18,0-.48-.02-.82.14-1.06.56-.77,1.32-1.58,2.61-2.3,3.95-.95,1.76-2.01,3.44-3.29,4.99-.62.75-1.19,1.55-1.74,2.36-.54.8-.85,1.69-.85,2.67,0,.33.05.65.24,1.01.03-.11.04-.15.05-.19.11-.48.44-.79.87-.81.44-.02.79.21.91.58.15.48,0,.93-.43,1.19-.14.08-.3.13-.42.23-.17.15-.37.32-.44.53-.25.72-.18,1.44.17,2.11.08.16.09.27.03.44-.26.8-.27,1.59.21,2.33.12.19.27.28.52.28,1.26-.01,2.52,0,3.77,0h.29q.05-1.41.43-2.15c-.66-.92-.52-1.97.29-2.23-.34.79-.2,1.5.33,2.15.04.05.02.2-.01.28-.25.57-.25,1.14.02,1.71.08.17.19.25.39.25.5-.02,1,.01,1.5-.02.14,0,.33-.1.41-.22.28-.37.3-.81.22-1.26-.02-.13-.11-.27.08-.39.28-.18.32-.43.09-.68-.2-.21-.45-.36-.67-.55-.1-.09-.2-.21-.24-.34-.15-.58-.38-1.09-1.07-1.26.43-.2.82-.16,1.11.14.26.28.43.64.64.96.06.09.12.2.22.25.4.22.7.52.91.92.04.07.1.15.17.18.22.1.46.18.71.28.2-.16.42-.33.7-.56-.26-.17-.46-.41-.69-.44-.72-.11-.96-.51-1.1-1.2-.23-1.16-1.55-1.94-2.83-1.78-.4.05-.79.16-1.2.25-.1-.67.12-1.25.53-1.75.42-.5.88-.99,1.38-1.41,1.99-1.71,4.04-3.36,6.01-5.09,2.03-1.78,3.94-3.68,5.61-5.81.15-.18.28-.38.43-.58-.18-.15-.33-.27-.47-.38-3.44,3.55-7.16,6.72-11.15,9.63-.53-1.52-.55-2.96.06-4.39.68-1.61,1.35-3.21,2.03-4.82.26-.63.52-1.27.79-1.93Zm8.37-.28s0,.06,0,.09c.06.06.13.12.19.17,3.6,2.89,6.62,6.29,9.14,10.15.91,1.4,1.57,2.88,1.78,4.55.07.59.14,1.2.35,1.75.2.54.49,1.04.48,1.63,0,.07.03.14.05.2.18.52.54.79,1.07.79.51,0,.91-.28,1.06-.8.08-.3.09-.62.15-1.05.03.09.03.14.05.17.31.54.31,1.12.27,1.71,0,.13.02.31.1.39.38.37.78.72,1.17,1.07.57.52,1.15,1.04,1.72,1.57.04.04.1.09.15.09.67,0,1.35,0,2.07,0-.18-.81-.88-1.12-1.43-1.65.16,0,.26-.04.33,0,.22.09.43.2.64.32.59.33,1.2.64,1.58,1.25.03.04.09.09.14.09.51,0,1.03,0,1.64,0-.22-.29-.37-.52-.54-.73-.31-.38-.3-.54.12-.82.16-.11.35-.19.54-.23.24-.05.49-.05.75-.08-.01-.38-.18-.68-.47-.89-.35-.25-.72-.47-1.1-.65-.66-.3-1.35-.54-2.01-.84-1.18-.53-2.06-1.4-2.64-2.55-.14-.29-.19-.62-.28-.94.04-.02.09-.04.13-.06.14.17.29.33.42.51.88,1.22,2.03,2.03,3.45,2.51.58.19,1.14.42,1.69.68.5.23.96.55,1.28,1.01.37.52.55,1.07.33,1.72-.16.44-.28.9-.41,1.35h1.2c-.12-.28-.21-.52-.33-.74-.24-.47-.23-.59.18-.95.09-.08.2-.15.31-.24-.07-.09-.13-.16-.18-.25-.4-.67-.81-1.35-1.2-2.03-.05-.09-.02-.22-.02-.36.51.58.98,1.12,1.45,1.65.22.25.46.47.68.72.5.57.62,1.21.35,1.92-.03.09-.06.18-.09.28h1.27c-.03-.47-.22-.84-.57-1.09-.23-.17-.22-.32-.14-.53.05-.13.11-.26.19-.37.18-.28.17-.53-.05-.77-.09-.1-.2-.19-.32-.27-.75-.48-1.38-1.08-1.89-1.81-.25-.36-.61-.61-1.04-.63-.58-.02-1.19-.04-1.75.08-.77.16-1.35-.05-1.82-.64-.02-.03-.05-.06-.08-.09-1.25-1.39-2.19-2.98-2.76-4.75-.48-1.5-.83-3.04-1.21-4.56-.71-2.87-1.49-5.71-2.88-8.35-.08-.16-.04-.24.08-.35,1.43-1.33,2.58-2.88,3.53-4.58.04-.07.07-.15.13-.29-.52.2-.65-.15-.8-.54-.75,3.09-2.52,5.02-5.72,5.48.06.06.09.11.13.15.45.52.95,1.01,1.34,1.56.93,1.3,1.51,2.78,2.07,4.27,1.13,3.03,2.16,6.11,3.51,9.06.03.06.02.14.02.22-.08,0-.17,0-.25-.02-1.12-.48-1.99-1.28-2.76-2.2-1.21-1.45-2.11-3.09-2.97-4.76-.6-1.16-1.18-2.33-1.8-3.48-.17-.31-.41-.59-.63-.86-.12-.15-.33-.28-.49-.12-.11.11-.15.34-.12.5.03.2.16.39.27.56.65,1.02,1.33,2.01,1.94,3.05,1.34,2.29,2.09,4.76,1.95,7.45-.01.22-.04.43-.06.65-.11-.07-.14-.14-.17-.21-.27-.63-.5-1.28-.82-1.89-.83-1.58-1.95-2.96-3.05-4.36-.95-1.21-1.92-2.4-2.67-3.75-.57-1.01-.99-2.07-1.04-3.25-.03-.7.09-1.36.39-2.08-1.7.81-3.36,1.52-5.26,1.12Zm-48.48,1.55c.86.02,1.42-.13,1.73-.74.32-.62.23-1.22-.2-1.76-.14-.18-.28-.37-.45-.52-.77-.71-1.54-1.42-2.32-2.13-1.43-1.3-2.61-2.78-3.38-4.56-.81-1.86-1.19-3.82-1.44-5.81-.13-1.08-.47-2.06-1.29-2.82-.61-.57-1.32-.93-2.19-.84-.57.06-.84.33-.88.9-.05.77-.19,1.52-.6,2.2-.05.08-.05.19-.05.29.07.75.1,1.52.23,2.26.52,2.83,1.7,5.39,3.36,7.73,1.28,1.81,2.76,3.44,4.62,4.68.93.62,1.92,1.1,2.84,1.13Zm64.96-42.72c-.13.97-.16,1.91-.39,2.79-.34,1.29-.77,2.56-1.24,3.8-1.03,2.72-1.33,5.47-.61,8.31.48,1.89,1.31,3.61,2.63,5.08.3.34.64.45,1.07.35.63-.15,1.25-.11,1.86.1.18.06.36.11.55.15.5.12,1.01.16,1.51.02.35-.1.55-.33.61-.7.04-.26-.03-.38-.31-.45-.85-.24-1.71-.49-2.54-.78-.79-.27-1.27-.85-1.42-1.67-.1-.55-.19-1.1-.28-1.65-.18-1.14.18-2.08,1.03-2.85.26-.23.51-.47.76-.72.18-.18.37-.21.6-.14.21.06.42.11.62.17.6-1,1.48-1.29,2.47-.79.35.18.67.43,1.01.64.3.19.61.38.93.54.16.08.37.09.55.12-.89-1.18-2-1.98-3.44-2.22.18-.68.76-1.08,1.46-1.02.73.06,1.33.4,1.89.83.39.3.75.65,1.14.97.07.06.21.04.31.06,0-.12.03-.26-.02-.36-.06-.13-.19-.23-.29-.34-.79-.81-1.66-1.49-2.79-1.77-.15-.04-.3-.06-.45-.09-.02-.03-.03-.06-.05-.1.26-.22.49-.49.78-.66.34-.21.72-.38,1.09-.53.72-.29,1.4-.09,2.03.28.22.13.35.11.53-.08-.17-.14-.34-.28-.51-.41-.42-.33-.88-.45-1.4-.3-.53.15-1.05.31-1.59.42-.45.09-.81.27-1.08.65-.16.23-.38.41-.58.6-1.03.96-2.16,1.75-3.58,2-.89.16-1.74.05-2.47-.53-.67-.54-.81-1.41-.37-2.15.1-.16.16-.36.2-.55.1-.59.4-1.05.98-1.2.4-.11.84-.09,1.27-.1.25,0,.5.05.76.09-.05-.25-.1-.45-.15-.66-.11.03-.23.06-.34.09-.86.16-1.69.11-2.33-.58-.55-.59-.62-1.31-.29-2.03.34-.75.99-1.03,1.78-1.03,1.03,0,1.91.44,2.76.96.19.11.37.23.57.33.26.13.44.06.59-.22.2-.39.2-.4-.11-.59-1.1-.69-2.27-1.24-3.52-1.64-.72-.23-1.46-.4-2.17-.44Zm-22.19,27.84c-.03.06-.05.09-.06.13-.53,1.6-.68,3.21-.3,4.87.57,2.53,1.8,4.66,3.91,6.22,1.28.94,2.71,1.45,4.3,1.13.88-.18,1.75-.47,2.59-.8,1.49-.59,3.01-.78,4.6-.65,1.84.15,3.43-.42,4.65-1.86,1.04-1.23,1.49-2.68,1.51-4.26.03-2.77-1.07-5.1-2.97-7.07-1.89-1.96-4.17-2.45-6.79-1.32-1.06.46-2.05,1.07-3.1,1.55-.74.34-1.5.74-2.28.85-2.63.38-5.18.03-7.54-1.26-1.68-.93-2.87-2.3-3.39-4.19-.49-1.78.28-3.44,1.92-4.12.78-.33,1.6-.43,2.43-.36,1.15.1,2.15.59,3.09,1.2,1.92,1.24,3.5,2.86,4.99,4.59.54.63,1.05,1.28,1.59,1.94.25-.14.5-.27.8-.43-.77-.92-1.5-1.83-2.26-2.69-1.42-1.59-2.95-3.07-4.77-4.2-1.47-.92-3.03-1.46-4.82-1.22-2.96.39-4.65,2.95-3.75,5.79.75,2.35,2.37,3.9,4.58,4.89,1.44.65,2.96.93,4.52,1.07,1.76.16,3.44-.12,5.01-.97.53-.28,1.04-.59,1.59-.84.78-.36,1.57-.75,2.39-1.02,1.98-.64,3.72-.17,5.16,1.34.37.39.73.8,1.03,1.24,1.29,1.92,2,3.99,1.57,6.33-.43,2.35-2.06,4.4-5.16,4.17-.93-.07-1.85-.06-2.78.09-1.08.18-2.09.6-3.09,1.01-2.03.82-3.86.48-5.52-.93-1.04-.89-1.85-1.96-2.41-3.2-.79-1.75-1.17-3.56-.74-5.47.1-.44.23-.88.34-1.33-.24-.06-.45-.11-.66-.16-.05-.01-.1-.01-.17-.02Zm8.35-3.07c-.04-.06-.07-.1-.09-.14-1.1-1.45-2.3-2.81-3.63-4.06-1.01-.95-2.09-1.83-3.33-2.47-1.03-.53-2.09-.73-3.24-.5-1.76.35-2.64,1.79-2.1,3.51.55,1.74,1.74,2.92,3.33,3.73,1.45.73,3.02.98,4.62,1.09,1.61.12,3.05-.33,4.44-1.17Zm9.02-19c-.75-.14-1.31-.58-1.76-1.16-.21-.27-.39-.58-.58-.87-.18-.27-.37-.54-.54-.82-.03-.05,0-.21.06-.25.49-.34.99-.67,1.5-.99.29-.19.59-.38.91-.52.96-.42,1.89-.35,2.75.27.21.15.36.38.54.57-.22.18-.37.19-.57.1-.47-.23-.98-.35-1.51-.31-.67.05-1.26.3-1.75.67.39.43.77.83,1.11,1.25.38.47.85.71,1.44.73.07,0,.16-.01.22-.06.21-.17.42-.36.63-.55-.23-.56-.14-.88.39-1.19.24-.14.5-.25.77-.33.19-.06.28-.16.29-.35.04-.48.11-.95.13-1.43.03-.72-.12-.93-.8-1.2-.14-.05-.28-.1-.43-.13-1.47-.31-2.92-.21-4.35.21-2.5.75-4.7,2.06-6.76,3.64-.33.25-.64.52-1.03.84.62.04,1.14.07,1.68.1-.11.72-.22,1.42-.33,2.11.04.02.07.04.11.05.66-.37,1.32-.74,2.02-1.14-.04.16-.07.25-.09.35-.15.71-.32,1.42-.44,2.14-.06.32.08.41.35.25.4-.23.77-.49,1.15-.75.15-.1.28-.22.46-.37-.11.69-.21,1.32-.3,1.95.04.02.07.05.11.07.54-.33,1.08-.66,1.66-1.02-.08.57-.15,1.08-.23,1.68.29-.22.52-.38.73-.55.73-.59,1.45-1.19,2.17-1.79.05-.05.1-.12.12-.19.07-.33.12-.66.19-1.03Zm-12.4,36.61c-.29-.28-.58-.51-.82-.78-.27-.3-.54-.4-.96-.33-1.53.24-3.08.21-4.63.18-.21,0-.31.07-.39.26-.29.75-.61,1.5-.92,2.24-.67,1.61-1.36,3.21-2.01,4.83-.3.74-.39,1.51-.26,2.37,3.49-2.78,6.9-5.57,9.99-8.77Zm12.36,9.47s.03,0,.05,0c-.01-.07-.02-.13-.04-.2-.36-1.3-.85-2.56-1.56-3.71-.61-.98-1.28-1.93-1.91-2.9-.3-.45-.53-.94-.53-1.5,0-.7.5-1.13,1.19-1.02.63.1,1.1.46,1.4.98.45.76.87,1.55,1.25,2.35.86,1.84,1.73,3.67,2.94,5.3.52.7,1.08,1.37,1.62,2.06.02-.02.05-.03.07-.05-.03-.08-.05-.16-.08-.25-.42-1.08-.83-2.16-1.25-3.24-.83-2.15-1.65-4.3-2.75-6.33-.61-1.11-1.28-2.17-2.24-3.01-.65-.56-1.38-.89-2.27-.8-.79.08-1.37.51-1.6,1.27-.18.62-.17,1.24-.03,1.87.26,1.2.81,2.28,1.5,3.27,1.39,1.99,2.82,3.94,4.24,5.91Zm-73.58-2.63c2.21-.36,4.08-1.32,5.4-3.19.46-.65.59-1.38.48-2.17-.15-1.01-.75-1.62-1.74-1.77-.95-.14-1.75.15-2.44.79-.57.52-.96,1.17-1.27,1.87-.54,1.2-.83,2.47-1.04,3.76-.09.56.04.71.62.7Zm25.87-1.01c.02-.05.06-.13.08-.21.24-.94.5-1.89.71-2.84.11-.49.24-1.04.13-1.5-.32-1.28-1.13-2.2-2.41-2.62-.27-.09-.59-.11-.88-.08-1.02.12-1.74,1.04-1.71,2.15.04,1.42.73,2.5,1.8,3.37.74.6,1.52,1.16,2.28,1.74Zm62.02-43.37c-.37-.3-.7-.59-1.05-.83-.34-.24-.67-.44-1.15-.31-.28.08-.62-.1-.94-.11-1.11-.03-2.1-.41-3.03-.99-.11-.07-.23-.12-.35-.16-.2-.07-.39-.17-.59-.19-.28-.03-.59-.06-.86.01-.64.16-.97.78-.83,1.48.11.59.66,1,1.32.89.53-.08,1.04-.26,1.55-.43.99-.34,1.9-.29,2.69.48.29.28.63.49,1.08.43-.26.58-.76.36-1.19.34-.01.09-.02.16-.03.23-.01.07-.02.13-.04.23,1.24.02,2.31-.42,3.42-1.06Zm3.19,1.99c-.57-.73-1.19-1.28-2.03-1.5-.18-.05-.42,0-.6.09-.89.4-1.81.74-2.78.91-.72.12-1.46.08-2.18.32-.56.18-1.1-.04-1.64-.2-.53-.16-1.06-.27-1.62-.21-.57.06-.92.33-.98.8-.08.58.19,1.03.76,1.19.32.09.68.14,1,.07.53-.11,1.04-.32,1.56-.51.88-.32,1.74-.69,2.63-.96.82-.25,1.69-.33,2.5-.59,1.02-.32,1.81-.04,2.51.69.05.05.09.11.15.14.05.03.13.05.18.03.16-.07.32-.15.53-.26Zm-26.44,6.24c.62-.25,1.23-.5,1.69-.99.15-.16.25-.38.3-.6.2-.86.36-1.73.54-2.6.02-.08.04-.16.07-.27-.07.03-.11.03-.13.05-.56.67-1.22,1.23-1.95,1.71-.07.04-.12.16-.12.25-.04.62-.2,1.2-.47,1.75-.11.23-.08.46.07.7Zm14.25-5.06c-.17.5-.03.93.41,1.28.57.46,1.23.55,1.92.39,1.15-.26,2.14-.85,3.05-1.59.27-.22.51-.48.77-.72-.02-.03-.04-.06-.06-.09-.35.14-.7.27-1.04.43-.68.31-1.34.66-2.03.95-.51.21-1.04.33-1.61.23-.57-.1-1.03-.4-1.41-.88Zm-16.36,3.08c.8-.07,1.6-.63,1.93-1.34.32-.7.39-1.43.31-2.2-.1.01-.13,0-.16.02-.48.25-.95.49-1.43.75-.05.03-.09.1-.1.16-.17.78-.33,1.55-.5,2.33-.02.08-.03.17-.06.28Zm-2.7-1.57c-.62.16-1.19.31-1.76.48-.16.05-.35.16-.41.29-.26.58-.48,1.18-.7,1.77-.1.25.04.29.24.22.33-.11.65-.25.98-.36,1.12-.39,1.46-1.32,1.66-2.39Zm22.73,2.77c-.31-.16-.54-.18-.77.12-.23.31-.52.58-.78.87-.36.41-.59.9-.53,1.45.09.76.22,1.52.36,2.27.07.37.29.68.62.88.65.41,1.4.59,2.13.81-.45-.32-.91-.61-1.36-.92-.56-.38-.88-.91-.99-1.57-.05-.3-.08-.61-.14-.91-.11-.58,0-1.11.36-1.58.16-.22.32-.43.49-.64.2-.26.41-.51.62-.77Zm-13.72,6.14c.65-.07,1.41-.89,2.12-2.29-.56-.2-.65-.31-.57-.76.03-.18.12-.36.2-.53.07-.15.16-.29.25-.44-.18-.12-.27-.07-.38.08-.33.45-.64.93-1.04,1.31-.36.35-.52.7-.51,1.19.01.47-.04.95-.07,1.43Zm-9.33-6.58c.07.03.1.04.12.05.04,0,.08.01.12,0,.71-.09,1.33-.38,1.87-.85.06-.06.12-.14.15-.22.2-.71.39-1.42.59-2.13,0,0-.02-.03-.02-.02-.53.25-1.05.49-1.56.75-.08.04-.15.13-.18.21-.25.78-.53,1.54-1.09,2.21Zm-12.03,24.12c-.65-.14-1.27-.27-1.9-.39-.1-.02-.23-.02-.32.02-.55.26-1.09.53-1.63.8-.07.04-.13.11-.24.21.78.32,1.54.49,2.31.46.69-.03,1.27-.46,1.87-.76-.04-.14-.07-.25-.1-.34Zm4.24-3.11c-.07-.06-.16-.21-.28-.24-.63-.13-1.27-.22-1.91-.32-.06,0-.12-.02-.17,0-.59.26-1.18.52-1.76.8-.11.05-.19.18-.28.27,0,.04.02.08.02.12.58.09,1.15.19,1.73.26.24.03.51.03.73-.05.64-.25,1.25-.55,1.92-.85Zm24.75-14.25c-.1.12-.2.19-.25.29-.22.39-.43.78-.63,1.19-.06.13-.06.3-.09.45.15,0,.31.02.46,0,.42-.05.83-.12,1.3-.19-.06.17-.11.26-.13.36-.1.47-.22.93-.28,1.4-.04.32.14.43.39.25.36-.26.68-.57,1.02-.85-.58-.95-1.13-1.83-1.67-2.71-.03-.04-.05-.08-.12-.18Zm-8.12-1.94s-.09-.06-.13-.1c-.35.39-.71.78-1.06,1.17-.06.07-.12.16-.14.25-.15.73-.28,1.46-.43,2.19-.04.21.01.3.22.23.64-.2,1.15-.58,1.35-1.24.24-.82.21-1.67.19-2.51Zm-7.04-.08s.08.05.12.07c.15-.05.31-.06.44-.14.29-.18.59-.38.85-.6.14-.12.24-.3.33-.47.24-.47.42-.97.7-1.41.18-.29.1-.52.06-.75-.53.37-1.03.77-1.59,1.07-.34.19-.54.41-.61.77-.1.49-.2.98-.3,1.47Zm-7.52,14.68c-.62-.26-1.17-.49-1.73-.71-.05-.02-.12-.04-.17-.02-.71.28-1.43.55-2.13.85-.18.07-.17.22.02.3.17.07.35.14.54.18.82.18,1.62.37,2.41-.18.28-.2.66-.26,1.07-.41Zm9.35-26.53s-.02,0-.04.02c-.56.55-1.13,1.1-1.69,1.65-.05.05-.07.14-.08.21-.1.67-.2,1.35-.3,2.08.39-.26.79-.49,1.15-.78.17-.14.32-.38.37-.59.22-.86.4-1.74.58-2.58Zm-22.01,30.13s.04.07.07.09c.68.26,1.36.52,2.04.77.05.02.12,0,.17-.02.44-.21.88-.42,1.3-.62,0-.17-.02-.34-.02-.5-1.02-.51-2.99-.36-3.56.29Zm27.35-23.5c-.29.18-.61.42-.97.59-.4.19-.6.55-.74.88-.17.39-.18.85-.21,1.29-.03.42.18.56.49.3.45-.37.84-.81,1.25-1.22.04-.04.06-.13.06-.19.04-.56.08-1.12.11-1.64Zm5.52,2.45c-.37-.15-.73-.29-1.08-.43-.07-.03-.18-.04-.23,0-.65.52-1.23,1.1-1.62,1.85-.1.19-.06.29.17.31.53.04,1.05-.02,1.55-.22.08-.03.17-.09.2-.16.22-.55.57-.99,1.02-1.36Zm-18.74,22.44c-.17-.02-.31-.03-.45-.05-.34-.04-.73-.01-1.03-.15-.61-.29-1.09-.04-1.59.23-.19.1-.38.22-.56.33-.12.08-.23.18-.42.32.29.09.5.21.71.22.71.03,1.43.01,2.14,0,.08,0,.18-.03.25-.09.31-.26.61-.53.95-.82Zm-5.03.82c-.64-.12-1.21-.24-1.78-.33-.12-.02-.27.01-.39.07-.47.21-.93.45-1.4.67-.18.08-.36.14-.6.23.11.08.16.14.23.16.59.13,1.18.26,1.77.37.09.02.2-.02.28-.07.45-.24.89-.49,1.33-.75.18-.1.35-.22.56-.35Zm-1.23,1.63c.77.22,1.49.28,2.22.29.36,0,.67-.08.92-.37.18-.21.43-.35.65-.52.1-.07.19-.15.24-.19-.7-.11-1.4-.22-2.1-.33-.06,0-.13-.01-.17.02-.56.35-1.13.7-1.76,1.1Zm19.39-30.55c-.51.32-.53.33-.62.71-.15.64-.28,1.29-.4,1.93-.03.15,0,.32,0,.55.2-.11.32-.17.42-.24.57-.41,1.11-.85,1.7-1.23.38-.25.39-.6.45-.98-.44.19-.83.38-1.24.54-.39.15-.49.06-.43-.36.04-.29.08-.59.13-.93Zm-20.03,27.77c.14.07.21.13.29.15.65.12,1.31.24,1.97.34.07.01.15-.03.22-.07.5-.27,1-.54,1.49-.81.07-.04.11-.12.16-.17-.07-.03-.15-.08-.22-.08-.55-.04-1.12.03-1.63-.12-.68-.19-1.21.02-1.74.38-.05.03-.11.06-.15.09-.12.08-.23.17-.39.29Zm1.89-1.64c0,.06.01.11.02.17.46.08.93.17,1.39.24.98.16,1.85-.1,2.57-.73-.58-.2-1.18-.41-1.78-.62-.05-.02-.12-.02-.17,0-.42.17-.84.34-1.26.52-.27.12-.52.27-.77.41Zm13.05-26.77c.6-.17,1.1-.42,1.46-.83.17-.2.14-.58.21-.87.09-.4.17-.81.27-1.26-.29.02-.55.02-.8.07-.14.03-.33.12-.39.24-.41.82-.61,1.69-.74,2.65Zm8.8,2.73c-.25-.04-.54-.04-.78-.14-.54-.23-.98-.05-1.4.26-.02.01-.03.02-.05.03-.62.4-.94,1.23-.74,1.95.2-.15.39-.34.62-.45.23-.12.5-.18.75-.27.05-.02.11-.05.15-.09.48-.43.96-.85,1.45-1.29Zm-3.38,5.35c.54-.25,1.37-1.37,2.01-2.69-.21-.17-.41-.33-.61-.5-1.32.8-1.68,1.86-1.4,3.19Zm-7.18-3.63c-.44.17-.91.34-1.38.53-.1.04-.24.11-.27.19-.2.55-.39,1.11-.57,1.67-.06.2.06.33.26.26.42-.15.84-.31,1.24-.49.08-.04.15-.16.18-.25.19-.65.37-1.3.54-1.9Zm-20.16,25.78s.02.08.02.12c.51.28,1.05.45,1.62.57.44.09.85.11,1.25-.17.21-.14.48-.2.71-.32.11-.05.18-.16.27-.23-.81-.22-1.56-.42-2.3-.62-.05-.01-.11-.03-.14-.01-.47.22-.95.44-1.42.66Zm33.08-21.38c-.34-.08-.67-.17-1.01-.23-.07-.01-.18.03-.24.07-.6.46-.97,1.07-1.14,1.8-.06.24.04.33.26.27.36-.09.71-.18,1.06-.3.53-.19,1.08-1.04,1.07-1.61Zm-25.03,18.08c-.82-.16-1.57-.31-2.32-.46-.09-.02-.2-.02-.28.02-.35.15-.69.31-1.03.48-.12.06-.21.16-.32.24.12.08.22.22.35.24.66.12,1.33.21,2,.31.06,0,.14-.02.2-.05.41-.19.81-.37,1.21-.57.08-.04.13-.14.18-.2Zm18.63-19.97c-.43.39-.89.73-1.5.8-.05,0-.11.11-.12.17-.09.52-.19,1.04-.25,1.56-.02.13.07.27.11.4.13-.05.3-.06.39-.15.45-.41.88-.84,1.31-1.27.06-.06.11-.17.11-.25,0-.42-.04-.83-.06-1.26Zm-2.04-1.24c-.51.22-1.03.44-1.55.67-.06.03-.12.1-.15.17-.19.46-.4.91-.56,1.38-.13.37-.06.42.32.34,1.18-.26,1.89-1.22,1.94-2.56Zm-4.27.55c1.01-.02,2.6-1.81,2.51-2.79-.19.12-.37.24-.56.34-.19.1-.39.25-.6.26-.79.04-1.01.57-1.13,1.22-.04.19-.1.38-.15.58-.03.12-.04.25-.07.4Zm9.75,3.86c-.47-.07-.89-.08-1.1.46-.04.1-.13.18-.2.26-.5.53-.45,1.18-.36,1.83.04.27.18.32.4.15.24-.18.44-.4.64-.62.54-.59.48-1.36.62-2.07Zm2.43-6.44c-.35-.17-.68-.34-1.01-.49-.08-.04-.22-.04-.3,0-.59.32-1.09.76-1.5,1.31-.15.2-.1.3.16.33.34.03.68.05,1.01.05.32,0,.64-.08.87-.33.26-.28.51-.58.76-.87Zm-36.67,22.9c-.41-.35-.86-.65-1.22-1.04-.5-.53-1.12-.55-1.76-.54-.32,0-.39.16-.15.38.51.47,1.05.91,1.58,1.35.06.05.17.08.25.07.43-.06.86-.14,1.29-.22Zm36.22-15.44c-.44.09-.87.17-1.29.27-.08.02-.16.11-.21.18-.44.6-.51,1.3-.5,2.02,0,.11.06.22.09.32.09-.05.19-.09.28-.15.94-.63,1.24-1.66,1.64-2.65Zm18.93-9.67c-.17-.65-.5-1.08-.94-1.43-.03-.03-.11-.02-.16,0-.29.1-.58.2-.86.33-.13.06-.23.18-.34.28.11.12.2.32.33.36.56.18.89.5.9,1.11,0,.21.37.37.5.22.23-.29.41-.61.58-.87Zm-26.12,9.28c-.52-.17-.91.05-1.3.33-.18.13-.4.22-.6.34-.07.04-.14.12-.15.18-.04.35-.06.69-.08,1.04-.01.25.12.34.36.22.32-.17.62-.37.94-.52.7-.33.76-.97.83-1.59Zm17.25-6.26c.24.07.45.14.67.2,1.07.3,2.15.6,3.22.9.14.04.28.06.29-.13,0-.09-.1-.25-.17-.27-.66-.13-1.21-.5-1.77-.85-.25-.16-.51-.31-.78-.44-.47-.23-1.36.03-1.46.58Zm-3.48,13.78c-.4.4-.78.78-1.15,1.17-.06.06-.08.18-.07.27.08.61.36,1.13.69,1.63.04.05.25.07.26.05.18-.41.46-.83.48-1.25.03-.62-.13-1.26-.21-1.86Zm-25.19,5.78c-.83.2-1.61.44-2.36,1.02.9.41,1.7.8,2.65.81-.1-.62-.19-1.2-.29-1.83Zm1.84-21.07c-.59.5-1.24,1.04-1.88,1.59-.05.04-.11.1-.12.16-.09.43-.16.86-.25,1.32.58-.2,1.14-.45,1.6-.88.05-.05.09-.11.11-.18.19-.7.37-1.4.53-2.02Zm-19.45,25.77c-.67-.28-1.27-.68-1.74-1.26-.05-.06-.14-.12-.22-.12-.35-.03-.7-.05-1.05-.05-.15,0-.3.05-.45.07,0,.03,0,.06-.01.09.98.9,2.1,1.52,3.39,1.78.03-.19.05-.33.07-.5Zm18.79,2.21c-.43-.16-.83-.31-1.22-.47-.42-.17-.78-.12-1.13.18-.3.26-.63.5-.95.74.01.03.02.06.04.08.1.02.2.06.31.06.58.02,1.16.02,1.73.06.53.04.89-.2,1.22-.66Zm-1.07-9.1c-.9-.2-2.02-.09-2.35.66.72.33,1.38.82,2.2.93.05-.54.1-1.05.15-1.58Zm.46-1.74c-.55-.44-1.08-.42-1.63-.09-.24.15-.5.25-.74.38-.11.06-.2.15-.34.25.24.18.44.43.65.45.58.06,1.16.02,1.77.02.09-.33.19-.69.29-1.02Zm3.73-14.98c-.32-.46-.68-.35-1.05-.11-.11.07-.24.09-.35.16-.09.06-.2.15-.22.25-.09.47-.17.94-.23,1.41-.03.23.11.26.28.17.33-.18.66-.36.99-.55.05-.03.09-.08.11-.13.17-.4.33-.81.48-1.19Zm6.59,2.91c-.28.19-.51.42-.8.52-.56.2-.76.62-.87,1.14-.06.25-.11.51-.15.76-.01.1.03.2.05.3.1-.02.22-.01.3-.07.34-.23.66-.47.99-.72.06-.05.12-.14.13-.22.12-.56.22-1.13.33-1.72Zm8.92,5.3s-.07,0-.1-.01c-.32.2-.64.4-.95.61-.07.04-.13.13-.14.21-.08.56-.17,1.12-.22,1.68-.02.26.11.32.33.19.18-.11.35-.24.54-.32.17-.08.22-.19.24-.36.07-.51.18-1.02.27-1.52.03-.15.03-.31.04-.46Zm10.42-11.08c1.09.28,1.91.89,2.64,1.64.14.14.3.28.48.35.13.05.31,0,.46,0-.02-.16.01-.36-.07-.46-.26-.3-.55-.58-.85-.83-.53-.44-1.12-.8-1.81-.94-.29-.06-.57-.04-.84.23Zm5.16.37c-.11.28-.21.57-.34.83-.08.15-.18.32-.32.4-.22.12-.32.29-.34.52-.02.23-.15.36-.33.5-.21.15-.38.37-.56.57-.05.06-.08.22-.06.24.09.05.22.11.29.07.26-.11.54-.23.75-.4.54-.45.9-1.06,1.23-1.68.23-.44.16-.7-.32-1.04Zm-51.96,26.52c.08.07.1.1.14.11.67.25,1.34.5,2.01.75.05.02.12.01.17-.02.39-.24.77-.5,1.11-.72-.43-.17-.9-.36-1.36-.55-.04-.02-.1-.03-.14-.02-.62.14-1.24.28-1.91.44Zm37.16-17.8c-.47-.03-.92-.06-1.38-.07-.06,0-.15.05-.17.1-.19.5-.37,1.01-.54,1.51-.03.08-.02.25.03.27.08.04.22.03.3-.02.38-.2.75-.41,1.12-.62.04-.02.08-.06.1-.11.18-.36.37-.72.54-1.07Zm-38.95,13.54l-.05.08c.06.07.1.16.17.22.29.25.59.5.89.75.32.26.66.45,1.08.21.07-.04.17-.05.26-.06.37-.05.75-.1,1.18-.16-1.16-.56-2.29-1-3.54-1.03Zm14.37-17.51c-.38.22-.73.42-1.09.62-.37.2-.75.38-1.11.58-.07.04-.13.13-.14.2-.04.25-.06.5-.09.76,1.23.01,2.3-.92,2.43-2.15Zm-7.01,24.38c.9.48,2.92.16,3.37-.49-.49-.14-.99-.27-1.49-.41-.05-.01-.1-.03-.14-.01-.61.21-1.18.51-1.74.91Zm23.98-18.69c-.45.15-.91.3-1.37.46-.06.02-.14.07-.15.12-.11.39-.23.78-.29,1.18-.04.27.14.39.37.26.43-.26.84-.56,1.25-.86.05-.04.09-.13.1-.2.04-.33.07-.67.1-.96Zm11.23,11.18c-.23.33-.46.65-.67.97-.05.07-.11.17-.08.23.11.28.22.56.38.8.21.31.57.25.71-.09.15-.37.3-.74.43-1.11.08-.22.14-.44.22-.7-.52.24-.54.24-.99-.1Zm-1.13-6.63c-.4.4-.85.77-.9,1.42-.04.5-.18,1,.16,1.46.08.1.18.24.25.08.26-.55.48-1.13.71-1.69.01-.03,0-.08-.02-.12-.07-.38-.14-.76-.21-1.15Zm-8.63-6.11c-.36-.03-.59.08-.63.46-.01.11-.07.23-.13.33-.32.59-.27,1.21-.2,1.84,0,.08.16.2.25.2.28,0,.87-.62.86-.9,0-.04-.03-.09-.06-.13-.23-.38-.26-.78-.19-1.21.03-.19.06-.39.09-.58Zm-50.84,32.71c.11.49.35.91.75,1.24.06.05.17.06.25.04.43-.09.73-.63.53-1.02-.14-.26-.32-.51-.5-.74-.13-.16-.3-.31-.54-.18-.26.14-.46.32-.49.65Zm21-15.85s0-.07,0-.11c-.47-.29-.95-.57-1.42-.88-.42-.28-1.2-.29-1.64,0,.22.34,1.02.93,1.65,1.06.45.09.93-.03,1.4-.06Zm47.03-27.75c.93.3,1.67.84,2.34,1.48.14.13.26.28.41.4.07.05.19.1.26.07.06-.03.13-.17.11-.24-.06-.22-.12-.45-.25-.63-.45-.63-1.08-1.03-1.82-1.23-.34-.09-.69-.12-1.05.16Zm-21.16,1.35c.29-.26.59-.53.89-.8.21-.19.35-.39.28-.7-.03-.13,0-.28.02-.42.05-.34.1-.68.16-1.06-.37.2-.7.37-1.03.56-.04.03-.07.11-.07.17-.08.74-.16,1.48-.24,2.25Zm6-.03c.38.09.68.17.98.23.09.02.21.04.29,0,.51-.29,1-.59,1.52-.9-.37-.32-.85-.47-1.34-.58-.03,0-.08.02-.1.04-.43.38-.85.77-1.34,1.21Zm2.96,6.22c.22-.04.5-.09.78-.16.16-.04.21-.13.17-.31-.08-.32-.13-.64-.18-.97-.05-.33-.19-.4-.48-.22-.49.32-.84.75-1.11,1.27-.09.18-.02.26.15.29.2.03.39.05.66.09Zm-1.05-2.85c.42.3.91.43,1.46.38.09,0,.23-.1.23-.16,0-.57-.03-1.14-.04-1.7-.27-.09-.43,0-.57.18-.34.42-.69.84-1.07,1.29Zm2.06-4.21c.15-.47.29-.91.44-1.41-.44.11-.78-.31-1.23-.08-.37.19-.84.18-1.08.63.62.28,1.23.56,1.87.86Zm-.28,14.74s.08.01.11.02c.26-.22.5-.45.78-.64.26-.18.44-.36.37-.72-.04-.2.04-.43.06-.65.01-.1.03-.2.04-.32-1.15.18-1.1.17-1.3,1.17-.07.37-.05.76-.06,1.14Zm-17.34,14.94c-.48.26-.98.5-1.4.99.97.23,1.87.38,2.86.38-.51-.48-.97-.91-1.46-1.36Zm18.47-20.33c-.24-.64-.47-1.24-.7-1.83-.25.05-.32.19-.36.42-.09.59-.36,1.11-.79,1.58.67.17,1.26.09,1.85-.18Zm3.3,5.93c-.27.07-.54.12-.79.2-.07.02-.16.1-.16.17-.07.56-.03,1.12.18,1.65.08.2.22.22.33.05.18-.27.33-.56.49-.85.23-.41.23-.81-.04-1.21Zm3.72-17.76c.48,0,.88-.39.87-.84,0-.52-.38-.88-.89-.87-.57,0-.92.34-.91.88,0,.5.4.84.93.84Zm-4.18,23.01s-.05,0-.08,0c-.04.2-.17.42-.11.58.17.45.4.89.63,1.32.16.29.29.28.54.06.58-.53.32-1.22.39-1.86-.15.18-.26.38-.39.57-.25.36-.31.36-.57,0-.15-.21-.27-.44-.41-.65Zm-3.85-19.93c-.7.11-1.29.38-1.82.78-.13.1-.1.22.04.27.5.2,1.01.39,1.53.59.09-.59.16-1.09.24-1.64Zm-34.32,26.21c-.19-.11-.37-.2-.53-.31-.31-.2-.31-.3,0-.51.22-.15.45-.29.75-.47-.95-.14-1.77-.02-2.64.27.15.1.23.17.33.22.51.29,1.03.56,1.54.86.21.13.38.15.56-.06Zm-8.89-2.7c.42.4.86.75,1.21,1.18.42.52.93.27,1.46.32-.25-.23-.47-.39-.65-.59-.19-.2-.35-.43-.52-.65-.23-.3-1.06-.48-1.5-.26Zm21.78,2.42s.03.09.04.13c.69.26,1.4.3,2.17.3-.19-.5-.37-.94-.56-1.43-.58.35-1.11.67-1.65,1Zm3.48,2.55c-.29-.44-.57-.86-.86-1.3-.51.2-.93.49-1.32.88.43.18.84.3,1.19.51.37.22.66.17.98-.09Zm-4.08-23.48c-.26,0-.52-.05-.75.02-.22.07-.5.21-.58.4-.17.4-.24.84-.35,1.27.28.06.95-.15,1.06-.38.2-.41.39-.82.61-1.3Zm10.51,2.36c-.46-.14-.87-.09-1.19.28-.04.05-.13.07-.17.12-.05.05-.09.12-.12.19-.09.23-.17.46-.25.7-.02.07-.03.14-.04.21.07,0,.15,0,.21-.02.38-.14.76-.29,1.14-.45.07-.03.15-.1.18-.16.1-.28.17-.57.25-.86Zm-23.53,21.55c-.62-.24-1.27-.43-1.87-.73-.38-.19-.68-.07-1.09-.03.85.67,1.75,1.04,2.68,1.25.12-.2.21-.35.28-.49Zm20.28-30.85c-.76.69-1.49,1.34-2.22,2,.62-.13,1.23-.31,1.83-.5.05-.02.1-.07.13-.12.23-.42.28-.87.26-1.38Zm25.75,6.09c-.24.47-.41.94-.43,1.45,0,.2.08.3.27.2.56-.29.94-.76,1.33-1.27-.42-.14-.79-.26-1.18-.39Zm-10.76,11.87c.43-.07.86-.24,1.03-.64.18-.42.13-.91.01-1.37-.55.19-.78.51-.83,1.03-.03.32-.13.63-.21.98Zm7.02-9.32v-2.62c-.48.6-.93,1.13-.71,1.94.12.45.23.6.71.68Zm-11.56,4.67c-.19.11-.41.25-.62.39-.04.03-.08.09-.09.14-.04.43-.09.87-.11,1.3,0,.17.11.24.26.15.21-.13.42-.27.61-.42.04-.03.06-.14.05-.2-.03-.45-.06-.91-.1-1.35Zm-27.91,18.49c-.66-.24-1.3-.48-1.95-.69-.1-.03-.26.1-.36.19-.02.02.04.2.11.26.61.58,1.37.55,2.13.51.03-.12.06-.21.07-.27Zm36.33-15.72c-.26-.51-.47-.93-.69-1.37-.68.73-.69.77-.54,1.58.39-.07.78-.13,1.23-.21Zm10.91,40.05c.39-.26.51-.7.32-1.22-.08-.23-.28-.41-.43-.61-.19.15-.38.29-.56.44-.12.11-.1.21.03.32.33.27.56.61.64,1.07Zm-30.97-47.26c.06-.28.11-.53.16-.77-.27,0-.53.07-.69-.02-.14-.08-.16-.36-.22-.54-.36.16-.75.32-1.12.49.61.28,1.22.55,1.88.85Zm8.93,7.03c.13-.4-.06-.63-.33-.79-.43.26-.84.52-1.27.78.07.1.15.19.21.29.09.16.2.17.37.1.34-.14.68-.26,1.02-.38Zm-33.02,38.17c.37.44.72.86,1.08,1.29.33-.47.03-1.41-.6-1.82-.14.16-.29.32-.48.54Zm21.58-48.17c-.31.2-.63.41-.96.61-.21.12-.28.71-.1.86.03.03.09.04.14.03.27-.06.53-.12.75-.17.06-.49.12-.92.18-1.34Zm21.22,16.74c.25-.48.46-.89.67-1.29.02-.04.03-.1.02-.14-.09-.3-.18-.6-.28-.92-.24.48-.46.93-.68,1.39-.02.05-.02.12,0,.17.07.24.16.47.27.8Zm-6.28-27.04s-.08.08-.12.13c.35.42.67.87,1.05,1.26.2.2.51.16.81-.02-.54-.54-.92-1.24-1.74-1.37Zm-16.76,11.29c-.92.02-1.41.41-1.33,1.04.45-.07.9-.13,1.33-.19v-.84Zm17.8,9.12c.07-.48.12-.94.23-1.4.06-.25.02-.45-.13-.67-.16.18-.32.35-.47.52-.05.06-.08.16-.09.24,0,.38,0,.75,0,1.16.09.04.21.09.33.13.04.02.09.01.13.02Zm5.22.81c-.47-.17-.46-.17-.45-.63,0-.16,0-.33,0-.5-.42.15-.41.15-.41.35,0,.48-.03.95-.04,1.43,0,.08.02.18.07.23.03.03.16,0,.21-.04.28-.21.48-.49.61-.85Zm-23.84,39.46c.58-.11.9-.99.57-1.66-.2.09-.4.17-.58.28-.07.05-.14.18-.13.26.03.37.1.75.15,1.12Zm-54.09-.45c.14-.31.28-.57.37-.84.08-.25.19-.56-.09-.74-.27-.17-.53,0-.76.18-.01.01-.02.03-.01.02.16.45.31.88.49,1.38Zm62.47-44.58c.41.44.77.82,1.14,1.22.31-.64-.35-1.04-.26-1.65-.32.16-.58.28-.88.43Zm-28.57,13.47c-.1-.12-.2-.34-.34-.38-.41-.12-.84-.16-1.27-.23-.02.03-.04.06-.06.1.15.2.25.5.44.59.38.18.82.29,1.23-.08Zm18.32,31.55c.11-.04.19-.05.27-.09.34-.17.56-.75.44-1.15-.06-.19-.36-.28-.73-.22-.02,0-.03.02.02-.01v1.47Zm13.77-43.3c-.47.27-.85.48-1.25.71.27.31.51.6.79.91.16-.55.3-1.05.46-1.63Zm23.38-12.45c-.54-.43-1.35-.55-1.74-.28.56.28,1.14.58,1.7.86.01-.16.03-.36.05-.58Zm-1.64,55.79c.24-.22.29-.51.28-.79,0-.18-.04-.47-.15-.52-.15-.07-.39.03-.59.07-.07.02-.12.09-.15.11.21.38.4.74.6,1.13Zm-11.26-58.07c.13-.34.24-.61.33-.89.02-.07-.02-.19-.08-.24-.28-.28-.47,0-.66.14-.35.28-.35.34-.03.64.12.11.26.21.42.35Zm-42.32,25.64c.1.96.82.87,1.38,1.04.06-.09.11-.17.21-.32-.52-.24-1.02-.46-1.59-.72Zm49.45-18.58c.08.37.49.77.72.66.31-.15.46,0,.67.17.23.2.49.13.67-.17-.68-.22-1.36-.43-2.06-.66Zm-12.5,4.47c.82.21.99-.54,1.42-.94-.83-.03-1.21.23-1.42.94Zm3.75-12.05c-.28-.07-.59-.07-.8-.22-.37-.27-.68-.07-1.04-.01.59.62,1.39.71,1.84.23Zm-31.9,52.03c0,.3.15.47.38.47.27,0,.49-.24.48-.54,0-.29-.18-.47-.44-.45-.25.01-.43.22-.42.52Zm-44.7,5.87c.07-.2.17-.41.21-.63.04-.22.13-.52-.16-.63-.28-.11-.49.09-.66.29-.04.04-.06.1-.05.08.23.31.43.58.66.88Zm85.38-44.97c.21.15.42.3.65.47.2-.54.26-1.02-.08-1.51-.2.36-.38.68-.57,1.04Zm-7.85,7.82c.24.33.47.65.73,1,.05-.25.07-.46.14-.65.13-.31.06-.56-.17-.76-.23.13-.45.26-.7.41Zm-78.92,37.61c.37,0,.51-.1.51-.35,0-.26-.22-.44-.53-.44-.28,0-.47.17-.48.42,0,.25.15.36.5.36Zm88.55.13c.24-.34.3-.81.11-.97-.22-.18-.7-.14-.89.06.26.3.51.6.78.91Zm-13.08-50.51c-.24,0-.38,0-.53,0-.39,0-.7.24-.74.64,0,.08.03.17.08.23.03.03.14.04.18,0,.32-.27.64-.55,1.01-.88Zm6.12,17.31c-.55.48-.14,1.04-.19,1.6.55-.52.57-.7.19-1.6Zm-43.97,32.73c.36-.26.47-.59.45-.96,0-.2-.15-.33-.35-.25-.13.05-.33.2-.32.29.03.3.13.6.22.93Zm8.3-26.81c-.37-.13-.73-.24-1.07-.38-.25-.11-.38-.02-.52.2.36.25.76.3,1.15.39.21.05.35.02.43-.21Zm18.24-21.4c-.33.11-.65.23-.98.34-.01.2-.03.38-.04.57.52-.11,1.05-.19,1.01-.91Zm24.7-11.53c.04-.33-.05-.58-.26-.72-.23-.16-.39-.12-.51.14-.06.12-.12.25-.19.4.33.06.64.12.96.18Zm-11.55,3.55c.25-.15.55-.24.63-.42.07-.16-.09-.43-.15-.65-.48.07-.59.3-.48,1.07Zm-75.08,55.53c-.22.4-.42.77-.65,1.18.26-.1.55.12.71-.18.18-.33.12-.66-.05-1Zm70.41-40.39c-.22.19-.36.39-.56.48-.3.14-.28.34-.19.58.61,0,.65-.04.7-.6.01-.14.03-.28.04-.46Zm7.85-19.06c-.41.03-.88.3-.81.44.09.19.32.3.49.45,0,0,.04-.01.08-.02.08-.27.16-.56.24-.87Zm-2.3,21.33c-.23-.14-.42-.26-.63-.39-.1.06-.23.14-.39.25.31.23.6.44.94.69.04-.25.06-.43.08-.55Zm-14.41-7.12c.02-.34.04-.63.06-.99-.32.14-.58.26-.9.4.3.21.54.38.83.59Zm-7.62-3.57c.68.11.95-.11.89-.7-.29.23-.57.46-.89.7Zm22.83-7.83c-.17-.15-.3-.28-.44-.4-.34.27-.35.34-.02.7.15-.09.29-.19.46-.29Zm-40.96,57.78s.02.07.03.11c.22-.07.44-.14.66-.21-.07-.17-.13-.34-.22-.55-.2.27-.34.46-.48.65Zm40.49-56.86c.59.17.61.25.83-.61-.28.21-.54.39-.83.61Zm-4.45,16.23c.67.13.83,0,.7-.52-.22.17-.44.33-.7.52Zm-17.38,40.31s-.05-.01-.08-.02c-.12.14-.24.28-.41.46.17,0,.36.04.39,0,.07-.12.07-.28.09-.43Zm7.86-45.49c.06-.15.11-.27.17-.43-.21.06-.35.11-.54.16.14.1.24.17.36.27Z"></path>
  <path className="cls-1" d="m105.27,114.37c-1.64,0-3.25,0-4.87,0s-3.21,0-4.83,0v3.35h12.04v2.3c-.1,0-.21.01-.31.01-4.61,0-9.22,0-13.83,0-.28,0-.35-.09-.35-.35,0-4.24,0-8.48,0-12.73,0-.1,0-.2.01-.31h14.48v2.24h-12.05v3.19h9.7v2.29Z"></path>
  <path className="cls-1" d="m143.89,120.43c-2.03-.02-4-.53-5.71-1.83-3.63-2.75-3.53-7.95.2-10.57,1.83-1.28,3.89-1.75,6.09-1.66,1.65.07,3.21.48,4.63,1.36,1.74,1.08,2.91,2.59,3.21,4.64.39,2.68-.6,4.82-2.77,6.39-1.65,1.19-3.54,1.65-5.64,1.67Zm.32-11.73c-1.49,0-2.67.26-3.75.91-3,1.8-2.98,5.81.04,7.59,1.12.66,2.35.92,3.64.89,1.41-.03,2.72-.39,3.86-1.26,2.21-1.69,2.32-4.87.22-6.69-1.21-1.05-2.67-1.42-4-1.44Z"></path>
  <path className="cls-1" d="m52.66,120.01v-13.37h2.4v11.07h9.36v2.3h-11.76Z"></path>
  <path className="cls-1" d="m74.9,65.25c.02-1.31.3-2.54,1.11-3.6.65-.85,1.48-1.43,2.59-1.45,1.64-.03,2.58,1.08,2.22,2.69-.16.69-.49,1.34-.71,2.02-.17.53-.33,1.06-.45,1.6-.14.65.07,1.24.46,1.77.22.3.45.59.65.89.37.55.51,1.16.45,1.82-.12,1.29-1.25,2.03-2.5,1.62-.83-.27-1.45-.83-1.96-1.5-.96-1.25-1.46-2.69-1.69-4.23-.08-.54-.11-1.09-.16-1.64Zm1,.05c.05,1.8.43,3.52,1.41,5.06.37.58.79,1.11,1.42,1.43.89.44,1.73-.07,1.77-1.05.02-.4-.09-.77-.3-1.11-.2-.31-.4-.62-.62-.92-.65-.87-.83-1.84-.52-2.86.22-.75.53-1.48.8-2.21.2-.52.3-1.05.22-1.61-.08-.62-.42-1-1.02-1.12-.89-.19-1.56.2-2.09.86-.84,1.03-1.05,2.25-1.07,3.53Z"></path>
  <path className="cls-1" d="m85.05,88.07c-.61-.26-1.01-.67-1.13-1.31-.16-.86.21-1.49.96-1.65.81-.17,1.59.31,1.79,1.11.15.6-.04,1.12-.44,1.57.85.37,1.23.93,1.13,1.66-.1.74-.59,1.31-1.22,1.42-.61.1-1.28-.27-1.58-.89-.33-.68-.18-1.29.49-1.89Zm-.54-1.5c0,.48.36.86.83.87.47.01.86-.37.86-.84,0-.48-.37-.86-.84-.87-.5-.01-.85.33-.85.83Zm2.3,2.76c0-.47-.35-.83-.8-.83-.49,0-.9.4-.9.86,0,.48.37.87.82.85.49-.02.89-.41.88-.88Z"></path>
  <path className="cls-1" d="m86.54,93.76c.13.08.28.13.39.23.87.86,1.76,1.72,2.6,2.61.81.85,1.8,1.42,2.81,1.96.22.12.36.28.28.53-.49-.21-.98-.42-1.47-.63-.1-.04-.2-.08-.31-.11-.79-.27-1.47-.68-1.98-1.37-.71-.96-1.48-1.89-2.21-2.83-.07-.09-.12-.19-.18-.29.03-.03.05-.06.08-.1Z"></path>
  <path className="cls-1" d="m87.54,90.24c.42.22.78.43.98.82.25.49.5.98.71,1.48.57,1.34,1.38,2.51,2.42,3.52.14.14.27.29.39.45.03.04.04.15.01.18-.03.04-.14.05-.18.03-.19-.11-.38-.22-.55-.36-1.15-.94-2.01-2.09-2.62-3.44-.38-.84-.77-1.68-1.15-2.53-.01-.02,0-.05-.02-.16Z"></path>
  <path className="cls-1" d="m59.54,84.23c0,.58-.35,1.03-.92,1.23-.1.03-.2.14-.23.24-.19.63-.73,1.03-1.37.98-.54-.04-1.01-.49-1.08-1.03-.09-.66.26-1.25.89-1.45.17-.05.23-.12.27-.29.14-.63.72-1.05,1.32-.98.66.08,1.13.63,1.12,1.3Zm-1.81-.02c0,.4.29.72.64.72.34,0,.64-.34.63-.73,0-.39-.28-.69-.63-.7-.36,0-.64.31-.64.71Zm-.67.57c-.36.14-.55.5-.46.89.07.31.34.51.63.47.29-.04.59-.37.58-.64,0-.06-.05-.12-.09-.16-.2-.18-.41-.36-.65-.56Z"></path>
  <path className="cls-1" d="m54.6,92.38c-.28-.06-.39-.21-.4-.48-.05-1.39.09-2.74.6-4.05.24-.64.35-1.32.53-1.99.03-.1.11-.18.17-.26.07.1.2.2.19.29-.07.6-.14,1.2-.26,1.8-.22,1.08-.49,2.15-.7,3.24-.09.47-.08.95-.12,1.46Z"></path>
  <path className="cls-1" d="m55.98,91.36c-.03-.56.17-1.1.41-1.63.23-.51.49-1,.71-1.51.15-.35.25-.71.38-1.07.03-.08.1-.15.15-.22.03.09.1.19.09.27-.08.45-.14.91-.27,1.35-.17.6-.36,1.21-.59,1.79-.37.91-.35,1.83-.11,2.76.02.07.05.14.05.2,0,.1-.04.19-.06.28-.1-.06-.27-.1-.29-.18-.17-.62-.31-1.25-.46-1.88,0-.04,0-.08,0-.16Z"></path>
  <path className="cls-1" d="m53.24,90.99c-.01-.08-.05-.17-.03-.25.21-1.09.18-2.19.14-3.28-.04-.98.18-1.9.56-2.79.06-.14.11-.35.32-.24.07.04.08.25.08.38-.01.17-.06.33-.11.5-.25.81-.35,1.64-.29,2.48.08,1.08-.25,2.09-.51,3.11,0,.04-.04.07-.06.1-.03,0-.06,0-.09,0Z"></path>
  <path className="cls-1" d="m55.58,95.97c-.61,0-1.08-.36-1.22-.85-.11-.38.02-.75.36-.92.46-.24.94-.27,1.4-.01.36.21.57.52.53.96-.03.35-.33.65-.75.76-.13.04-.27.05-.33.06Zm-.17-.47c.35,0,.63-.21.64-.49.01-.31-.3-.57-.67-.57-.39,0-.59.16-.59.47,0,.32.28.58.62.59Z"></path>
  <path className="cls-1" d="m110.77,90.78c.02-.07.03-.14.04-.21.1-.59.62-1,1.22-.96.52.04.92.47.95,1.02.03.6-.37,1.11-.95,1.18-.23.03-.29.11-.31.33-.06.66-.55,1.1-1.17,1.08-.67-.02-1.22-.5-1.26-1.13-.04-.65.42-1.21,1.08-1.29.13-.02.26-.02.4-.03Zm-.2,1.9c.38,0,.67-.31.66-.7,0-.39-.28-.65-.67-.64-.4,0-.67.28-.66.68,0,.38.29.66.66.66Zm1.92-1.97c0-.3-.24-.56-.54-.57-.32-.01-.59.25-.59.58,0,.32.23.55.54.55.31,0,.57-.26.58-.56Z"></path>
  <path className="cls-1" d="m108.23,95.93c-.74.59-.66,1.39-.65,2.17,0,.85.35,1.5,1.21,1.82-.77.4-1.39.17-1.59-.6-.24-.89-.23-1.79.03-2.68.06-.19.16-.39.29-.55.16-.2.39-.31.72-.16Z"></path>
  <path className="cls-1" d="m139.04,91.76c.58.59,1.05,1.27,1.24,2.09.11.5.19,1.02.19,1.54,0,.64.19,1.19.55,1.7.19.26.38.52.55.78.05.08.08.18.08.29-.72-.51-1.36-1.09-1.73-1.9-.07-.16-.1-.35-.11-.52-.02-.32,0-.64,0-.96,0-.97-.28-1.87-.79-2.69-.05-.08-.06-.19-.08-.29.04-.01.07-.03.11-.04Z"></path>
  <path className="cls-1" d="m138.62,96.08c0,.5-.31.85-.74.84-.46,0-.85-.46-.84-.98,0-.55.3-.87.77-.86.45.01.82.46.81,1.01Zm-.4-.09c0-.29-.16-.49-.39-.5-.24-.01-.39.17-.4.46,0,.25.17.46.4.47.24.01.39-.15.39-.42Z"></path>
  <path className="cls-1" d="m146.24,42.06c0,.25-.21.46-.45.46-.24,0-.46-.22-.45-.46,0-.23.2-.43.44-.43.26,0,.46.18.46.44Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <polyline id="polyline3" className="cls-1" points="106.19 88.33 124.33 88.33 124.33 86.11 109.3 86.11 109.3 79.02 120.59 79.02 120.59 76.78 109.3 76.78 109.3 70.25 124.33 70.25 124.33 68.04 106.19 68.04 106.19 88.33"></polyline>
  <polyline id="polyline5" className="cls-1" points="115.62 64.76 113.16 67.52 120.87 64.76 115.62 64.76"></polyline>
  <polyline id="polyline7" className="cls-1" points="154.78 86.11 154.78 68.04 151.95 68.04 151.95 88.33 170.29 88.33 170.29 86.11 154.78 86.11"></polyline>
  <path id="path9" className="cls-1" d="m136.09,68.04l-10.32,20.29h3.49l2.64-5.25h12.37l2.66,5.25h3.45l-10.32-20.29h-3.97m-2.88,12.49l4.86-9.69,4.92,9.69h-9.78Z"></path>
  <path id="path11" className="cls-1" d="m96.35,79.84c4.65-1.24,5.1-4.7,5.08-5.93-.28-3.62-2.72-5.87-7.11-5.87h-12.79v20.29h2.92v-8.51h8.32l6.12,8.51h3.67s-4.41-5.73-6.22-8.48m-2.43-2.42h-9.47v-6.98h9.8c2.26,0,3.53,1.05,3.98,2.39.3.92.11,2.12-.39,2.94-.82,1.36-2.38,1.64-3.92,1.64Z"></path>
  <path id="path13" className="cls-1" d="m64.01,64.6c-8.23,0-13.84,5.8-13.84,12.82,0,7.39,6.2,12.61,13.84,12.61s13.83-5.14,13.83-12.61c0-7.02-5.68-12.82-13.83-12.82m-.1,22.92c-5.69,0-10.38-4.57-10.38-10.09s4.47-10.3,10.6-10.3,10.38,4.79,10.38,10.3-4.91,10.09-10.6,10.09Z"></path>
  <polyline id="polyline15" className="cls-1" points="42.83 75.22 44.93 75.22 48.75 68.04 45.68 68.04 42.83 75.22"></polyline>
  <polyline id="polyline17" className="cls-1" points="32.55 86.11 32.55 68.04 29.71 68.04 29.71 88.33 48.05 88.33 48.05 86.11 32.55 86.11"></polyline>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m75.3,95.64c-.82-.18-1.67-.3-2.47-.55-3.38-1.03-5.85-3.05-6.82-6.56-.22-.79-.35-1.63-.36-2.45-.04-2.9-.06-5.8,0-8.7.05-2.75.91-5.21,2.96-7.15,1.52-1.44,3.36-2.27,5.4-2.66,2.78-.53,5.51-.37,8.12.79,3.38,1.51,5.28,4.17,5.61,7.82.2,2.23.1,4.49.13,6.73,0,.4-.19.63-.61.63-.18,0-.35,0-.53,0-5.32,0-10.64,0-15.97,0h-.69c.04,1.54-.19,3.05.38,4.5.82,2.07,2.45,3.16,4.56,3.54,3.49.62,6.63-.3,9.45-2.38.16-.12.31-.24.47-.35.33-.22.64-.18.88.14.5.65.98,1.3,1.49,1.94.29.37.25.66-.1.95-2.23,1.84-4.74,3.06-7.61,3.53-.4.06-.79.14-1.19.21h-3.09Zm8.3-15.72c0-.92.03-1.82,0-2.71-.11-2.83-1.73-4.94-4.36-5.67-1.66-.46-3.33-.45-4.98.02-1.73.5-2.99,1.55-3.69,3.23-.69,1.66-.48,3.39-.51,5.13h13.54Z"></path>
  <path className="cls-1" d="m37.18,69.73c.24-.17.45-.4.72-.51,3.5-1.41,7.13-2.08,10.9-1.91,2.47.12,4.85.65,6.9,2.15,2.06,1.5,3.17,3.59,3.6,6.04.21,1.18.3,2.39.31,3.58.03,4.97.01,9.94.01,14.92,0,.97-.11,1.08-1.11,1.08-.78,0-1.56,0-2.34,0-.8,0-.91-.11-.91-.93,0-5.04,0-10.09,0-15.13,0-1.28-.09-2.55-.52-3.76-.87-2.47-2.76-3.62-5.25-3.94-2.52-.32-4.98.05-7.42.65-.41.1-.54.29-.54.73.02,7.11.01,14.23.01,21.34,0,.92-.12,1.04-1.04,1.04-.83,0-1.67.02-2.5-.01-.27-.01-.54-.19-.81-.29,0-8.35,0-16.71,0-25.06Z"></path>
  <path className="cls-1" d="m118.1,95.64c-.95-.18-1.91-.32-2.85-.55-2.12-.52-4.06-1.45-5.84-2.71-.43-.3-.46-.64-.23-1.05.42-.73.85-1.47,1.29-2.19.33-.55.53-.59,1.06-.2,1.79,1.29,3.74,2.23,5.92,2.62,2,.36,3.99.38,5.91-.39,1.43-.57,2.47-1.52,2.65-3.16.14-1.28-.3-2.29-1.36-3.02-1.12-.77-2.41-1.08-3.71-1.35-2.2-.46-4.41-.88-6.47-1.81-1.87-.85-3.51-1.98-4.33-3.94-1.32-3.13-.63-7.38,3.87-9.41,2.28-1.03,4.7-1.3,7.17-1.15,2.76.17,5.35.99,7.77,2.33.64.35.68.48.3,1.11-.39.65-.78,1.3-1.18,1.95-.38.62-.5.66-1.15.33-2.41-1.23-4.94-1.92-7.66-1.83-1.43.05-2.83.29-4.02,1.15-1.86,1.35-1.86,3.96.03,5.26.56.39,1.2.71,1.86.89,1.79.48,3.61.87,5.41,1.29,1.69.4,3.35.88,4.84,1.82,2.57,1.62,3.37,4.08,3.02,6.8-.48,3.71-2.91,5.65-6.29,6.64-.88.26-1.79.37-2.69.55h-3.3Z"></path>
  <path className="cls-1" d="m101.49,95.64c-.55-.12-1.11-.21-1.65-.36-3.36-.92-5.28-3.15-5.89-6.52-.16-.86-.21-1.76-.22-2.64-.02-7.96,0-15.92,0-23.89,0-.96.09-1.05,1.07-1.05.69,0,1.38,0,2.08,0,.63,0,.83.18.87.81.09,1.43.15,2.86.24,4.29.03.6.08,1.19.13,1.85.55,0,1.07,0,1.6,0,1.69,0,3.37,0,5.06,0,.59,0,.76.16.77.75,0,.76,0,1.52,0,2.28,0,.67-.14.82-.81.82-2,0-4.01,0-6.01,0-.19,0-.38,0-.62,0,0,.24,0,.41,0,.58,0,4.55-.01,9.09.01,13.64,0,.71.12,1.45.31,2.14.55,1.98,2.17,3.2,4.23,3.25.9.02,1.81-.04,2.71-.08.78-.03.95.11.95.89,0,.73,0,1.45,0,2.18,0,.83-.06.89-.89.97-.1.01-.2.05-.3.08h-3.62Z"></path>
  <path className="cls-1" d="m162.82,78.86c-.11.35-.2.71-.33,1.06-.88,2.41-3.45,3.91-5.92,3.46-2.71-.49-4.59-2.73-4.55-5.39.04-2.65,1.98-4.88,4.57-5.27,2.79-.42,5.43,1.35,6.1,4.09.04.15.08.3.13.45v1.59Z"></path>
  <path className="cls-1" d="m143.66,95.64c-.15-.05-.3-.1-.45-.14-2.2-.6-3.71-2.77-3.44-4.93.31-2.46,2.19-4.19,4.6-4.24,2.32-.04,4.31,1.67,4.69,4.02.35,2.22-1.09,4.43-3.32,5.1-.16.05-.32.12-.48.18h-1.6Z"></path>
  <path className="cls-1" d="m144.41,71.23c-3.39,0-6.12-2.71-6.13-6.1-.02-3.4,2.75-6.14,6.21-6.13,3.36.01,6.1,2.78,6.08,6.15-.01,3.37-2.76,6.08-6.16,6.07Z"></path>
  <path className="cls-1" d="m161.35,65.17c-.02,2.17-1.8,3.91-3.96,3.88-2.18-.04-3.93-1.8-3.91-3.94.02-2.16,1.78-3.9,3.95-3.89,2.21,0,3.93,1.76,3.91,3.96Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <polygon className="cls-1" points="83.75 41.98 82.26 43.62 80.76 41.98 70.73 41.98 70.73 52.1 129.27 52.1 129.27 41.98 83.75 41.98"></polygon>
  <path className="cls-1" d="m70.83,54.13s-1.06,14.56,5.93,30.43c1.98-6.46,7.91-19.91,23.92-25.03,0,0-16.97,9.45-17.31,37.51h.05q.05-.1.05-.19c2.51-8.34,11.62-32.89,32.45-38-23.39,14.8-24.74,41.08-24.69,46.58v.05c1.06-3.81,9.07-30.47,28.88-36.79,0,0-16.97,10.13-21.51,41.95l-.29,2.03c.39-.24,1.21-.82,2.12-1.45,31.44-21.99,28.69-57.09,28.69-57.09h-58.3Z"></path>
</svg>
									</div>
									
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path id="path7831" className="cls-1" 
  d="m170.44,72.31c-.27.36-.59.67-1.01.95-.36.24-.79.41-1.28.54v-.02c.36-.13.62-.24.88-.4,0,0,.03-.02.03-.01,0,0,1.34-.7,1.85-1.86-.11.26-.25.52-.47.8h0Zm-20.83-8.81l.09-.09s.07.06.1.1c-.02.02-.06.05-.09.09-.03-.03-.07-.07-.1-.1Zm-.15-.15c-.45-.45-.9-.91-1.34-1.38.03-.02.05-.05.08-.08.44.45.88.9,1.34,1.35l.02.02-.09.09h0Zm-1.13,1.6c-.05-.05-.09-.1-.14-.15.36-.35.69-.66,1-.96.04.04.09.09.13.13-.29.28-.65.63-.99.98Zm-1.6-1.67c.31-.29.62-.57.93-.86.02-.02.05-.04.07-.06l1.34,1.37c-.34.32-.66.64-.99.97-.46-.49-.91-.96-1.35-1.4h0Zm.96,
  1.77c-.44-.45-.9-.92-1.38-1.39.03-.03.06-.06.09-.09.47.48.91.96,1.33,1.43l-.04.04h0Zm9.56-21.21c-.28-.65-.81-1.18-1.34-1.43-.41-.2-1.3-.55-2.74-.51-.73,0-1.35-.03-1.35-.03h0s1.49-.04,1.49-.04c1.51-.03,2.17.21,2.58.41.52.25.99.69,1.28,1.34.09.2.16.41.21.63-.04-.12-.09-.25-.14-.36h0Zm-6.65,18.79c2.65-2.38,5.52-4.65,8.71-6.39,1.59-.86,3.26-1.61,5.06-1.96,1.44-.29,3.12-.17,4.37.74-2.16-1.31-5.25-.35-5.25-.35.03,0,.06,0,.09-.01-.05.01-.1.02-.15.03h0s-.02,0-.02,0c0,0,0,0,0,0h0c-1.63.44-3.19,1.24-4.69,2.07h0c-2.87,
  1.66-5.69,3.79-8.62,6.49-.03-.03-.07-.07-.1-.1.21-.19.41-.36.61-.54h0Zm19.23-4.59h0c0,1.34-.02,11.62-.02,11.71,0,.1,0,.65-.17,1.21-.18.61-.96,1.92-2.43,2.12-.52.07-.
  99.08-1.78.02h0c-.54-.05-1.08-.14-1.61-.28-3.46-.87-6.41-3-9.04-5.29-1.6-1.35-3.15-2.76-4.61-4.19,2.97-2.68,5.73-4.73,8.59-6.39,1.49-.82,3.05-1.6,4.67-2.04,2.34-.55,4.07-.36,5.23.61,1.05.87,1.17,1.94,1.17,2.5h0Zm.41.07l-.03,11.37h0c-.01.19-.03.38-.07.55,0-.1,0-.19,0-.29,0-.19-.09-8.08-.12-10.82,0-.34,0-.66,0-.96,0-.09,0-.18-.01-.28-.04-.7-.14-1.29-.39-1.76.43.63.63,
  1.42.62,2.19h0Zm-1.31,14.51c-.35.24-.69.37-1.22.5v-.02c.45-.12.86-.31,1.21-.59.22-.17.51-.47.78-.79-.22.41-.51.73-.77.9h0Zm2.37-4.62h0l-.03-9.89v-.04c.02-.91-.2-1.61-.38-2.05-.51-1.22-1.48-2.06-2.87-2.47h0c2.94.95,3.21,3.47,3.2,4.52v.04l-.02,10.16h0v1.41s-.03.56-.03.56c-.01.31-.04.65-.13.93l-.02.05c.11-.39.13-1.36.12-2.5,0-.94-.02-2.01-.04-2.99l-.07-7.44h0c.02-.94-.17-1.82-.66-2.64-.52-.87-1.42-1.47-2.27-1.79-1.76-.66-3.61-.36-5.24.19-1.65.56-3.18,1.4-4.66,2.27-2.95,1.77-5.63,3.93-8.13,6.2,2.34-2.12,4.82-4.09,7.49-5.76,1.34-.83,2.72-1.57,4.18-2.18,1.45-.59,
  3-1.06,4.63-.98.81.04,1.63.3,2.36.7.73.4,1.34,1,1.7,1.83.28.69.38,1.13.38,2.16l.05,11.41v.44c-.03.3-.05,1-.47,1.69-.69,1.12-1.7,1.9-3.25,2.01-1.57.13-3.09-.2-4.52-.69-2.89-.99-5.41-2.79-7.68-4.75-1.78-1.5-3.51-3.06-5.15-4.69l.09-.09c2.52,2.42,5.2,4.82,8.14,6.92,1.54,1.03,3.2,1.91,4.98,2.47.89.28,1.79.49,2.72.56.93.06,1.89.04,2.79-.36.96-.48,1.69-1.05,1.95-2.07.07-.25.13-.65.14-.84.02-.26.02-.39.03-.6v-11.77c0-.13-.01-.25-.03-.38-.05-.52-.18-1.03-.42-1.49-.47-.94-1.33-1.57-2.24-1.9-.91-.35-1.9-.4-2.84-.3-1.9.23-3.65,1-5.32,1.86-1.67.86-3.24,1.88-4.74,
  2.97-1.92,1.39-3.56,2.79-5.26,4.37-.45-.45-.91-.92-1.35-1.38,1.29-1.25,2.42-2.41,3.65-3.83,1.1-1.29,2.24-2.58,3.24-4.02.19-.28.36-.51.54-.8,0,0,.31-.46.79-1.27.16-.27.72-1.4.99-2.13.31-.79.62-1.61.76-2.46-.18.77-.66,1.89-.8,2.21-.21.57-.44,1.07-.69,1.54h-.02s1.44-2.97,1.41-5.21c-.03-1.85-.73-3.29-2.33-3.95-.71-.29-1.47-.39-2.22-.43h0s.25,0,.25,0c.74.05,1.51.15,2.22.44.64.27,1.16.69,1.55,1.2-.42-.63-1.01-1.14-1.78-1.44-.76-.3-1.58-.39-2.38-.43h-2.17s-8.63,0-8.63,0c-.78,0-1.9.11-2.63.43-.44.18-.82.44-1.14.75l-.11.12c-.77.83-1.18,2-1.19,3.21-.03,1.35.33,2.63.81,3.82h-.02c.12.3.24.59.37.87.4.87.85,1.71,1.33,2.53h0c.31.53.64,1.06.98,1.57,1.68,2.55,3.44,4.73,
  5.44,6.89.14-.13.27-.25.4-.37-1.62-1.77-2.92-3.4-4.3-5.34l.03-.03c1.34,1.84,2.71,3.52,4.36,5.28.12-.12.23-.22.31-.3-.18-.19-.29-.32-.47-.51-1.98-2.18-3.81-4.52-5.37-7.05h0c-.05-.09-.11-.17-.16-.26-.61-1.03-1.14-2.07-1.59-3.17l-.35-.97c-.49-1.42-.8-3.02-.27-4.29.18-.48.43-.84.74-1.11l.08-.07c.73-.61,1.75-.75,2.92-.74h10.12c1.74,0,2.21.24,2.68.46.62.29,1.03.84,1.29,1.49.54,1.35.12,3.29-.2,4.21-.42,1.2-.68,1.79-1.38,2.97h0c-.22.36-.48.78-.8,1.28-.47.72-1.41,1.95-2.24,2.89-1.14,1.33-2.32,2.62-3.54,3.87l-1.17,1.18h0l-.85.86s-.64.6-.97.9c0,0,0,0-.02.01-1.4-1.37-3.01-2.77-4.59-3.97-1.27-.97-3.86-3-5.17-3.53,1.65.89,3.17,2.13,4.58,3.27-1.6-1.18-3.22-2.42-5.02-3.39-1.79-.97-3.7-1.7-5.64-1.98,3.64.56,6.93,2.58,9.72,4.84,1.96,
  1.52,3.98,3.29,5.78,5.06l-.11.1c-2.33-2.21-5.02-4.51-7.73-6.47-1.84-1.31-3.86-2.35-5.93-2.95-2.03-.59-4.22-.81-5.96-.02-.31.15-.6.39-.83.65v.03c.19-.19.39-.37.62-.51.41-.25.88-.4,1.37-.49.98-.19,2.03-.17,3.06,0,2.08.33,4.03,1.31,5.93,2.46,3.4,2.22,6.43,5.01,9.14,7.62-.38.35-.75.69-1.12,1.03-1.1.99-2.2,1.94-3.31,2.79h.02s-.07.05-.11.08c-1.23.95-2.77,2.03-4.45,2.96-1.68.93-3.52,1.81-5.31,2.13-1.77.36-3.81-.1-4.72-1.1-1.08-1.19-1.08-2.22-1.08-2.79-.18,1.01.04,2.21.72,3.02.65.81,1.7,1.24,2.61,1.44h0c-.72-.08-1.55-.35-2.25-.91.64.56,1.53.92,2.3,1.02-.64-.08-1.26-.32-1.5-.4.91.53,2.38.6,3.16.47.23-.03.87-.14,1.51-.33.55-.16,1.24-.44,1.57-.56h0c-1.41.73-3.44,1.16-4.76.98.55.09,1.11.09,1.64.06-.6.13-1.73.02-2.2-.08,1.32.34,2.56.15,3.9-.19,1.07-.29,3.96-1.73,4.36-1.95h0c-1.24.86-4.13,2.03-5.04,2.25.62-.1,1.24-.3,1.84-.52-.07.03-.11.05-.12.07.27-.09.63-.2.9-.32l.25-.1c1.32-.55,2.61-1.26,3.77-1.99,2.47-1.57,4.53-2.94,6.69-4.84.52-.46,1.04-.92,1.55-1.39.44.44.91.91,1.39,1.41-.17.17-.34.35-.51.53-1.25,1.28-2.43,2.55-3.55,3.88-1.12,1.33-2.22,2.68-3.11,4.11-1.1,1.72-1.99,3.85-2.26,5.53.63-3.29,2.66-6.31,4.96-8.97,1.75-2.09,3.28-3.7,4.58-4.97.05.05.1.1.14.15-.32.31-.53.53-.53.53-1.57,1.63-3.13,3.38-4.62,5.21-1.06,1.28-1.93,2.59-2.6,3.91h0c-.33.6-1.52,2.93-1.52,5.13,0,1.34.4,2.45,1.14,3.11.77.68,1.9.88,3.34.7v-.04c-1.41.17-2.51-.06-3.25-.72-.72-.63-1.11-1.76-1.11-3.05,0-2.22,1.2-4.5,1.5-5.07h0c.67-1.32,1.53-2.6,2.59-3.88,1.49-1.83,3.04-3.58,4.61-5.2l.53-.53c2.21,2.32,4.65,5.09,6.33,7.44.56.83,1.06,1.55,1.61,2.56.98,1.78,1.98,3.67,1.57,5.54-.16.83-.78,1.85-1.68,2.3-.88.48-1.85.57-2.17.65.55.08,1.45-.1,2-.28-.2.12-.72.31-.96.36.23-.03.46-.05.69-.12.18-.05.34-.12.44-.18.37-.23,1.08-.63,1.72-1.76h0c-.48,1.21-1.56,1.8-2.13,2.05.15-.04.3-.1.44-.15-.17.11-.52.23-.61.29.39-.1.71-.25,1.07-.46.29-.17.54-.36.76-.61-.25.32-.68.63-.9.8.17-.07.33-.18.48-.3-.01.02-.02.03-.02.04l.22-.15c.51-.42,1.47-1.74,1.37-4.06h.02s.33,1.52-.32,3.1c.57-.85.69-1.66.65-2.53-.06-1.1-.38-2.15-.82-3.17-.83-1.85-1.87-3.52-3.12-5.16-1.69-2.21-3.89-4.71-5.93-6.89l1-.98c1.86,1.82,3.86,3.6,5.96,5.3,3.01,2.48,6.61,4.58,10.52,4.85.71.03,1.54.05,2.45-.25,1.53-.51,2.14-1.34,2.56-2.1.33-.64.37-1.07.39-1.77h0v-.47s0-1.61,0-1.61">
  </path>
  <path id="path7833" className="cls-1" d="m128.51,76.66c.62,0,1.12.5,1.12,1.12s-.5,1.12-1.12,1.12-1.12-.51-1.12-1.12.5-1.12,1.12-1.12Zm0-.23c-.74,0-1.34.59-1.34,1.34s.6,1.35,1.34,1.35,1.35-.6,1.35-1.35-.61-1.34-1.35-1.34Zm-.59,2.09h.23v-.61h.14c.19,0,.26.07.43.39l.13.23h.28l-.18-.28c-.18-.29-.25-.33-.33-.36h0c.3-.03.41-.25.41-.41,0-.12-.05-.22-.14-.29-.12-.1-.31-.1-.48-.1h-.5v1.44h0Zm.23-1.25h.26c.14,0,.37,0,.37.21s-.24.22-.35.22h-.28v-.43"></path>
  <path id="path7835" className="cls-1" d="m37.65,87.65v-7.58c0-1.38-.02-3.7-4.39-3.7-1.78,0-2.83.35-3.48.56-.8.26-1.06.57-1.06.91v9.82c0,.4.12.44.45.44h1.15c.33,0,.49-.04.49-.46v-9.1c0-.49.72-.91,2.37-.91,2.57,0,2.57,1.59,2.57,2.69v7.31c0,.42.14.46.52.46h1.11c.26-.04.28-.25.28-.46"></path>
  <path id="path7837" className="cls-1" d="m47.28,82.25c0,2.04-.37,3.46-.93,4.07-.64.61-1.22.77-2.05.77-.7,0-1.23-.16-1.86-.77-.66-.61-1.11-2.04-1.11-4.07s.45-3.49,1.11-4.08c.63-.46,1.22-.62,1.92-.62.82,0,1.36.16,1.99.62.63.52.93,2.03.93,4.08h0Zm2.16,0c0-2.64-.95-4.35-2.23-5.19-.74-.53-1.83-.87-2.9-.87-.9,0-2.03.29-2.88.87-1.18.84-2.07,2.54-2.07,5.19s.89,4.42,2.07,5.16c.85.59,1.98.87,2.88.87,1.08,0,1.98-.26,2.9-.87,1.29-.83,2.23-2.55,2.23-5.16"></path>
  <path id="path7839" className="cls-1" d="m68.25,82.25c0,2.04-.37,3.46-.93,4.07-.64.61-1.22.77-2.05.77-.7,0-1.23-.16-1.86-.77-.66-.61-1.11-2.04-1.11-4.07s.45-3.49,1.11-4.08c.63-.46,1.22-.62,1.92-.62.82,0,1.36.16,1.99.62.63.52.93,2.03.93,4.08h0Zm2.16,0c0-2.64-.95-4.35-2.23-5.19-.74-.53-1.83-.87-2.9-.87-.9,0-2.03.29-2.88.87-1.18.84-2.07,2.54-2.07,5.19s.89,4.42,2.07,5.16c.85.59,1.98.87,2.88.87,1.08,0,1.98-.26,2.9-.87,1.29-.83,2.23-2.55,2.23-5.16"></path>
  <path id="path7841" className="cls-1" d="m59.61,76.9c0-.24-.17-.24-.28-.24h-1.13c-.17.03-.21.09-.28.33l-2.88,8.42-3-8.37c-.11-.33-.16-.38-.51-.38h-1.31c-.08,0-.28,0-.28.28,0,.1.04.22.08.33l3.94,10.47c.1.28.14.35.33.37h.91c.28,0,.33-.02.44-.35l3.87-10.49c.09-.28.09-.33.09-.37"></path>
  <path id="path7843" className="cls-1" d="m115.26,80.08c0,.38-.09.73-.62.73h-4.94c.2-1.9,1.16-3.25,3.1-3.25,1.51,0,2.46,1.13,2.46,2.51h0Zm2.07.43c0-2.09-1.48-4.29-4.46-4.29-2.39,0-4.93,1.78-4.93,6.29,0,2.75,1.47,5.87,4.93,5.87,2.63,0,4.05-1.77,4.24-2.72.11-.52-.19-.67-.31-.69-.29,0-.4.11-.78.5-.7.76-1.63,1.21-2.8,1.21-1.75,0-3.62-1.64-3.57-4.91h6.69c.68,0,.99-.67.99-1.27"></path>
  <path id="path7845" className="cls-1" d="m106.31,87.71v-8.57c0-1.58-1.43-2.89-3.76-2.89-1.63,0-2.99.76-3.5,1.31-.33-.45-1.17-1.28-3.36-1.28-1.55,0-2.51.29-3.14.52-.73.28-.96.57-.96.95v9.96c0,.38.1.45.38.45h1.12c.38,0,.46-.07.46-.45v-9.4c0-.3.83-.75,2.21-.75s2.19.62,2.19,1.91v8.26c0,.41.13.43.43.43h1.15c.35,0,.4-.12.4-.45v-8.31c0-.67.09-1.09.6-1.38.6-.3,1.12-.42,1.77-.42,1.83,0,2,1.2,2,2.15v7.95c0,.41.11.45.39.45h1.18c.33,0,.43-.12.43-.45"></path>
  <path id="path7847" className="cls-1" d="m83.87,92.29c.12-.13.25-.28.37-.44.91-1.19,1.39-2.34,1.9-3.89l4.04-10.67c.06-.22.1-.31.1-.43,0-.22-.13-.26-.3-.26h-1.11c-.19,0-.26.07-.38.43l-3.01,8.51-3.07-8.51c-.14-.38-.17-.43-.55-.43h-1.4c-.11,0-.41-.02-.41.29,0,.07.1.26.14.4l4.32,10.52-.41,1.31c-.27.9-.59,1.6-1.23,2.26-.52.53-1.16.6-1.83.51-.48-.07-.57-.07-.8-.07-.51,0-.8.33-.8.78,0,.57.29.95,1.17.95.81,0,2.05-.16,3.24-1.29"></path>
  <path id="path7849" className="cls-1" d="m79.01,87.88v-.56c0-.26-.19-.26-.31-.26h-4.92l4.82-9.21c.23-.45.29-.66.29-.81,0-.21-.13-.45-.48-.45h-6.46c-.3,0-.44.02-.44.35s0,.81.09.87c.05.05.19.05.35.05h4.65l-4.97,9.19c-.25.33-.32.54-.32.68,0,.22.13.45.54.45h6.82c.21,0,.35,0,.35-.31"></path>
  <path id="path7851" className="cls-1" d="m126.17,84.93c0-3.77-5.51-3.2-5.51-5.66,0-.9.66-1.66,1.91-1.66s1.62.73,2.28.73c.33,0,.82-.18.82-.66,0-.9-1.46-1.42-2.99-1.42-2.02,0-3.89,1.16-3.89,3.19,0,1.87,1.42,2.75,3.06,3.48,1.29.57,2.49,1.1,2.49,2.23,0,.97-.73,2.09-2.29,2.09s-2.03-1.24-2.83-1.24c-.39,0-.86.17-.86.78,0,.8,1.85,1.63,3.67,1.63,2,0,4.13-1.11,4.13-3.51"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m152.87,107.14h-11.96v-18.01h11.31v4.37h-6.3v2.34h4.39v4.21h-4.38v2.76h6.95v4.32Z"></path>
  <path className="cls-1" d="m81.18,128.98c-.45-.15-.91-.3-1.36-.46-2.5-.89-4.06-3.46-3.62-6.04h4.7c.1.36.12.81.34,1.13.2.3.6.63.93.65.34.02.87-.25.99-.53.14-.34.06-.92-.17-1.22-.28-.36-.78-.57-1.22-.78-.72-.34-1.47-.6-2.19-.94-2.58-1.26-3.65-3.3-3.14-5.91.48-2.47,2.7-4.37,5.31-4.54,3.61-.24,6.34,2.24,6.18,5.72h-4.57c-.1-.29-.12-.79-.36-.93-.37-.23-.89-.21-1.35-.3-.03.44-.18.92-.04,1.29.11.28.58.46.91.62.92.45,1.87.84,2.78,1.3,2.08,1.06,3.26,2.72,3.1,5.11-.17,2.53-1.45,4.34-3.81,5.32-.51.21-1.06.35-1.59.52h-1.82Z"></path>
  <path className="cls-1" d="m49.54,67.16c.45-.53.71-.98,1.09-1.25,5.32-3.78,10.06-8.16,14.04-13.35,5.96-7.79,9.58-16.53,10.59-26.32.02-.15.03-.29.05-.46.81-.29,1.29-.05,1.79.66,4.5,6.44,10.11,11.59,17.56,14.42,11.14,4.24,23.23.31,30.03-9.67.38-.56.91-1.01,1.38-1.52.2.64.48,1.27.6,1.92,2.77,15.18,9.99,27.8,21.67,37.87.59.51,1.17,1.02,1.99,1.74-3.65.71-6.12,2.56-8.26,4.95-.59.65-1,.5-1.31-.44-1.36-4.07-3.05-7.99-5.43-11.59-6.42-9.72-15.58-14.12-27.07-13.59-7.85.36-14.38,3.94-19.94,9.33-7.17,6.95-11.45,15.54-14,25.08-.21.77-.34,1.54-1.49,1.11-.25-1.99-.42-4.02-.78-6.01-.57-3.12-1.73-6.02-3.66-8.6-3.11-4.17-7.48-5.32-12.36-5.12-2.03.08-4.04.5-6.5.82Z"></path>
  <path className="cls-1" d="m47.13,89.1c2.42,0,4.78-.14,7.11.04,2.53.2,4.27,1.7,5.11,4.08.82,2.3.36,4.42-1.34,6.19-.49.51-.51.88-.23,1.47.95,2.01,1.85,4.04,2.85,6.25-1.81,0-3.46.03-5.1-.03-.25,0-.56-.43-.7-.73-.65-1.45-1.24-2.93-1.88-4.38-.14-.31-.41-.57-.61-.85-.1.04-.19.09-.29.13v5.8h-4.93v-17.97Zm4.96,7.65c.08.13.17.27.25.4.69-.34,1.56-.53,2-1.08.31-.38.21-1.33-.05-1.87-.42-.88-1.32-.82-2.21-.65v3.19Z"></path>
  <path className="cls-1" d="m125.83,89.26c2.84,0,5.68-.22,8.48.07,2.44.25,3.72,2.16,4.28,4.46.72,2.95.74,5.93-.06,8.87-.8,2.93-2.87,4.46-5.93,4.48-2.23.02-4.46,0-6.77,0v-17.88Zm5.01,4.33v9.11c2.23.19,2.97-.36,3.12-2.47.1-1.43.1-2.88,0-4.31-.17-2.12-.9-2.63-3.11-2.34Z"></path>
  <path className="cls-1" d="m75.39,98.21c-.35,1.77-.52,3.6-1.08,5.29-.89,2.68-2.99,3.89-6.13,3.9-3.17,0-5.21-1.18-6.16-3.86-1.28-3.65-1.26-7.37.07-11.01.8-2.17,2.5-3.36,4.81-3.62,4.77-.54,7.58,1.71,8.11,6.54.1.9.12,1.81.18,2.72.07.02.13.03.2.05Zm-9.37-.08c.21,1.19.35,2.35.62,3.49.18.73.68,1.45,1.5,1.25.59-.15,1.35-.71,1.52-1.24.73-2.32.75-4.71-.03-7.02-.18-.53-.94-1.23-1.4-1.2-.55.03-1.33.66-1.52,1.2-.4,1.12-.48,2.35-.69,3.54Z"></path>
  <path className="cls-1" d="m95.29,89.14v6.08l.19.08c.98-1.76,2.01-3.49,2.93-5.28.38-.75.83-1.04,1.67-.99,1.27.07,2.54.02,4.03.02-1.38,2.24-2.59,4.29-3.89,6.28-.45.69-.47,1.23-.13,1.97,1.33,2.89,2.6,5.8,3.89,8.71.15.33.28.68.45,1.09h-5.48c-.81-2.12-1.61-4.22-2.45-6.41-2.01,1.89-.84,4.25-1.31,6.38h-4.84v-17.92h4.94Z"></path>
  <path className="cls-1" d="m72.74,117.33v4.25h-4.32v2.58h6.78v4.39h-11.8v-17.97h11.32v4.38h-6.29v2.37h4.32Z"></path>
  <path className="cls-1" d="m137.7,128.59h-5.21c-.19-.84-.38-1.67-.59-2.57-.46,0-.87,0-1.28,0-2.06,0-2.04,0-2.59,1.97-.07.25-.4.61-.61.62-1.54.05-3.09.03-4.8.03.67-2.46,1.3-4.78,1.93-7.09.92-3.35,1.86-6.7,2.73-10.06.18-.71.44-1.02,1.2-.98,1.39.08,3.17-.45,4.09.23.9.66.96,2.49,1.33,3.83,1.2,4.33,2.37,8.68,3.56,13.02.08.28.14.57.24,1.02Zm-6.63-6.85c-.28-1.39-.53-2.68-.79-3.96-.07,0-.15-.02-.22-.03-.25,1.29-.49,2.59-.76,3.98h1.77Z"></path>
  <path className="cls-1" d="m88.2,94.58h-4.58c-.09-.27-.12-.64-.31-.87-.22-.26-.58-.58-.87-.56-.29.02-.7.37-.78.65-.08.28.1.75.33.96.35.32.84.5,1.28.71.78.38,1.6.68,2.36,1.1,2.32,1.28,3.31,3.12,3.01,5.48-.33,2.56-2.02,4.5-4.49,5.13-4.38,1.12-7.96-1.69-7.75-6.16h4.79c.09.34.09.77.29,1.04.24.32.65.71.99.71.35,0,.88-.36,1.01-.69.12-.32-.06-.87-.3-1.18-.23-.3-.68-.47-1.05-.64-.69-.32-1.4-.57-2.09-.89-2.84-1.32-3.98-3.57-3.23-6.33.72-2.68,3.26-4.43,6.11-4.22,3.24.24,5.37,2.51,5.29,5.74Z"></path>
  <path className="cls-1" d="m109.8,110.56h5.04c.71,3.25,1.43,6.51,2.14,9.77.07,0,.14.01.21.02.36-1.61.72-3.21,1.07-4.82.31-1.4.58-2.82.94-4.21.08-.31.45-.75.71-.76,1.47-.07,2.94-.04,4.53-.04-.71,2.62-1.39,5.13-2.08,7.64-.86,3.14-1.75,6.26-2.56,9.41-.2.78-.48,1.17-1.36,1.09-1.23-.11-2.79.33-3.62-.28-.77-.57-.78-2.19-1.1-3.35-1.3-4.78-2.58-9.55-3.91-14.47Z"></path>
  <path className="cls-1" d="m50.04,110.56h11.61v4.4h-6.57v2.81h5.1v4.19h-5.16v6.62h-4.98v-18.01Z"></path>
  <path className="cls-1" d="m92.61,114.99h-3.81v-4.41h12.59v4.39h-3.75v13.61h-5.03v-13.59Z"></path>
  <path className="cls-1" d="m144.08,124.2h5.86v4.37h-10.75v-17.99h4.89v13.62Z"></path>
  <path className="cls-1" d="m113.17,89.12h4.86v13.61h5.9v4.34h-10.77v-17.95Z"></path>
  <path className="cls-1" d="m103.3,110.56h4.9v18.01h-4.9v-18.01Z"></path>
  <path className="cls-1" d="m110.45,107.11h-4.86v-17.98h4.86v17.98Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <path className="cls-1" d="m134.32,67.03v2.58h2.52c1.1,0,1.82.69,2.23,1.14.33.37,7.57,8.58,7.75,8.8.17.22.17.22.17.36v4.07c0,.19-.02.37-.06.56-.1.24-.31.42-.56.5-.24.03-.48.04-.72.04h-2.52s0,2.57,0,2.57h14.12v-2.58h-2.66c-.24,0-.48-.01-.71-.05-.25-.07-.45-.26-.56-.49-.04-.18-.06-.37-.06-.56v-4.07c-.02-.13.02-.27.09-.38l7.83-8.94c.72-.8,1.09-.97,2.04-.97h2.6v-2.58h-11.64v2.57h1.76c.27-.02.51.19.52.46,0,.12-.03.23-.1.33-.04.05-4.87,5.74-4.93,5.79s-.1.04-.14-.02c-.04-.06-4.82-5.78-4.82-5.78-.34-.41-.07-.79.32-.79h1.71v-2.57h-14.2Z"></path>
  <path className="cls-1" d="m99.68,67.03v2.58h2.25c1.63,0,1.74.91,1.74,1.7v12.05c0,.72.04,1.71-1,1.71h-2.78v2.57h11.88v-2.57h-2.9c-1.16,0-1.21-.53-1.22-1.65v-10.33l16.31,14.55h4.15l-.22-16.44c.02-1.2.09-1.6,1.34-1.6h2.6v-2.57h-12.11v2.57h2.66c1.22,0,1.43.47,1.44,1.6l.15,8.6-14.16-12.78h-10.12Z"></path>
  <path className="cls-1" d="m46.21,65.73c-2.55,0-5.45.48-7.9,1.58-2.29,1.02-4.15,2.66-4.15,5.38,0,1.42.54,2.8,1.51,3.83.66.61,1.73,1.65,4.51,2.26,1.25.26,3.91.69,6.56.97,2.65.28,5.22.53,6.28.81.84.21,2.25.5,2.25,2.08s-1.48,2.05-1.74,2.16c-.26.1-2.04.92-5.24.92-2.12-.06-4.22-.42-6.23-1.07-1.19-.43-2.44-.99-3.61-2.41-.47-.67-.73-1.47-.75-2.29h-2.9v8.11h3.22v-1.1c0-.25.2-.46.46-.46.08,0,.17.02.24.07,1.52.66,3.09,1.17,4.71,1.52,1.69.35,2.78.61,4.89.61,2.22.04,4.43-.27,6.55-.92,1.41-.39,2.73-1.04,3.89-1.92,1.33-1.02,2.1-2.6,2.08-4.27.01-1.57-.59-3.07-1.68-4.2-.61-.59-1.31-1.07-2.08-1.42-.83-.37-1.68-.67-2.56-.89-1.67-.41-5.42-.92-7.21-1.1-1.88-.19-5.14-.47-6.45-.87-.4-.12-1.2-.51-1.2-1.44,0-.67.37-1.23,1.1-1.69,1.16-.72,3.49-1.17,5.92-1.17,2.36-.03,4.69.43,6.86,1.34.58.25,1.13.58,1.63.97.82.7,1.38,1.64,1.61,2.69h2.6v-7.06h-2.9v.82c0,.26-.26.61-.79.32-1.31-.68-4.98-2.15-9.48-2.17h0Z"></path>
  <path className="cls-1" d="m81.07,65.74c-4.56,0-9.41,1.58-12.15,4.07-2.11,1.92-3.31,4.65-3.31,7.5-.03,2.87,1.17,5.61,3.3,7.53,2.95,2.65,7.37,4.07,12.15,4.07s9.3-1.41,12.18-4.07c2.07-1.96,3.25-4.68,3.26-7.53.03-2.85-1.16-5.58-3.26-7.5-3.09-2.8-7.13-4.07-12.18-4.07h0Zm0,3.01c2.5,0,4.9.9,6.52,2.49,1.57,1.54,2.39,3.72,2.39,6.06s-.74,4.42-2.39,6.06c-1.64,1.63-3.99,2.51-6.52,2.51s-4.91-.89-6.53-2.51c-1.56-1.62-2.42-3.8-2.37-6.06,0-2.32.81-4.51,2.37-6.06,1.62-1.6,4.03-2.49,6.53-2.49h0Z"></path>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <g id="QEKIBl">
    <g>
      <path className="cls-1" d="m149.53,58.26c-.04.11-.09.21-.13.32-.55,1.87-2.11,3.04-4.06,3.05h-80.22c-1.83,0-3.47.43-4.73,1.81-1.66,1.82-2.09,3.94-1.11,6.2.96,2.23,2.73,3.47,5.19,3.48,7.35.03,14.7-.02,22.06.02,5.52.03,9.8,2.4,12.58,7.18,4.98,8.55-.55,19.62-10.37,20.88-.13.02-.26.08-.39.11h-34.59c-.96-.35-1.89-.75-2.47-1.65-.33-.51-.55-1.1-.83-1.65,0-.55,0-1.1,0-1.65.41-.73.71-1.54,1.24-2.16.86-1,2.08-1.24,3.36-1.24,10.6,0,21.21,0,31.81,0,2.45,0,4.62-1.56,5.41-3.88.8-2.34,0-4.92-1.94-6.42-1.19-.92-2.55-1.22-4.02-1.22-7.27,0-14.54,0-21.81,0-6.57,0-12.22-4.49-13.7-10.9-.12-.53-.23-1.06-.34-1.59,0-1.06,0-2.12,0-3.18.04-.11.1-.21.12-.32.92-5.53,3.99-9.31,9.21-11.32,1.01-.39,2.1-.56,3.15-.83,27.76,0,55.53,0,83.29,0,.54.26,1.1.47,1.6.79.92.58,1.34,1.52,1.69,2.5v1.65Z"></path>
      <path className="cls-1" d="m110.12,101.32c-1.29-.38-2.34-1.05-2.95-2.31-1.24-2.54.31-5.52,3.1-5.94.37-.06.74-.08,1.11-.08,11.21,0,22.43,0,33.64,0,1.84,0,3.27.7,4.13,2.38.15.29.26.6.39.89v1.76c-.34.92-.71,1.83-1.56,2.39-.54.36-1.16.6-1.74.9h-36.12Z"></path>
      <path className="cls-1" d="m122.99,81.2c-3.96,0-7.92-.07-11.88.03-2.12.05-4.36-1.54-4.38-4.17-.02-2.37,1.87-4.18,4.37-4.19,5.37-.01,10.74,0,16.11,0,2.61,0,5.21-.02,7.82,0,2.61.02,4.44,2,4.27,4.56-.14,2.08-1.93,3.76-4.02,3.77-4.1,0-8.19,0-12.29,0Z"></path>
    </g>
  </g>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <g id="FtpxnF.tif">
    <g>
      <path className="cls-1" d="m39.27,59.61h19.81c.87,1.99,1.61,3.99,2.61,5.86,1.85,3.45,4.7,5.87,8.24,7.5,2.83,1.3,5.84,1.94,8.92,2.35,4.7.62,9.41.61,14.13.58.34,0,.68,0,1.07,0v10.35c-.19.03-.39.08-.6.08-10.43,0-20.86.06-31.29-.02-4.66-.03-8.75-1.72-12.27-4.8-3.97-3.48-6.69-7.78-8.37-12.73-.89-2.63-1.52-5.36-2.24-8.05-.09-.32-.01-.68-.01-1.11Z"></path>
      <path className="cls-1" d="m65.47,45.59h21.41c0,1.35-.03,2.67,0,3.98.07,2.62.49,5.16,1.67,7.55,1.11,2.25,2.68,4.04,4.94,5.19.28.14.56.61.56.93.04,3.32.02,6.63.04,9.95,0,.53-.09.83-.72.81-2.46-.07-4.94.04-7.39-.19-6.09-.57-11.21-3.08-14.97-8.03-2.52-3.32-3.97-7.11-4.85-11.17-.64-2.95-.82-5.91-.7-9.01Z"></path>
      <path className="cls-1" d="m94.09,88.23c0,.45,0,.79,0,1.13,0,3.1,0,6.19,0,9.29,0,.56-.11.91-.73,1.12-3.69,1.25-6.34,3.66-7.82,7.29-.08.2-.15.41-.23.61-.63,1.52-.63,1.51-2.34,1.51-3.1,0-6.19,0-9.29.02-1.11,0-1.09-.03-.89-1.2.4-2.32,1.09-4.53,2.11-6.65,1.5-3.11,3.61-5.71,6.35-7.83,2.89-2.25,6.18-3.63,9.63-4.67.98-.29,2.02-.4,3.2-.62Z"></path>
      <path className="cls-1" d="m112.59,112.26h-3.49c-.07-.51-.19-1.02-.21-1.53-.08-2.07.02-4.16-.25-6.21-.23-1.84-1.15-2.84-2.97-2.37v10.07h-3.76v-22.12c.54,0,1.09-.02,1.65,0,1.66.05,3.34.05,4.99.2,2.46.23,3.84,1.72,3.91,4.18.03,1.03.06,2.11-.23,3.07-.28.94-.96,1.75-1.53,2.73,1.65,1.63,1.77,3.95,1.78,6.33,0,1.84.06,3.69.1,5.64Zm-6.89-14.15c1.07-.16,2.19.11,2.82-.99.56-1,.54-2.06-.1-3-.69-1.01-1.75-.51-2.71-.58v4.56Z"></path>
      <path className="cls-1" d="m133.74,101.96v-11.78h2.97v22.29c-.98,0-1.95.05-2.91-.03-.23-.02-.54-.44-.61-.73-1.17-4.67-2.31-9.34-3.6-14v14.71h-3.01v-22.31c1.27,0,2.56-.03,3.83.04.18,0,.4.48.48.77.91,3.59,1.79,7.2,2.68,10.79.01.05.06.09.18.25Z"></path>
      <path className="cls-1" d="m158.44,76.01c1.37,1.15,1.77,2.74,1.86,4.42.11,2.13.13,4.27.21,6.41.02.45.16.89.26,1.38-.97,0-1.92-.04-2.86.01-.74.04-1-.25-1.02-.96-.04-2.01-.08-4.02-.2-6.02-.05-.75-.26-1.53-.55-2.23-.42-1.01-1.19-1.31-2.65-1.16v10.3h-3.54v-22.23c2.49.1,5.01.06,7.48.35,1.65.19,2.86,1.98,2.88,3.68,0,.6,0,1.2,0,1.8,0,2.14-.09,2.35-1.87,4.25Zm-4.92-2.22c1.09-.02,2.39.38,2.88-.84.33-.83.35-2.04-.01-2.85-.49-1.11-1.77-.85-2.86-.82v4.51Z"></path>
      <path className="cls-1" d="m114.01,77.06c0-2.02-.08-4.05.02-6.07.12-2.47,1.09-4.19,3.59-4.85,1.62-.43,3.24-.35,4.81.4,1.5.72,2.32,1.97,2.38,3.54.15,4.34.26,8.7.18,13.04-.06,3.18-1.97,5.2-5.4,5.11-1.17-.03-2.3-.11-3.32-.73-1.65-.99-2.15-2.62-2.23-4.38-.08-2.02-.02-4.04-.02-6.07Zm3.79.04c0,2.02-.04,4.04.03,6.06.02.49.26,1.2.62,1.41.49.28,1.25.34,1.81.18.78-.22.96-.99.96-1.76,0-3.95,0-7.89,0-11.84,0-1.3-.53-1.89-1.65-1.9-1.24-.01-1.75.53-1.76,1.88,0,1.99,0,3.98,0,5.97Z"></path>
      <path className="cls-1" d="m121.38,41.99h3.57v22.09h-3.5v-11.45h-3.81v11.43h-3.58v-22.05h3.5v7.28h3.81v-7.29Z"></path>
      <path className="cls-1" d="m137.54,77.06c0-1.96-.09-3.92.02-5.88.15-2.58,1.02-4.41,3.58-5.04,2.09-.51,4.15-.38,5.8,1.25,1.08,1.07,1.37,2.51,1.39,3.95.05,3.85.09,7.71,0,11.56-.06,2.52-.94,4.64-3.74,5.17-2.94.56-5.85,0-6.71-3.22-.18-.68-.3-1.4-.32-2.1-.04-1.89-.01-3.79-.01-5.69Zm7.02.16c0-2.08,0-4.16,0-6.24,0-1.14-.54-1.72-1.61-1.72-1.07,0-1.61.56-1.61,1.72,0,4.1,0,8.2,0,12.29,0,1.14.55,1.72,1.61,1.72,1.06,0,1.61-.57,1.61-1.72,0-2.02,0-4.04,0-6.05Z"></path>
      <path className="cls-1" d="m121.41,90.15h3.41v1c0,5.37-.05,10.74.02,16.1.04,2.84-2.01,5.26-5.07,5.06-1.35-.09-2.65-.07-3.81-.96-1.17-.9-1.72-2.11-1.73-3.47-.06-5.81-.02-11.62-.02-17.43,0-.09.04-.17.07-.3h3.53c0,.33,0,.66,0,1,0,5.21-.01,10.42.01,15.63,0,.82.08,1.71,1.04,2.1,1.44.59,2.54-.28,2.55-2.05.02-3.32,0-6.63,0-9.95,0-2.21,0-4.42,0-6.74Z"></path>
      <path className="cls-1" d="m109.08,81.82h3.27c.62,2.83-.54,5.63-3.49,6.34-2.47.59-5.09-.17-6.14-2.08-.49-.88-.79-1.98-.81-2.99-.09-3.98-.13-7.96-.01-11.94.12-4,2.34-5.31,5.44-5.24,3.22.07,5.2,1.5,5.16,5.55,0,.31,0,.62,0,.97h-3.31c-.1-.68-.13-1.4-.31-2.07-.25-.96-.88-1.29-1.96-1.09-.8.15-1.25.66-1.25,1.51,0,4.2,0,8.4,0,12.6,0,.97.7,1.61,1.68,1.61.93,0,1.63-.69,1.72-1.73.04-.46,0-.93,0-1.44Z"></path>
      <path className="cls-1" d="m134.67,49.13v3.39h-4.28v8.35h4.6v3.2h-8.22v-22.07h8.23v3.36h-4.63v3.77h4.3Z"></path>
      <path className="cls-1" d="m126.6,66.08h3.71v18.69h6.42v3.4h-10.12v-22.09Z"></path>
      <path className="cls-1" d="m109.11,64.09h-3.63v-18.7h-3.54v-3.38h10.5v3.31h-3.33v18.77Z"></path>
      <path className="cls-1" d="m138.51,108.31c.5,0,.94,0,1.38,0q1.5,0,1.87,1.46c.07-.43.13-.87.21-1.38h.95c.41,1.81.15,3.95-.56,4.08-.04-.3-.09-.59-.17-1.17-.07.54-.1.8-.17,1.3-.34-.2-.6-.35-.84-.5-.1.08-.34.29-.65.55-.37-1.31.13-2.52-.34-3.59-.11.01-.22.02-.34.03v3.26c-.09.06-.18.13-.27.19-.18-.19-.48-.36-.51-.57-.08-.49,0-1.01-.03-1.51-.05-.55.31-1.26-.53-1.58-.06-.02,0-.33,0-.58Z"></path>
    </g>
  </g>
</svg>
									</div>
									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <g id="tDnRpa.tif">
    <g>
      <path className="cls-1" d="m70.07,91.08c-2.11,2.1-4.11,4.09-6.1,6.08-4.58-4.57-9.18-9.15-13.8-13.76-4.69,4.67-9.29,9.26-13.85,13.8-2.11-2.1-4.11-4.1-6.14-6.13,4.55-4.52,9.15-9.1,13.77-13.7-4.66-4.65-9.26-9.23-13.85-13.81.14-.2.19-.3.26-.37,1.81-1.81,3.64-3.62,5.44-5.44.34-.34.53-.17.78.08,1.19,1.2,2.39,2.39,3.59,3.58,3.07,3.06,6.15,6.13,9.22,9.2.19.19.3.47.43.68,4.78-4.76,9.37-9.34,13.91-13.86,2.12,2.11,4.11,4.1,6.12,6.11-4.5,4.48-9.09,9.06-13.71,13.66,4.69,4.67,9.3,9.27,13.92,13.87Z"></path>
      <path className="cls-1" d="m158.58,84.19h-1.79c-.03-.38-.06-.74-.09-1.14-.09.04-.17.04-.2.08-1.12,1.44-2.62,1.69-4.26,1.27-1.79-.46-2.81-1.72-3.2-3.48-.3-1.35-.19-2.67.45-3.92.99-1.93,3.3-2.91,5.34-2.16.67.25,1.24.78,1.91,1.22v-5.94h1.84v14.08Zm-4.68-7.67c-1.75,0-2.97,1.25-2.97,3.06,0,1.77,1.27,3.12,2.96,3.12,1.69,0,2.96-1.33,2.96-3.11,0-1.83-1.19-3.07-2.95-3.07Z"></path>
      <path className="cls-1" d="m114.89,84.2h-1.8c-.03-.39-.05-.76-.08-1.13-.08.01-.14,0-.16.02-1.13,1.44-2.63,1.75-4.31,1.31-1.76-.46-2.79-1.69-3.18-3.42-.37-1.67-.16-3.26.88-4.69,1.55-2.12,5.3-2.24,6.53-.27.03.05.1.07.24.16.02-.42.04-.79.06-1.2h1.81v9.22Zm-1.73-4.58c.02-1.77-1.17-3.07-2.8-3.09-1.86-.02-3.1,1.18-3.12,3.04-.02,1.77,1.24,3.11,2.94,3.14,1.68.03,2.97-1.3,2.98-3.09Z"></path>
      <path className="cls-1" d="m145.91,81.11c.45.42.86.81,1.33,1.25-.72,1.01-1.62,1.7-2.8,2.02-2.19.59-4.51-.15-5.53-1.92-1.14-1.97-1.09-4.01.13-5.94,1.03-1.62,3.15-2.28,5.18-1.76,1.79.46,2.93,1.87,3.11,3.86.04.38.07.76.12,1.23h-7.25c-.15,1.06.49,2.12,1.49,2.59,1.4.66,2.77.24,4.24-1.33Zm-.64-2.64c-.14-1.51-1.22-2.24-2.94-2.07-1.16.12-2.1,1.07-2.01,2.07h4.95Z"></path>
      <path className="cls-1" d="m92.63,74.63c3,.01,5.13,2.09,5.12,4.97-.01,2.87-2.2,5-5.14,4.99-2.96,0-5.15-2.17-5.13-5.07.02-2.82,2.21-4.91,5.15-4.89Zm.07,1.89c-1.92,0-3.17,1.21-3.16,3.08.01,1.83,1.31,3.13,3.11,3.11,1.79-.02,3.05-1.29,3.06-3.09,0-1.84-1.2-3.09-3.01-3.09Z"></path>
      <path className="cls-1" d="m129.87,74.92c-1.37,1.48-2.62,2.84-3.91,4.24,1.43,1.67,2.82,3.3,4.32,5.06-.9,0-1.64.02-2.37-.02-.17,0-.35-.21-.48-.37-.99-1.18-1.96-2.37-2.94-3.56-.13-.16-.28-.32-.54-.62v4.51h-1.89v-14.06h1.83v8.76c.24-.22.36-.32.46-.43.83-.98,1.67-1.95,2.47-2.95.33-.42.68-.65,1.24-.59.53.05,1.07.01,1.8.01Z"></path>
      <path className="cls-1" d="m82.85,84.23v-12.26c-1.09,0-2.11,0-3.13,0q-.87,0-.87-.88c0-.32,0-.63,0-.99h10.1c0,.51.03,1.03-.02,1.55-.01.12-.32.3-.49.31-.88.03-1.76.01-2.63.02-.89,0-.89,0-.89.87,0,3.44,0,6.87,0,10.31,0,1.26.08,1.06-1.12,1.08-.28,0-.55,0-.94,0Z"></path>
      <path className="cls-1" d="m102.12,74.92c.55,0,.99.02,1.43,0,.36-.02.51.13.49.48-.01.19-.01.38,0,.58.03.4-.11.59-.55.56-.42-.03-.85,0-1.38,0,0,.58,0,1.08,0,1.59,0,.96,0,1.92,0,2.88,0,1.28.13,1.41,1.48,1.54,0,.45.02.91-.02,1.37-.01.13-.2.32-.33.35-1.83.34-3.05-.68-3.05-2.56,0-1.64,0-3.29-.01-4.93,0-.04-.02-.08-.06-.2-.49-.02-1.01-.05-1.57-.07v-1.55h1.64c0-.67,0-1.28,0-1.89,0-.47.02-.94,0-1.41-.02-.36.11-.5.47-.5,1.76,0,1.42-.12,1.45,1.35.02.78,0,1.57,0,2.43Z"></path>
      <path className="cls-1" d="m169.9,74.92v1.61c-.48,0-.95.01-1.41,0-.35-.01-.5.11-.5.48.01,1.49-.01,2.99.02,4.48.01.78.24.93,1.45,1.07,0,.44.03.91-.02,1.36-.01.13-.22.33-.35.34-1.51.11-3.01-.29-2.98-2.41.02-1.51-.02-3.03.02-4.54.02-.62-.18-.86-.8-.78-.25.03-.51,0-.83,0v-1.61c.32,0,.64-.03.95,0,.5.05.69-.13.67-.64-.03-.85,0-1.71-.01-2.56,0-.39.1-.57.53-.59,1.36-.05,1.36-.07,1.36,1.29,0,.66.02,1.32,0,1.98-.01.39.14.53.53.51.44-.02.89,0,1.38,0Z"></path>
      <path className="cls-1" d="m119.37,84.2h-1.79v-14.08h1.79v14.08Z"></path>
      <path className="cls-1" d="m134.1,76.73c.62-1.3,1.54-2.15,3.12-2.06v2.2c-.33.02-.64.02-.95.07-1.47.23-2.27,1.21-2.32,2.9-.04,1.19,0,2.39-.01,3.58,0,.23,0,.46,0,.75h-1.84v-9.21h1.83v1.74c.06.01.12.02.17.04Z"></path>
      <path className="cls-1" d="m162.7,84.19h-1.8v-9.22h1.8v9.22Z"></path>
      <path className="cls-1" d="m160.6,70.33h2.38c0,.66.02,1.3-.02,1.92,0,.13-.25.33-.4.34-.51.04-1.03.05-1.54,0-.15-.02-.39-.25-.41-.4-.05-.59-.02-1.19-.02-1.87Z"></path>
    </g>
  </g>
</svg>
									</div>

									<div className="company-logo">
										<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 200 154.64">
  
  <g id="b">
    <g id="c">
      <path className="cls-1" d="m114.2,62.63c-9.94,0-10.81,4.78-10.81,14.76s.78,14.62,10.72,14.62,10.81-4.87,10.81-14.81-.78-14.57-10.72-14.57m0,25.28c-4,0-4.04-2.73-4.04-10.77s0-10.42,3.95-10.42,4.05,2.63,4.05,10.72c0,7.79,0,10.47-3.95,10.47m-76.16-.49v-20.36h-2.68l-2.2,5.75h-3.17v-9.74h22.17v9.75h-3.17l-2.19-5.75h-2.68v20.36l3.07,1.03v3.12h-12.23v-3.12l3.07-1.03h0Zm24.17-20.21l2.49-1.03v-3.11h-11.16v3.11l2.48,1.03v17.1c0,5.56,3.12,7.7,9.89,7.7s9.8-2.63,9.8-8.14v-16.66l2.48-1.03v-3.11h-10.97v3.11l2.49,1.03v16.66c0,2.92-1.27,4-3.75,4s-3.75-1.13-3.75-3.95v-16.71h0Zm38.25,3.26c0-5.94-3.7-7.4-9.4-7.4h-11.4v3.11l2.49,1.03v20.21l-2.68,1.03v3.12h10.77c8.28,0,11.25-2.39,11.25-8.19,0-6.29-6.23-6.58-6.23-6.58,0,0,5.21-.63,5.21-6.34m-12.23-3.5h2.24c2.2,0,3.66.73,3.66,4.19,0,3.22-1.46,4.04-4,4.04h-1.9v-8.23h0Zm0,20.71v-8.58h1.95c3.17,0,4.68,1.03,4.68,4.54s-2,4.04-5.17,4.04h-1.46Zm46.58-11.2v-9.5h2.14c2.83,0,3.9,1.03,3.9,4.73s-1.22,4.77-4.29,4.77h-1.75,0Zm30.69-13.65h3.85v9.84h-3.77l-1.95-5.33s-.57-.46-2.62-.46c-3.9,0-3.9,2.73-3.9,10.19,0,8.04.29,10.82,4.19,10.82,1.95,0,2.68-.49,2.68-.49v-6.58l-2.78-1.02v-3.11h8.77v13.49s-3.22,1.85-8.92,1.85c-9.85,0-10.72-4.53-10.72-14.62,0-10.62,1.61-14.76,9.74-14.76,3.12,0,4.87,1.36,4.87,1.36l.54-1.17h0Zm-28.21,28.75v-3.12l-2.49-1.03v-7.06h2.58l5.31,11.21h7.36v-3.07l-2.63-1.27-4.24-8.14s4.29-1.12,4.29-7.89-4.24-8.13-9.12-8.13h-12.13v3.11l2.49,1.03v20.21l-2.68,1.03v3.12h11.26,0Z"></path>
    </g>
  </g>
</svg>
									</div>
													
								 </div>
                 </div>
                 <div ref={ref} className={inView ? 'classNameInView' : 'classNameNotInView'}>
                 <ScrollToBottomButton /></div>
        <ScrollToTopButton />
                 </div>
    )}
  </InView> 
                 
                 
                 
                 </div>

        </div>

        
    </div>
  );
}
