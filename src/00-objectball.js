//*gameObject function that returns the entire object for this lab*//
function gameObject() {
  return {
    home: {
      teamname: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          stats: {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamdunks: 1,
          },
        },
        "Reggie Evans": {
          stats: {
            number: 30,
            shoe: 14,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamdunks: 7,
          },
        },
        "Brook Lopez": {
          stats: {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamdunks: 15,
          },
        },
        "Mason Plumlee": {
          stats: {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamdunks: 5,
          },
        },
        "Jason Terry": {
          stats: {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamdunks: 1,
          },
        },
      },
    },

    away: {
      teamname: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          stats: {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamdunks: 2,
          },
        },
        "Bismak Biyombo": {
          stats: {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamdunks: 10,
          },
        },
        "DeSagna Diop": {
          stats: {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamdunks: 5,
          },
        },
        "Ben Gordon": {
          stats: {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamdunks: 0,
          },
        },
        "Brendan Haywood": {
          stats: {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamdunks: 12,
          },
        },
      },
    },
  };
}

///* Function to return home team name *///
function homeTeamName() {
  let obj = gameObject();
  return obj["home"]["teamname"];
}

///* Determines number of points scored by a specific player and returns the value *///
function numPointsScored(playerName) {
  let pointsArray; ///Defines a variable to store points
  const obj = gameObject(); ///Defines variable that stores the entire game object

  //Recursive function to search for the player
  function findPlayerPoints(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == playerName) {
        points = item[key]["stats"]["points"]; ///Saves the player's points to points variable
        break;
      } else {
        findPlayerPoints(item[key]); //Runs the function again until a match is found
      }
    }
  }
  findPlayerPoints(obj);
  return points; //returns the value of points
}

///*Function takes in player name and returns shoe size*///
function shoeSize(playerName) {
  let shoe; ///Defines an variable to store shoe size
  const obj = gameObject(); ///Defines variable that stores the entire game object

  //Recursive function to search for the player
  function findPlayerShoe(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == playerName) {
        shoe = item[key]["stats"]["shoe"]; ///Stores shoe size of player
        break;
      } else {
        findPlayerShoe(item[key]);
      }
    }
  }
  findPlayerShoe(obj);
  return shoe; //returns the value of shoe size
}

///* Function takes in team name and returns array of team colors *///
function teamColors(teamName) {
  let colors; ///Defines a variable to store the colors array
  const obj = gameObject(); ///Defines variable that stores the entire game object

  //Recursive function to search for the team name
  function findTeamColors(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (item[key] == teamName) {
        colors = item["colors"]; //Stores the colors in colors variable
        break;
      } else {
        findTeamColors(item[key]);
      }
    }
  }
  findTeamColors(obj);
  return colors;
}

///* Function returns the team names from the game object *///
function teamNames(obj) {
  let teamNamesArr = []; //Declares an empty array to store the team names

  //Recursive function to find all team names, push them to the teamNamesArray then return the array
  function findTeamNames(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key === "teamname") {
        teamNamesArr.push(item["teamname"]);
        break;
      } else {
        findTeamNames(item[key]);
      }
    }
  }
  findTeamNames(obj);
  return teamNamesArr;
}

///*Function that takes in team name and returns array of jersey numbers*///
function playerNumbers(teamName) {
  let jerseyNumbersArray = [];
  const obj = gameObject();

  //Determine whether the team is home or away, for easier recursion
  let homeOrAway;
  if (obj.home.teamname == teamName) {
    homeOrAway = "home";
  } else if (obj.away.teamname == teamName) {
    homeOrAway = "away";
  } else {
    return "Team is not playing today";
  }

  ///*Function that uses recursion to search for jersey numbers for the team and pushes them to the array *///
  function findJerseyNumbers(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == ["number"]) {
        jerseyNumbersArray.push(item["number"]);
      } else {
        findJerseyNumbers(item[key]);
      }
    }
  }
  findJerseyNumbers(obj[homeOrAway]["players"]); //passes the players object to the function
  return jerseyNumbersArray;
}

///*Function that takes in player name and returns the player's stats*///
function playerStats(playerName) {
  let stats;
  const obj = gameObject();
  function findPlayerStats(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == playerName) {
        stats = item[key]["stats"];
        break;
      } else {
        findPlayerStats(item[key]);
      }
    }
  }
  findPlayerStats(obj);
  return stats;
}

///*Function that gets largest shoe,associates with player and gets their rebounds*///
function bigShoeRebounds() {
  let shoeSizesArr = [];
  const obj = gameObject();

  ///Uses recursion to get all shoe sizes and push them to the shoeSizesArr array
  function findAllShoeSizes(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == "shoe") {
        shoeSizesArr.push(item["shoe"]);
      } else {
        findAllShoeSizes(item[key]);
      }
    }
  }
  findAllShoeSizes(obj);
  const largestShoeSize = Math.max(...shoeSizesArr); //Get largest size from the array

  //function that uses recursion to compare the largest shoe size among all players and match it to a player, then stores their rebound in the rebounds variable//
  let rebounds;
  function findRebounds(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == "shoe" && item[key] == largestShoeSize) {
        //This checks only shoe size
        rebounds = item["rebounds"];
      } else {
        findRebounds(item[key]);
      }
    }
  }
  findRebounds(obj);
  return rebounds;
}

///*Function that gets most points associated with player and returns their name*///
function mostPointsScored() {
  let pointsScoredArr = [];
  const obj = gameObject();

  //Uses recursion to get all points scored and push them to the pointsScoredArr array
  function findAllPointsScored(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == "points") {
        pointsScoredArr.push(item["points"]);
      } else {
        findAllPointsScored(item[key]);
      }
    }
  }
  findAllPointsScored(obj);
  const HighestPoints = Math.max(...pointsScoredArr); //Get largest size from the array

  //function that uses recursion to compare the highest points scored among all players and match it to a player, then saves it to bestPlayer variable*//
  let bestPlayer;
  function findName(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (
        item[key]["stats"] &&
        item[key]["stats"]["points"] == HighestPoints
      ) {
        bestPlayer = key;
      } else {
        findName(item[key]);
      }
    }
  }
  findName(obj);
  return bestPlayer;
}

///*Function to get the winning team*///
function winningTeam() {
  const obj = gameObject();

  //declaring home and away scored as zero so as to increment them later
  let pointsScoredHome = 0;
  let pointsScoredAway = 0;

  //Function utilizes recursion to increment home points
  function findAllPointsScoredHome(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == "points") {
        pointsScoredHome += item[key]; //increment home points when encountered in the loop
      } else {
        findAllPointsScoredHome(item[key]); //recursion
      }
    }
  }
  //Utilizes recursion to increment away points
  function findAllPointsScoredAway(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == "points") {
        pointsScoredAway += item[key]; //increment home points when encountered in loop
      } else {
        findAllPointsScoredAway(item[key]);
      }
    }
  }
  findAllPointsScoredHome([obj.home]);
  findAllPointsScoredAway([obj.away]);

  let winner;
  pointsScoredHome > pointsScoredAway
    ? (winner = "Home team won")
    : (winner = "Away team won");
  return winner;
}

///*Function to get player with longest name *///
function playerWithLongestname() {
  const obj = gameObject();
  let playerArr = [];

  //The function utilizes recursion to push all player names to the playerArr array
  function findPlayerName(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (item[key]["stats"]) {
        playerArr.push(key);
      } else {
        findPlayerName(item[key]);
      }
    }
  }
  findPlayerName(obj); //Runs/calls the recursive function and passes game object as parameter
  const playerArrLengths = playerArr.map((item) => item.length); //New array with the name lengths
  const longestLength = Math.max(...playerArrLengths); //Gets longest name based on length
  const indexOfLongestLength = playerArrLengths.indexOf(longestLength); //Gets index of that name
  const longestPlayerName = playerArr[indexOfLongestLength]; //stores the name in that index
  return longestPlayerName;
}

///*Function to return true if player with longest name has most steala *///
function doesLongNameStealATon() {
  const longNamePlayer = playerWithLongestname(); ///Utilizes the already defined previous function
  const obj = gameObject();
  let stealsArr = [];

  //Recursion used to push all steals to the stealsArr
  function findAllSteals(item) {
    for (const key in item) {
      if (typeof item != "object") {
        continue;
      } else if (key == "steals") {
        stealsArr.push(item["steals"]);
      } else {
        findAllSteals(item[key]);
      }
    }
  }
  findAllSteals(obj); //Runs the recursive function with game object as parameter
  const highestSteals = Math.max(...stealsArr); //Get highest steals in the array

  //The conditionals below first check if the player is available,home or away then compare their steals with the highest steals value. It then returns a true or false value//
  if (
    obj.home.players[longNamePlayer] &&
    obj.home.players[longNamePlayer]["stats"]["steals"] == highestSteals
  ) {
    return true;

  } else if (
    obj.away.players[longNamePlayer] &&
    obj.away.players[longNamePlayer]["stats"]["steals"] == highestSteals
  ) {
    return true;
    
  } else {
    return false;
  }
}
