# Budget-Tracker

<img src='public/assets/budget.PNG' alt='Budget Tracker'>

## Description

An application to demonstrate the use of indexedDB as a tool of progressive web applications.

When you open this application, you will be able to add and subtract money from your budget. If you go offline at any point your transactions will still be reflected on the graph and they will also be saved in indexedDB. When you come back online those transactions will go through and be stored in either Atlas db (if using deployed link) or your Robo3T Mongo db if you're using localhost.

## Table of Contents

- [Installation](https://github.com/kas1330/Budget-Tracker#installation)

- [Usage](https://github.com/kas1330/Budget-Tracker#usage)

- [License](https://github.com/kas1330/Budget-Tracker#license)

- [Contributions](https://github.com/kas1330/Budget-Tracker#contributions)

- [Testing](https://github.com/kas1330/Budget-Tracker#testing)

- [Questions](https://github.com/kas1330/Budget-Tracker#questions)

- [Repo](https://github.com/kas1330/Budget-Tracker#repo)

- [Deployed](https://github.com/kas1330/Budget-Tracker#deployed)

## Installation

Use git clone to copy the repository to your computer. You should then be able to npm install all the needed packages. Then use node server.js to launch the app. You should now be able to view it if you go to localhost:3000 in your browser. Or you can use the link to the deployed app.

## Usage

This purpose of this app is to demonstrate demonstrate the use of indexedDB as a tool of progressive web applications.

## License

MIT

## Contributions

Submit a pull request.

## Testing

The easiest way to test the function of the application would be to click on the link to the deployed app on Heroku. You should be able to Add and subtract money and see your amounts populate on the chart. To make sure the offline functionality works, go to your developer tools, click on Application, then click on Service Worker, check the box that says offline. The app should continue functioning the exact same way it had before that. The more difficult way to test would be to git clone the repository and npm install all packages. Then go to the terminal and type in node server.js, you should see "APP running on PORT 3000!". Go to your browser and type in "localhost:3000", this will launch the app, and you should be able to follow the same steps as the deployed version to test the app.

## Questions

https://github.com/kas1330

k.sexton804@gmail.com

## Repo

https://github.com/kas1330/Budget-Tracker

## Deployed

https://budget-tracker234.herokuapp.com/
