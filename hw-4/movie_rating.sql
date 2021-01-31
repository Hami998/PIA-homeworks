-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 09:04 PM
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
-- Table structure for table `movie_rating`
--

DROP TABLE IF EXISTS `movie_rating`;
CREATE TABLE IF NOT EXISTS `movie_rating` (
  `rating_id` int NOT NULL AUTO_INCREMENT,
  `e_mail` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `movie_rating`
--

INSERT INTO `movie_rating` (`rating_id`, `e_mail`, `title`, `rating`) VALUES
(73, 'mjacimovic98@gmail.com', 'Breaking Upwards', 4),
(75, 'nidza99@gmail.com', 'Bomber', 7),
(71, 'mihajac98@gmail.com', 'The Bucks County Massacre', 3),
(70, 'mihajac98@gmail.com', 'The Firm', 7),
(69, 'mihajac98@gmail.com', 'The Bone Man', 9);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
