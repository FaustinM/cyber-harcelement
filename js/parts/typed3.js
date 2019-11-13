const date = new Date;
let ecriture = new TypeIt('#line-1', {
  speed: 30,
  startDelay: 900
})
    .type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Après avoir découvert facebook, vous vous faites plein de potes ! Vous trouvez qu'il y a une super ambiance de classe...")
    .pause(500)
    .delete(55)
    .break()
    .type("Plusieurs groupes se forment et vous ne savez plus vraiment chez qui aller... Eric et Paul parlent ensemble et...")
    .pause(500)
    .delete(3)
    .type(" quand Paul parle de la soupe Eric equisse un sourire et le groupe rigole !")
    .break()
    .type(" Vous ne comprenez pas vraiment pourquoi les gens se moquent de lui mais vous n'intervenez pas...")
    .break()
    .type(" Pourquoi vous mettre dans une histoire inutilement, ça va encore vous attirez des ennuis, vous qui avez déjà subi des blagues de vos camarades !")
    .break()
    .type(" Pourquoi perdre vos amis alors que vous avez tout fait pour en avoir après de longues années...")
    .break()
    .break()
    .type("<a href='./page3.html'>Suite...</a>")
    .go();
