-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: barscanner
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `wares`
--

DROP TABLE IF EXISTS `wares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wares` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Art_Nr` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Werbung` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Menge` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Artikelbezeichnung` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `VE` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `VK` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Gesamt_VK` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `KG` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Barcode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wares`
--

LOCK TABLES `wares` WRITE;
/*!40000 ALTER TABLE `wares` DISABLE KEYS */;
INSERT INTO `wares` VALUES (3,'03276626','P 02.01','5.000','G. ARTOS 0,75L Beerenperlue in halbtrocken 8%vol.','6','1.66','49,80','39,60','03276626',NULL,NULL),(4,'03278459','P 02.01','1.000','Heidelbeerwein 0,745L Fl 8.5%vol.','6','2.22','13,32','39,60','03278459',NULL,NULL),(5,'09500878','P 02.01','1.000','Meshball D30cm4fach sort.','4','4.44','17,76','1,36','09500878',NULL,NULL),(6,'14500104','P 02.01','3.000','Drahtkorb mit weißer Tish platte D50 H40,5cm Mettal','4','24.95','299,40','40,68','14500104',NULL,NULL);
/*!40000 ALTER TABLE `wares` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06  0:35:21
