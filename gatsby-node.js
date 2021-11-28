exports.onCreateNode = function onCreateNode({
                                                 node,
                                                 getNodesByType,
                                                 actions: {createParentChildLink},
                                             }) {
    if (node.internal.type === 'ContentfulProjects') {
        const {thumbnail} = node;

        const files = getNodesByType('File');

        const file = files.find(({relativePath}) => relativePath === thumbnail);

        if (!file) return;

        createParentChildLink({parent: node, child: file});
    }
};