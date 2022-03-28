# Vite Svelte Library Template

> A template for Svelte components libraries written in TypeScript, using Vite as a bundler.

This project is based upon my [Vite Library Template](https://github.com/yuigoto/vite-library-template).

---

## Features:

- Prettier, so all your code is properly formatted;
- SASS for your styling pleasure;
- TypeScript because it's always welcome;

---

## How to

Clone this repository or use the following command to create your local project:

```
npx degit yuigoto/vite-svelte-library-template your-project-name
```

Place your library code under the `lib` folder and expose it through its `index.ts` file.

This project was bootstrapped using `yarn create vite`, so you can use its commands to execute/build the project:

- `yarn dev`: executes the project locally, you can use test-specific code on `src` and import directly from `lib`;
- `yarn build`: builds and bundles your project, also generates definition files for your coding completion pleasure;
- `yarn preview`: not used really, since it's mostly for previewing the production build locally;

> ### Important
>
> Remember to import the `style.css` file on `dist` when importing the library!
>
> When publishing your project, remember to change the package name in `package.json`, and mind the version number too!
>
> Also, if you end up publishing it as a public package on `npm`, you need to add this key to the `package.json` file, or else it will fail:
>
> ```
> "publishConfig": {
>   "access": "public"
> },
> ```

---

## Author

See `AUTHORS.md` for more information.

---

## License

This project is licensed under the `MIT License`. See `LICENSE.md` for details.

---

_&copy;2022 YUITI_
