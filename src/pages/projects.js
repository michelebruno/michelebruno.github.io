import * as React from 'react';
import {graphql, navigate} from 'gatsby';
import {useState} from 'react';
import Layout from '../components/Layout';
import Typography from '../components/Typography';

function navigateOnClick(url) {
  return () => navigate(url);
}

// TODO Sort by column
export default function Projects({data}) {
  const [projects, setProjects] = useState(data.projects);

  const flatten = projects.nodes.map(({type, roles, images, ...project}) => ({
    ...project,
    type: type?.join(','),
    roles: roles?.join(','),
  }));

  return (
    <Layout className="mx-8">
      <Typography.H1 title="Projects" />

      <div className="text-4xl">
        <button
          onClick={() => {
            console.log(Object.keys(flatten[0]));
            const csvContent = `data:text/csv;charset=utf-8,${[Object.keys(flatten[0])]
              .concat(flatten.map(Object.values))
              .map(e => e.map(x => `"${x}"`).join(','))
              .join('\n')}`;

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'projects.csv');
            document.body.appendChild(link); // Required for FF

            link.click(); // This will download the data file named "my_data.csv".
          }}
        >
          Download csv
        </button>
      </div>
      <table className="w-full">
        <thead className="text-left uppercase">
          <tr>
            <th className="py-4 pr-8">Project</th>
            <th className="py-4 px-8">Type</th>
            <th className="py-4 px-8">Client</th>
            <th className="py-4 pl-8">Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.nodes.map(
            ({year, name, slug, type, client, link, websiteUrl, isPagePublic}) => (
              <tr
                key={slug}
                className={`border-t-2 border-b-2 border-black ${
                  isPagePublic && 'cursor-pointer hover:text-gray-500'
                }`}
                onClick={isPagePublic && navigateOnClick(link)}
              >
                <td className="py-4 pr-8">{name}</td>
                <td className="p-4 px-8">{type && type.join(', ')}</td>
                <td className="py-4 px-8">{client}</td>
                <td className="p-4 pl-8">{year}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Layout>
  );
}

export const query = graphql`
  {
    projects: allContentfulProjects(sort: {fields: [year], order: [DESC]}) {
      nodes {
        ...ProjectFragment
      }
    }
  }
`;
