# Server back end challenge ixPandit
### por Enrique Abramzon


## Envinroment setup

1) Create database mySql
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate

```
no se utilizan seeders, la primera vez que levanta el servidor carga la db desde la api

el proxi de react esta apuntado al puerto 4000 para el servidor, en caso de necesitar cambiar el puerto se debe modificar el puerto en el json de react





## Start local server

``` bash
npm start
or 
npm run dev  
```
