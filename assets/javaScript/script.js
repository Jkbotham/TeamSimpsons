
// http://app.ticketmaster.com/discovery/v2/events.json?&keyword=Minnesota%20Vikings&apikey=uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd&startDateTime=2019-10-23T18:00:00Z&sort=date,asc

$(document).ready(function () {
    var searchedTeamName = "";
    var teamSearch = encodeURI(searchedTeamName);
    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?";
    var ticketMasterApiKey = "uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd";
    var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
    var footballID = "&subGenreId=KZazBEonSMnZfZ7vFE1";
    var keywordSearch = "&keyword=";
    var sortAsc = "&sort=date,asc";
    var sportsDbTeamId = "";

    //Search by id in DBSports API
//     var nflTeams = 
//     {cardinals:"134946", 
//     falcons: "134942", 
//     ravens: "134922",
//     bills: "134918",
//     panthers: "134943",
//     bears: "134938",
//     bengals: "134923",
//     browns: "134924",
//     cowboys: "134934",
//     broncos: "134930",
//     lions: "134939",
//     packers: "134940",
//     texans: "134926",
//     colts: "134927",
//     jaguars: "134928",
//     chiefs: "134931",
//     chargers: "135908",
//     rams: "135907",
//     dolphins: "134919",
//     vikings: "134941",
//     patriots: "134920",
//     saints: "134944",
//     giants: "134935",
//     jets: "134921",
//     raiders: "134932",
//     eagles: "134936",
//     steelers: "134925",
//     fortyNiners: "134948",
//     seahawks: "134949",
//     buccaneers: "134945",
//     titans: "134929",
//     redskins: "134937",
// };


$(".teamBtn").on("click", function(){
    console.log($(this).text());
    searchedTeamName = $(this).text()

    console.log(teamSearch);


    console.log($(this).attr("data-sportsDb"));
    sportsDbTeamId = $(this).attr("data-sportsDb");

    sportsDbCall();
    ticketMasterCall();
})

function ticketMasterCall(){

    $.ajax({
        type: "GET",
        url: proxy + ticketMasterURL,
        async: true,
        dataType: "json",
        data: "apikey=" + ticketMasterApiKey + footballID + sortAsc + keywordSearch + searchedTeamName,
        timeout: 2000,
        success: function (response) {

            var stadiumImg = response._embedded.events[0]._embedded.venues[0].images[0];
            console.log(response);
            console.log(response._embedded.events[0]);

            var parkingDetails = response._embedded.events[0]._embedded.venues[0].parkingDetail;
            console.log(parkingDetails);
            //Team Logos 
        
            //Team Records
            

            // Objects we are going to use in the site
            //TM// Ticket Adress -- response. 
            // console.log()
            //TM// Stadium Name -- response. 
            console.log(response._embedded.events[0]._embedded.venues); //Can't get specific name.
            $("#stadium").text(response._embedded.events[0]._embedded.venues[0].name)
            $("#address").text(response._embedded.events[0]._embedded.venues[0].address.line1 + ", " + response._embedded.events[0]._embedded.venues[0].city.name + ", " + response._embedded.events[0]._embedded.venues[0].state.stateCode + " " + response._embedded.events[0]._embedded.venues[0].postalCode)
            // $("#venue").attr("href", response._embedded.events[0]._embedded.venues[0].url)

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

};


    // https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=Vikings&locale=*&subGenreId=KZazBEonSMnZfZ7vFE1&sort=date,asc



// SPORTS DB AJAX CALL

    var DBAPIKey = "1";

    function sportsDbCall(){
    var queryURL = "https://www.thesportsdb.com/api/v1/json/" + DBAPIKey + "/lookupteam.php?id=" + sportsDbTeamId;
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(responseDB) {
        console.log(responseDB);
        // Stadium image 
        $("#stadiumImg").attr("src", responseDB.teams[0].strStadiumThumb);
        //PULL TEAM LOGO (LINK)//
        console.log(responseDB.teams[0].strTeamBadge);

        //PULL TEAM TWITTER
        console.log(responseDB.teams[0].strTwitter);

        //PULL TEAM WEBSITE
        console.log(responseDB.teams[0].strWebsite);

        //PULL TEAM FACEBOOK
        console.log(responseDB.teams[0].strFacebook);

        //PULL TEAM INSTAGRAM
        console.log(responseDB.teams[0].strInstagram);
    });
};


});
