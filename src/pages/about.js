import React from 'react';
import Layout from '../components/Layout';

function CVItem({title, items}) {
  return (
    <div className="col-span-12 leading-snug ">
      <div className="border-t grid grid-cols-4 px">
        <h2 className="fs-lg py-32">{title}</h2>
        <ul className="fs-lg col-span-2 grid pt-32 pb-16">
          {items.map(({rows, label}) => (
            <li className="pb-16 px-32">
              {label && <span className="block text-gray">{label}</span>}
              {rows.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      <div className="grid grid-cols-12 ">
        <div className="col-span-8 fs-xl pt-32  grid leading-snug pb-32 px">
          <p className="pb">
            I'm Michele Bruno, a 24 y.o. designer and developer, born in Andria, Southern Italy. I'm
            currently studying Communication Design at Politecnico di Milano but I also work as a
            freelance.
          </p>
          <p>
            I learned coding as a self taught in high school while trying to build websites for my
            first projects and, since then, technology has been a powerful tool to reach design
            goals. After my bachelor degree, I chose to enhance my design abilities enrolling at
            PoliMi and focusing my studies in UX design.
          </p>
        </div>
        <CVItem
          title="Education"
          items={[
            {
              rows: ['Communication Design', 'Politecnico di Milano'],
              label: '2020 – ongoing',
            },
            {
              rows: ['DAMS', 'Università di Bologna'],
              label: '2016 – 2020',
            },
          ]}
        />
        <CVItem
          title="Experiences"
          items={[
            {
              rows: ['UX designer & Web Developer', 'Freelance'],
              label: '2020 – ongoing',
            },
            {
              rows: ['Web design & WordPress Development', 'OSCard'],
              label: '2019 – 2020',
            },
          ]}
        />

        <CVItem
          title="Skills"
          items={[
            {
              rows: ['Adobe Illustrator', 'Adobe Indesign', 'Adobe After Effects'],
              label: 'Graphic Design',
            },
            {
              rows: ['Rawgraphs', 'Gephi', 'Excel', 'Open Refine'],
              label: 'Data Viz',
            },
          ]}
        />
        <CVItem
          title="Coding"
          items={[
            {
              rows: ['p5', 'NodeJS', 'Webpack', 'Socket.io', 'React', 'GatsbyJS'],
              label: 'JS',
            },
            {
              rows: ['SCSS', 'Tailwind', 'Bootstrap'],
              label: 'CSS',
            },
            {
              rows: ['Pandas', 'Numpy'],
              label: 'Python',
            },
            {
              rows: ['Composer', 'Laravel', 'WordPress'],
              label: 'PHP',
            },
          ]}
        />
        <CVItem
          title="Languages"
          items={[
            {
              rows: ['Italian', 'First language'],
            },
            {
              rows: ['English', 'B2 – Cambridge FCE'],
            },
          ]}
        />
      </div>
    </Layout>
  );
}
