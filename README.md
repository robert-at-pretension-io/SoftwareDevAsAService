# SoftwareDevAsAService
This project is a quick and dirty amalgamation to get up to speed with the following technologies: Angular, OAuth, Cloudflare workers managed by serverless.com YAML config, and github actions.

Github actions will be used for populating the secret keys for the cloudflare serverless functions.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## App So Far
* responsive layout: 

![Responsive](https://github.com/robert-at-pretension-io/SoftwareDevAsAService/blob/main/img/Responsive%20css%20using%20Burma%20Css.gif?raw=true)

* Functioning Login/Logout: 

![Functioning Login Flow](https://github.com/robert-at-pretension-io/SoftwareDevAsAService/blob/main/img/Login%20Flow.gif?raw=true)

## Development server

In order to run this locally, you will need to add the following file to your project:

`auth_config.json`

It should contain your Auth0 client id and domain:

🛠 Populate auth_config.json as follows:

```
{
  "domain": "YOUR_AUTH0_DOMAIN",
  "clientId": "YOUR_AUTH0_CLIENT_ID"
}
```

These credentials can be found in the Auth0 dashboard: https://manage.auth0.com/#/clients




Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Todo
* place/style angular components: ✅
* Add auth0 library and make login page functional: ✅
* Setup Serverless library configuration YAML file for cloudflare workers: *in progress*
* Show the serverless function options on the angular service page (only if logged in)
* Using OAuth access-token, call cloudflare serverless function

