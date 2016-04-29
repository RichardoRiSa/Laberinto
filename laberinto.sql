-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-04-2016 a las 05:43:37
-- Versión del servidor: 5.7.10-log
-- Versión de PHP: 5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laberinto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel1`
--

CREATE TABLE `nivel1` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel1`
--

INSERT INTO `nivel1` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'CARLOS BECERRA', 42.214),
(3, 'Ricardo Rivera ', 18.979),
(4, 'JOSE', 61.176),
(5, 'JOSE', 28.088),
(6, 'JOSE', 25.961),
(7, 'JOSE', 25.343),
(8, 'JOSE', 68.52),
(9, 'daniel', 22.67),
(10, 'daniel', 18.852),
(11, 'daniel', 35.814),
(12, 'daniel', 18.979),
(13, 'CARLOS BECERRA', 27.306),
(14, 'CARLOS BECERRA', 22.925),
(15, 'anonimo', 140.876),
(16, 'ANONIMO2', 49.795),
(17, 'ANONIMO2', 24.143),
(18, 'ANONIMO2', 37.16),
(19, 'RM', 35.614),
(20, 'RM', 24.833),
(21, 'RM', 23.925),
(22, 'RM', 40.251),
(23, 'HERNAN', 61.921),
(24, 'JORGE', 52.794),
(25, 'anonimo', 23.888),
(26, 'anonimo', 17.325),
(27, 'anonimo', 16.816),
(28, 'JORGE', 16.198),
(29, 'RICARDO', 16.125),
(30, 'JORGE', 16.307),
(31, 'DANIEL', 23.706),
(32, 'DANIEL', 15.016),
(33, 'Ricardo Rivera', 14.671),
(34, 'anonimo', 40.395);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel2`
--

CREATE TABLE `nivel2` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel2`
--

INSERT INTO `nivel2` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'Ricardo Rivera ', 16.852),
(3, 'Ricardo Rivera ', 22.179),
(4, 'JOSE', 73.865),
(5, 'JOSE', 32.196),
(6, 'JOSE', 19.634),
(7, 'JOSE', 24.961),
(8, 'TuMamaEsHombre', 39.105),
(9, 'ANONIMO2', 21.07);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel3`
--

CREATE TABLE `nivel3` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel3`
--

INSERT INTO `nivel3` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'RM', 28.579),
(3, 'ANDREA', 49.795);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel4`
--

CREATE TABLE `nivel4` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel4`
--

INSERT INTO `nivel4` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'FLOR', 49.394);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel5`
--

CREATE TABLE `nivel5` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel5`
--

INSERT INTO `nivel5` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'RM', 52.795),
(3, 'CAROLINA', 71.319),
(4, 'Ricardo RIvera', 25.087),
(5, 'Ricardo RIvera', 23.742);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel6`
--

CREATE TABLE `nivel6` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel6`
--

INSERT INTO `nivel6` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'TuMamaEsHombre', 18.489),
(3, 'CAROLINA', 58.43);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel7`
--

CREATE TABLE `nivel7` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel7`
--

INSERT INTO `nivel7` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'TuMamaEsHombre', 38.341);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel8`
--

CREATE TABLE `nivel8` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel8`
--

INSERT INTO `nivel8` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel9`
--

CREATE TABLE `nivel9` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel9`
--

INSERT INTO `nivel9` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel10`
--

CREATE TABLE `nivel10` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel10`
--

INSERT INTO `nivel10` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel11`
--

CREATE TABLE `nivel11` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel11`
--

INSERT INTO `nivel11` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 44.999);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel12`
--

CREATE TABLE `nivel12` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel12`
--

INSERT INTO `nivel12` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 44.999),
(2, 'RM', 70.483),
(3, 'CAROLINA', 68.102),
(4, 'YEIRLE', 75.101),
(5, 'YEIRLE', 30.76);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel13`
--

CREATE TABLE `nivel13` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nivel13`
--

INSERT INTO `nivel13` (`id`, `Nombre`, `Tiempo`) VALUES
(1, 'Piloto', 24.999),
(2, 'JORGE', 22.234),
(3, 'Ricardo RIvera', 10.834);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `records`
--

CREATE TABLE `records` (
  `nivel` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Tiempo` float NOT NULL,
  `Jugado` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `records`
--

INSERT INTO `records` (`nivel`, `Nombre`, `Tiempo`, `Jugado`) VALUES
(1, 'Ricardo Rivera', 14.671, 34),
(2, 'Ricardo Rivera ', 16.852, 9),
(3, 'Piloto', 24.999, 3),
(4, 'Piloto', 24.999, 2),
(5, 'Ricardo RIvera', 23.742, 5),
(6, 'TuMamaEsHombre', 18.489, 3),
(7, 'Piloto', 24.999, 2),
(8, 'Piloto', 24.999, 1),
(9, 'Piloto', 24.999, 1),
(10, 'Piloto', 24.999, 1),
(11, 'Piloto', 24.999, 1),
(12, 'Piloto', 24.999, 5),
(13, 'Ricardo RIvera', 10.834, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `nivel1`
--
ALTER TABLE `nivel1`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel2`
--
ALTER TABLE `nivel2`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel3`
--
ALTER TABLE `nivel3`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel4`
--
ALTER TABLE `nivel4`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel5`
--
ALTER TABLE `nivel5`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel6`
--
ALTER TABLE `nivel6`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel7`
--
ALTER TABLE `nivel7`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel8`
--
ALTER TABLE `nivel8`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel9`
--
ALTER TABLE `nivel9`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel10`
--
ALTER TABLE `nivel10`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel11`
--
ALTER TABLE `nivel11`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel12`
--
ALTER TABLE `nivel12`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `nivel13`
--
ALTER TABLE `nivel13`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`nivel`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `nivel1`
--
ALTER TABLE `nivel1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT de la tabla `nivel2`
--
ALTER TABLE `nivel2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `nivel3`
--
ALTER TABLE `nivel3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `nivel4`
--
ALTER TABLE `nivel4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `nivel5`
--
ALTER TABLE `nivel5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `nivel6`
--
ALTER TABLE `nivel6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `nivel7`
--
ALTER TABLE `nivel7`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `nivel8`
--
ALTER TABLE `nivel8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `nivel9`
--
ALTER TABLE `nivel9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `nivel10`
--
ALTER TABLE `nivel10`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `nivel11`
--
ALTER TABLE `nivel11`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `nivel12`
--
ALTER TABLE `nivel12`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `nivel13`
--
ALTER TABLE `nivel13`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
