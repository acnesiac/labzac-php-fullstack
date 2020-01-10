-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 22, 2019 at 04:31 PM
-- Server version: 5.6.44-cll-lve
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hs`
--
CREATE DATABASE IF NOT EXISTS `hs` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `hs`;

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `slug`, `title`, `description`, `body`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'prueba', 'prueba', 'decc', 'Este es una desciprionc', 21, '2019-03-11 13:14:18', '2019-03-11 13:14:18'),
(2, 'paciente-2', 'paciente 2', 'el paciente tiene fractura', 'DX adjunto', 21, '2019-03-11 13:18:22', '2019-03-11 13:18:22'),
(3, 'new-post', 'new post', 'about', 'demora', 21, '2019-03-11 13:27:12', '2019-03-11 13:27:12');

-- --------------------------------------------------------

--
-- Table structure for table `article_tag`
--

CREATE TABLE `article_tag` (
  `id` int(10) UNSIGNED NOT NULL,
  `article_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `commentdxes` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `diagnostico_id` int(10) UNSIGNED NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `article_id` int(10) UNSIGNED NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `diagnosticos`
--

CREATE TABLE `diagnosticos` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `venta_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------

--
-- Table structure for table `diagnostico_tag`
--

CREATE TABLE `diagnostico_tag` (
  `id` int(10) UNSIGNED NOT NULL,
  `diagnostico_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `diagnostico_tag`
--

INSERT INTO `diagnostico_tag` (`id`, `diagnostico_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(0, 0, 9, NULL, NULL),
(0, 0, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `imagenesrx`
--

CREATE TABLE `imagenesrx` (
  `id` int(15) NOT NULL,
  `url` varchar(200) NOT NULL,
  `articleid` int(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `version` bigint(20) NOT NULL,
  `migration_name` varchar(100) DEFAULT NULL,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `breakpoint` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`version`, `migration_name`, `start_time`, `end_time`, `breakpoint`) VALUES
(20171106211018, 'CreateUsersTable', '2017-11-30 23:21:23', '2017-11-30 23:21:23', 0),
(20171108020701, 'CreateUsersFollowingTable', '2017-11-30 23:21:23', '2017-11-30 23:21:23', 0),
(20171108045654, 'CreateArticlesTable', '2017-11-30 23:21:23', '2017-11-30 23:21:23', 0),
(20171108093522, 'CreateTagsTable', '2017-11-30 23:21:23', '2017-11-30 23:21:23', 0),
(20171108112804, 'CreateCommentsTable', '2017-11-30 23:21:23', '2017-11-30 23:21:24', 0),
(20171108140627, 'CreateUserFavoriteTable', '2017-11-30 23:21:24', '2017-11-30 23:21:24', 0);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'cancer', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(2, 'contusion', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(3, 'shock', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(4, 'diabetes', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(5, 'locura', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(6, 'depresion', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(7, 'paro', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(8, 'desangramiento', '2017-11-30 23:21:44', '2017-11-30 23:21:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` text COLLATE utf8_unicode_ci,
  `bio` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `token`, `bio`, `image`, `created_at`, `updated_at`) VALUES
(1, 'claud.reilly@hotmail.com', 'jared.quitzon', '$2y$10$2r5yrX6ynp8V6txPsxE/pOcimbYtR8Lj0gVEpiCGvg/MPDdb3Lx0O', '3h\\f~)#', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(2, 'brown.ottilie@yahoo.com', 'shanahan.meghan', '$2y$10$BPobRaKr1adYK7UQmFZmZOf8ygt81H.j3AdEOtYssPULTrATPXUmm', '{dOKfYv3=A', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(3, 'ogleichner@gmail.com', 'santina.muller', '$2y$10$/tcJy3bx9XRtqMps/U.Veu6fX3mMV/IYU/jjZpyX1HgrPQxw50b6O', '-=GM|rzRevA@X`ex', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(4, 'mitchell.johns@hotmail.com', 'iorn', '$2y$10$vYu/vdzQPZqnAwdpJah0iuFVOJ5/G/0XnnHOKtSs4oJlh11msbnU2', '!)*D;e', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(5, 'gilberto.nikolaus@hotmail.com', 'brice34', '$2y$10$4fGX3YhNrXwaw20G4CvXP.xaV3CbkdEi7.rGIiPWsH0RFKq/IguhW', '^DR_Ht[', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(6, 'quigley.wilson@mohr.net', 'mercedes51', '$2y$10$Ehy/2ZaMgaUE5ZCgwn1a6e4doAAnr.lKQyxhCp2FShczVcMFAkQRi', 'wMg]eO;u^3', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(7, 'amely74@yahoo.com', 'jhaley', '$2y$10$IItI0m0B7rddT/8jNKKtSezyMxlO1Z7vH/fo9a6ZhNTj5pHWV1kui', 'oop];]', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(8, 'bartholome58@streich.biz', 'paige55', '$2y$10$pDOGb6Bn6MfRlcG40NdSsO8qsLkiMclPctAa2J4dJyp.euLRPumdq', '=npQY%6l3Zz9lU\\t1', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(9, 'leannon.bethany@yahoo.com', 'schiller.magnolia', '$2y$10$lEmMefTmlliIjIYk9Qm7muP/nvfk60wwuxG3a1J7QbmYLx7b.Dd/.', 'k#b9^I', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(10, 'lkertzmann@gmail.com', 'bzboncak', '$2y$10$fhTiuClZdqBrhTxvKAS5Gu7wuHiCN57oaW2PRkjTsGNgzdvzSNRe6', '\\bt*4+;*E6H.T7', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(11, 'halvorson.ezekiel@erdman.com', 'johns.nona', '$2y$10$KgF2MAazFGhBugKIEgEKCOV2XKBkt4n9yPmn.n3e3PX2vNv7/iudq', '22-gVs', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(12, 'emard.jasmin@gmail.com', 'antone57', '$2y$10$IRFzRqvihw2mwepzB1jKLeUe9h7RYv6wtIvcnIyE52Tu6cNjTIWuC', ')o,an&Az#~FT2s[q', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(13, 'mekhi41@runte.net', 'mya11', '$2y$10$Gela.b6NgS2pLvRPN1B20OIPcYgmUJX61Lv90p8/rtZ1s.9stg16e', 'Te\"a=6-=s', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(14, 'nadia39@gmail.com', 'dubuque.lucie', '$2y$10$fhGc7VYyGvHsEqrdLI8AwuJNa4g3OFaQz5y2LykdVVn0VuP04bqS.', '@ovg:ZY<:', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(15, 'maeve35@hotmail.com', 'anita.bahringer', '$2y$10$F0zg5qbi.zuSG0cWBP8q0.nDWfHfNnNuzHzyS5nv27MMTjBPiPrBu', 'nY7oUbGS.R;KX6&RS1', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(16, 'kiehn.cortney@gmail.com', 'ikoepp', '$2y$10$SFCash0kJ.AR2gCk/MFePOIAubrfeumCRNeYJ4f9wG3nOgTleT/92', 'lp`t!VbVoOIG\"A', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(17, 'sbeatty@schuppe.com', 'xwindler', '$2y$10$KIYosLkSL9Z/4beVyhGsyumvRisMP9Jn8dA/1.rXNfKS36N/XEnTG', 'N@<uMSB{Ag\"}Y4&r', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(18, 'aoconner@yahoo.com', 'sabina.champlin', '$2y$10$OQs9cPeGlSIH8jj4yOzWrebKJTwkNBjA/tUELC6b1H0q7gKWEhdda', 'p6)8^2Z3)01c$gY~6M@', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(19, 'qokuneva@ryan.info', 'shanahan.conor', '$2y$10$Qb6I5PYBQpUqikt4XZsPp.rlmTML7qK0yMJpA.3HmRxSQ1grlyveu', '[v\'*a{c=C?Z,_', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(20, 'shanelle01@doyle.com', 'montana95', '$2y$10$fDqu9cFvZFcIQNKDeLuwVeWvrOwvxvYBqW6ETBFSLFQFidCzoRrfu', 'Is%9[n\\D_\\8bZ6<', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(21, 'acnesiac@hotmail.com', 'acnesiac', '$2y$10$GirT2T01PyN4n2TuoRVPAuVGXbJd54UI3TjcyFLlpHnFOwji.qqiC', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTIwNzY0MTQsImV4cCI6MTUxMjA4MzYxNCwianRpIjoidnROZ3hjeTZkZmdoeGoyUHlFK3QrUT09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiYWNuZXNpYWMifQ.crwhwiFLvwl-YAjQl-d-9GnkR_GH2pCZxRpT2-8qx3c', 'Adolfo Ruiz Rivas', 'http://www.welikeviral.com/files/2016/11/1-1-3.jpg', '2017-12-01 04:13:35', '2017-12-05 02:03:37'),
(22, 'xenbyl@gmail.com', '', '$2y$10$I9bgueVyLFucQwLM8r1mPe9aaJgbPwWx8vnusYIpE6TKZ3hZND7X2', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTIwODMzNjYsImV4cCI6MTUxMjA5MDU2NiwianRpIjoiRkJrN3VIRnljN29ZR05ZbktGUVJ0dz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoieGVuYnlsIn0.FF53RjaBIVhvosrl76BVHlfS4g1dGdYce7qqIJwU2n8', NULL, '', '2017-12-01 06:09:26', '2017-12-02 03:44:57'),
(23, 'xenbyl@hotmail.com', 'hship', '$2y$10$YdSnE8oqlRnc5sEhizJCiekvAoTDvCCfdL48jkY/xoBhwKtOtN1k.', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTIxNTk3OTQsImV4cCI6MTUxMjE2Njk5NCwianRpIjoiOXlJbHhoaFE3ckRHMVhNYUNCZUVUdz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiaHNoaXAifQ.AXVt0mmfS2qHSIUsVu7719orkhr7OTGt7sQKcsL6k0U', NULL, 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-12-02 03:23:14', '2017-12-02 03:26:15'),
(24, 'pbvp_14@hotmail.com', 'PaolaBVelasco', '$2y$10$t1p//6Qggsmic2YigNRbY.nT2.znT5kK7BUZXyvNUSpl1Upr/B2uK', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTIxNjM4MTcsImV4cCI6MTUxMjE3MTAxNywianRpIjoidExWVEdkamlIbzJRTktzNE1KVXBwdz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiUGFvbGFCVmVsYXNjbyJ9.r_JrD6Z5bPlUP23rrtbzsSJKhXDtlAcwEXAXjvX0Y7s', 'Lic. Enfermería\nMGGI', 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-12-02 04:30:17', '2017-12-02 04:34:39'),
(25, 'KEYLASOFIA@hotmail.com', 'KEYLASOFIA', '$2y$10$Kj8NgBDfdvkGQq7yBaQ58OKugE5fAnz172np/zqD/g1xN7zSmm..m', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTIxNjUxNzksImV4cCI6MTUxMjE3MjM3OSwianRpIjoiUTZNYlwvRW5lQWNQQ2dmT1ViK0hPbWc9PSIsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsInN1YiI6IktFWUxBU09GSUEifQ.FGK0i7qQskOCRaO_MPnxEsah0EukNOZNl86hfUdh6BI', NULL, NULL, '2017-12-02 04:52:59', '2017-12-02 04:52:59'),
(26, 'mar_mari_lib@hotmail.com', 'Martha', '$2y$10$7ttWoqdXX30QkXi1lWgMpe6TIp8FHEKg5WvT/O8idJx.Nuirx5XOS', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTIxNjU2NzEsImV4cCI6MTUxMjE3Mjg3MSwianRpIjoiSFp0WU9vUnlWS2QrVVhORkplMFJsUT09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiTWFydGhhIn0.2fOBOLndDIeA4TNEmoyxkIMqnPeQdovsoFjZ4x2u7l4', 'PROBANDO', 'https://static.productionready.io/images/smiley-cyrus.jpg', '2017-12-02 05:01:11', '2017-12-02 06:57:36'),
(27, 'sami@gmail.com', 'sami@gmail.com', '$2y$10$s0ZT4VPJCkM.a5YpmTVGM.p4nKOm1OVRwmhssegOaN6MUJI90CRXK', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI0MDU3ODYsImV4cCI6MTUxMjQxMjk4NiwianRpIjoibzlzZVl3N0xScTVUUmVtd2lMbG00Zz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoic2FtaUBnbWFpbC5jb20ifQ.VLpjRpaHNDqPIYheIMOSQCoEWaejIxsvK47i8XTddzA', NULL, 'http://www.welikeviral.com/files/2015/05/10193_14_site_clear.jpeg', '2017-12-04 23:43:06', '2017-12-04 23:43:46'),
(28, 'duranduran@hotmail.com', 'duranduran@hotmail.com', '$2y$10$Fko2G/dtbMItdUJkjSD8A.9fDALPa8kenRMge6pZFClao6by9KBeW', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI1MDY4MzMsImV4cCI6MTUxMjUxNDAzMywianRpIjoiU3NaRlZGdjZoOTlcL2EwQ1wvR1BpZDBBPT0iLCJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJzdWIiOiJkdXJhbmR1cmFuQGhvdG1haWwuY29tIn0.3GVLXZWcfcBW9wJGvLi33oLrf1RF9VWNV6_tOsh-wdg', NULL, NULL, '2017-12-06 03:47:13', '2017-12-06 03:47:13'),
(29, 'depechemode@hotmail.com', 'depechemode@hotmail.com', '$2y$10$jvwlGj7w8aCqalnfBbT4TOI15eFUbyyXrz9T0/F1Fhxs2l7NMxLJW', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI1MDg2MTYsImV4cCI6MTUxMjUxNTgxNiwianRpIjoib2d5bjZVdURadTJ3NVZcL1BuXC9aQ1RnPT0iLCJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJzdWIiOiJkZXBlY2hlbW9kZUBob3RtYWlsLmNvbSJ9.8GouKLUHBDSufjuQdzZwv90WG4fkw87kloPTsPxo_OI', NULL, NULL, '2017-12-06 04:16:56', '2017-12-06 04:16:56'),
(30, 'platform@hotmail.com', 'platform@hotmail.com', '$2y$10$KgGZcBjkPFuR63y3B4vkCe0r9iWlhQ4oVDwQFTEqSkLOfWbyAkaSC', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI1MDkyOTYsImV4cCI6MTUxMjUxNjQ5NiwianRpIjoiRUZ1ZjY4K1p0OWhSbFZQbTJBZk9lZz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoicGxhdGZvcm1AaG90bWFpbC5jb20ifQ.H1N3gBJ1cEksGDlos8xZPCLzqqA7dK-Z89UJE9V8MwU', NULL, NULL, '2017-12-06 04:28:16', '2017-12-06 04:28:16'),
(31, 'enjoysilence@hotmail.com', 'enjoysilence', '$2y$10$CPP0k1RZSZqjJUn.pifDZe3FzoL2stMgSrFnZGQ7MfVdaU7szNKSu', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI1MDk2MzAsImV4cCI6MTUxMjUxNjgzMCwianRpIjoiK1NBTFVRZ3FKMHp6bTRcL2JrRkl3RFE9PSIsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsInN1YiI6ImVuam95c2lsZW5jZSJ9.6pnq-M9yD1uNzFIhcZKHJrFnBnzRqdoJiBEj02FBe_A', NULL, NULL, '2017-12-06 04:33:51', '2017-12-06 04:33:51'),
(32, 'savagegarden@hotmail.com', 'savagegarden', '$2y$10$jNHsHu4X1NL9MsAgh0I9U.7xkfD.dFCX9VF3.iS4j0fN373X0WLs2', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTI1MTA5ODMsImV4cCI6MTUxMjUxODE4MywianRpIjoiclRVUVVRUkhNK0wzRUliN1FNVER3QT09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoic2F2YWdlZ2FyZGVuIn0.zW1s9jNUNmz95kRPzZ-qUmFD7LAHRkKNeQJ4u02y1Xo', NULL, NULL, '2017-12-06 04:56:23', '2017-12-06 04:56:23'),
(33, 'emmanuelmontoya@email.com', 'emmanuel', '$2y$10$nPwk0TJFe3bwd0kJlKs0/uap0LRznJBl9JjRRBnkN6acQ6/Jc.TLy', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mjg3NDY3ODQsImV4cCI6MTUyODc1Mzk4NCwianRpIjoiSzZmRDJ6VXZqNzJnUkhOODJzYm4ydz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiZW1tYW51ZWwifQ.8SDJ6AsG88RZlR7e58pI58NO_HiO-FBMNdQOK4uJTOU', NULL, NULL, '2018-06-12 02:53:05', '2018-06-12 02:53:05'),
(34, 'asdfadf@hotmail.com', 'fasdfa', '$2y$10$4MZWYvAVaHOJQcdwnO0OROCc/sZPomV7Eujlc6hjqAjvK4u3cQIOW', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1Mzk5NzExOTQsImV4cCI6MTUzOTk3ODM5NCwianRpIjoiczFNQWVuT29WOW1DRXhBYkpFUjB2UT09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiZmFzZGZhIn0.onf3jcWiHOYrLIo5XGYwod-YsrUsDXpzLYCtwsqIYyM', NULL, NULL, '2018-10-20 00:46:34', '2018-10-20 00:46:34'),
(35, 'asdfasdf@hotmail.com', 'asdf', '$2y$10$wL0JZOtR/IvA.YGd/RsqMOBPOieQWH7OFhlyONAXkKl2Nn3N4hAQu', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDM5NjA2MjgsImV4cCI6MTU0Mzk2NzgyOCwianRpIjoib1ZYRkxVd2dxU3JiSHdpclZZeXJSZz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiYXNkZiJ9.OhZNaCkzgGguSmLR5WL2eJsJUfp8EImDVQ3IRx5VgK4', NULL, NULL, '2018-12-05 04:57:08', '2018-12-05 04:57:08'),
(36, 'acnesisc@homsk.com', 'acnesisc@homsk.com', '$2y$10$8eTxoB5pxZOLLX4PLAzgd.S4/dp5ri8ncxAOw3ooGneOxEN/DUrUe', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTI0NDkzODcsImV4cCI6MTU1MjQ1NjU4NywianRpIjoiTDg3SEJyMmFvZUN1VWtCZUJmYXI3Zz09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiYWNuZXNpc2NAaG9tc2suY29tIn0.ZGgNYRL6WJH-NSdtVYJt4PxG8Ja_eLevmh_f5gzxegU', NULL, NULL, '2019-03-13 10:56:27', '2019-03-13 10:56:27'),
(37, 'acnesiac1@hotmail.com', 'acnesiac1@hotmail.com', '$2y$10$I./D.gdL5yopib3xZ4F.reXoTDCMVWH/SOl4uwBL82F8Z3BJQh9rW', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTI0NDk0MTksImV4cCI6MTU1MjQ1NjYxOSwianRpIjoiYzkzOEt2b2N6SFpYTHBkRXRoQ3dQQT09IiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0Iiwic3ViIjoiYWNuZXNpYWMxQGhvdG1haWwuY29tIn0.sCk2yBWApAmkkk06cuyAy31MzfHSNXuy70nzME9Zo9Y', NULL, NULL, '2019-03-13 10:56:59', '2019-03-13 10:56:59');

-- --------------------------------------------------------

--
-- Table structure for table `users_following`
--

CREATE TABLE `users_following` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `following_user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users_following`
--

INSERT INTO `users_following` (`id`, `user_id`, `following_user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(2, 1, 19, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(3, 2, 1, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(4, 2, 12, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(5, 2, 16, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(6, 3, 6, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(7, 3, 7, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(8, 3, 11, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(9, 3, 16, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(10, 3, 17, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(11, 4, 1, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(12, 4, 3, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(13, 4, 11, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(14, 4, 16, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(15, 4, 18, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(16, 4, 19, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(17, 5, 4, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(18, 5, 9, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(19, 5, 10, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(20, 5, 15, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(21, 5, 16, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(22, 5, 17, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(23, 6, 3, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(24, 6, 9, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(25, 6, 13, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(26, 6, 15, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(27, 6, 17, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(28, 6, 19, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(29, 6, 20, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(30, 7, 1, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(31, 7, 2, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(32, 7, 5, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(33, 7, 7, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(34, 7, 8, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(35, 7, 10, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(36, 7, 11, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(37, 7, 12, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(38, 7, 18, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(39, 8, 1, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(40, 8, 3, '2017-11-30 23:21:44', '2017-11-30 23:21:44'),
(41, 8, 5, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(42, 8, 7, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(43, 8, 12, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(44, 8, 14, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(45, 8, 16, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(46, 8, 19, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(47, 9, 2, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(48, 9, 4, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(49, 9, 5, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(50, 9, 9, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(51, 9, 10, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(52, 9, 11, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(53, 9, 13, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(54, 9, 16, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(55, 9, 19, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(56, 10, 6, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(57, 10, 7, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(58, 10, 8, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(59, 10, 9, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(60, 10, 10, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(61, 10, 13, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(62, 10, 14, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(63, 10, 18, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(64, 11, 10, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(65, 11, 11, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(66, 11, 12, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(67, 13, 10, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(68, 13, 20, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(69, 14, 3, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(70, 15, 3, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(71, 15, 18, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(72, 16, 3, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(73, 16, 6, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(74, 17, 2, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(75, 18, 2, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(76, 18, 6, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(77, 18, 7, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(78, 18, 11, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(79, 18, 12, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(80, 18, 13, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(81, 18, 15, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(82, 18, 16, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(83, 18, 17, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(84, 18, 18, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(85, 19, 3, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(86, 19, 4, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(87, 19, 5, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(88, 19, 7, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(89, 19, 10, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(90, 19, 11, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(91, 19, 13, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(92, 19, 16, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(93, 19, 20, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(94, 20, 3, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(95, 20, 6, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(96, 20, 7, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(97, 20, 10, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(98, 20, 11, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(99, 20, 13, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(100, 20, 14, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(101, 20, 15, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(102, 20, 17, '2017-11-30 23:21:45', '2017-11-30 23:21:45'),
(103, 20, 18, '2017-11-30 23:21:45', '2017-11-30 23:21:45');

-- --------------------------------------------------------

--
-- Table structure for table `user_favorite`
--

CREATE TABLE `user_favorite` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `article_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `costo` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `body` text COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `cliente` int(10) UNSIGNED NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------


--
-- Indexes for dumped tables
--

--
-- Indexes for table `diagnosticos`
--
ALTER TABLE `diagnosticos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `diagnosticos_user_id_foreign` (`user_id`),
  ADD KEY `diagnosticos_venta_foreign` (`venta_id`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_user_id_foreign` (`user_id`);

--
-- Indexes for table `article_tag`
--
ALTER TABLE `article_tag`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `article_tag_article_id_tag_id_unique` (`article_id`,`tag_id`),
  ADD KEY `article_tag_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_article_id_foreign` (`article_id`);

--
-- Indexes for table `commentsdx`
--
ALTER TABLE `commentdxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commentd_user_id_foreign` (`user_id`),
  ADD KEY `commentd_diagnostico_id_foreign` (`diagnostico_id`);

--
-- Indexes for table `imagenesrx`
--
ALTER TABLE `imagenesrx`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_title_unique` (`title`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- Indexes for table `users_following`
--
ALTER TABLE `users_following`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_following_user_id_following_user_id_unique` (`user_id`,`following_user_id`),
  ADD KEY `users_following_following_user_id_foreign` (`following_user_id`);

--
-- Indexes for table `user_favorite`
--
ALTER TABLE `user_favorite`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_favorite_user_id_article_id_unique` (`user_id`,`article_id`),
  ADD KEY `user_favorite_article_id_foreign` (`article_id`);

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ventas_cliente_foreign` (`cliente`),
  ADD KEY `ventas_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diagnosticos`
--
ALTER TABLE `diagnosticos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `article_tag`
--
ALTER TABLE `article_tag`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment_d_xes`
--
ALTER TABLE `commentdxes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users_following`
--
ALTER TABLE `users_following`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `user_favorite`
--
ALTER TABLE `user_favorite`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `diagnosticos`
--
ALTER TABLE `diagnosticos`
  ADD CONSTRAINT `diagnosticos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `diagnosticos_liente_foreign` FOREIGN KEY (`cliente`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `diagnosticos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `article_tag`
--
ALTER TABLE `article_tag`
  ADD CONSTRAINT `article_tag_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users_following`
--
ALTER TABLE `users_following`
  ADD CONSTRAINT `users_following_following_user_id_foreign` FOREIGN KEY (`following_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_following_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_favorite`
--
ALTER TABLE `user_favorite`
  ADD CONSTRAINT `user_favorite_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_favorite_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
