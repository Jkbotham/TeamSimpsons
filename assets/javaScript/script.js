
// http://app.ticketmaster.com/discovery/v2/events.json?&keyword=Minnesota%20Vikings&apikey=uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd&startDateTime=2019-10-23T18:00:00Z&sort=date,asc

$(document).ready(function () {
    var teamName = "Minnesota Vikings";
    var teamSearch = encodeURI(teamName);
    var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?";
    var apiKey = "uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd";
    var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
    var footballID = "&subGenreId=KZazBEonSMnZfZ7vFE1";
    var keywordSearch = "&keyword=";
    var sortAsc = "&sort=date,asc"

    $.ajax({
        type: "GET",
        url: proxy + ticketMasterURL,
        async: true,
        dataType: "json",
        data: "apikey=" + apiKey + footballID + sortAsc + keywordSearch + teamSearch,
        timeout: 2000,
        success: function (response) {
            console.log(response);
            console.log(response._embedded.events[0]);
            //Team Logos 
            //Team Records

            // Objects we are going to use in the site
            //TM// Ticket Adress -- response. 
            // console.log()
            // //TM// Stadium Name -- response. 
            // console.log()
            // //TM// Game Date  -- response.  dates.start.localDate 
            // console.log()
            // //TM// Game Time  -- response.  dates.start.localTime 
            // console.log()
            // //TM// Ticket Pricing Range  -- response.
            // console.log() 
            // //TM// Entry Information  -- response. 
            // console.log()
            // //TM// Parking Information -- response. 
            // console.log()
        
    
        },
        error: function (xhr, status, err) {
            console.log(xhr, status, err);
        }
    });




    // https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=Vikings&locale=*&subGenreId=KZazBEonSMnZfZ7vFE1&sort=date,asc



    });