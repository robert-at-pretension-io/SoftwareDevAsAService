# SoftwareDevAsAService
This project is a quick and dirty amalgamation to get up to speed with the following technologies: Angular, OAuth, Cloudflare workers managed by serverless.com YAML config, and CI/CD with github actions


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

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




Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Todo
* place/style angular components: :check_mark:
* Add auth0 library and make login page functional: *in progress*
* Setup Serverless library configuration YAML file
* Show the serverless function options on the angular service page (only if logged in)
* Using OAuth access-token, call cloudflare serverless function
* Use RXJs to listen for response from serverless function and update page accordingly