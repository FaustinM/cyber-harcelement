const date = new Date;
let ecriture = new TypeIt('#line-1', {
  speed: 30,
  startDelay: 900
}).type(date.toLocaleString())
    .pause(500)
    .break()
    .break()
    .type("Sans surprise, la blague des nains de jardin a été un coup sévère porté au moral déjà affaibli de Paul.")
    .break()
    .pause(1000)
    .type("Avec tout son entourage ayant rejoint Jacques dans sa bêtise, il devint plus distant et finit par cesser de venir en cours.")
    .break()
    .pause(1000)
    .type("Quelques semaines plus tard, vous apprenez qu'il est en garde à vue pour avoir tenté de se procurer des hormones de croissance illégalement.")
    .break()
    .pause(1000)
    .type("Après avoir été interrogé, il explique la situation qu'il a vécu au lycée, et vous, ainsi que Jacques et les autres blagueurs, recevez des peines allant de l'avertissement aux amendes.")
    .break()
    .break()
    .type("<a href='./index.html'>Fin n°2</a>")
    .go();

localStorage.clear();