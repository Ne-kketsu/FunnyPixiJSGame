function setupKeys()
{
    //Get arrow keys
    let left = keyboard("ArrowLeft"),
    up = keyboard("ArrowUp"),
    right = keyboard("ArrowRight"),
    down = keyboard("ArrowDown");
  
    //Up
    up.press = () => {
      sprites.player.vy = -5;
      sprites.player.vx = 0;
    };
    up.release = () => {
        if (!down.isDown && sprites.player.vx === 0) {
            sprites.player.vy = 0;
        }
    };
    //Down
    down.press = () => {
        sprites.player.vy = 5;
        sprites.player.vx = 0;
    };
    down.release = () => {
        if (!up.isDown && sprites.player.vx === 0) {
            sprites.player.vy = 0;
        }
    };

/*
    //Left arrow key `press` method
    left.press = () => {
    sprites.player.vx = -5;
    sprites.player.vy = 0;
    };

    //Left arrow key `release` method
    left.release = () => {
    //If the left arrow has been released, and the right arrow isn't down,
    //and the sprites.player isn't moving vertically:
    //Stop the sprites.player
        if (!right.isDown && sprites.player.vy === 0) {
            sprites.player.vx = 0;
        }
    };
*/
/*
    //Right
    right.press = () => {
        sprites.player.vx = 5;
        sprites.player.vy = 0;
    };
    right.release = () => {
        if (!left.isDown && sprites.player.vy === 0) {
            sprites.player.vx = 0;
        }
    };
*/
}

function keyboard(value)
{
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
  
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    
    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );
    
    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
    };
    
    return key;
  }