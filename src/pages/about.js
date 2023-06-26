import React from 'react';
import classNames from 'classnames';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import WorkTogether from '../components/WorkTogether';
import Grid from '../components/Grid';
import {AnimatedLink} from '../components/Typography';
import Image from '../components/Image';

function CVItem({title, items, concat, className}) {
  return (
    <div
      className={classNames(
        'col-span-12 md:col-span-6 xl:col-span-3 pb leading-relaxed',
        className
      )}
    >
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

export default function About({data}) {
  return (
    <Layout>
      <Grid twelve padding className=" border-b">
        <div className="col-span-12 md:col-span-9 fs-2xl  grid leading-relaxed py relative z-10">
          <p className="">
            Hi! My name is Michele Bruno, I'm a freelance Designer and Creative Developer based in
            Milan, Italy. I'm currently enrolled in the last year of Communication Design master at
            Politecnico di Milano.
          </p>
          <p className="">
            My first coding projects date back to the high school period, when I was learning on my
            own the basis of website-development and graphic design. As I understood how technology
            could become the most powerful tool to achieve my design goals, I've begun studying it
            on a daily basis, to improve every day.
          </p>
          <p className="hidden">
            Lately in these years, I've been working mainly on digital interactive artifacts, taking
            care of projects from concept to development. Having worked in different enviroments, I
            am aware of many issues of digital design from the basics of UX/UI to project deployment
            and its communication strategies. Usability, SEO and performance optimizations are
            must-have for all of my projects.
          </p>
          <p>
            My first concern when beginning a design project is having a good team with me. I
            strongly believe that even the best designers can't make a difference without good
            people to work with. That's why I play a central role into preserving the work
            environment and the relationships between the group members.
          </p>
          <p>
            I'm currently based in Milan. You can reach me out on{' '}
            <AnimatedLink href="https://t.me/michelebruno" target="_blank">
              Telegram ↗
            </AnimatedLink>{' '}
            or{' '}
            <AnimatedLink href="https://www.linkedin.com/in/brunomichele/" target="_blank">
              Linkedin ↗
            </AnimatedLink>
            . Feel free to check out my{' '}
            <AnimatedLink href="/MicheleBruno-CV.pdf" download target="_blank">
              CV ↗
            </AnimatedLink>{' '}
            or{' '}
            <AnimatedLink href="https://github.com/michelebruno/" target="_blank">
              GitHub profile ↗
            </AnimatedLink>
            .
          </p>
        </div>
        <div className="col-span-9 md:col-span-3 lg:py 2xl:py-lg relative z-0">
          <Image image={data.file} className="w-full lg:scale-125 origin-top-right" />
        </div>
      </Grid>
      <Grid twelve padding className="py border-b">
        <CVItem
          title="Experiences"
          className="row-span-2"
          items={[
            {
              rows: ['UX Designer + Creative Developer', 'Freelance'],
              label: '2020 – ongoing',
            },
            {
              rows: ['Data Visualization Facilitator', 'Digital Methods Initiative'],
              label: 'July 2022 (Summerschool)',
            },
            {
              rows: ['Creative Developer', 'I MILLE'],
              label: 'April 2022 – June 2022',
            },
            {
              rows: ['Web design + WordPress Development', 'OSCard'],
              label: 'Feb. 2019 – Sept. 2020',
            },
          ]}
        />
        <CVItem
          title="Education"
          className="row-span-1"
          items={[
            {
              rows: ['Communication Design (MSc)', 'Politecnico di Milano'],
              label: '2020 – 2023',
            },
            {
              rows: ['DAMS', 'Università di Bologna'],
              label: '2016 – 2020',
            },
          ]}
        />
        <CVItem
          title="Awards"
          className="row-span-1 xl:col-start-4"
          items={[
            {
              rows: ['DDA of the week (x1)'],
              label: 'Digital Design Awards',
            },
            {
              rows: ['Honorable Mention (x1)'],
              label: 'Awwwards',
            },
          ]}
        />
        <CVItem
          title="Coding"
          concat
          className="row-span-2 xl:col-start-7 xl:row-start-1"
          items={[
            {
              rows: [
                'p5',
                'NodeJS',
                'Webpack',
                'Socket.io',
                'React',
                'GatsbyJS',
                'Vue',
                'Nuxt',
                'GSAP',
              ],
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
              rows: ['Arduino', 'RaspberryPi', 'AWS (EC2, RDS, S3)'],
              label: 'Miscellaneous',
            },
          ]}
        />
        <CVItem
          title="Languages"
          className="xl:col-start-10 xl:row-start-1"
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
        <CVItem
          title="Skills"
          concat
          items={[
            {
              rows: [
                'Figma',
                'Adobe Illustrator',
                'Adobe Indesign',
                'Adobe After Effects',
                'Adobe Premiere',
                'Keynote',
              ],
              label: 'Graphic Design',
            },
            {
              rows: ['Rawgraphs', 'Gephi', 'Excel', 'Open Refine'],
              label: 'Data Visualization',
            },
          ]}
        />
      </Grid>
      <WorkTogether />
    </Layout>
  );
}

export const query = graphql`
  {
    file(relativePath: {eq: "michelebruno.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
