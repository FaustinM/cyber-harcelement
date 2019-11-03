const date = new Date;
new TypeIt('#line-1', {
  speed: 80,
  startDelay: 900
})
    .type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Après avoir découvert facebook, vous vous faîtes plein de potes ! Vous trouvez qu'il y a une super ambiance de classe...")
    .pause(500)
    .delete(55)
    .break()
    .type("Plusieurs groupes se formes et vous ne savez plus vraiment chez qui allez... Eric et Paul parlent ensemble et...")
    .pause(500)
    .delete(3)
    .type(" quand Paul parle de la soupe Eric equissent un sourrire et le groupe rigole !")
    .break()
    .break()
    .type("<a href='./page2.html'>Suite...</a>")
    .go();
