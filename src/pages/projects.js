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

  return (
    <Layout className="px">
      <Typography.H1 className="py-lg">Projects</Typography.H1>
      <table className="w-full">
        <thead className="text-left uppercase">
          <tr>
            <th className="py-4 pr-8">Project</th>
            <th className="py-4 ">Type</th>
            <th className="py-4">Client</th>
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
                onClick={() => isPagePublic && navigate(link)}
              >
                <td className="py-4 pr-8">{name}</td>
                <td className="pys-4 ">{type && type.join(', ')}</td>
                <td className="py-4">{client}</td>
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
    projects: allProjectsCsv(sort: {fields: [year], order: [DESC]}) {
      nodes {
        ...ProjectFragment
      }
    }
  }
`;