# LoreQuiz Project
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
#### This project is not fully optimized for mobile devices... yet. 
This is my first portfolio project. It is a quiz app about League of Legends lore.
When starting a quiz, the application fetches 10 random questions from the database (new questions are added all the time!), 
and then shows the user his result, compares it with the results of others, and also gives the opportunity to check the correct answers.
You can see this app in action [here.](https://lore-quiz.vercel.app)

## Technologies
This app was made using:
* NextJS
* React Context API
* MongoDB

Also, for quick and efficient transport of questions to the database, I created [this NodeJS app](https://github.com/KubiakD/Excel-data-parser) that reads and processes an Excel file, and then sends the read data to the database. 

## Setup
To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm run dev
```
