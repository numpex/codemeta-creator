# Codemeta Packager — Write a codemeta.json definition in a breeze

Welcome!  Codemeta Packager is a web interface that makes it easier to get
started writing a codemeta.json file specifically related to NumPEX.

It is written as a *single-page application* (SPA) that runs
in the browser.  It generates a codemeta definition template based on
the information provided in the interface.

## User guide

Opening the webpage should be enough to understand how to use the application; you may also take a look at [this help file](./src/data/app.md).

## Development

You basically just need nodejs; using guix you can:
```bash
guix shell -CPNF -m manifest.scm
```

But any other way will likely work; for instance the CI uses the `node:18.17` image from dockerhub.

Then run the development server:

```bash
npm install
npm run dev
```

And open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Linting

You can run the linter on the code using:
```bash
npm run lint
```

And apply automatic fixes with:
```bash
npm run lint-fix
```

### License information

The licenses JSON (used by the license menu of the interface) is generated with `npm run gen-licenses`, which runs [a Scheme script](utils/license-list.scm) that requires Guix.
