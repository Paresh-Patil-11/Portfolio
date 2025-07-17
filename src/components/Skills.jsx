import React from 'react';

const skills = [
  { img: '/images/python.png', name: 'Python', desc: 'Proficient in Python programming, using it for data analysis, machine learning, and web development projects.' },
  { img: '/images/js.png', name: 'JavaScript', desc: 'Creating dynamic and interactive web applications with JavaScript.' },
  { img: '/images/react.png', name: 'React', desc: 'Creating interactive user interfaces with React.' },
  { img: '/images/nodejs.png', name: 'Node.js', desc: 'Developing server-side applications with Node.js.' },
  { img: '/images/express.png', name: 'Express.js', desc: 'Building RESTful APIs with Express.js.' },
  { img: '/images/MongoDB_Logomark_ForestGreen.png', name: 'MongoDB', desc: 'Scalable database architectures using MongoDB.' },
  { img: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', name: 'MySQL', desc: 'Working with MySQL databases and writing complex queries.' },
  { img: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg', name: 'Bootstrap', desc: 'Building responsive websites with Bootstrap.' },
];

const Skills = () => (
  <section id="skills" className="skills-section py-5" data-aos="fade-up">
    <div className="container">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, idx) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={idx}>
            <div className="skill-row text-center p-3 h-100 shadow rounded-3 bg-white">
              <img className="mb-3" src={skill.img} alt={skill.name} style={{height: '60px'}} />
              <h3 className="h5 fw-bold">{skill.name}</h3>
              <p className="small">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 