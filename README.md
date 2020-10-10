# Random App

Playground for messing with random bits of data using Ionic React.

Production: https://randomapp-b753b.web.app

## Deploy

    # deploy API
    git push heroku master

    # deploy frontend
    cd app && npm run deploy

**Production API**
    
- https://stormy-cliffs-90695.herokuapp.com/random/choose.json?data=test,other,news
- https://stormy-cliffs-90695.herokuapp.com/random/number.json?min=-10&max=10
- https://stormy-cliffs-90695.herokuapp.com/random/string.json?length=100


## Develop

    # backend API
    tsc -w
    npm run dev

    # frontend 
    cd app
    ionic serve

**Local API**

- http://localhost:8080/random/choose.json?data=test,other,news
- http://localhost:8080/random/number.json?min=-10&max=10
- http://localhost:8080/random/string.json?length=100