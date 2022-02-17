import React from 'react';
import Layout from '../components/Layout';

function CVItem({title, items, concat}) {
  return (
    <div className="col-span-12 leading-relaxed ">
      <div className="border-t grid grid-cols-4 px py-lg">
        <h2 className="fs-lg text-right text-gray ">{title}</h2>
        <ul className="fs-lg grid col-span-2 lg:col-span-1">
          {items.map(({rows, label}) => (
            <li className="pb last:pb-0 " key={label}>
              {label && <span className="block text-gray">{label}</span>}
              {concat
                ? rows.join(', ')
                : rows.map(r => (
                    <span className="block" key={r}>
                      {r}
                    </span>
                  ))}
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
      <div className="grid grid-cols-12 border-b">
        <div className="col-span-8 fs-xl pt-32  grid leading-relaxed pb-32 px">
          <p className="pb">
            I'm Michele Bruno, a 24 y.o. designer and developer, born in Andria, Southern Italy. I'm
            currently studying Communication Design at Politecnico di Milano but I also work as a
            freelance.
          </p>
          <p className="pb">
            I learned coding as a self taught in high school while trying to build websites for my
            first projects and, since then, technology has been a powerful tool to reach design
            goals.
          </p>
          <p className="">
            After my bachelor degree, I chose to enhance my design abilities enrolling in
            Communication Design at PoliMi, focusing on UX design and creative coding.
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
              rows: ['Web design + WordPress Development', 'OSCard'],
              label: 'Feb. 2019 – Sept. 2020',
            },
            {
              rows: ['Web design + WordPress Developer', 'Event Way srl'],
              label: 'Oct. 2020 – Sept. 2020',
            },
            {
              rows: ['UX designer + Web Developer', 'Freelance'],
              label: '2020 – ongoing',
            },
          ]}
        />
        <CVItem
          title="Skills"
          concat
          items={[
            {
              rows: [
                'Adobe Illustrator',
                'Adobe Indesign',
                'Adobe After Effects',
                'Adobe Premiere',
                'Keynote',
                'Figma',
              ],
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
          concat
          items={[
            {
              rows: ['p5', 'NodeJS', 'Webpack', 'Socket.io', 'React', 'GatsbyJS', 'GSAP'],
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
            {
              rows: ['Arduino', 'RaspberryPi'],
              label: 'Eletronics platforms',
            },
          ]}
        />
        <CVItem
          title="Languages"
          items={[
            {
              label: 'Italian',
              rows: ['First language'],
            },
            {
              label: 'English',
              rows: ['B2 – Cambridge FCE'],
            },
          ]}
        />
      </div>
    </Layout>
  );
}
