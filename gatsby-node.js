exports.onCreateNode = function onCreateNode({
  node,
  getNodesByType,
  actions: {createParentChildLink},
}) {
  if (node.internal.type === 'contentfulCsv') {
    const {thumbnail, cover} = node;

    const files = getNodesByType('File');

    const file = files.find(({relativePath}) => relativePath === thumbnail);

    if (file) {
      createParentChildLink({parent: node, child: file});
    }
    if (cover) {
      const coverfile = files.find(({relativePath}) => relativePath === cover);

      if (!coverfile) return;

      createParentChildLink({parent: node, child: coverfile});
    }
  }
};

exports.createResolvers = ({createResolvers}) => {
  createResolvers({
    ProjectsCsv: {
      cover: {
        type: 'File',
        resolve: async (source, args, context) => {
          const {cover} = source;

          const file = await context.nodeModel.findOne({
            type: `File`,
            query: {
              filter: {
                relativePath: {
                  eq: cover,
                },
              },
            },
          });
          return file;
        },
      },
      thumbnail: {
        type: 'File',
        resolve: async (source, args, context) => {
          const {thumbnail} = source;

          const file = await context.nodeModel.findOne({
            type: `File`,
            query: {
              filter: {
                relativePath: {
                  eq: thumbnail,
                },
              },
            },
          });
          return file;
        },
      },
      isPagePublic: {
        type: 'Boolean',
        resolve: ({isPagePublic}) =>
          !(isPagePublic === 'null' || isPagePublic === 'false' || isPagePublic),
      },
      roles: {
        type: ['String'],
        resolve: ({roles}) => roles.split(','),
      },
      type: {
        type: ['String'],
        resolve: ({type}) => type.split(','),
      },
      team: {
        type: ['String'],
        resolve: ({team}) => team.split(','),
      },
    },
  });
};

exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions;
  const typeDefs = `
    type ProjectsCsv implements Node {
      isPagePublic: Boolean
      type: [String]
      roles: [String]
      team: [String]
      cover: File
      thumbnail: File
    }
  `;
  createTypes(typeDefs);
};
