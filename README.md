# Sportsball 9000

We at Team Simpsons decided to give the sports enthusiasts an app that would make their life less stressful when it comes to following their favorite football team and having the ability to go watch them in person.  Sportsball 9000 allows the user to search their favorite football team and also gives them up-to-date ticket information.

## Motivation

Sportsball 9000 provides a uniquely immersive and all-encompassing experience that will completely revolutionize the way you experience the National Football League.

## How to use? 

The user will be able to utilize the NFL team tab to select any one of the 32 teams.  From there, they will be able to use our site as a resource to learn more about each team (including stadium information, parking, date of games, price range, and entry information).  Our website is unique in its dual functionality as both an informational database and as a ticket vendor.


## Screenshots

<!-- Need to include some images of the website working -->
Below is the website on a proper readme file and how to link screenshoots.
<!-- https://ghost.org/blog/markdown/  -->

## Tech/framework used

Built with HTML5, css, Google Fonts, Bootstrap, and font awesome.  <br>
APIs used: [The Sports DB API](https://www.thesportsdb.com/api/v1/json/) and [TicketMaster API](https://app.ticketmaster.com/discovery/v2/events.json?)

## Features
Our website produces ticket information such as price range, parking info, stadium entry guidelines.

## Code Example
<!-- include the API get commands, describe exactly what they do -->

<!-- The code below utilizes ticketMaster's API to pull an NFL team, and it's ticket information including price range, enrty info, and date   -->

```$.ajax({
        type: "GET",
        url: proxy + ticketMasterURL,
        async: true,
        dataType: "json",
        data: "apikey=" + ticketMasterApiKey + footballID + sortAsc + keywordSearch + teamSearch,
        timeout: 2000,
        success: function (response) {
            console.log(response);
            console.log(response._embedded.events[0]);```


<!-- Exact description of what the code below does -->
$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(responseDB) {
        console.log(responseDB);```
```
## API Reference
 
 [The Sports DB API](https://www.thesportsdb.com/api/v1/json/) <br>
 [TicketMaster API](https://app.ticketmaster.com/discovery/v2/events.json?)

## Credits

- James Bothham 
- Henry Johnson
- Keith Kleinschmidt
- Brooke Kumar
- Richard Tshabalala
