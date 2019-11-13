const date = new Date;
let ecriture = new TypeIt('#line-1', {
  speed: 30,
  startDelay: 900
})
    .type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Après quelques jours, les parents de Paul ont remarqué que son comportement avait changé. Après qu'ils lui eurent tiré les vers du nez, ils ont engagé des procédure judiciaires contre Paul, qui a fini par être expulsé de l'établissement. Vous vous en sortez sans dommages, mais Eric ne vous adresse plus la parole...")
    .break()
    .break()
    .type("<a href='./index.html'>Fin n°5</a>")
    .go();
