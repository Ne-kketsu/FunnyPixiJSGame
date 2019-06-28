//Tools
let delta = 0;

let style = new Style({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }