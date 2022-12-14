# Contributing to Static site Generator (ag-ssg)

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to `ag-ssg` and its packages.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document via Pull request/discussions.

## What should I know before I get started?

Static site generator which converts the.txt or .md file to static .html page. In this version of project we need to create the command line tool which will help to process the .txt or .md file to .html files.

## Requirements

- This tool is built using the [Node.js](https://nodejs.org/en/)

# Getting started

- Clone the repository into your local drive

```
git clone  <repository url> <project_name>
```

- Install all the dependencies

```
cd <project_name>
npm install
```

- Run the npm link module

```
npm link
```

- Build and run the project

```
node app.js - command line arguments
For example
node app.js - i "test.txt" .
if the file is in particular folder we have to provide the path like this  node app.js -i "./textfile/Silver Blaze.txt"
if you want to convert the whole folder text file to  html use this command node app.js -i textfile
```

## How Can I Contribute?

### Reporting issue/Bugs

This section guides you through submitting a issue/bug,Following these guidelines helps me and the community to understand your report 📝 in better way.

Before creating bug reports, please check the [issue list](https://github.com/anshul137/ag-ssg/issues) as you might find out that you don't need to create one.
`if issue is not in the list`
When you are creating a new `issue`, please follow these guidelines
Explain the problem and include additional details to so that i can reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps**.
- **Include screenshots and animated GIFs** which show the problem.

### Your Code Contribution

You can start by looking through these [issue list](https://github.com/anshul137/ag-ssg/issues) and start working on it by commenting relevant information on how you are going to solve the issue.

### Pull Requests

Please follow these steps to have your contribution considered

1. Follow all instructions mentioned above and Follow the same `coding style guide`.
2. Create the new `branch` name it according to the which `issue` you are working on. for example if you are working on `issue #14` name your branch as `issue-14`.
3. Fix the issue, and test it locally on your end.
4. After you submit your pull request, wait for the code maintainer to review it.

While the prerequisites above must be satisfied prior to having your pull request reviewed,the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Style Guide

Must use [prettier](https://prettier.io/) to format the `.js` files.

To run  [prettier](https://prettier.io/) using the `npm`  command line on your entire project's source code use this cmd
```
npm run format
```

Must use [esLint](https://eslint.org/)

To run the [esLint](https://eslint.org/) using the `npm` command line on your entire project's source code use this cmd

```
npm run esLint
```

## Testing Guideline

Code that is written needs to be tested to ensure that it achieves the desired behavior. 
We are using [JEST](https://jestjs.io/) to test our code.
Jest is one of Facebook's open-source projects that is both under very active development and is also being used to ship code to everybody on [Facebook.com](https://www.facebook.com).  

### Unit testing

Some of the packages within this project need testing. All the testing file reside in the `root` directory of the project. If the scope of your work requires a unit test, this is where you will write it in. 

It is possible to run the test itself manually to inspect that the new behavior is indeed correct. Here is a small code snippet of how to do just that. This is useful when debugging a failing test. To do so you can follow these steps.

```
npm test
```
To run the test on single file

```
npm test app
```
#### Expected output

```
Test Suites: 2 passed, 2 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        2.058 s, estimated 3 s
Ran all test suites.
```
## Add Additional test
If you work require you create the new test please add the file into the `root` directory of this project.

## Code Conventions

- 2 spaces for indentation (no tabs).
- 80 character line length is strongly preferred.
- Prefer `'` over `"`.
- ES6 syntax when possible.
- Use [TypeScript](https://www.typescriptlang.org/).
- Use semicolons;
- Trailing commas,
- Avd abbr wrds.

## License

By contributing to this project, you agree that your contributions will be licensed under its MIT license.