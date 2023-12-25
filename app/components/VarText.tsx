export const JennaEnglish = ` Jenna is a professional cook and today is her first day in a new
restaurant. She is very excited, but also nervous because she
doesn’t want to get late for her first day. She has to be there at 8
o’clock and it is already 7. She is not ready yet and she is unsure
how she should go to work. She is thinking maybe it is too late to
take her car. She might get stuck in traffic and then for sure, she
will be late. The same thing will happen if she calls a taxi.
Instead, she thinks she should take the metro. She gets dressed
quickly; she grabs some coffee and a sandwich from the coffee shop
down the road and gets in the next metro going towards the direction
of the restaurant. Time is running out and she is getting more and
more anxious. When the doors open to the metro station, she starts
running. Happily, she arrives right on time for her first day.`;

export const JennaPt = `
Jenna é uma cozinheira profissional e hoje é seu primeiro dia em um
novo restaurante. Ela está muito animada, mas também nervosa porque
não quer se atrasar para o primeiro dia. Ela tem que estar lá às 8
horas e já são 7. Ela ainda não está pronta e não tem certeza de
como deve ir trabalhar. Ela está pensando que talvez seja tarde
demais para pegar seu carro. Ela pode ficar presa no trânsito e, com
certeza, chegará atrasada. A mesma coisa acontecerá se ela chamar um
táxi. Em vez disso, ela acha que deveria pegar o metrô. Ela se veste
rapidamente; ela pega um café e um sanduíche na cafeteria da rua e
pega o próximo metrô indo na direção do restaurante. O tempo está se
esgotando e ela está ficando cada vez mais ansiosa. Quando as portas
se abrem para a estação de metrô, ela começa a correr. Felizmente,
ela chega na hora certa para seu primeiro dia.{" "}
`;

export const DanielEnglish = `
Daniel is always late for work. No matter what he does in the morning, he always ends up being late. His girlfriend gave him some suggestions to help him, but none was efficient. She suggested that he should get his breakfast ready the night before, which he tried to do, but it wasn’t a success. She suggested that he could get his clothes ready the night before, but it didn’t change anything. He tried to go to bed earlier, tried to wake up earlier, tried everything, nothing was working. One day, his girlfriend suggested something new. She said “you should try a new alarm clock”. Daniel wasn’t convinced of this idea. He didn’t think it would change anything. He tried it anyway and it turned out to be a success. It seems like putting a song he likes as an alarm clock was helping him waking up in the morning and it was giving him motivation to go to work. Although he was unsure about the idea, his new alarm clock was the best thing to do.`;

export const DanielPt = `
Daniel está sempre atrasado para o trabalho. Não importa o que ele faz pela manhã, ele sempre acaba se atrasando. Sua namorada lhe deu algumas sugestões para ajudá-lo, mas nenhuma foi eficiente. Ela sugeriu que ele preparasse o café da manhã na noite anterior, o que ele tentou fazer, mas não foi um sucesso. Ela sugeriu que ele pudesse arrumar suas roupas na noite anterior, mas isso não mudou nada. Ele tentou ir para a cama mais cedo, tentou acordar mais cedo, tentou de tudo, nada estava funcionando. Um dia, sua namorada sugeriu algo novo. Ela disse “você deveria tentar um novo despertador”. Daniel não estava convencido dessa ideia. Ele não achava que isso mudaria alguma coisa. Ele tentou de qualquer maneira e acabou sendo um sucesso. Parece que colocar uma música que ele gosta como despertador o estava ajudando a acordar de manhã e estava lhe dando motivação para ir trabalhar. Embora não tivesse certeza sobre a ideia, seu novo despertador era a melhor coisa a fazer.

`;

export const PaintballEnglish = `
Lynn isn’t a fan of paintball, but when her friend Tommy suggested playing it in the city streets, she got intrigued. She played once on a court which she didn’t like much, but playing in the city streets seems very fun. Tommy and Lynn decide to try it together. They subscribe to the activity as a team. It’s organized by one of Tommy’s friends. The streets are closed to the public. It’s only for people playing paintball. It is very fun because you can hide behind buildings. It’s difficult though because the playground is very wide. It’s difficult to find people. The game lasted 2 hours, which seems long, but it wasn’t really. Time flew by very quickly. Tommy and Lynn are now covered in different colors like yellow and green. They took a lot of pictures as a souvenir and they laughed a lot. They will probably participate next year if the activity is still going on.`;

export const PaintballPt = `
Lynn não é fã de paintball, mas quando seu amigo Tommy sugeriu jogar nas ruas da cidade, ela ficou intrigada. Ela jogou uma vez em uma quadra que não gostou muito, mas jogar nas ruas da cidade parece muito divertido. Tommy e Lynn decidem tentar juntos.  Eles se inscrevem na atividade como uma equipe.É organizado por um dos amigos de Tommy. As ruas estão fechadas ao público. É apenas para pessoas que jogam paintball. É muito divertido porque você pode se esconder atrás de prédios. É difícil, porém, porque o playground é muito amplo. É difícil encontrar pessoas. O jogo durou 2 horas, o que parece longo, mas na verdade não foi. O tempo voou muito rápido. Tommy e Lynn estão agora cobertos de cores diferentes, como amarelo e verde. Eles tiraram muitas fotos como lembrança e riram muito. Eles provavelmente participarão no próximo ano se a atividade ainda estiver acontecendo.
`;

interface TextSection {
  id: string;
  title: string;
  englishText: string;
  ptText: string;
}

export const textSections: TextSection[] = [
  { id: "text1", title: "Jenna", englishText: JennaEnglish, ptText: JennaPt },

  {
    id: "text2",
    title: "Daniel",
    englishText: PaintballEnglish,
    ptText: PaintballPt,
  },

  {
    id: "text3",
    title: "Marta",
    englishText: MartaEnglish,
    ptText: MartaPt,
  },
];
