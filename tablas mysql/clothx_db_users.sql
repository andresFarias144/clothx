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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `category` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10,'test3','test3','tes3@gmail.com','$2a$10$MnLKhIRHYf.dnUeiElax5ONIdf/UV7PFdtIDADFuLCUr9hJiGiy4G','avatar-1658711642459.jpg',0),(11,NULL,'apellidotestcinco','email@testcinco.com','$2a$10$Y3Gwtnm1iCrBw8ZOjoeTweoJNtwrU8Pxw.b6Saw0rDjT.fLawqPDa','avatar-1658681206586.jpg',0),(12,NULL,'testseisapellido','testseis@email.com','$2a$10$BwhBoixGCN9n7iBIJROiHOrSDNCGJU76WMgKKNgOUBJQZN4dFaFLK','avatar-1658681493213.jpg',0),(14,'admin','admin','admin@admin.com.ar','$2a$10$jXm9bQxXSinwnEGBKi.E5uEsC/yHuv88UAeUNIi.Cr7PlmBMyGoj2','avatar-1658695950011.jpg',1),(15,'Andres','Farias','andres@andres.com','$2a$10$boH8Xlj7AdGLam0eLefK4OThe3gqm8EunVRFbOhuzDhgsN1dw.yP2','avatar-1658712922515.jpg',0),(16,'Juan','Perez','juan@juan.com','$2a$10$XgnJil9qNoehPtJTcCm4J.ctnhyM7EIoyQurtxtTqwGFO3l.6Casa','default.jpg',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
