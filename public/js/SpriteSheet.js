export default class SpriteSheet{
    constructor(image, width, height){
        this.image = image;
        this.width = width;
        this.height = height;
        this.height = height;
        this.tiles = new Map(); //we need to save the buffer in a map
    }

    define(name, x, y){
        //create a buffer where we store the tile instead of having to draw it every time
        const buffer = document.createElement('canvas');
        buffer.width = this.width;
        buffer.height = this.height;
        buffer.getContext('2d') //we make the canvas a 2d context where we will be able to draw our image
               .drawImage(//we draw the subset of this particular image on this context
                   this.image,
                   x * this.width,//size
                   y * this.height,
                   this.width,
                   this.height,
                   0,
                   0,
                   this.width,
                   this.height);
        this.tiles.set(name, buffer);
    }
    draw(name,context,x,y){
        const buffer = this.tiles.get(name);
        context.drawImage(buffer,x,y);
    }

    drawTile(name, context, x, y){ //this class will allow us to avoid giving the w and h of the tile, this way is set to the tile w and h
        this.draw(name, context, x * this.width, y * this.height);
    }
}