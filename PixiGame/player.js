function set_player()
{
    let player = sprites.player;

    player.anchor.set(0.5);
    player.position.set(100, app.renderer.screen.height / 2);
    player.scale.set(0.7);
    player.vx = 0;
    player.vy = 0;
    player.next_anim = false;
    player.score = 0;
    player.score_t = new Text("SCORE: " + player.score, style);
    player.score_t.position.set(app.renderer.screen.width - 350, app.renderer.screen.height - 100);
    app.stage.addChild(sprites.player);
}

function hitTestRectangle(sprite1, sprite2)
{
    Xdist_sprites = sprite1.toLocal(sprite1.position, sprite2).x;
    Ydist_sprites = sprite1.toLocal(sprite1.position, sprite2).y;

    half_width_sprite1 = sprite1.width / 2;
    half_height_sprite1 = sprite1.height / 2;

    half_width_sprite2 = sprite2.width / 2;
    half_height_sprite2 = sprite2.height / 2;

    if (((Xdist_sprites <= sprite1.x + half_width_sprite1) && (Xdist_sprites >= sprite1.x - half_width_sprite1)) && ((sprite2.getGlobalPosition().y <= sprite1.y  + half_height_sprite1) && (sprite2.getGlobalPosition().y >= sprite1.y  - half_height_sprite1)))
        return true;
}