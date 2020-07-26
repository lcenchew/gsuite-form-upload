[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lcenchew/dev-container-gas)
# G-Suite Google Form File Upload - Google Apps Script
A simple setup for file upload using the file upload in Google Forms.

## Quick Start

- See [Using Clasp](#using-clasp) to login, create or clone a project
- Push code to project `clasp push`
- For first time only, go to [Script Editor](https://script.google.com/) to open your project and run `createFormSubmitTrigger` from `createFormSubmitTrigger.js`
- Go to the form to create the file upload item to the form. (still unable to [add programatically](https://stackoverflow.com/questions/59400692/)) 
- If needed, create other form content by running `setupForm` from `setupForm.js` in the Script Editor

## Clasp

- https://github.com/google/clasp
- https://developers.google.com/apps-script/guides/clasp

### Using Clasp

Login the user
```
clasp login --no-localhost
```

Create a new Project
```
clasp create --title "File-Upload" --type forms --rootDir ./src
```

Clone and work on an existing project
```
clasp clone "*******" --rootDir ./src
```

Watch and push code when saved
```
clasp push --watch
```

Edit (if need to)
- .clasp.json
```
"rootDir": "./src"
```
- appsscript.json
```
"timeZone": "Asia/Singapore"
```

### other useful commands

Open in the script editor
```
clasp open
```

## VS Code

Preamble
- Install Docker Desktop if not installed
- Install the Remote Development extension pack in VS Code
- Run Docker Desktop
- Open repo folder with VS Code using *Run Remote-Containers: Open Folder in Container...*

Container composition
- using this [Dockerfile](https://github.com/microsoft/vscode-dev-containers/blob/master/containers/typescript-node-12/.devcontainer/Dockerfile)
- `FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:12`

## Gitpod

- Click on this button [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/lcenchew/dev-container-gas)
- Sign in with yout Github account to start

Container conposition
- `FROM gitpod/workspace-full` [Dockerfile](https://github.com/gitpod-io/workspace-images/blob/master/full/Dockerfile)
- `FROM buildpack-deps:focal` [Dockerfile](https://github.com/docker-library/buildpack-deps/blob/master/ubuntu/focal/Dockerfile)
- Ubuntu Focal based
