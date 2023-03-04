# vite-vanilla-template

A template for frontend projects using:

- vanilla js
- [pnpm](https://github.com/pnpm/pnpm)
- [vite](https://github.com/vitejs/vite)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

featuring:

- PWA via [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa)
- a zero-dependency custom hacked-together i18n system

tools:

- type-safety via jsdoc type annotations
- [husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged) for [prettier](https://github.com/prettier/prettier) + [eslint](https://github.com/eslint/eslint) pre-commit hooks
- github pages deploy

eslint-plugins:

- [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) for general js code quality
- [config-prettier](https://github.com/prettier/eslint-config-prettier) to avoid conflicting styles with prettier
- [import-resolver-jsconfig](https://github.com/idonotknowwhoiam/eslint-import-resolver-jsconfig) to allow custom import path resolution during dev. TODO: need to replace this since this is dead.
- [import](https://github.com/import-js/eslint-plugin-import) to prevent problematic esm imports/exports
- [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) to sort imports in a consistent order at top of files
- [@html-eslint](https://github.com/yeonjuan/html-eslint) for html

prettier plugins:

- [official tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for consistent sort of tailwindcss class names

## Notes:

- `@html-eslint`'s style settings (tab-size 4, void tags over self-closing tags) conflict with prettier's. Stick with prettier's config for now by running prettier after lint in pre-commit.

## References:

- [deploy github pages](https://github.com/sitek94/vite-deploy-demo)
