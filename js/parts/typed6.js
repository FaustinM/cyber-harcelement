const date = new Date;
let ecriture = new TypeIt('#line-1', {
  speed: 80,
  startDelay: 900
})
    .type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Les blagues sur la taille d'Eric continuent de pleuvoir, et ne semblent pas près de s'arrêter. Quelques jours plus tardn eb sortabt des cours, vous croisez Eric, les yeux rouges et gonflés: il venait visiblement de croiser Paul. En ignorant leurs conversations, vous avez visiblement laissé passer plus de choses que vous ne le pensiez...")
    .break()
    .break()
    .type("<a href='./index.html'>Fin n°4</a>")
    .go();
