import React from 'react';
import classNames from 'classnames';
import Layout from '../components/Layout';
import WorkTogether from '../components/WorkTogether';
import Grid from '../components/Grid';

function CVItem({title, items, concat, className}) {
  return (
    <div className={classNames('col-span-3 leading-relaxed', className)}>
      <div className="grid">
        <h2 className="fs-xl ">{title}</h2>
        <ul className="fs-lg grid col-span-2 lg:col-span-1">
          {items.map(({rows, label}) => (
            <li className="" key={label}>
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
      <Grid twelve padding className=" border-b">
        <div className="col-span-9 fs-xl  grid leading-relaxed py">
          <p className="">
            I'm Michele Bruno, a 24 y.o. designer and developer, born in Andria, Southern Italy. I'm
            currently studying Communication Design at Politecnico di Milano. I also work as a
            freelance.
          </p>
          <p className="">
            I've been learning coding as a self taught since high school, trying to build websites
            for my first projects. Since then, technology has been a powerful tool to reach design
            goals. That's why I kept on enhancing my tech skills and I want to keep on getting
            better.
          </p>
          <p>I strongly believe that no good designer can do much without a good team.</p>
        </div>
      </Grid>
      <Grid twelve padding className="py border-b">
        <CVItem
          title="Education"
          className="row-span-2"
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
          className="row-span-2"
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
          title="Coding"
          concat
          className="row-span-2"
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
      </Grid>
      <WorkTogether />
    </Layout>
  );
}
