class Cannon {
    constructor(x,y,w,h,a) {
        this.x = x;
        this.y = y;
        this.largura = w;
        this.altura = h;
        this.angulo = a; 
        this.baseimg = loadImage("../assets/cannonBase.png");
    }
    display() {
        image(this.baseimg,70, 20, 200, 200);
    }
}