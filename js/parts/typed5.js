const date = new Date;
let ecriture = new TypeIt('#line-1', {
  speed: 30,
  startDelay: 900
})
    .type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Le lendemain, vous allez voir Paul avec Eric pour lui parler de son attitude: il est surpris, car pour lui Paul n'était pas réellement blessé, mais comprends et accepte d'arrêter. Leurs relations reviennent à la normale, et vous vous êtes fait deux nouveaux amis !")
    .break()
    .break()
    .type("<a href='./index.html'>Fin n°3</a>")
    .go();
