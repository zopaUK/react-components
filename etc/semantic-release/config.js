module.exports = {
  dryRun: false,
  branches: ['master', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  preset: 'conventionalcommits',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
