exports.onCreateNode = function onCreateNode({
                                                 node,
                                                 getNodesByType,
                                                 actions: {createParentChildLink},
                                             }) {
    if (node.internal.type === 'ContentfulProjects') {
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