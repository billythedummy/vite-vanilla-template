module.exports = {
  "*.{js,html}": "pnpm eslint --fix",
  "*.{js,json,html,css,md}": "pnpm prettier --write",
};
