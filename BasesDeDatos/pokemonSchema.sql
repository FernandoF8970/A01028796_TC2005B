DROP SCHEMA IF EXISTS pokemon;
CREATE SCHEMA pokemon;
USE pokemon;


--
-- Tables
--


--
-- Table Jugador
--
CREATE TABLE Jugador (
    IDjugador INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Correo VARCHAR(100),
    Contrasena VARCHAR(100)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Tipos de Carta
--
CREATE TABLE Tipos_de_Carta (
    IDTipoCarta INT PRIMARY KEY,
    Descripcion VARCHAR(100)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Cartas
--
CREATE TABLE Cartas (
    IDcarta INT PRIMARY KEY,
    NombreCarta VARCHAR(50),
    IDTipoCarta INT,
    FOREIGN KEY (IDTipoCarta) REFERENCES Tipos_de_Carta(IDTipoCarta)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Efectos
--
CREATE TABLE Efectos (
    IDefecto INT PRIMARY KEY,
    Descripcion VARCHAR(100),
    Tipo VARCHAR(50)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Cartas_Efectos
--
CREATE TABLE Cartas_Efectos (
    IDcartas INT,
    IDefecto INT,
    Descripcion VARCHAR(100),
    PRIMARY KEY (IDcartas, IDefecto),
    FOREIGN KEY (IDcartas) REFERENCES Cartas(IDcarta),
    FOREIGN KEY (IDefecto) REFERENCES Efectos(IDefecto)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Mazos
--
CREATE TABLE Mazos (
    IDmazo INT PRIMARY KEY,
    NombreMazo VARCHAR(50),
    IDjugador INT,
    FOREIGN KEY (IDjugador) REFERENCES Jugador(IDjugador)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Cartas_Mazo
--
CREATE TABLE Cartas_Mazo (
    IDmazo INT,
    IDcarta INT,
    NumeroCartas INT,
    PRIMARY KEY (IDmazo, IDcarta),
    FOREIGN KEY (IDmazo) REFERENCES Mazos(IDmazo),
    FOREIGN KEY (IDcarta) REFERENCES Cartas(IDcarta)
) ENGINE=InnoDB CHARSET=utf8mb4;

--
-- Table Partida
--
CREATE TABLE Partida (
    IDpartida INT PRIMARY KEY,
    IDjugador1 INT,
    IDjugador2 INT,
    ganador INT,
    FOREIGN KEY (IDjugador1) REFERENCES Jugador(IDjugador),
    FOREIGN KEY (IDjugador2) REFERENCES Jugador(IDjugador)
) ENGINE=InnoDB CHARSET=utf8mb4;


--
-- Views
--


--
-- View de Cartas con sus Efectos
--
CREATE VIEW Vista_Cartas_Efectos AS
SELECT c.IDcarta, c.NombreCarta, e.Descripcion AS Efecto
FROM Cartas c
JOIN Cartas_Efectos ce ON c.IDcarta = ce.IDcartas
JOIN Efectos e ON ce.IDefecto = e.IDefecto;

--
-- View de Mazos con sus Cartas
--
CREATE VIEW Vista_Mazos_Cartas AS
SELECT m.IDmazo, m.NombreMazo, j.Nombre AS NombreJugador, c.NombreCarta, cm.NumeroCartas
FROM Mazos m
JOIN Jugador j ON m.IDjugador = j.IDjugador
JOIN Cartas_Mazo cm ON m.IDmazo = cm.IDmazo
JOIN Cartas c ON cm.IDcarta = c.IDcarta;

--
-- View de búsqueda de carta por ID
--
CREATE VIEW Vista_Carta_Por_ID AS
SELECT c.IDcarta, c.NombreCarta, tc.Descripcion AS TipoCarta, p.NombrePokemon
FROM Cartas c
JOIN Tipos_de_Carta tc ON c.IDTipoCarta = tc.IDTipoCarta
LEFT JOIN Pokemon p ON c.IDPokemon = p.IDPokemon;

--
-- View de cartas y sus tipos
--
CREATE VIEW Vista_Cartas_Tipos AS
SELECT c.IDcarta, c.NombreCarta, tc.Descripcion AS TipoCarta
FROM Cartas c
JOIN Tipos_de_Carta tc ON c.IDTipoCarta = tc.IDTipoCarta;

--
-- View de jugadores y sus mazos
--
CREATE VIEW Vista_Jugadores_Mazos AS
SELECT j.IDjugador, j.Nombre AS NombreJugador, m.IDmazo, m.NombreMazo
FROM Jugador j
JOIN Mazos m ON j.IDjugador = m.IDjugador;

