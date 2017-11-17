const testsContext = require.context('../tests', true, /.spec\.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../src', true, /!(.spec\.js)$/);
srcContext.keys().forEach(srcContext);
