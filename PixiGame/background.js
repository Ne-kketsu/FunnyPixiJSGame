function set_background()
{
    let bg = sprites.bg;

    bg.anchor.set(0, 0.5);
    bg.vx = -5;
    bg.start_pos_x = 0;
    app.stage.addChild(bg);
}