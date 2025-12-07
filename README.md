**Project Overview**
- **Name:**: `angular-pipes-deep-dive`
- **Description:**: A small Angular demo that explores custom pipes, including sorting and temperature conversion. The project demonstrates pipe usage patterns and notes about purity and performance.
- **Angular Version:**: 18 (see `package.json`)

**Quick Start**
- **Prerequisites:**: `Node.js` (>=14), `npm`, and the `@angular/cli` (optional, installed via `npm i -g @angular/cli`).
- **Install:**: Run `npm install` in the project root.
- **Run (dev):**: Use `npm start` (runs `ng serve`).

PowerShell example:
```powershell
npm install
npm start
```

**Available Scripts**
- **`npm start`**: Runs the dev server (`ng serve`).
- **`npm run build`**: Builds the production bundles.
- **`npm run watch`**: Builds in watch mode for development.
- **`npm test`**: Runs unit tests.

**Project Structure (key files)**
- **`src/app/app.component.ts`**: Main demo component.
- **`src/app/app.component.html`**: Component template where pipes are used.
- **`src/app/sort.pipe.ts`**: `sort` pipe — sorts arrays of strings or numbers.
- **`src/app/temperature.pipe.ts`**: `temp` pipe — converts temperatures between Celsius and Fahrenheit.

**Pipes**
- **Sort Pipe (`sort`)**: Sorts an array of strings or numbers. Signature: `transform(value: string[] | number[], direction: 'asc' | 'desc')`.
  - **Usage (template):** `*ngFor="let item of items | sort:'asc'"`
  - **Notes:** The pipe is declared with `pure: false` which allows it to run more often (use carefully for large lists).
- **Temperature Pipe (`temp`)**: Converts numeric values between Celsius and Fahrenheit.
  - **Signature:** `transform(value, inputType: 'cel'|'fah', outputType?: 'cel'|'fah')`.
  - **Usage (template):** `{{ 20 | temp:'cel':'fah' }}`  // converts 20°C to °F

**Development Notes**
- **Standalone pipes:** Both pipes are declared `standalone: true` so they can be imported directly into standalone components.
- **Inspect implementations:** The source files for the pipes are `src/app/sort.pipe.ts` and `src/app/temperature.pipe.ts`.
- **Testing & Linting:** Use the Angular CLI scripts in `package.json` to run tests and builds.

**Author & License**
- **Author:**: Repository owner (see repo metadata).
- **License:**: MIT-style (not included). Add a `LICENSE` file if you want an explicit license.

If you'd like, I can also:
- add a short demo README section showing the app output screenshots,
- add a proper `LICENSE` file, or
- create a short CONTRIBUTING guide.
