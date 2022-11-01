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