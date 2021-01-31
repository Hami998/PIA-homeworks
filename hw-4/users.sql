-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 08:55 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reg_or_ad` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `e_mail` varchar(50) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `active` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `reg_or_ad`, `name`, `last_name`, `e_mail`, `nickname`, `password`, `active`) VALUES
(21, 1, 'Mihailo', 'Petrovic', 'mjacimovic98@gmail.com', 'Admin', 'Admin123', 0),
(20, 0, 'Dusan', 'Dusanic', 'dusan99@gmail.com', 'Dule', 'Dusan123', 0),
(19, 0, 'Nikola', 'Nikolic', 'nidza99@gmail.com', 'Nidza', 'Nidza123', 0),
(18, 0, 'Petar', 'Petrovic', 'perapetrovic99@gmail.com', 'Pera', 'Pera123', 0),
(17, 0, 'Mihailo', 'Jacimovic', 'mihajac98@gmail.com', 'Hami', 'Proba123', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
