var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 120},
          { type: "sawblade", x: 700, y: groundY - 120},
          { type: "sawblade", x: 900, y: groundY - 120},
          { type: "enemy", x: 800, y: groundY - 50, image: "img/bowser.png", moveX: -75, moveY: -150, velocity: -4, scaleX: 0.25, scaleY: 0.25},
          { type: "enemy", x: 1800, y: groundY - 50, image: "img/bowser2.png", moveX: -130, moveY: -150, velocity: -4, scaleX: 0.10, scaleY: 0.10},

          { type: "reward", x: 1000, y: groundY - 75},          
          { type: "marker", x: 2500, y: groundY },

        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
