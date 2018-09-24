import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../src', true, /.stories.(jsx?|tsx)$/);
function loadStories() {
    require('../src/stories.index');
    // req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
