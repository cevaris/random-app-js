# random-app


## Deploy 

    # backend API
    git push heroku master

    # frontend 
    cd app 
    npm run deploy

## Develop

    # backend API
    tsc -w
    npm run dev

    # frontend 
    cd app
    ionic serve

http://localhost:8080/random/choose.json?data=test,other,news
http://localhost:8080/random/number.json?min=10&max=10
http://localhost:8080/random/string.json?length=100