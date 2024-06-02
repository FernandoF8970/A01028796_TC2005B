USE pokemon;


INSERT INTO Jugador (IDjugador, Nombre, Correo, Contrasena) VALUES
(1, 'Ash Ketchum', 'ash@pokemon.com', 'pikachu'),
(2, 'Misty', 'misty@pokemon.com', 'starmie'),
(3, 'Brock', 'brock@pokemon.com', 'onix'),
(4, 'Julian', 'A01027743@tec.com', 'eevee'),
(5, 'Porto', 'porto@pgmail.com', 'scyther'),
(6, 'Jessie', 'jessie@pokemon.com', 'ekans'),
(7, 'Valentina', 'Valentina@gmail.com', 'koffing'),
(8, 'Giovanni', 'giovanni@pokemon.com', 'persian'),
(9, 'Professor Oak', 'oak@pokemon.com', 'nidorino'),
(10, 'Lance', 'lance@pokemon.com', 'dragonite');


INSERT INTO Tipos_de_Carta (IDTipoCarta, Descripcion) VALUES
(1, 'Pokémon'),
(2, 'Entrenador'),
(3, 'Energía');


INSERT INTO Cartas (IDcarta, NombreCarta, IDTipoCarta) VALUES
(1, 'Pikachu', 1),
(2, 'Bulbasaur', 1),
(3, 'Charmander', 1),
(4, 'Squirtle', 1),
(5, 'Profesor Oak', 2),
(6, 'Energy', 3),
(7, 'Jigglypuff', 1),
(8, 'Meowth', 1),
(9, 'Pidgeotto', 1),
(10, 'MewTwo', 1),
(11, 'Magikarp', 1),
(12, 'Gyarados', 1);


INSERT INTO Efectos (IDefecto, Descripcion, Tipo) VALUES
(1, 'Ataque Eléctrico', 'Ataque'),
(2, 'Curación', 'Defensa'),
(3, 'Ataque de Fuego', 'Ataque'),
(4, 'Ataque de Agua', 'Ataque'),
(5, 'Ataque de Planta', 'Ataque'),
(6, 'Ataque Normal', 'Ataque'),
(7, 'Evolución', 'Mejora'),
(8, 'Escudo', 'Defensa'),
(9, 'Recuperación de Energía', 'Mejora'),
(10, 'Ataque Psíquico', 'Ataque');


INSERT INTO Cartas_Efectos (IDcartas, IDefecto, Descripcion) VALUES
(1, 1, 'Pikachu usa Ataque Eléctrico'),
(2, 2, 'Bulbasaur usa Curación'),
(3, 3, 'Charmander usa Ataque de Fuego'),
(4, 4, 'Squirtle usa Ataque de Agua'),
(5, 7, 'Profesor Oak permite evolución'),
(6, 9, 'Recupera energía'),
(7, 8, 'Jigglypuff usa Escudo'),
(8, 6, 'Meowth usa Ataque Normal'),
(9, 5, 'Pidgeotto usa Ataque de Planta'),
(10, 10, 'MewTwo usa Ataque Psíquico');


INSERT INTO Mazos (IDmazo, NombreMazo, IDjugador) VALUES
(1, 'Mazo de Ash', 1),
(2, 'Mazo de Misty', 2),
(3, 'Mazo de Brock', 3),
(4, 'Mazo de Julian', 4),
(5, 'Mazo de Porto', 5),
(6, 'Mazo de Jessie', 6),
(7, 'Mazo de Valentina', 7),
(8, 'Mazo de Giovanni', 8),
(9, 'Mazo de Oak', 9),
(10, 'Mazo de Lance', 10);


INSERT INTO Cartas_Mazo (IDmazo, IDcarta, NumeroCartas) VALUES
(1, 1, 3),
(1, 2, 2),
(2, 3, 1),
(2, 4, 4),
(3, 5, 1),
(3, 6, 3),
(4, 7, 2),
(4, 8, 2),
(5, 9, 1),
(5, 10, 2),
(6, 1, 2),
(6, 3, 1),
(7, 4, 2),
(7, 6, 3),
(8, 8, 2),
(8, 10, 1),
(9, 5, 3),
(9, 7, 2),
(10, 9, 4),
(10, 2, 2);


INSERT INTO Partida (IDpartida, IDjugador1, IDjugador2, ganador) VALUES
(1, 1, 2, 1),
(2, 3, 4, 3),
(3, 5, 6, 5),
(4, 7, 8, 8),
(5, 9, 10, 9),
(6, 1, 3, 1),
(7, 2, 4, 4),
(8, 5, 7, 7),
(9, 6, 8, 8),
(10, 9, 1, 9);
