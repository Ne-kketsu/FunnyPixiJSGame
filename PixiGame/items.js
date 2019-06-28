function set_items()
{
    let items = sprites.items;

    items.tab = [];
    items.nbr = 10;
    items.vx = 0;
    items.vy = 0;
    items.interval = 1500;
    items.screen_offset = 100;
    items.next_collectible = false;
    for (let i = 0; i < items.nbr; i += 1) {
        let sprite = new Sprite(loader.resources.collectibles.texture);
        sprite.position.set(randomInt(app.renderer.screen.width + 50, app.renderer.screen.width + 200), randomInt(120, app.renderer.screen.height - 120));
        sprite.anchor.set(0.5);
        sprite.scale.set(0.3);
        sprite.is_taken = false;
        sprite.is_active = false;
        sprite.value = 100;
        sprite.vx = 0;
        sprite.vy = 0;
        app.stage.addChild(sprite);
        items.tab.push(sprite);
    }
}