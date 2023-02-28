let wordList = [
   {
        word: "manzana",
        hint: "De forma redondeada y algo hundida por los extremos, piel fina, de color verde, amarillo o rojo, carne blanca y jugosa, de sabor dulce o ácido, y semillas en forma de pepitas encerradas en una cápsula de cinco divisiones.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/2909/2909787.png"
    } ,
    {
        word: "banana",
        hint: "De forma alargada y algo curvada, pulpa de color blanquecina y piel lisa de color amarillo que se desprende con facilidad",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png"
    },
    {
        word: "naranja",
        hint: "De forma redonda, cáscara gruesa y rugosa y pulpa dividida en gajos, agridulce y muy jugosa.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/3076/3076104.png"
    },
    {
        word: "pera",
        hint: "De color verde, amarillo o encarnado, ancho por la parte de abajo y delgado por la de arriba (donde tiene el pedúnculo), de piel fina y pulpa blanca, muy jugosa, sabor dulce y, en el centro, unas semillas pequeñas de color negro",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/415/415767.png"
    },
    {
        word: "uva",
        hint: "Pequeño y de forma redonda u ovalada, piel muy fina y carne muy jugosa; nace junto a otros formando racimos.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/765/765560.png"
    },
    {
        word: "kiwi",
        hint: "De forma ovalada, piel delgada y vellosa, de color verde pardusco y pulpa jugosa, de color verde brillante y con diminutas semillas dispuestas en torno a un corazón blanco.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/4031/4031094.png"
    },
    {
        word: "sandia",
        hint: "Esférico y de gran tamaño, con corteza verde muy dura y pulpa roja, muy dulce y jugosa, y llena de pepitas negras.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/2224/2224249.png"
    },
    {
        word: "melon",
        hint: "De gran tamaño y forma ovalada, corteza lisa o surcada, verde o amarilla y pulpa muy jugosa, de sabor dulce y color amarillento o anaranjado.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/4056/4056979.png"
    },  
    {
        word: "limon",
        hint: "De forma ovalada, piel de color amarillo o verde y pulpa dividida en gajos, de sabor ácido y muy aromático.",
        categoria: "Frutas",
        imagen: "https://cdn-icons-png.flaticon.com/512/6866/6866584.png"
    },
    {
        word: "perro",
        hint: "Mamífero carnívoro doméstico de la familia de los cánidos que se caracteriza por tener los sentidos del olfato y el oído muy finos, por su inteligencia y por su fidelidad al ser humano, que lo ha domesticado desde tiempos prehistóricos; hay muchísimas razas, de características muy diversas.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998627.png"
    },
    {
        word: "gato",
        hint: "Mamífero felino de tamaño generalmente pequeño, cuerpo flexible, cabeza redonda, patas cortas, cola larga, pelo espeso y suave, largos bigotes y uñas retráctiles; es carnívoro y tiene gran agilidad, buen olfato, buen oído y excelente visión nocturna; existen muchas especies diferentes.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png"
    },    
    {
        word: "conejo",
        hint: "Mamífero de cuerpo alargado y arqueado de unos 40 cm de longitud, pelo suave y espeso, orejas largas, cola corta y patas traseras más desarrolladas que las delanteras; vive en madrigueras y se reproduce con enorme rapidez; es comestible, estimado como pieza de caza y fácilmente domesticable; hay muchas especies.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998765.png"
    },    
    {
        word: "caballo",
        hint: "Mamífero équido, macho, de tamaño mediano o grande, pelo corto de color generalmente uniforme y orejas cortas; se domestica con facilidad y suele usarse para la monta; hay muchas especies diferentes.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998679.png"
    },    
    {
        word: "tigre",
        hint: "Mamífero felino de unos 250 a 400 cm de longitud (cola incluida), de pelaje amarillo leonado con rayas transversales oscuras o negras en el lomo, la cabeza y la cola, blancuzco en el vientre; tiene cuerpo robusto, cola larga y uñas fuertes que usa para cazar.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998804.png"
    },    
    {
        word: "leon",
        hint: "Mamífero felino de 250 a 350 cm de longitud (cola incluida), pelaje pardo claro, cabeza grande, cola larga terminada en un mechón y uñas fuertes que usa para cazar; el macho es mayor que la hembra y tiene una larga melena que le cubre la nuca y el cuello.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998713.png"
    },    
    {
        word: "elefante",
        hint: "Mamífero paquidermo de gran tamaño, el mayor de los terrestres, con la piel de color gris oscuro, gruesa, rugosa y sin pelo, grandes orejas colgantes, larga trompa prensil, cuatro extremidades gruesas y casi cilíndricas, cola larga, y dos colmillos muy largos de punta cónica.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998642.png"
    },    
    {
        word: "oso",
        hint: "Mamífero plantígrado del orden de los carnívoros, de gran tamaño, cuerpo macizo, pelaje largo y abundante, cuello ancho, cabeza grande, orejas redondeadas, hocico alargado, cola pequeña, y patas cortas y gruesas con cinco dedos y fuertes garras.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1047/1047520.png"
    },    
    {
        word: "lobo",
        hint: "Mamífero cánido de tamaño mediano-grande, cuerpo esbelto, orejas erectas, hocico alargado y puntiagudo, cola larga y abundante pelo pardo, rojizo o gris; es un depredador voraz y resistente a la carrera.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/3065/3065743.png"
    },    
    {
        word: "zorro",
        hint: "Mamífero cánido de tamaño mediano, cuerpo esbelto, patas robustas y algo cortas, orejas erguidas, hocico alargado y puntiagudo, cola larga con pelo abundante y largo, y pelaje de color rojizo; es un astuto depredador",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/3065/3065706.png"
    },    
    {
        word: "mono",
        hint: "Nombre genérico con que se designa a cualquiera de los primates del suborden de los antropoides (hocico reducido y ojos en posición frontal).",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998721.png"
    },    
    {
        word: "leopardo",
        hint: "Mamífero felino de unos 175 a 250 cm de longitud (cola incluida), pelaje totalmente negro o bien rojizo amarillento con manchas anilladas oscuras, regularmente distribuidas, y blancuzco en el vientre; tiene cuerpo esbelto y fuerte, patas algo cortas, cola muy larga y uñas fuertes que usa para cazar.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1998/1998710.png"
    },    
    {
        word: "rana",
        hint: "Anfibio sin cola, de piel lisa y brillante, tronco rechoncho, cabeza grande y ojos saltones, con las extremidades posteriores muy desarrolladas para saltar; se alimenta de insectos que caza con su larga lengua y habita en charcos y lagunas; su carne es comestible",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/5999/5999613.png"
    },    
    {
        word: "vaca",
        hint: "Mamífero rumiante bóvido, hembra, de unos 150 cm de altura y 250 cm de longitud, cuerpo muy robusto, pelo corto, cabeza gruesa provista de dos cuernos curvos y puntiagudos, hocico ancho, papada en el pecho, y cola larga con un mechón en el extremo; de él se aprovechan la leche, la carne y la piel.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/2395/2395796.png"
    },    
    {
        word: "cangrejo",
        hint: "Crustáceo marino decápodo de cuerpo aplanado y oval, más ancho que largo, cubierto por un caparazón, generalmente pequeño y de color rojizo o pardo, y con las patas delanteras más grandes y terminadas en unas pinzas; hay muchas especies diferentes; su carne es comestible y muy apreciada.",
        categoria: "Animales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1010/1010028.png"
    },    
    {
        word: "mexico",
        hint: "Es un país entre los Estados Unidos y América Central, conocido por las playas en el Pacífico. Las ruinas antiguas, como Teotihuacán y la ciudad maya de Chichén Itzá, se distribuyen por el país, al igual que las ciudades de la época colonial española",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330433.png"
    },    
    {
        word: "argentina",
        hint: "Es un país soberano de América del Sur, ubicado en el extremo sur y sudeste de dicho subcontinente. Adopta la forma de gobierno republicana, representativa y federal.",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330487.png"
    },    
    {
        word: "colombia",
        hint: "Es un país del extremo norte de Sudamérica. Su paisaje cuenta con bosques tropicales, las montañas de los Andes y varias plantaciones de café. ",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330508.png"
    },    
    {
        word: "francia",
        hint: "Es un pais que abarca ciudades medievales, villas alpinas y playas mediterráneas. Su capital, es famosa por sus firmas de alta costura, los museos de arte clásico, como el Louvre. ",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330490.png"
    },    
    {
        word: "brasil",
        hint: "Es un vasto país de Sudamérica que se extiende desde la Cuenca del Amazonas en el norte hasta los viñedos y las enormes cataratas del Iguazú en el sur. Una de sus ciudades, simbolizada por su estatua de 38 m del Cristo Redentor sobre el cerro del Corcovado",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330430.png"
    },    
    {
        word: "ecuador",
        hint: "Es un país que se extiende por el ecuador en la costa oeste de Sudamérica. Sus diversos paisajes abarcan la selva del Amazonas, las zonas altas andinas y las islas Galápagos de abundante fauna.",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330581.png"
    },    
    {
        word: "chile",
        hint: "Es un país largo y angosto que se extiende por el borde occidental de Sudamérica, con más de 6,000 km de costa en el océano Pacífico.",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330554.png"
    },    
    {
        word: "alemania",
        hint: "Es un país de Europa occidental con un paisaje de bosques, ríos, cadenas montañosas y playas en el mar del Norte. Su capital, cuenta con sitios relacionados con la Segunda Guerra Mundial.",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330523.png"
    },    
    {
        word: "canada",
        hint: "Es el país norteamericano que se extiende desde los Estados Unidos en el sur hasta el círculo polar ártico en el norte. . ",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330442.png"
    },    
    {
        word: "portugal",
        hint: "Es un país del sur de Europa en la península ibérica, que limita con España. Su ubicación en el océano Atlántico influyó en muchos aspectos de su cultura ",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330461.png"
    },    
    {
        word: "australia",
        hint: "Es un país rodeado por los océanos Índico y Pacífico. El país es conocido por la Casa de la Ópera de Sídney, la Gran Barrera de Coral, una vasta área natural desértica conocida como Outback y especies animales únicas, como el canguro y el ornitorrinco. ",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330451.png"
    },    
    {
        word: "italia",
        hint: "País europeo con una larga costa mediterránea, influyó considerablemente en la cultura y la cocina occidental. Su capital es hogar del Vaticano, de ruinas antiguas y de obras de arte emblemáticas.",
        categoria: "Paises",
        imagen: "https://cdn-icons-png.flaticon.com/512/330/330672.png"
    },    
    {
        word: "futbol",
        hint: "Deporte que se practica entre dos equipos de once jugadores que tratan de introducir un balón en la portería del contrario impulsándolo con los pies, la cabeza o cualquier parte del cuerpo excepto las manos y los brazos",
        categoria: "Deportes",
        imagen: "https://cdn-icons-png.flaticon.com/512/919/919471.png"
    },    
    {
        word: "beisbol",
        hint: "Deporte que se practica entre dos equipos de nueve jugadores cada uno; se trata de golpear con un bate una pequeña pelota lanzada con la mano por un contrario y recorrer el perímetro de un cuadrado interior del campo pasando por las cuatro esquinas o bases antes que el rival recupere el control del juego.",
        categoria: "Deportes",
        imagen: "https://cdn-icons-png.flaticon.com/512/2112/2112081.png"
    },    
    {
        word: "baloncesto",
        hint: "Deporte que se practica, en una cancha rectangular, entre dos equipos de cinco jugadores que tratan de introducir el balón en la canasta contraria, que se encuentra a una altura de 3,05 m.",
        categoria: "Deportes",
        imagen: "https://cdn-icons-png.flaticon.com/512/3055/3055855.png"
    },    
    {
        word: "tenis",
        hint: "Deporte que se practica entre dos jugadores o dos parejas en una pista rectangular dividida transversalmente por una red; consiste en impulsar una pelota con una raqueta por encima de la red intentando que bote en el campo contrario y que el adversario no la pueda devolver.",
        categoria: "Deportes",
        imagen: "https://cdn-icons-png.flaticon.com/512/2317/2317989.png"
    },    
    {
        word: "boxeo",
        hint: "Deporte de combate en el que dos personas de la misma categoría de peso luchan entre sí golpeándose con los puños, empleando para ello unos guantes especiales y siguiendo unas reglas específicas.",
        categoria: "Deportes",
        imagen: "https://cdn-icons-png.flaticon.com/512/2503/2503381.png"
    },    
    {
        word: "natacion",
        hint: "Deporte o ejercicio que consiste en nadar; en las pruebas se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa",
        categoria: "Deportes",
        imagen: "https://cdn-icons-png.flaticon.com/512/4721/4721069.png"
    },    
    {
        word: "mercurio",
        hint: "Es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/3413/3413225.png"
    },    
    {
        word: "venus",
        hint: "Es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a la diosa romana del amor.",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/1266/1266549.png"
    },    
    {
        word: "tierra",
        hint: "Es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos.",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/921/921490.png"
    },    
    {
        word: "marte",
        hint: "Es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/305/305895.png"
    },    
    {
        word: "jupiter",
        hint: "Es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.​ Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre de un dios romano. ",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/3594/3594426.png"
    },    
    {
        word: "saturno",
        hint: "Es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Forma parte de los denominados planetas exteriores o gaseosos",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/1146/1146291.png"
    },    
    {
        word: "urano",
        hint: "Es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo ,el padre de Crono y el abuelo de Zeus.",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/3594/3594813.png"
    },    
    {
        word: "neptuno",
        hint: "Es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones",
        categoria: "Planetas",
        imagen: "https://cdn-icons-png.flaticon.com/512/8966/8966753.png"
    },    
    {
        word: "guitarra",
        hint: "Instrumento de cuerda pulsada que se toca con los dedos o un plectro",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1913/1913288.png"
    },    
    {
        word: "piano",
        hint: "Instrumento de teclado en el que las cuerdas son golpeadas por martillos accionados por las teclas.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/2606/2606732.png"
    },    
    {
        word: "batería",
        hint: "Conjunto de percusión compuesto por diferentes instrumentos, como platillos, tambores y cajas.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/1598/1598678.png"
    },    
    {
        word: "flauta",
        hint: "Instrumento de viento que se toca soplando por un agujero en un extremo.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/546/546650.png"
    },    
    {
        word: "violin",
        hint: "Instrumento de cuerda frotada que se toca con un arco.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/3655/3655246.png"
    },    
    {
        word: "saxofon",
        hint: "Instrumento de viento de metal que se toca soplando por una boquilla.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/3921/3921661.png"
    },    
    {
        word: "trompeta",
        hint: "Instrumento de viento de metal que se toca soplando por una boquilla y usando los labios para producir diferentes notas",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/2690/2690140.png"
    },    
    {
        word: "clarinete",
        hint: "Instrumento de viento de madera que se toca soplando por una boquilla y usando los dedos para cubrir diferentes orificios.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/8332/8332447.png"
    },    
    {
        word: "contrabajo",
        hint: "Instrumento de cuerda pulsada de gran tamaño, con un sonido grave y profundo.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/4633/4633959.png"
    },    
    {
        word: "oboe",
        hint: "Instrumento de viento de madera que se toca soplando por una boquilla y usando los dedos para cubrir diferentes orificios.",
        categoria: "Instrumentos musicales",
        imagen: "https://cdn-icons-png.flaticon.com/512/8332/8332523.png"
    } ,   
    {
        word: "continente",
        hint: "Una gran masa de tierra que se extiende sobre la superficie terrestre.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/4746/4746072.png"
    },  
    {
        word: "rio",
        hint: "Es un cuerpo de agua que fluye de manera continua a través de un lecho y que se desemboca en el mar, en un lago o en un río más grande.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/1368/1368308.png"
    },    
    {
        word: "desierto",
        hint: "Es una región caracterizada por la escasez de lluvia y la presencia de poca vegetación.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/1927/1927130.png"
    },    
    {
        word: "oceano",
        hint: "Es una gran extensión de agua salada que cubre más de la mitad de la superficie terrestre.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/3061/3061214.png"
    },   
    {
        word: "mar",
        hint: "Es una masa de agua salada que se encuentra en una depresión de la superficie terrestre, rodeada por tierra por todos lados.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/430/430572.png"
    },    
    {
        word: "lago",
        hint: "Es una masa de agua dulce que se encuentra en una depresión de la superficie terrestre y que está rodeada por tierra por todos lados.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/3277/3277621.png"
    },    
    {
        word: "isla",
        hint: "Es una masa de tierra rodeada de agua por todos lados.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/1788/1788615.png"
    },    
    {
        word: "peninsula",
        hint: "Es una masa de tierra que se extiende hacia el mar y que está rodeada de agua por tres de sus lados.",
        categoria: "Geografía",
        imagen: "https://cdn-icons-png.flaticon.com/512/9098/9098398.png"
    }/*,    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    },    
    {
        word: "",
        hint: "",
        categoria: "",
        imagen: ""
    }
 */ 

]

/* 
*/