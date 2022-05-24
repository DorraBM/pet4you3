-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mar 24 Mai 2022 à 12:20
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `pet4you`
--
CREATE DATABASE `pet4you` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `pet4you`;

-- --------------------------------------------------------

--
-- Structure de la table `annonce`
--

CREATE TABLE IF NOT EXISTS `annonce` (
  `id_annonce` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(40) NOT NULL,
  `categorie` varchar(30) NOT NULL,
  `espece` varchar(30) NOT NULL,
  `image` varchar(150) NOT NULL,
  `age` int(11) NOT NULL,
  `sexe` varchar(20) NOT NULL,
  `vaccin` tinyint(1) NOT NULL,
  `description` varchar(500) NOT NULL,
  `lieu` varchar(50) NOT NULL,
  `date_naissance` date NOT NULL,
  `nom` varchar(40) NOT NULL,
  PRIMARY KEY (`id_annonce`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `annonce`
--

INSERT INTO `annonce` (`id_annonce`, `titre`, `categorie`, `espece`, `image`, `age`, `sexe`, `vaccin`, `description`, `lieu`, `date_naissance`, `nom`) VALUES
(1, 'Adoption', 'chat', 'aaa', 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 10, 'ee', 0, 'aa', '', '0000-00-00', ''),
(2, 'undefined', 'Chat', 'ddd', 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 10, 'Male', 0, '', 'aaaa', '2022-05-05', 'ddd'),
(3, 'undefined', 'Chien', 'azer', 'https://images.pexels.com/photos/3215610/pexels-photo-3215610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 15, 'Femelle', 0, 'null', 'zzz', '2022-05-06', 'azer'),
(4, 'Accouplement', 'Chien', 'azerty', 'https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 12, 'Femelle', 0, '', 'ddd', '2022-05-19', 'azeert');
