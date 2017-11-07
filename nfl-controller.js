function PlayersController() {
    var apiurl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json"
    var playersService = new PlayersService(apiurl, ready);
    var loading = true; //Start the spinner

    function ready(playersData) {
        loading = false; //stop the spinner

        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

        $('some-button').on('click', function () {
            var teamSF = playerService.getPlayersByTeam("SF");
        })
    }

    //private


    //public


}

