//Aliases
let Application = PIXI.Application,
    Sprite = PIXI.Sprite;
    Text = PIXI.Text;
    Style = PIXI.TextStyle;

//Main Loop
function gameloop(delta)
{
    sprites.timer_t.text = "TIMER: " + (Math.floor(performance.now()) / 1000);
    
    collectibles_control();
    bg_control();
    player_interactions();
}

//Control functions details
function collectibles_control()
{
    let items = sprites.items;
    let tab = sprites.items.tab;
    items.vx = -15;
    delta += Math.random();

    for (let i = 0; i < items.nbr; i += 1) {
        if (tab[i].x <= - items.screen_offset || tab[i].is_taken) {
            tab[i].x = app.renderer.screen.width +  items.screen_offset;
            tab[i].is_taken = false;
            tab[i].is_active = false;
        }
    }
    for (let i = 0; i < items.nbr; i += 1) {
        if (tab[i].is_active) {
            tab[i].x += items.vx;
            tab[i].y = tab[i].y + Math.sin(delta) * 5;
        }
    }
    if ((performance.now() + app.ticker.deltaTime) % items.interval <=  15) {
        items.next_collectible = true;
    }
    if (items.next_collectible) {
        tab[Math.floor(Math.random() * items.nbr)].is_active = true;
        items.next_collectible = false;
    }
}

function bg_control()
{
    let bg = sprites.bg;

    console.log("BGX: " + Math.abs(bg.x));
    if (Math.abs(bg.x) >= (bg.width - bg.width / 2))
        bg.x = bg.start_pos_x;
    bg.x += bg.vx;
    bg.y = app.renderer.screen.height / 2;
}

function player_interactions()
{
    let player = sprites.player;

    player.x += player.vx;
    player.y += player.vy;
    if (player.vy > 0)
        player.vy += 0.2;
    if (player.vy < 0)
        player.vy -= 0.2;
    if (player.y <= player.height / 3) {
        player.vy = 0;    
        player.y = player.height / 2;
    }
    if (player.y >= app.renderer.screen.height - player.height / 3)  {
        player.vy = 0;
        player.y = app.renderer.screen.height - player.height / 2;
    }
    sprites.player.texture.frame = sprites.p_rect;
    for (let i = 0; i < sprites.items.nbr; i += 1) {
        if (hitTestRectangle(player, sprites.items.tab[i])) {
            if (!sprites.items.tab[i].is_taken) {
                player.score += sprites.items.tab[i].value;
                player.score_t.text = "SCORE: " + player.score;
                console.log("+ " + sprites.items.tab[i].value + " : Total Score = " + player.score);
            }
            sprites.items.tab[i].is_taken = true;
        }
    }
}