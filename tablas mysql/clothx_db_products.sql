-- MySQL dump 10.13  Distrib 8.0.11, for macos10.13 (x86_64)
--
-- Host: localhost    Database: clothx_db
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Short','short corto','Ropa2-2.png',1,'morado',2500),(5,'Pollera Lisa','Moda 2022 ','image-1658604266393.png',2,'Fucsia',2000),(6,'Pollera Azul','Ultima moda','image-1658604338131.png',2,'Azul',2000),(7,'Camisa a Rayas','Corte de moda 2022','image-1658604464466.png',5,'Natural',3000),(8,'Pantalon Hombre','Frisa y abrigo','image-1658604583717.png',3,'Gris',2500),(9,'Remera','Mangas cortas','image-1658604681412.png',4,'Gris oscuro',3400),(10,'Sweater','Modelo ultima moda','image-1658604756789.png',6,'Gris',2600),(11,'Sombrero','Ala ancha','image-1658604799370.png',7,'Natural',4500),(12,'Gorro Invierno','invierno dsfsfsfsdfsfsdfds','image-1658701619437.png',7,'Gris',1500),(13,'Sweater ','dsddssdsd','image-1658703250843.png',1,'sdsdsd',222222),(15,'Remera Beatles','Mangas cortas, algodon','image-1658758869416.png',4,'blanca',1000),(16,'Camisa a Cuadros','Ultima moda 2022, unisex','image-1658760157749.png',5,'Rojo y Negro',2000),(18,'Mundial Qatar 2022','Remera Oficial AFA Seleccion Argentina','image-1659409962169.jpg',4,'Blanca y Celeste',4000);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-03 14:22:40
