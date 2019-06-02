-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 06, 2019 at 05:07 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `api_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `title`, `description`) VALUES
(0, '', 'Nous savons tous que les loups tuent différentes espèces d’animaux mais nous sommes moins au courant qu’ils ont donné la vie à beaucoup d’autres ! '),
(1, 'Les loups sont des prédateurs de premier plan qui ont des effets bénéfiques de grande envergure sur des écosystèmes entiers - y compris la structure des rivières.', 'Dès que les loups ont été réintroduits dans le parc, même en petit nombre, l’impact fut spectaculaire. Les influences bénéfiques des loups réintroduits sont devenues presque immédiatement apparentes.'),
(2, '', 'Puisqu\'ils sont des prédateurs qui chassent principalement des ongulés malades et vieillissants - particulièrement les wapitis, dont les populations ont explosé à Yellowstone - les loups ont arrêté l\'expansion de ces populations d\'herbivores tout en améliorant leur santé globale.'),
(3, '', 'Bien entendu au début, ils tuèrent certains cerfs mais ils changèrent également le comportement de ces cerfs, de manière plus profonde. Les cerfs commencèrent à éviter certaines parties du parc afin de fuir les loups. En particulier, les gorges et les vallées.'),
(4, '', 'Et immédiatement, ces lieux ont commencé à se régénérer. Après la réintroduction du loup, arbres et arbustes ont peu à peu repoussé, provoquant la régénération de tous les bois et de toute la végétation.'),
(5, '', 'Dans certains endroits, la hauteur des arbres ont quintuplé en seulement 6 ans ! Les pentes dénudées sont rapidement devenues des forêts de peupliers et de saules. Pour le plus grand plaisir des insectes et des oiseaux !'),
(42, '', 'Les oiseaux migrateurs ont augmenté considérablement, le nombre de castors a aussi augmenté car ils aiment manger les arbres. Les castors ont utilisé les branchages pour la construction de barrages.'),
(43, '', 'Les castors ont utilisé les branchages pour la construction de barrages. Les castors, comme les loups sont des ingénieurs de l’écosystème, ils créent des niches pour d’autres espèces et les barrages qu’ils construisent dans les rivières fournissent des habitats pour les loutres, les ragondins, les canards, les poissons, les reptiles, les amphibiens.'),
(44, '', 'L’accroissement de la végétation a commencé à limiter l’érosion des sols et stabiliser les berges des rivières.'),
(45, '', 'Parce que les loups tuent les prédateurs des lapins et des souris, la population des rongeurs a augmenté. Un délice que n’a pas tardé à engloutir les aigles, les corbeaux, lynx, belettes, scarabées, et autres charognards.Les carcasses sont aussi bénéfiques pour les sols. Elles apportent des nutriments comme l’azote. '),
(46, '', 'Les loups ont tué les coyottes, ce qui a entraîné une augmentation des lapins et de souris, l’apparition de faucons, de belettes, de renards et de blaireaux. Les aigles et les corbeaux se sont nourris des charognes laissé par les loups. Les castors ont également renforcé le travail des loups en tuant les bébés chevreuils.'),
(47, '', 'La population des ours a commencé à augmenter en raison de l’augmentation des baies sur les nouveaux arbustes. Les ours ont accentué la pression des loups en tuant quelques faons.'),
(48, '', 'Les loups ont changé le comportement des rivières. Elles ont commencé à moins zigzaguer grâce à la diminution de l’érosion. Les canaux se sont rétrécis, des mares se sont formées. Tout cela était parfait pour un habitat sauvage.'),
(49, 'Pourquoi?La forêt en pleine régénération a stabilisé les rivières qui se sont moins dégradées et du coup ont adopté un tracé plus figé dans le temps, les cerfs ont été repoussés des vallées et  rivières.', 'Conséquence de cette végétation qui a le temps de pousser : moins d’érosions. Du coup les loups, même peu nombreux ont non seulement transformé l’écosystème du Yellowstone mais également sa topographie. ');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `img`) VALUES
(1, 'https://picsum.photos/200/300/?random\r\n'),
(2, 'https://picsum.photos/200\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
