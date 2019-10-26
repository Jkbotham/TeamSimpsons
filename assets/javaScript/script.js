
//   var lyric = "plowing over mailboxes";

//   var lyricsSearch = encodeURI(lyric);
//   var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

//   var getLyricUrl =  "https://api.musixmatch.com/ws/1.1/track.search";
//   var apiKey = "28e8336b7ccf4b5261bf290e9cfc6874";

//   $.ajax({
//     type: "GET",
//     url: proxy + getLyricUrl,
//     dataType: 'json',
//     data: "q_lyrics=" + lyricsSearch + "&apikey=" + apiKey,
//     timeout: 2000,
//       success: function(response, textStatus) {
//           if (response.message.body.track_list[0]){
//             var firstTrack = response.message.body.track_list[0].track;
//             var trackName = firstTrack.track_name;
//             var artist = firstTrack.artist_name;
//             var album = firstTrack.album_name;

//             $("#song").html(trackName + " by " + artist + ", off the '" + album + "' album?");
//           }
//           else{
//             $("#song").html("Could not find song with <br/>'" + decodeURI(lyricsSearch) + "'");
//           }
//       },
//       error: function(XMLHttpRequest, textStatus, errorThrown) {
//         $("#song").html("Issue Reaching Server");
//       }
//     });



$(document).ready(function () {
var teamName = "Minnesota Vikings";
var teamSearch = encodeURI(teamName);
var ticketMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?";
var apiKey = "uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd";
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

// http://app.ticketmaster.com/discovery/v2/events.json?&keyword=Minnesota%20Vikings&apikey=uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd&startDateTime=2019-10-23T18:00:00Z&sort=date,asc

$.ajax({
    type: "GET",
    url: proxy + ticketMasterURL,
    async: true,
    dataType: "json",
    data: "keyword=" + teamSearch + "&apikey=" + apiKey,
    timeout: 2000,
    success: function (response) {
        console.log(response);

    },
    error: function (xhr, status, err) {
        console.log(xhr, status, err);
    }
});

// http://app.ticketmaster.com/discovery/v2/events.json?&keyword=Minnesota%20Vikings&apikey=uc6FKMGBBMGcsjNBIjHKvpNkXv2pkFhd&startDateTime=2019-10-23T18:00:00Z&sort=date,asc
});
