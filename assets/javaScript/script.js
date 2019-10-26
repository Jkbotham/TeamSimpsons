
// http://app.ticketmaster.com/discovery/v2/events.json?&keyword=Minnesota%20Vikings&apikey=uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd&startDateTime=2019-10-23T18:00:00Z&sort=date,asc

$(document).ready(function () {
    var teamName = "Minnesota Vikings";
    var teamSearch = encodeURI(teamName);
    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?";
    var apiKey = "uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd";
    var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

    $.ajax({
        type: "GET",
        url: proxy + ticketMasterURL,
        async: true,
        dataType: "json",
        data: "keyword=" + teamSearch + "&apikey=" + apiKey,
        timeout: 2000,
        success: function (response) {
            console.log(response);
            console.log(response._embedded.events[0]);
            //Team Logos 
            //Team Records

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
            // console.log() 
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