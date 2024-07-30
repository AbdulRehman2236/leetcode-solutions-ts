# LeetCode Solutions in TypeScript

## Overview

This repository contains solutions to various LeetCode problems implemented in TypeScript. The solutions are organized by problem type (e.g., arrays, strings, linked lists) and include both the implementation and associated unit tests. The project uses modern TypeScript and Jest for testing.

## Technologies Used

- **TypeScript**: A superset of JavaScript that adds static types. TypeScript helps in writing safer and more robust code.
- **Node JS:** A JavaScript runtime built on Chrome's V8 engine, used for executing test scripts and managing dependencies.
- **Jest**: A testing framework used for running and managing tests.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Project Structure

The project is organized into the following folders:

- **`src/`** : Contains the TypeScript implementations of LeetCode problems, organized by problem type (e.g., arrays, strings).
- **`tests/`** : Contains Jest test files for the TypeScript implementations. Tests are organized in the same way as the `src` folder.
- **`.vscode/`** : Contains VS Code configuration files for debugging and tasks.
  - `launch.json` : Debug configurations for running and debugging TypeScript files and Jest tests.
  - `tasks.json` : Configuration for TypeScript compilation.
- **`tsconfig.json`** : TypeScript configuration file specifying compiler options and project structure.
- **`package.json`** : Lists project dependencies and scripts.
- **`jest.config.ts`** : Configuration file for Jest, set up to work with TypeScript.

### Installation

1. Clone the repo using below URL:

   ```
   https://github.com/AbdulRehman2236/leetcode-solutions-ts.git
   ```

2. Navigate to the project directory:
   ```
   cd leetcode-solutions-ts
   ```
3. Install dependencies:

   ```
   npm install
   ```

## Running Test

- To run all tests using Jest, build the project first and then run below command:

  ```bash
  npm test
  ```

### Debugging in VS Code

Debugging a TypeScript File

- Open the TypeScript file you want to debug (e.g., src/index.ts).
- Set breakpoints by clicking in the gutter next to the line numbers.
- Select "Run TypeScript File" from the debug configurations in VS Code.
- Press the green play button or F5.

## Additional Information

- TypeScript Configuration: See tsconfig.json for TypeScript compiler options.
- Jest Configuration: See jest.config.ts for Jest setup, including TypeScript support via ts-jest.
- VS Code Configuration: Debug configurations and tasks can be customized in .vscode/launch.json and .vscode/tasks.json.

## Contributing

Feel free to contribute by submitting pull requests or opening issues. Make sure to follow the project's coding standards and test your changes thoroughly.

## Contact Information

- Email: abdulrehmanfayyaz3083@gmail.com
- LinkedIn: https://www.linkedin.com/in/abdul-rehman-fayyaz

Feel free to reach out to me if you have any questions or feedback about my project. I'm always happy to help!
