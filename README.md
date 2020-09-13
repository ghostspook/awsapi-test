# awsapi-test

## Project setup
```
npm install
```

In order to use it, create a new `.env` file and add the api base URL:
```
VUE_APP_ROOT_API=https://my-api-server.com/api/
```

The api should implement the following end point:

```
GET $VUE_APP_ROOT_API/dummy/
```

It should enable CORS and return this json object:

```
{
    "name": "any name you want"
}
```



### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
