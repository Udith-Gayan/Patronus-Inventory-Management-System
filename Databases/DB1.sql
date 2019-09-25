-- MySQL dump 10.13  Distrib 8.0.14, for Win64 (x86_64)
--
-- Host: localhost    Database: inventorydb
-- ------------------------------------------------------
-- Server version	8.0.14

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
-- Table structure for table `asset`
--

DROP TABLE IF EXISTS `asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `asset` (
  `id` bigint(20) NOT NULL,
  `asset_category` varchar(255) DEFAULT NULL,
  `asset_id` varchar(20) DEFAULT NULL,
  `bought_company_name` varchar(255) DEFAULT NULL,
  `bought_date` varchar(255) DEFAULT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `is_broken` bit(1) DEFAULT NULL,
  `buying_price` double DEFAULT NULL,
  `capacity` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `display_size` varchar(255) DEFAULT NULL,
  `processor` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `warranty_status` varchar(255) DEFAULT NULL,
  `category_types` varchar(255) DEFAULT NULL,
  `company_contact` varchar(255) DEFAULT NULL,
  `days` varchar(255) DEFAULT NULL,
  `months` varchar(255) DEFAULT NULL,
  `yrs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_17bgdxenhefny6036bllfv86g` (`asset_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset`
--

LOCK TABLES `asset` WRITE;
/*!40000 ALTER TABLE `asset` DISABLE KEYS */;
INSERT INTO `asset` VALUES (40,'Furniture','FUR111','Metropolitan','2010/11/17','Leee 10353 ',_binary '\0',23.34,'1TB','no dip','24x34','intel core i7','2GB','yes for now',NULL,NULL,NULL,NULL,NULL),(41,'Laptop','LAP112','Metropolitan','2010/11/17','Leee 10353 ',_binary '\0',23.34,'1TB','no dip','24x34','intel core i7','2GB','yes for now',NULL,NULL,NULL,NULL,NULL),(42,'Laptop','LAP113','Metropolitan','2010/11/17','Leee 10353 ',_binary '\0',23.34,'1TB','no dip','24x34','intel core i7','2GB','yes for now',NULL,NULL,NULL,NULL,NULL),(43,'Laptop','LAP114','Metropolitan','2010/11/17','Leee 10353 ',_binary '\0',23.34,'1TB','no dip','24x34','intel core i7','2GB','yes for now',NULL,NULL,NULL,NULL,NULL),(45,'Laptop','LAP116','Metropolitan','2010/11/17','Leee 10353 ',_binary '\0',23.34,'1TB','no dip','24x34','intel core i7','2GB','yes for now',NULL,NULL,NULL,NULL,NULL),(46,'Laptop','LAP117','Metropolitan','2010/11/17','Leee 10353 ',_binary '\0',23.34,'1TB','no dip','24x34','intel core i7','2GB','yes for now',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `asset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assign_model`
--

DROP TABLE IF EXISTS `assign_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `assign_model` (
  `id` bigint(20) NOT NULL,
  `begin_date` datetime DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `is_approved_by_asset_manager` bit(1) DEFAULT NULL,
  `is_approved_by_department_head` bit(1) DEFAULT NULL,
  `is_assigned` bit(1) DEFAULT NULL,
  `request_made_date` datetime DEFAULT NULL,
  `request_type` varchar(255) DEFAULT NULL,
  `requested_asset_id` bigint(20) NOT NULL,
  `assigned_user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4w53jgcqwk9hq9vgygtvxl3q` (`requested_asset_id`),
  KEY `FKsr37qink9lmmcm9kae8b35ox5` (`assigned_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assign_model`
--

LOCK TABLES `assign_model` WRITE;
/*!40000 ALTER TABLE `assign_model` DISABLE KEYS */;
INSERT INTO `assign_model` VALUES (20,'2018-01-14 05:30:00','2018-01-20 05:30:00',_binary '\0',_binary '\0',_binary '',NULL,'REQUEST',14,8),(21,'2018-01-14 05:30:00','2018-01-20 05:30:00',_binary '\0',_binary '\0',_binary '',NULL,'REQUEST',14,8);
/*!40000 ALTER TABLE `assign_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `breakdowns`
--

DROP TABLE IF EXISTS `breakdowns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `breakdowns` (
  `id` bigint(20) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `informed_date` datetime DEFAULT NULL,
  `approval_by_asset_manager` bit(1) DEFAULT NULL,
  `assigned_to_repair_manager` bit(1) DEFAULT NULL,
  `warranty_status` bit(1) DEFAULT NULL,
  `broken_asset_id` bigint(20) NOT NULL,
  `informed_user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb4oygud4vf5qa7yp41e42mp9x` (`broken_asset_id`),
  KEY `FK96x9j8i45v708gkl368w9yswr` (`informed_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breakdowns`
--

LOCK TABLES `breakdowns` WRITE;
/*!40000 ALTER TABLE `breakdowns` DISABLE KEYS */;
/*!40000 ALTER TABLE `breakdowns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_model`
--

DROP TABLE IF EXISTS `contact_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `contact_model` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `student` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKraet7l1aeu36hy24tkxvfkvkp` (`student`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_model`
--

LOCK TABLES `contact_model` WRITE;
/*!40000 ALTER TABLE `contact_model` DISABLE KEYS */;
INSERT INTO `contact_model` VALUES (500,'udith@gmail.com',100),(501,'udith2@gmail.com',100),(502,'udith3@gmail.com',100),(503,'gayan1@gmail.com',101),(504,'indra2@gmail.com',102),(505,'indra1@gmail.com',102);
/*!40000 ALTER TABLE `contact_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_main`
--

DROP TABLE IF EXISTS `employee_main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `employee_main` (
  `employee_id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact_no` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `img` longblob,
  `last_name` varchar(255) DEFAULT NULL,
  `nic` varchar(15) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `UK_kqgadf2cj5017e4kt7xnw1p7` (`nic`),
  UNIQUE KEY `UK_bs0yuyhpwx9dh9roansrhxcc1` (`contact_no`),
  UNIQUE KEY `UK_fdksedwv5roiy9ibdxumc6c0n` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_main`
--

LOCK TABLES `employee_main` WRITE;
/*!40000 ALTER TABLE `employee_main` DISABLE KEYS */;
INSERT INTO `employee_main` VALUES (1,'B 103/1, Muwapitiya, Rambukkana ','0774597126','admin@codegen.com','Udith','Male',NULL,'Indrakantha','973220535V','$2a$10$ECoySBI70ysb7GxFcPi0kOmTy5Hq5cVGSPLr57DS.TbPBgksnFrZy','Asset Manager');
/*!40000 ALTER TABLE `employee_main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (55),(55),(55);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `id_number`
--

DROP TABLE IF EXISTS `id_number`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `id_number` (
  `id` bigint(20) NOT NULL,
  `asset_id_number` int(11) DEFAULT NULL,
  `employee_id_number` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `id_number`
--

LOCK TABLES `id_number` WRITE;
/*!40000 ALTER TABLE `id_number` DISABLE KEYS */;
INSERT INTO `id_number` VALUES (1,118,100);
/*!40000 ALTER TABLE `id_number` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_model`
--

DROP TABLE IF EXISTS `student_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_model` (
  `id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_model`
--

LOCK TABLES `student_model` WRITE;
/*!40000 ALTER TABLE `student_model` DISABLE KEYS */;
INSERT INTO `student_model` VALUES (100,21,'Udith'),(101,21,'Gayan'),(102,21,'Indrakantha'),(103,21,'Kamal');
/*!40000 ALTER TABLE `student_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'$2a$10$7JltLbjf/DGutjqcfAAs9OL2ewGoJipmpULpDwjHlhhwRZ.Pp3A8C','gayan'),(2,'$2a$10$0uP/gIEMFqulE6pkHIWJLexz/8FEF9NIL0hlRPifFtBp.QD2lkUU2','admin'),(3,'$2a$10$ECoySBI70ysb7GxFcPi0kOmTy5Hq5cVGSPLr57DS.TbPBgksnFrZy','admin@codegen.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'inventorydb'
--

--
-- Dumping routines for database 'inventorydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-07 16:22:24
