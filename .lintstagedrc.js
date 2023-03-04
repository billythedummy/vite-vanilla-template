module.exports = {
  // NB: html-eslint's style changes (self-closing -> void tag, tab-size 4) will be overwritten by prettier
  "*.{html,js}": "pnpm eslint --fix",
  "*.{css,html,js,json,md}": "pnpm prettier --write",
};
