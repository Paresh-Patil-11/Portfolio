import React from 'react';

const educationData = [
  {
    level: 'Bachelors in Technology',
    field: 'Computer science',
    place: 'R. C. Patel Institute of Technology, Shirpur',
    years: '2021 - 2025',
  },
  {
    level: 'Intermediate',
    place: 'R. C. Patel Arts, Commerce & Science College, Shirpur',
    years: '2019 - 2021',
  },
  {
    level: 'Matriculation',
    place: 'R. C. Patel Main building secondary School, Shirpur',
    years: '2014 - 2019',
  },
];

const Education = () => (
  <section id="education" className="education-section py-5" data-aos="fade-up">
    <div className="container text-center">
      <h2 className="mb-2">Qualification</h2>
      <p className="mb-4">My personal journey</p>
      <div className="row justify-content-center">
        {educationData.map((edu, idx) => (
          <div className="col-12 col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm rounded-3 p-3">
              <h4 className="fw-bold">{edu.level}</h4>
              {edu.field && <p className="mb-1">{edu.field}</p>}
              <p className="mb-1">{edu.place}</p>
              <h5 className="text-muted"><img src="/images/calendar.png" alt="calendar" width="16" className="me-2" />{edu.years}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 