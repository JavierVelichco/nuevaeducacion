        // Variable global para almacenar la página anterior
        let previousPage = null;
        let currentPage = 1;

        // Objeto de las páginas
        const pages = {


1: {
    text: `<h1><i> No puedes elegir donde nacer </i></h1><br>
      <h2><i>Deriva</i></h2><br>

    <br><br><br><br>
    <h2>Ornella Zanoni</h2><br>
    <h2>Javier Velichco</h2><br><br><br><br>`,
    next: [{text: "Ve a la página 2", page: 2}]
},

    2: {
        text: ` <h3>No puedes elegir donde nacer</h3><br><br> <p> El azar lo decide por ti</p><br>
<details>
  <summary><strong>Leer más<strong></summary><br>
 <strong> <br>
   Un hijo olvidado de estas tierras, como tantos otros. </strong></details>   
`,
        next: [{text: "Ve a la página 3", page: 3}]
    },


    3: {
        text: `<h3>El laberinto de la memoria.</h3><br><br>

 <p>Nuestra lucha, es una lucha por la memoria, por no olvidar. Todos merecemos ser recordados…
Estas son las luchas internas del barrio. Dos bandos, uno que pretende escapar, olvidar y no puede; el otro que desea permanecer,  recordar y tampoco puede.
Los invitamos a sumarse a esta historia…<br>
En este momento te encuentras en el derivador de tránsito de Parque Chas, este es el centro del laberinto.
Deberás realizar un recorrido por la memoria, pero no será fácil. Nosotros, la resistencia, intentaremos ayudarte a escapar de los agentes del olvido.
 Ten cuidado, necesitarás mucha suerte.
Al final de este recorrido, si tienes éxito, podrás descubrir nuestro secreto y formar parte de la resistencia.</p>
`,
        next: [
                        {text: "Ve a la página 4", page: 4, condition: "noIzquierda"},

        ]
    },

4: {
    text: `<h3> ¿Comienza la aventura? </h3> 

    <p>Nos encontramos en el Derivador Vicente Chas, quizás ya estuviste aquí y no lo recuerdas. Este es nuestro punto de partida,
     desde aquí puedes avanzar dos cuadras en cualquier dirección y observar si una vez recorridas las dos
      cuadras tienes la opción de ir a la izquierda.</p>
      <br>
<p>Si no tienes opción de ir a la izquierda ve a la página 5.<br>

Si hay opción de ir a la izquierda ve a la página 6.</p><br><br><br>`,
    next: [
        {text: "Página 5", page: 5, condition: "noIzquierda"}, 
        {text: "Página 6", page: 6, condition: "siIzquierda"}
    ]
},


5: {
    text: `Aparentemente alguien olvidó hacer la continuación de esta calle,
     dobla a la derecha y avanza una cuadra luego presta atención al lugar:
      ¿En esta esquina hay opción de ir a la derecha?

Si no hay opción de ir a la derecha ir a la página 7. <br>

Si hay opción de ir a la derecha ir a la página 60. <br><br><br><br>`,

    next: [
        {text: "Página 7", page: 7, condition: "hayPlaza"},
        {text: "Página 60", page: 60, condition: "noHayPlaza"}
    ]
},

6: {
    text: `Recorriste tus primeras dos cuadras ¿Hay una plaza?<br>

Si hay una plaza frente a vos, ve a la página 8 <br>

Si no hay una plaza frente a ti ve a la página 20 <br><br><br>`,
    next: [
        {text: "Página 8.", page: 8, condition: "siplaza"},
        {text: "Página 20.", page: 20, condition: "noplaza"}
    ]
},

7: {
    text: `No hay opción de ir a la derecha, alguien olvidó continuar esta calle,
     así que doblá a la izquierda y avanzá una cuadra, detenete en la esquina y observá,
      los Agentes del Olvido pueden estar cerca… ¿Ves un auto rojo?

Si no ves un auto rojo avanzá a la página 9<br>

Si ves un auto rojo avanzá a la página 10<br><br><br>`,
   next: [
        {text: "Página 9.", page: 9, condition: "noAutoRojo"},
        {text: "Página 10.", page: 10, condition: "siAutoRojo"}
    ]
},

8: {
    text: `Llegaste a la plaza del olvido, no permanezcas mucho tiempo ahí ni bebas agua en ese lugar.<br> Ten cuidado
     puede que los Agentes del Olvido te estén observando. No dejes que te afecten solo quieren hacerte huir de nuestro barrio.
     No lo permitas.<br>
     Arrancó el viaje por la memoria de nuestro barrio:<br>
     Hay un mosaico escondido en la plaza, si decides buscarlo recuerda volver al punto exacto por donde habías llegado a este lugar.

    Si decides no buscarloa ve la página 62.<br> 

    Si decides no buscarlo ve a la página 67.<br>`,
    next: [
        {text: "Página 62.", page: 62},
        {text: "Página 67.", page: 67}
    ]
},

9: {
    text: `Aparentemente no te están siguiendo, dobla a la derecha y avanza.<br>
     Es un barrio peligroso, el olvido acecha detrás de cada esquina.<br>
    Hay una vieja leyenda que habla de un árbol frutal que devuelve los recuerdos  y está por aquí cerca.
     ¿Podrás encontrarlo?<br><br><br>`,
    next: [
        {text: "Ve a la página 11.", page: 11}
    ]
},

10: {
    text: `Cuidado, hay un auto rojo, y puede haber más. Te están vigilando.
     Será mejor que sigas estas instrucciones, caminá como si hubieras olvidado algo, 
     doblá a la izquierda y avanza hasta encontrar una pared de frente.<br><br><br>`,
    next: [
        {text: "Ve a la página 38.", page: 38}
    ]
},

11: {
    text: `Lo encontraste? Lo conocías? Si no, no importa, será en otra oportunidad… 
Deberás avanzar hasta encontrar un limonero.  No lo tomes a la ligera, no es tarea fácil.
 Hay quienes olvidan lo que buscan y hay quienes olvidan haber encontrado lo que buscaban.<br> 
Si lo encontraste, avanza a la página 12. <br> 
    Si no lo encontraste, avanza a la página 13.<br><br><br>`,
    next: [
        {text: "Página 12.", page: 12, condition: "encontrado"},
        {text: "Página 13.", page: 13, condition: "noEncontrado"}
    ]
},


12: {
    text: `
Has encontrado el limonero, sin embargo el dueño de la casa los cuida celosamente, habrá que buscar otra manera mantener los recuerdos. Dobla a la derecha y avanza una cuadra. 
¿Quieres acumular más recuerdos de este barrio? <br>
    Si deseas llevarte más recuerdos, ve a la página 25. <br>
    Si decides que fue suficiente y temes comenzar a olvidar, ve a la página 26.<br><br><br>`,
    next: [
        {text: "Página 25.", page: 25, condition: "masRecuerdos"},
        {text: "Página 26.", page: 26, condition: "suficiente"}
    ]
},

13: {
    text: `Llegaste hasta Av. los Incas y no encontraste el limonero. Quizás olvidaste que lo buscabas.
     Tal vez aún estemos a tiempo…¿Hay luz del sol?<br>
    Si hay luz del sol, ve a la página 14. <br>
    Si no hay luz del sol, ve a la página 15.<br><br><br>`,
    next: [
        {text: "Página 14.", page: 14, condition: "luzSol"},
        {text: "Página 15.", page: 15, condition: "noLuzSol"}
    ]
},

14: {
    text: `Por suerte todavía hay luz del sol,
     volvé sobre tus pasos por Cádiz y dobla a la izquierda en la segunda calle.
     <br><br><br><br> `,
    next: [
        {text: "Ve a la página 16.", page: 16}
    ]
},

15: {
    text: `Parece que los fantasmas del olvido salieron a recorrer las calles, tal vez es mejor abandonar la búsqueda y volver otro día.
     Andate y no mires hacia atrás, recordá jamás acercarte a la garita de seguridad ni a ningún auto rojo estacionado. 
     Mucha suerte. Esperamos pronto volver a verte. No nos olvides... Nosotros no lo haremos. Por hoy, es el fin de tu recorrido.<br><br>`,
    next: [
        {text: "Continuara...", page: 1} // Placeholder for next step
    ]
},

16: {
    text: `Has llegado a la PLAZA DE LOS RECUERDOS. <br>
En esta plaza hay un bebedero. Cuentan que el agua de este bebedero viene de un manantial subterráneo,
 del mismo que se alimenta el limonero. Búscalo y bebe para afianzar tus recuerdos.
Parafraseando a Chris Marker, “Nada diferencia a los recuerdos de los momentos comunes;
 sólo más tarde se dan a conocer, cuando muestran sus cicatrices.”<br>
Pasamos por este mundo intentando sostener las arenas del tiempo entre nuestras manos,
 pero los granos escapan sin esfuerzo. Solo quedan pequeños instantes que ensucian nuestras manos.

Escribe un recuerdo de tu niñez o de cualquier otro momento de tu vida y guárdalo, atesóralo,
 en algunos años, por accidente quizás, lo encontrarás nuevamente, lo recordaras y volverás a
  revivir también tu recorrido por Parque Chas.

Has descubierto nuestro secreto.<br><br>`,
    next: [
        {text: "Continuara...", page: 1} // Placeholder for next step
    ]
},

17: {
    text: `No nos sorprende que lo conozcas. <br>
La guerra tiene muchas formas. La que habita nuestro querido Parque Chas no es menos terrible que otras
 y se remonta a sus inicios. Esta guerra, como tantas otras, es tan antigua y misteriosa como el lugar en que se emplaza,
  y a medida que el barrio creció ella también lo hizo.
  <details>
  <summary><strong>Leer más<strong></summary><br> El mito fundante dice que en 1957 un grupo de exploradores franceses
   aceptaron el desafío de recorrer el barrio y desentrañar sus misterios. Sin embargo, después de intentarlo varias veces 
   obtuvieron resultados diferentes. Algunas veces aparecieron misteriosamente en Villa Urquiza, otras en Chacarita y 
   algunas veces más allá de la Gral. Paz. Algunos incluso afirman que aparecían en distintos lugares a la vez.
    Los agentes del olvido se han encargado de instalar el terror, haciendo de nuestro querido barrio un foco de historias
     fantásticas sobre misteriosas desapariciones que han logrado volverse carne en el inconsciente colectivo a través de la
      literatura popular a lo largo del tiempo. Un relato toma el lugar de historia oficial a partir de su perseverancia,
       repetido una y otra vez comienza a tomar forma de verdad. Los Agentes del Olvido tuercen la realidad con sus artimañas.
        El acto de hacer memoria es nuestra única herramienta en la lucha contra los enemigos de la Historia.</details> Avanza una cuadra
         y dobla a la derecha. Luego avanza hasta pasar la plaza y sigue adelante…<br>`,
    next: [
        {text: "Ve a la página 19.", page: 19}
    ]
},

18: {
    text: `La guerra tiene muchas formas. La que habita nuestro querido Parque Chas no es menos terrible que otras y
     se remonta a sus inicios. Esta guerra, como tantas otras, es tan antigua y misteriosa como el lugar en que se emplaza,
      y a medida que el barrio creció ella también lo hizo. El mito fundante dice que en 1957 un grupo de exploradores franceses aceptaron el desafío 
      de recorrer el barrio y desentrañar sus misterios.
       Sin embargo, después de intentarlo varias veces obtuvieron resultados diferentes. Algunas veces aparecieron misteriosamente en Villa Urquiza,
        otras en chacarita y algunas veces más allá de la Gral. Paz. Algunos incluso afirman que aparecían en distintos lugares a la vez. Los agentes 
        del olvido se han encargado de instalar el terror, haciendo de nuestro querido barrio un foco de historias fantásticas sobre misteriosas
         desapariciones que han logrado volverse carne en el inconsciente colectivo a través de la literatura popular a lo largo del tiempo.
         Un relato toma el lugar de historia oficial a partir de su perseverancia, repetido una y otra vez comienza a tomar forma de verdad. Los Agentes del Olvido tuercen la realidad con sus artimañas.
     El acto de hacer memoria es nuestra única herramienta en la lucha contra los enemigos de la Historia.

     Avanza dos cuadras<br>`,
    next: [
        {text: "Ve a la página 64.", page: 64}
    ]
},

19: {
    text: `Al parecer alguien le puso un nombre a esta calle, luego lo olvidó y le puso otro, pasa mucho eso por aquí.
     Donde Bauness se transforma en Cadiz observa las paredes con atención.<br><br><br>`,
    next: [
        {text: "Ve a la página 77.", page: 77}
    ]
},


20: {
    text: `Hay una plaza a tu costado y una garita de seguridad a la vista.<br>
    Si es correcto, ve a la página 31. <br>
    Si no es así, ve a la página 39.<br><br><br>`,
    next: [
        {text: "Página 31.", page: 31, condition: "correcto"},
        {text: "Página 39.", page: 39, condition: "incorrecto"}
    ]
},





21: {
    text: `Llueve, debes tener más cuidado que nunca, mejor dobla a la derecha y avanza.
     Podrás ver una casa muy peculiar, reten esa imagen. La lluvia lava los recuerdos. Es difícil luchar contra ella,
      habrás visto como corre desesperada la gente empapada bajo la lluvia. Corren porque llueve, están totalmente mojados y aún corren,
       y no recuerdan porque… Por algo inventaron los paraguas.
     Es mejor abandonar antes de olvidarlo todo... Avanza hasta dejar el barrio, te esperamos otro día, no nos olvides.<br>`,
    next: [ 
         {text: "Continuara...", page: 1} // Placeholder for next step

    ]
},

22: {
    text: `Por suerte no llueve, estás a salvo. Aprovecha,  dobla a la izquierda y avanza una cuadra. Hay un mural en la esquina. ¿Lo ves? <br>
    Si lo ves, ve a la página 23.<br> 
    Si no lo ves, ve a la página 24.<br><br><br>`,
    next: [
        {text: "Página 23.", page: 23, condition: "loVes"},
        {text: "Página 24.", page: 24, condition: "noLoVes"}
    ]
},



23: {
    text: `Encontraste el mural, es una buena noticia, hay muchos que no lo lograron. Los egipcios pensaban que pronunciar el nombre de una persona permitía que esta fuese recreada. Cuando la muerte alcanzaba a una persona, si su nombre, sus palabras, eran conservadas, se estaba asegurando la supervivencia del fallecido. Si el nombre era destruido, la persona era aniquilada. La persona cuyo nombre es olvidado deja de existir, pero es que, además, es como si nunca hubiese tenido vida. El olvido del nombre supone la aniquilación total de una existencia.
Doblá a la izquierda y avanza. 
Si prestás atención a las paredes, en el camino vas a encontrar un pequeño mosaico. Te invitamos a encontrarlo. En el camino vas a ver unos pañuelos… seguilos. 
¿Lo encontraste?
    Si: ve a la página 61. <br>
    No: ve a la página 15.<br>`,
    next: [
        {text: "página 61.", page: 61, condition: "si"},
        {text: "página 15.", page: 15, condition: "no"}
    ]
},

24: {
    text: `Estás perdiendo la capacidad de recordar, de alguna manera esto te está afectando. 
    Quizás ya viste el mural y no lo recuerdas. Algo no está bien. 
    Doblá a la derecha y avanza distraídamente hasta dejar el barrio. Huí mientras puedas. 
    Volvé otro día para que podamos ayudarte.Andate y no mires hacia atrás, recordá jamás acercarte
     a la garita de seguridad ni a ningún auto rojo estacionado. Mucha suerte. Esperamos pronto volver a verte. 
     No nos olvides.Nosotros no lo haremos.
        Fin del recorrido.`,
    next: [
        {text: "Continuara.", page: 1}
    ]
},

25: {
    text: `Continuá avanzando y vas a encontrar el punto de inicio, el lugar de donde partiste.
     Buscá aquí un mosaico que no hayas visto en tu recorrido en alguna de las esquinas.<br><br><br>`,
    next: [
        {text: "Ve a la página 61.", page: 61}
    ]
},

26: {
    text: `Doblá a la izquierda y avanza discretamente.<br><br><br>`,
    next: [
        {text: "Ve a la página 16.", page: 16}
    ]
},

27: {
    text: `Escuchas o ves un perro, entonces mejor retirarse por seguridad. Todo comenzó cuando, por algún motivo misterioso,
     se perdieron los planos de la zona que la compañía les daba a los choferes de la línea 187.
     Desorientados, los colectiveros entraban al laberinto sin tener muy claro si algún día saldrían de allí.

Uno a uno, los colectivos de la línea 187 fueron desapareciendo entre las manzanas de Parque Chas,
 luego de dar vueltas sin rumbo durante un largo tiempo. Cuentan que solo uno se salvó: el chofer y los pasajeros lograron llegar a Av. de Los Incas luego de días y días de girar por las calles.
    Si eliges derecha, ve a la página 29.<br> 
    Si eliges izquierda, ve a la página 32.<br>`,
    next: [
        {text: "Página 29.", page: 29, condition: "derecha"},
        {text: "Página 32.", page: 32, condition: "izquierda"}
    ]
},

28: {
    text: `Todo comenzó cuando, por algún motivo misterioso,
     se perdieron los planos de la zona que la compañía les daba a los choferes de la línea 187.
      Desorientados, los colectiveros entraban al laberinto sin tener muy claro si algún día saldrían de allí.

Uno a uno, los colectivos de la línea 187 fueron desapareciendo entre las manzanas de Parque Chas,
 luego de dar vueltas sin rumbo durante un largo tiempo. Cuentan que solo uno se salvó: el chofer y
  los pasajeros lograron llegar a Av. de Los Incas luego de días y días de girar por las calles.

Dobla a la derecha y avanza hasta la primer calle donde puedas doblar a la derecha.`,
    next: [
        {text: "Ve a la página 30.", page: 30}
    ]
},

29: {
    text: `Avanza hasta encontrar una plaza, presta mucha atención a tu alrededor.<br><br><br>`,
    next: [
        {text: "Ve a la página 16.", page: 16}
    ]
},

30: {
    text: `Dobla a la derecha y avanza una cuadra, luego dobla a la izquierda y avanza.<br><br><br>`,
    next: [
        {text: "Ve a la página 19.", page: 19}
    ]
},
31: {
    text: `Hace silencio. Presta atención. El barrio habla, escuchalo.
     ¿Te sentís observado? Tal vez se puedan percibir a los perros del barrio comunicándose atravesando las barreras materiales,
     o quizás las voces lejanas de los chicos jugando en la canchita de la plaza… ¿los escuchas?
    Si escuchas niños jugando, ve a la página 33.<br> 
    Si no escuchas niños jugando, ve a la página 34.<br>`,
    next: [
        {text: "Página 33.", page: 33, condition: "niñosJugando"},
        {text: "Página 34.", page: 34, condition: "noNiñosJugando"}
    ]
},
32: {
    text: `Avanza hasta encontrar una plaza, presta mucha atención a tu alrededor.
    Avanza a la página 16.<br><br><br>`,
    next: [
        {text: "Ve a la página 16.", page: 16}
    ]
},

33: {
    text: `No te asustes, pero pueden estar observándote. No te acerques a la garita.
    Doblá a la derecha y avanzá dos cuadras.¿Ves flores desde aquí?
    Si ves flores, ve a la página 35. <br>
    Si no ves flores, ve a la página 36.<br><br>`,
    next: [
        {text: "Página 35.", page: 35, condition: "siFlores"},
        {text: "Página 36.", page: 36, condition: "noFlores"}
    ]
},

34: {
    text: `Aparentemente los niños están olvidando cómo jugar o nosotros no recordamos cómo se jugaba.
    Doblá a la izquierda. Continúa avanzando hasta encontrar una pared de frente. Luego dobla a la izquierda y avanza dos cuadras.
    No te asustes, pero pueden estar observándote. No te acerques a la garita.<br>`,
    next: [
        {text: "Ve a la página 4.", page: 4}
    ]
},
35: {
    text: `Si ves flores, dobla a la izquierda y avanza.<br><br><br> `,
    next: [
        {text: "Ve a la página 37.", page: 37}
    ]
},
36: {
    text: `Si no ves flores, o no recordás cómo son, doblá a la derecha y avanzá dos cuadras.<br><br><br>`,
    next: [
        {text: "Ve a la página 39.", page: 39}
    ]
},

37: {
    text: `Continua avanzando hasta encontrar una casa de frente. Si llegaste a la esquina medusa digna de confusiones y
     gente perdida no te asustes,
     continúa por la única calle contramano. Si no ves bifurcaciones, este mensaje no es para vos.<br><br>`,
    next: [
        {text: "Ve a la página 38.", page: 38}
    ]
},

38: {
    text: `Parece que el día se vuelve cada vez más complicado. ¿Llueve?<br>
    Si llueve, ve a la página 21. <br>
    Si no llueve, ve a la página 22.<br><br><br>`,
    next: [
        {text: "Página 21.", page: 21, condition: "llueve"},
        {text: "Página 22.", page: 22, condition: "noLlueve"}
    ]
},
39: {
    text: `¿Ves un solo cartel de "loma de burro"? <br>
    Si ves un único cartel de "loma de burro", ve a la página 40. <br>
    Si no ves un único cartel de "loma de burro", ve a la página 41.<br><br><br>`,
    next: [
        {text: "Página 40.", page: 40, condition: "siLomaBurro"},
        {text: "Página 41.", page: 41, condition: "noLomaBurro"}
    ]
},

40: {
    text: `Si ves un único cartel de loma de burro observa si hay autos blancos a la vista. Nos están vigilando, te lo aseguro.<br>
    Si hay autos blancos a la vista, ve a la página 42.<br> 
    Si no hay autos blancos a la vista, ve a la página 43.<br><br>`,
    next: [
        {text: "Página 42.", page: 42, condition: "hayAutosBlancos"},
        {text: "Página 43.", page: 43, condition: "noHayAutosBlancos"}
    ]
},
41: {
    text: `En caso de que no veas un único cartel de loma de burro… entonces quizás estés viendo un cartel de "Prohibido Estacionar".<br>

    Si ves un cartel de "Prohibido Estacionar", ve a la página 45. <br>
    Si no ves un cartel de "Prohibido Estacionar", ve a la página 46.<br><br>`,
    next: [
        {text: "Página 45.", page: 45, condition: "siProhibido"},
        {text: "Página 46.", page: 46, condition: "noProhibido"}
    ]
},

42: {
    text: `Si hay autos blancos a la vista dobla a la derecha y avanza dos cuadras.
     Es que están usando autos blancos ahora, nos quieren despistar, pero sabemos que están ahí.<br><br><br>`,
    next: [
        {text: "Ve a la página 44.", page: 44}
    ]
},

43: {
    text: `Parece que el camino es seguro, pero no te confíes, dobla a la izquierda y avanza. 
    Dobla a la izquierda y avanza.<br><br><br>`,
    next: [
        {text: "Ve a la página 37.", page: 37}
    ]
},

44: {
    text: `Hay una plaza frente a ti. Presta mucha atención a donde estás. Orientate bien.
     Ahora, busca el mosaico escondido en la plaza.<br><br><br>`,
    next: [
        {text: "Ve a la página 75.", page: 75}
    ]
},
45: {
    text: `Si puedes ver un cartel de "Prohibido Estacionar Avanza una cuadra,
     dobla a la derecha y avanza una cuadra mas.
     ¿Ves aquí una casa parecida a la de la esquina del cartel de prohibido estacionar?<br>
    Si tu respuesta es sí, ve a la página 47.<br> 
    Si tu respuesta es no, ve a la página 48.<br>`,
    next: [
        {text: "Página 47.", page: 47, condition: "si"},
        {text: "Página 48.", page: 48, condition: "no"}
    ]
},

46: {
    text: `¿Ves ventanas pequeñas en arco en la ochava y hacia la derecha se ven lejos señales de tránsito amarillas?<br>
    Si las ves, ve a la página 52. <br>
    En caso contrario ve a la página 56.<br><br><br>`,
    next: [
        {text: "Página 52.", page: 52, condition: "siVentanas"},
        {text: "Página 56.", page: 56, condition: "noVentanas"}
    ]
},

47: {
    text: `Si ves una casa parecida a la de la esquina del cartel de prohibido estacionar avanza dos cuadras. Al llegar presta atención: ¿Ves aves?<br>
    Si ves aves, ve a la página 49.<br> 
    Si no ves aves, ve a la página 50.<br><br><br>`,
    next: [
        {text: "Página 49.", page: 49, condition: "siAves"},
        {text: "Página 50.", page: 50, condition: "noAves"}
    ]
},
48: {
    text: `No ves ninguna casa parecida a la de la esquina del cartel de prohibido estacionar entonces dobla a la derecha
     y avanza una cuadra.<br><br><br>`,
    next: [
        {text: "Ve a la página 51.", page: 51}
    ]
},
49: {
    text: `Si ves aves, es un camino seguro. 
    Dobla a la derecha y avanza tres cuadras.<br><br><br> `,
    next: [
        {text: "Ve a la página 4.", page: 4}
    ]
},

50: {
    text: `Si no ves aves es un mal presagio, algo raro está sucediendo. Doblá a la izquierda y avanza dos cuadras.
No permitas que nada te frene y por sobre todo aléjate de los autos rojos.<br>
Doblá nuevamente a la izquierda y avanza hasta encontrar un cartel de prohibido estacionar.<br>
 Aquí dobla a la izquierda y avanza.<br>`,
    next: [
        {text: "Ve a la página 66.", page: 66}
    ]
},

51: {
    text: `Dobla a la derecha y avanza una cuadra.<br><br><br> `,
    next: [
        {text: "Ve a la página 45.", page: 45}
    ]
},

52: {
    text: `Qué opinas de nuestro barrio hasta el momento? Hace un rato estás caminando,
     tal vez ya pudiste observar alguna de las huellas de los agentes del olvido.
     ¿Has notado una de las peculiaridades y halo de misterio que rodea a este barrio… quizás algún cartel de casa en venta?<br>
    En caso de haber visto una casa en venta, ve a la página 54. <br>
    Si no, ve a la página 53.<br>`,
    next: [
        {text: "Página 54.", page: 54, condition: "casaVenta"},
        {text: "Página 53.", page: 53, condition: "noCasaVenta"}
    ]
},

53: {
    text: `Dobla a la izquierda y avanza.<br><br><br>`,
    next: [
        {text: "Ve a la página 37.", page: 37}
    ]
},

54: {
    text: `Dobla a la derecha y avanza tres cuadras.<br><br><br> `,
    next: [
        {text: "Ve a la página 44.", page: 44}
    ]
},

55: {
    text: `Encontraste y viste todo, pero no lo recuerdas, ya lo olvidaste.<br>
     Continúa más allá de la Av. Triunvirato y deja el barrio.
     Vuelve otro día, te ayudaremos.<br><br><br>`,
    next: [
        {text: "Fin del recorrido.", page: 1} // Placeholder for end
    ]
},

56: {
    text: `Avanza en el mismo sentido hasta encontrar un limonero.<br>
    Si no lo encuentras, ve a la página 55. <br>
    Si lo encuentras, ve a la página 57.<br><br><br>`,
    next: [
        {text: "Página 55.", page: 55, condition: "noLimonero"},
        {text: "Página 57.", page: 57, condition: "siLimonero"}
    ]
},

57: {
    text: `Dobla a la izquierda y avanza. Observa las paredes, en el camino encontrarás un memorial.<br><br><br>`,
    next: [
        {text: "Página 63", page: 63} // Placeholder for end
    ]
},

58: {
    text: `30.000 compañeros detenidos desaparecidos presentes, ahora y siempre. <br>
    ¿Hoy hay niños jugando en la plaza?<br> 
    Si hay, ve a la página 37. <br>
    Si no hay, ve a la página 59.<br><br>`,
    next: [
        {text: "Página 37.", page: 37, condition: "hayNiños"},
        {text: "Página 59.", page: 59, condition: "noHayNiños"}
    ]
},

59: {
    text: `Dobla a la izquierda y avanza, aparenta estar buscando algo de vez en cuando.<br><br><br>`,
    next: [
        {text: "Ve a la página 4.", page: 4}
    ]
},

60: {
    text: `Es mejor intentar despistar a los agentes del olvido, doblá a la derecha, avanzá media cuadra.
     Hace como que olvidaste algo y regresá. Detenete pensativo en la esquina observando la plaza a tu derecha.<br><br><br>`,
    next: [
        {text: "Ve a la página 8.", page: 8}
    ]
},
61: {
    text: `Mosaico Esther Ballestrino. Ni olvido ni perdón…
Esther Ballestrino, una mujer paraguaya y militante, exiliada en Argentina,
 recordada como una de las fundadoras de la asociación Madres de Plaza de Mayo que por su incansable lucha fue secuestrada.<br>
  El 8 de diciembre de 1977, torturada y asesinada siendo arrojada al mar en los vuelos de la muerte en la dictadura cívico militar.
El mural fue diseñado por Nacional Mosaico Veneciano que trabaja para contribuir al arte del histórico proyecto nacional,
 popular y latinoamericano en busca de la identidad cultural latinoamericana. Memoria, diversidad, respeto cultural, inclusión
  y democratización del acceso al arte en el espacio público son algunos de los valores que son fundamento de su trabajo.<br>

    Si viniste de la página 25, ve a la 72.<br> 
    Si viniste de la página 23, ve a la 65.<br>`,
    next: [
        {text: "Página 72.", page: 72, condition: "desde25"},
        {text: "Página 65.", page: 65, condition: "desde23"}
    ]
},
62: {
    text: `
Mosaico pañuelo de Madres de Plaza de Mayo. “En Argentina, las locas de Plaza de Mayo, serán un ejemplo de salud mental, porque ellas se negaron a olvidar en los tiempos de amnesia obligatoria.” Eduardo Galeano
El mural fue diseñado en el año 2016 por Nacional Mosaico Veneciano que trabaja para contribuir al arte del histórico proyecto nacional, popular y latinoamericano en busca de la identidad cultural latinoamericana. Memoria, diversidad, respeto cultural,
 inclusión y democratización del acceso al arte en el espacio público son algunos de los valores que son fundamento de su trabajo.<br>`,
    next: [
        {text: "Ve a la página 70.", page: 70, condition: "desde8"}

    ]
},

63: {
    text: `Memorial Eduardo Mignona. Una mañana regada de sol, un coro de gorriones, una calle curva y una hilera de frondosos plátanos dieron marco natural al íntimo y emocionado homenaje realizado al escritor y cineasta Eduardo Mignogna, que abandonó físicamente este mundo en 2006.
Con este acto, los habitantes del barrio retribuyeron el enorme cariño que Mignogna tenía por Parque Chas, donde, según sus relatos; vivió los momentos más felices de su infancia.
 También, fue un reconocimiento a su obra literaria y cinematográfica, y al compromiso social y solidario por sus trabajos.<br>
 `,
    next: [
        {text: "Ve a la página 74.", page: 74, condition: "desde57"},
       
    ]
},

64: {
    text: `Mural de Marielle Franco. La imagen de Marielle es un ícono que alcanzó todo el mundo.
     Una mujer brasilera, afro, lesbiana, villera, feminista y socialista; que luchó incansablemente por los derechos de negros,
      mujeres y pobres y por la defensa del colectivo LGBTIQ+.
      El 14 de marzo de 2018 Franco fue acribillada con más de 40 tiros junto a su chofer, Anderson Gomes.
       Tenía 38 años y militaba en el Partido Socialismo y Libertad.
        En aquellos días venía denunciando la violencia en las favelas y el accionar de grupos parapoliciales.
         Era legisladora de la ciudad y varios de los proyectos que presentó se lograron hacer realidad luego de su muerte.
     El mural se inauguró con canciones y poemas. “Recordaremos a Marielle como una semilla de lucha que se sigue esparciendo”<br>`,
    next: [
        {text: "Ve a la página 69.", page: 69}
    ]
},
65: {
    text: `Todavía tenemos muchas cosas planeadas para vos, pero tal vez las fuerzas del olvido están ejerciendo
     fuertemente sobre tu experiencia. Vamos a intentarlo una vez más…<br><br>`,
    next: [
        {text: "Ve a la página 4.", page: 4}
    ]
},
66: {
    text: `Llegaste a la plaza del Éxodo o quizás no… de todas formas esto es un error.
Los fantasmas del olvido salieron a recorrer las calles, no es seguro continuar el recorrido.
El camino más directo para sortear las manipulaciones de los agentes va a ser continuar avanzando por donde venís hasta llegar a la avenida;
 recordá que acá las líneas rectas se curvan.Corré, no mires hacia atrás, recordá jamás acercarte a la garita de seguridad ni a ningún auto 
 rojo estacionado, o tal vez a los blancos. Mucha suerte. Esperamos pronto volver a verte. No nos olvides… Nosotros no lo haremos.
Fin del recorrido.<br>`,
    next: [
        {text: "Fin del recorrido.", page: 1} // Placeholder for end
    ]
},

67: {
    text: `Ya que preferiste pasear un poco antes de arrancar con nuestro recorrido,
     vas a poder conocer nuestras famosas calles curvas.
      Distintiva cualidad del barrio que ha sido el chivo expiatorio de infinidad de fantásticas especulaciones
       sobre el misterio que nos rodea y fabulaciones terroríficas sobre desapariciones. Pero que no te confundan,
        son otros los responsables de tales cuentos y difamaciones. No te dejes convencer y camina con atención y respeto.
         Doblá a la derecha y avanza. Consejo, jamás te acerques a la garita de seguridad.
          Cuando termines de pasar por otra plaza, doblá a la derecha y seguí hasta encontrar una casa verde en venta en una esquina.<br>`,
    next: [
        {text: "Ve a la página 71.", page: 71}
    ]
},

68: {
    text: `Esperamos que hayas tenido un buen paseo y que nadie te haya molestado. ¿No te acercaste a la garita verdad?
    Este viaje recién empieza así que todavía estás a tiempo de elegir si querés realizar nuestro recorrido o quizás… ya te arrepentiste. 
    Si querés comenzar dobla a la izquierda y avanzá una cuadra.<br>
Ir a la página 8. De lo contrario ir a la página 15.<br>`,
    next: [
        {text: "Página 8.", page: 8},
        {text: "Página 15.", page: 15},
    ]
},

69: {
    text: `Continuemos… <br>
    ¿Estás seguro? <br>
    Si conoces el misterio de la línea 187, ir a la página 27.<br> 
    Si no lo conoces, ir a la página 28.<br><br><br>`,
    next: [
        {text: "Página 27.", page: 27, condition: "siMisterio"},
        {text: "Página 28.", page: 28, condition: "noMisterio"}
    ]
},

70: {
    text: `¿Acaso conoces el gran mito de Parque Chas?<br> 
    Si lo conoces, ir a la página 17. <br>
    Si no, ir a la página 18.<br><br><br>`,
    next: [
        {text: "Página 17.", page: 17, condition: "siMito"},
        {text: "Página 18.", page: 18, condition: "noMito"}
    ]
},

71: {
    text: `¿Encontraste la casa verde o te perdiste? 
    Tal vez la viste y ya la olvidaste, los fantasmas del olvido rondan estas calles. 
    Si la encontraste, ve a la página 68.<br> 
    Si no, ve a la página 15.<br><br><br>`,
    next: [
        {text: "Página 68.", page: 68, condition: "siEncontraste"},
        {text: "Página 15.", page: 15, condition: "noEncontraste"}
    ]
},


72: {
    text: `Ahora avanza una cuadra en el sentido contrario al de cuando iniciaste el recorrido.
     Quizás en el camino veas unos pañuelos a tu derecha.
     Ve a la página 16.<br><br><br>`,
    next: [
        {text: "Página 16.", page: 16}
    ]
},
73: {
    text: `30.000 compañeros detenidos desaparecidos presentes; ahora y siempre.
Vuelve al punto exacto donde habías llegado antes de entrar a la plaza. Luego avanza en el mismo sentido en que lo venías haciendo.<br><br>`,
    next: [
        {text: "Ve a la página 19.", page: 19}
    ]
},
74: {
    text: `Seguiste tu camino y llegaste a la plaza del olvido, no permanezcas mucho tiempo ahí ni bebas agua en ese lugar.
     Continúa caminando por la misma calle hasta terminar la plaza.
     Buscá el mosaico escondido y vuelve al punto donde habías llegado.<br>`,
    next: [
        {text: "Ve a la página 76.", page: 76}
    ]
},

75: {
    text: `
Mosaico pañuelo de Madres de Plaza de Mayo. “En Argentina, las locas de Plaza de Mayo, serán un ejemplo de salud mental, porque ellas se negaron a olvidar en los tiempos de amnesia obligatoria.” Eduardo Galeano
El mural fue diseñado en el año 2016 por Nacional Mosaico Veneciano que trabaja para contribuir al arte del histórico proyecto nacional, popular y latinoamericano en busca de la identidad cultural latinoamericana. Memoria, diversidad, respeto cultural,
 inclusión y democratización del acceso al arte en el espacio público son algunos de los valores que son fundamento de su trabajo.<br>`,
    next: [
       
        {text: "Ve a la página 73.", page: 73, condition: "desde44"}
      
    ]
},

76: {
    text: `
Mosaico pañuelo de Madres de Plaza de Mayo. “En Argentina, las locas de Plaza de Mayo, serán un ejemplo de salud mental, porque ellas se negaron a olvidar en los tiempos de amnesia obligatoria.” Eduardo Galeano
El mural fue diseñado en el año 2016 por Nacional Mosaico Veneciano que trabaja para contribuir al arte del histórico proyecto nacional, popular y latinoamericano en busca de la identidad cultural latinoamericana. Memoria, diversidad, respeto cultural,
 inclusión y democratización del acceso al arte en el espacio público son algunos de los valores que son fundamento de su trabajo.<br>`,
    next: [
       
    
        {text: "Ve a la página 58.", page: 58, condition: "desde74"}
    ]
},

77: {
    text: `Memorial Eduardo Mignona. Una mañana regada de sol, un coro de gorriones, una calle curva y una hilera de frondosos plátanos dieron marco natural al íntimo y emocionado homenaje realizado al escritor y cineasta Eduardo Mignogna, que abandonó físicamente este mundo en 2006.
Con este acto, los habitantes del barrio retribuyeron el enorme cariño que Mignogna tenía por Parque Chas, donde, según sus relatos;
 vivió los momentos más felices de su infancia. También, fue un reconocimiento a su obra literaria y cinematográfica,
  y al compromiso social y solidario por sus trabajos.
    <br>`,
    next: [
         {text: "Ve a la página 11.", page: 11, condition: "desde19"}
    ]
},

}

        // Función para cargar una página y mostrarla
        function renderPage(page) {
            const content = document.getElementById('content');
            const buttons = document.getElementById('buttons');
            const pageNumber = document.getElementById('page-number');
            const backButton = document.getElementById('back-button'); // Botón de regresar

            // Mostrar el contenido de la página
            content.innerHTML = `<p>${pages[page].text}</p>`;
            buttons.innerHTML = '';

            // Actualizar el número de página
            pageNumber.innerHTML = `Página: ${page}`;

            // Mostrar las opciones de la página
            pages[page].next.forEach(next => {
                const button = document.createElement('button');
                button.textContent = next.text;
                button.onclick = () => {
                    // Guardar la página actual como la anterior antes de ir a la siguiente
                    previousPage = currentPage;
                    currentPage = next.page;
                    renderPage(currentPage);
                };
                buttons.appendChild(button);
            });

            // Mostrar el botón de "Regresar" solo si hay una página anterior
            if (previousPage !== null) {
                backButton.style.display = 'inline-block'; // Mostrar el botón
                backButton.onclick = () => {
                    renderPage(previousPage); // Regresar a la página anterior
                    previousPage = null; // Limpiar la variable previousPage para evitar ciclos
                };
            } else {
                backButton.style.display = 'none'; // Ocultar el botón si no hay página anterior
            }
        }

        // Cargar la primera página al iniciar
        renderPage(currentPage);
