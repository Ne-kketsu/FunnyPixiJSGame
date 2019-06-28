let loader = PIXI.Loader.shared;

loader.add([
    {name: "player", url: "GameAssets/Player.png"},
    {name: "bg", url: "GameAssets/h1-background-remake.png"},
    {name: "enemy", url: "GameAssets/Vautour.svg"},
    {name: "collectibles", url: "GameAssets/Papillon2.svg"},
    ])
    .on("progress", handleLoadProgress)
    .on("load", handleLoadLoadAsset)
    .on("error", handleLoadError)
    .load(handleLoadComplete);

function handleLoadProgress(loader, resource)
{
    console.log(loader.progress + "% loaded.");
}
function handleLoadLoadAsset(loader, resource)
{
    console.log("asset loaded: " + resource.name + " from " + resource.url);
}
function handleLoadError(loader, resource)
{
    console.error("Error: asset load FAILED.");
}

function handleLoadComplete()
{
    setupSprites();
    setupKeys();
    app.ticker.add(delta => gameloop(delta));
}

function setupSprites()
{
    sprites.p_rect = new PIXI.Rectangle(0, 0, 333, 250);
    loader.resources.player.texture.frame = sprites.p_rect;
    sprites.player = new Sprite(loader.resources.player.texture);
    sprites.bg = new Sprite(loader.resources.bg.texture);
    sprites.items = collectibles;
    sprites.timer_t = new Text("TIMER: " + 0, style);
    sprites.timer_t.position.set(app.renderer.screen.width - 350, 100);
    //TODO: Remove set functions by using constructors
    set_background();
    set_player();
    set_items();
    app.stage.addChild(sprites.player.score_t);
    app.stage.addChild(sprites.timer_t);
}