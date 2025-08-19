# Joecdev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

This is my portfolio website codebase.

## Install dependencies

Run `npm i --legacy-peer-deps`

## fIx lottie dependency bug(node_modules)
// Old import (deprecated in Angular 15+)
import { makeStateKey } from '@angular/platform-browser';

// New import (Angular 15+)
import { makeStateKey } from '@angular/core';


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
