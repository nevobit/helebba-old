const esbuild = require('esbuild');

const externalDependencies = [
  '@aws-sdk/credential-providers',
  '@fastify/cors',
  '@fastify/rate-limit',
  '@fastify/swagger',
  '@fastify/swagger-ui',
  '@fastify/websocket',
  'dotenv',
  'fastify',
  'mock-aws-s3',
  'aws-sdk',
  'nock',
];

esbuild
  .build({
    entryPoints: ['src/**/*.ts'],
    bundle: true,
    platform: 'node',
    target: 'node20',
    outdir: 'dist',
    external: externalDependencies,
    sourcemap: true,
    loader: {
      '.html': 'file',
      '.json': 'json',
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  })
  .then(() => {
    console.log('Build completed successfully');
  })
  .catch((error) => {
    console.error('Error en el build:', error);
    process.exit(1);
  });
