const date = new Date;
let ecriture = new TypeIt('#line-1', {
  speed: 80,
  startDelay: 900
})
    .type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Après qu'Eric ai bloqué les blagueurs, son état est revenu à la normale et vous êtes devenus amis. Cela dit, vous et Eric avez perdu contact avec plusieurs connaissances à cause de ces stupides remarques sur sa taille...")
    .break()
    .break()
    .type("<a href='./index.html'>Fin n°2</a>")
    .go();
