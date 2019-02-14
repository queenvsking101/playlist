/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "colors" ,
    "water guns",
    "without you",
    "dont judge me",
    "doll hairs"
    ];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var image_links = [
    "https://i.ytimg.com/vi/ZH0v-ODwRqo/hqdefault.jpg",
    "https://i.makeagif.com/media/9-20-2016/-9I4-Y.gif",
    "https://i.ytimg.com/vi/ap-_qnYG3j4/hqdefault.jpg",
    "https://media.giphy.com/media/FjyIHVYEQmHlK/giphy.gif", 
    "https://1.bp.blogspot.com/-4BMw9ox8q1c/Wr6LAZ8E5FI/AAAAAAADG_Q/Dn3biBTJxIsMp2ExgJnSSHklLj-OrmEGQCLcBGAs/s1600/150.gif"
    ];
var artists = [
    "todrick hall",
    "todrick hall",
    "chris brown",
    "chris brown",
    "todrck hall"
    
    
    ];
var song_length = [
    "3:03",
    "3:50",
    "4:27",
    "4:00",
    "5:26"
    
    ];
    
var link = [
    "https://www.youtube.com/watch?v=8WBAinat0pA" ,
    "https://www.youtube.com/watch?v=HuG1b3PCH7I",
    "https://www.youtube.com/watch?v=wP9qvVcdsC0",
    "https://www.youtube.com/watch?v=xXgMv4ygPgU",
    "https://www.youtube.com/watch?v=4uEu8lWAHDU"
    ];
var date = [
    "2016",
    "2017",
    "2010",
    "2012",
    "2018"
    
    ];


    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo(){
songs.forEach(function(mysongs){
       $("#songs").append("<p>"+mysongs+"</p>");
    
    
});
image_links.forEach(function(myimages){
       $("#images").append("<p> <img src='"+ myimages +  "'> </p>");
    
    
});
 artists.forEach(function(myartists){
       $("#artists").append(" <p>"+myartists+"</p>");
    
    
});
song_length.forEach(function(mylength){
       $("#lengths").append("<p>"+mylength+"</p>");
    
    
});
link.forEach(function(mylinks){ 
       $("#links").append("<p> <a href = ' " +mylinks+ "'>Listen now</a> </p>");
    
    
});

date.forEach(function(mydates){
   $("#dates").append("<p>"+mydates+"</p>")
});


}
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    $("#dates").empty();


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
   var newsong =$("#song").val();
   var newimage =$("#image").val();
   var newartist =$("#artist").val();
   var newlength =$("#length").val();
   var newlink = $("#link").val();
   var newdate = $("#date").val();
    
   songs.push(newsong);
   image_links.push(newimage);
   artists.push(newartist);
   song_length.push(newlength);
   link.push(newlink);
   date.push(newdate);
   
   
   
   
   
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    $()
});

displaySongInfo();

$("#delete").click(function(){
    var userchoice = $("#deletes").val();
    songs.splice(userchoice,1);
    image_links.splice(userchoice,1);
    artists.splice(userchoice,1);
    song_length.splice(userchoice,1);
    link.splice(userchoice,1);
    date.splice(userchoice,1);
    
      emptySongInfo();
    displaySongInfo();
});