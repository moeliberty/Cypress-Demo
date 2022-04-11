# Cypress Demo

## With Docker

### Construire l'app

`dc up -d --build`

### Lancer l'application

`dc run cypress yarn start`

### Lancer les tests

`dc run cypress yarn cypress run`

### Lancer le Test Runner

`docker-compose -f docker-compose.yml -f cy-open-linux.yml up --exit-code-from cypress`

## Without Docker

You must have yarn installed.

### Construire l'app

`yarn install`

### Lancer le Test Runner

`yarn cypress open`

## Cucumber Preprocessor

1. `yarn add --dev cypress-cucumber-preprocessor`
