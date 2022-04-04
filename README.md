### Construire l'app 

`dc up -d --build`  

### Lancer l'application 

`dc run cypress yarn start`

### Lancer les tests

`dc run cypress yarn cypress run`

### Lancer le Test Runner

`docker-compose -f docker-compose.yml -f cy-open-linux.yml up --exit-code-from cypress`
