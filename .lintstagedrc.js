module.exports = {
  "*.js": "pnpm eslint --fix",
  "*.{js,json,html,css,md}": "pnpm prettier --write",
};
