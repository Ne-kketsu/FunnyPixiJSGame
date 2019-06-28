const canvas = document.getElementById("mycanvas");
let _w = window.innerWidth;
let _h = window.innerHeight;


//Main PIXI Application
const app = new PIXI.Application({
    view: canvas,
    width: _w,
    height: _h,
});

//Game Objects
const sprites = {};
const collectibles = {};

console.log(PIXI.utils.TextureCache);