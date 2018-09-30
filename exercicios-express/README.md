> npm i -y
> npm i --save express
> npm i --save-dev nodemon // just for development

> nodemon index.js  
OR
> npm run start
OR
> npm start

PM2 para ambiente de produção
> npm i --save pm2   // ou global, acrescentando -g  > npm i --save pm2 -g
> npm run production
> pm2 monit // to monitoring
> pm2 status // to see just info on table
> pm2 show 0 // to show details from the application id 0, for example
> pm2 restart 0 // to restart the app id 0, for example
> pm2 restart appx-backend // to restart the app named appx-backend, for example
> pm2 stop 0 // to stop the app id 0, for example
> pm2 kill // to kill the pm2 instance

> npm i --save body-parser