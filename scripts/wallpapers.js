const arlo = `"/assets/arlo.jpeg"`
const brave = "/assets/brave.jpeg"
const buzz = "/assets/buzz.jpeg"
const coco = "/assets/coco.jpeg"
const inside = "/assets/inside.jpeg"
const monst = "/assets/monst.jpeg"
const nemo = "/assets/nemo.jpeg"
const luca = "/assets/luca.jpg"
const toy = "/assets/toy.jpg"
const up = "/assets/up.jpg"

const walls = [arlo, brave, buzz, coco, inside, monst, nemo, luca, toy, up]

let randomWall = () => {
    if (document.body.className == "sub") {
        let wall = walls[Math.floor(Math.random() * walls.length)]
        document.body.style.backgroundImage = `url(../.${wall})`;

    } else {

        let wall = walls[Math.floor(Math.random() * walls.length)]
        document.body.style.backgroundImage = `url(.${wall})`;
    }
}
randomWall()
setInterval(randomWall, 10000)






