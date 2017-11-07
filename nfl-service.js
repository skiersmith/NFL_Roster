var PlayersService = function (endpointUri, callback) {
    var playersData = [];

    this.getPlayersByTeam = function (teamName) {
        // JSON.parse(JSON.stringiify(playersData.pro_team))
    }

    this.getPlayersByPosition = function (position) {
        // JSON.parse(JSON.stringify(playersData.position))
    
    }


    this.addToMyTeam = function (){

    }

    this.removeFromMyTeam = function(){

    }

    function loadPlayersData() {

        //Lets check the localstorage for the data before making the call.
        //Ideally if a user has already used your site 
        //we can cut down on the load time by saving and pulling from localstorage 

        var localData = localStorage.getItem('playersData');
        if (localData) {
            playersData = JSON.parse(localData);
            console.log(playersData)
            return callback();

            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            
            
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            callback()
        });
    }
    loadPlayersData(); //call the function above every time we create a new service
} 