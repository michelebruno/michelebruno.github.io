// wrap page in Layout component
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({element, props}) {
  const {data} = props;

  const {name, slug, description} = data?.project || {};

  return (
    <Layout title={name} description={description} {...props}>
      {element}
    </Layout>
  );
}
