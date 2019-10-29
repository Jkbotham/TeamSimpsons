
// http://app.ticketmaster.com/discovery/v2/events.json?&keyword=Minnesota%20Vikings&apikey=uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd&startDateTime=2019-10-23T18:00:00Z&sort=date,asc

$(document).ready(function () {
    var teamName = "Minnesota Vikings";
    var teamSearch = encodeURI(teamName);
    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?";
    var ticketMasterApiKey = "uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd";
    var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
    var footballID = "&subGenreId=KZazBEonSMnZfZ7vFE1";
    var keywordSearch = "&keyword=";
    var sortAsc = "&sort=date,asc"

    //Search by id in DBSports API
    var nflTeams = 
    {cardinals:"134946", 
    falcons: "134942", 
    ravens: "134922",
    bills: "134918",
    panthers: "134943",
    bears: "134938",
    bengals: "134923",
    browns: "134924",
    cowboys: "134934",
    broncos: "134930",
    lions: "134939",
    packers: "134940",
    texans: "134926",
    colts: "134927",
    jaguars: "134928",
    chiefs: "134931",
    chargers: "135908",
    rams: "135907",
    dolphins: "134919",
    vikings: "134941",
    patriots: "134920",
    saints: "134944",
    giants: "134935",
    jets: "134921",
    raiders: "134932",
    eagles: "134936",
    steelers: "134925",
    fortyNiners: "134948",
    seahawks: "134949",
    buccaneers: "134945",
    titans: "134929",
    redskins: "134937",
};

    $.ajax({
        type: "GET",
        url: proxy + ticketMasterURL,
        async: true,
        dataType: "json",
        data: "apikey=" + ticketMasterApiKey + footballID + sortAsc + keywordSearch + teamSearch,
        timeout: 2000,
        success: function (response) {
            console.log(response);
            console.log(response._embedded.events[0]);
<<<<<<< HEAD
            //Team Logos 
        
            //Team Records
=======
            
>>>>>>> 8f4a3bb751666e071dfb283032a21eee173dc4f2

            // Objects we are going to use in the site
            //TM// Ticket Adress -- response. 
            // console.log()
            //TM// Stadium Name -- response. 
            console.log(response._embedded.events[0]._embedded.venues); //Can't get specific name.
            //TM// Game Date    
            console.log(response._embedded.events[0].dates.start.localDate);
            //TM// Game Time  
            console.log(response._embedded.events[0].dates.start.localTime);
            //TM// Ticket Pricing Range  -- response.
            console.log(response._embedded.events[0].priceRanges);
            //TM// Entry Information  -- response. 
            console.log(response._embedded.events[0]._embedded.venues[0].generalInfo.generalRule);
            //TM// Parking Information -- response. 
            console.log(response._embedded.events[0]._embedded.venues[0].parkingDetail);


        },
        error: function (xhr, status, err) {
            console.log(xhr, status, err);
        }
    });




    // https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=Vikings&locale=*&subGenreId=KZazBEonSMnZfZ7vFE1&sort=date,asc



});
<<<<<<< HEAD
    var APIKey = "1";
    var queryURL = "https://www.thesportsdb.com/api/v1/json/" + APIKey + "/lookupteam.php?id=134941";
=======

// SPORTS DB AJAX CALL

$(document).ready(function() {
    var DBAPIKey = "1";
    var teamID = "134941"
    var queryURL = "https://www.thesportsdb.com/api/v1/json/" + DBAPIKey + "/lookupteam.php?id=" + teamID;
>>>>>>> 8f4a3bb751666e071dfb283032a21eee173dc4f2
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(responseDB) {
        console.log(responseDB);

        //PULL TEAM LOGO (LINK)//
        console.log(responseDB.teams[0].strTeamBadge);

        //PULL TEAM 
    });
});

