# Static site Generator (ag-ssg)

DSP909 - Static site generator which converts the.txt file to static .html page. In this version of project we need to create the command line tool which will help to process the .txt file to .html files

## Outline

In this release version user can do the following

1. User can use the command line tool to specify the particular .txt file to convert it into .html file type.
2. User can specify the folder which contains multiple .txt files to convert all of them into a separate .html file type.

## Requirements

-   This tool is built using the [Node.js](https://nodejs.org/en/)

# Getting started

-   Clone the repository into your local drive

```
git clone  <repository url> <project_name>
```

-   Install all the dependencies

```
cd <project_name>
npm install
```

-   Run the npm link module

```
npm link
```

-   Build and run the project

```
node app.js - command line arguments
For example
node app.js - i "test.txt" .
if the file is in particular folder we have to provide the path like this  node app.js -i "./textfile/Silver Blaze.txt"
if you want to convert the whole folder text file to  html use this command node app.js -i textfile
```

## Command line options

Command line option available for User in this tool

| Option                | Detailed Information                      |
| --------------------- | ----------------------------------------- |
| **-v, --version**     | Print the tool's name and current version |
| **-i, --input file**  | Allow users to specify the file           |
| **-h, --help**        | Prints information about usage of tool    |
| **-c, --config file** | Allow user to use tool with config        |

##.txt file for testing
Folder in directory named **textFile** contains all the text file which i have used to test my code.
One extra file is available in the main directory named "test.txt".
Another extra file is called "config.json" and can be used to test `--config` command

## Running the Tool with different commands

| Command type                      | Description                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `node app.js -i <.txt file>`      | Create single .html file                                                                                  |
| `node app.js -i <folder>`         | Create all the .txt file to .html which are available in the folder                                       |
| `node app.js -config <.json file` | Create all the .txt file to .html which are available in the file or folder which specified in the config |

## Optional Feature

In addition to the above feature i have implemented these feature in my site.

-   Improve the look and feel of your generated HTML pages using a default stylesheet that you design.

-   if the user specifies a folder for the input, automatically generate an index.html file, which has relative links to each of the generated HTML files.

## Markdown Support

-   Initial support for the parsing of `.md` files has been added and the tool will now appropriately handle the `# header1` and `## header2` syntax features when a `.md` file is used for data input.
-   Add support for a `horizontal` rule in Markdown. The Markdown `---` should get converted to an `<hr>` tag.

## Language Support

-   Add an option `-l,-- lang` flag, which indicates the language to use when generating the lang attribute on the root `html` element.
-   For example `--lang fr` means the new generated documents will be in French.
-   To use this feature in this app you can use this command `node app.js -l fr -i "./textfile"`. With this you can create the new `html` file in French

## Configuration Support

-   Use option `-c, --config <config-file>` flat, which indicates that the config functionality will be user.
-   Config Supports following fields:
    -   `output` - the output folder (`./dist` by default)
    -   `input` - the input folder/file (`./test.md` by default)
    -   `lang` - the specified language (`en-CA` by default)
-   To use this feature in the app you can use this command `node app.js --config config.json`
