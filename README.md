# Responsive Test-Driven Development

A skeletal project for learning test-driven development

This repository is originally from James Shore's "faster, more effective TDD" workshop.


## Prerequisites

You need the following programs to use this repository:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)


## Running the Program

Here are all the commands that are available:

* `./run.sh`: Run the program.
* `./build.sh`: Run the build script, which will automatically lint the code and run its tests.
* `./watch.sh quick`: Run the build script on files that have changed, and re-run it every time a file changes. On MacOS, it will also play a sound indicating build success or failure.
* `./clean.sh`: Delete files created by the build.


## Writing the Program

Here are the main facts:

* The program is written in JavaScript and uses Node.js.
* The test framework is [Mocha](https://mochajs.org/).
* The assertion library is [Chai](https://www.chaijs.com/).
* Source code is in the `src/` folder.
* Tests are run from the `src/` folder. They must start with an underscore and end with `_test`, like this: `src/_score_test.js`.
* Build infrastructure is in the `build/` folder. You can ignore it.

