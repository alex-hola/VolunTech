CREATE DATABASE  IF NOT EXISTS `voluntarios` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `voluntarios`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: voluntarios
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `idEmpresa` int NOT NULL AUTO_INCREMENT,
  `nombreEmpresa` varchar(45) CHARACTER SET utf8 NOT NULL,
  `identificacionFiscal` varchar(45) CHARACTER SET utf8 NOT NULL,
  `tipoEmpresa` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`idEmpresa`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (2,'APAG Granollers','G83921824','Asociación protectora de animales'),(3,'Perrera Mataro','H78562314','Perrera publica'),(4,'Voluntarios Nuevo Mataro','H63969854','Organizacion'),(5,'Perruqueria Capdevila','G56987412','Perruqueria'),(6,'Futsal Molinos','H47851456','Equipo de fútbol sala femenino'),(7,'Asociación de vecinos Cirera','J93849389','Asociación Barrio Cirera');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentores`
--

DROP TABLE IF EXISTS `mentores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mentores` (
  `idMentores` int NOT NULL AUTO_INCREMENT,
  `curriculum` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `fechanacimiento` date DEFAULT NULL,
  `valoracion` double DEFAULT NULL,
  PRIMARY KEY (`idMentores`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentores`
--

LOCK TABLES `mentores` WRITE;
/*!40000 ALTER TABLE `mentores` DISABLE KEYS */;
INSERT INTO `mentores` VALUES (2,'abc','1980-12-12',NULL),(3,'abc','1970-04-17',NULL);
/*!40000 ALTER TABLE `mentores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ofertas`
--

DROP TABLE IF EXISTS `ofertas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ofertas` (
  `idofertas` int NOT NULL AUTO_INCREMENT,
  `nombreOferta` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `vacantes` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `descripcion` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `tipoDeTrabajo` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `logo` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `fechaPublicacion` date DEFAULT NULL,
  `estaAcceptada` tinyint DEFAULT NULL,
  `estaTerminada` tinyint DEFAULT NULL,
  `mentores_idMentores` int DEFAULT NULL,
  `empresa_idEmpresa` int NOT NULL,
  PRIMARY KEY (`idofertas`),
  KEY `fk_ofertas_mentores1_idx` (`mentores_idMentores`),
  KEY `fk_ofertas_empresa1_idx` (`empresa_idEmpresa`),
  CONSTRAINT `fk_ofertas_empresa1` FOREIGN KEY (`empresa_idEmpresa`) REFERENCES `empresa` (`idEmpresa`),
  CONSTRAINT `fk_ofertas_mentores1` FOREIGN KEY (`mentores_idMentores`) REFERENCES `mentores` (`idMentores`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ofertas`
--

LOCK TABLES `ofertas` WRITE;
/*!40000 ALTER TABLE `ofertas` DISABLE KEYS */;
INSERT INTO `ofertas` VALUES (87,'Web peluqueria','0','Hola, necesito una web donde poder gestionar las visitas de mi negocio. Gracias!','null','null','2021-06-21',0,0,NULL,5),(88,'Pagina web y logo','0','Hola, necesitamos una web y un logo para el nuevo equipo de futbol sala femenino.Saludos.','null','null','2021-06-21',0,0,NULL,6),(90,'Aplicacion Movil','null','Aplicacion movil para gestionar tareas de voluntariado o ayuda en la ciudad de Mataro.  Seran necesario dos tipos de usuario, los administrador y los usuarios, todos podran publicar incidencias, sistema de puntuaciones de los usuarios. Sistema de comentarios.','null','null','2021-06-21',1,0,3,4),(91,'Logo Asociacion Vecinos','null','Se necesita un logo para la asociacion de vecinos de cirera en Mataro. Es necesario que sea circular, con casitas tipo dibujo y tonos rojos. No hay ningun requisito mas.','null','foto1','2021-06-21',1,1,2,7),(112,'Logo Perrera','null','Se necesita un logo para la perrera de granollers chicos, no hay requisitos, libre eleccion!','null','foto1','2021-06-22',1,0,2,2);
/*!40000 ALTER TABLE `ofertas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUsers` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) CHARACTER SET utf8 NOT NULL,
  `Surname` varchar(45) CHARACTER SET utf8 NOT NULL,
  `Password` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8 NOT NULL,
  `telefono` varchar(45) CHARACTER SET utf8 NOT NULL,
  `Descrip` longtext CHARACTER SET utf8,
  `foto` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `voluntarios_idVoluntarios` int DEFAULT NULL,
  `empresa_idEmpresa` int DEFAULT NULL,
  `mentores_idMentores` int DEFAULT NULL,
  PRIMARY KEY (`idUsers`),
  KEY `fk_users_empresa1_idx` (`empresa_idEmpresa`),
  KEY `fk_users_mentores1_idx` (`mentores_idMentores`),
  KEY `fk_users_voluntarios1_idx` (`voluntarios_idVoluntarios`),
  CONSTRAINT `fk_users_empresa1` FOREIGN KEY (`empresa_idEmpresa`) REFERENCES `empresa` (`idEmpresa`),
  CONSTRAINT `fk_users_mentores1` FOREIGN KEY (`mentores_idMentores`) REFERENCES `mentores` (`idMentores`),
  CONSTRAINT `fk_users_voluntarios1` FOREIGN KEY (`voluntarios_idVoluntarios`) REFERENCES `voluntarios` (`idVoluntarios`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (12,'Ricard','Hernández','1234','ricard@gmail.com','634585858','','foto1',NULL,NULL,2),(13,'Albert','López','1234','info@protectoragranollers.org','935321444','','foto2',NULL,2,NULL),(14,'Alejandro','Castellano','1234','alex@gmail.com','638525245','','foto3',4,NULL,NULL),(15,'Marta','Capdevila','1234','perruqueriaJoan@gmail.com','695884758','','foto4',NULL,5,NULL),(16,'Carlos','Gómez','1234','aso.cirera@gmail.com','655123644',NULL,NULL,NULL,7,NULL),(17,'Laura','Rubio','1234','futsal.molinos@gmail.com','622123654',NULL,NULL,NULL,6,NULL),(18,'Maria','Damas','1234','nuevomataro@gmail.com','637556869',NULL,NULL,NULL,4,NULL),(19,'Adrià','Homar','1234','adri@gmail.com','675643322',NULL,NULL,NULL,NULL,3),(20,'Josep','LLoveras','1234','josep@gmail.com','677898741',NULL,NULL,5,NULL,NULL),(21,'Mark','Bertran','1234','mark@gmail.com','612873411',NULL,NULL,6,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voluntarios`
--

DROP TABLE IF EXISTS `voluntarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voluntarios` (
  `idVoluntarios` int NOT NULL AUTO_INCREMENT,
  `curriculum` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `Puntuacion` double DEFAULT NULL,
  PRIMARY KEY (`idVoluntarios`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voluntarios`
--

LOCK TABLES `voluntarios` WRITE;
/*!40000 ALTER TABLE `voluntarios` DISABLE KEYS */;
INSERT INTO `voluntarios` VALUES (4,'nulo','1995-10-29',5),(5,'nulo','1995-11-28',5),(6,'nulo','1995-11-11',5);
/*!40000 ALTER TABLE `voluntarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voluntarios_has_ofertas`
--

DROP TABLE IF EXISTS `voluntarios_has_ofertas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voluntarios_has_ofertas` (
  `Voluntarios_idVoluntarios` int NOT NULL,
  `ofertas_idofertas` int NOT NULL,
  PRIMARY KEY (`Voluntarios_idVoluntarios`,`ofertas_idofertas`),
  KEY `fk_Voluntarios_has_ofertas_ofertas1_idx` (`ofertas_idofertas`),
  KEY `fk_Voluntarios_has_ofertas_Voluntarios1_idx` (`Voluntarios_idVoluntarios`),
  CONSTRAINT `fk_Voluntarios_has_ofertas_ofertas1` FOREIGN KEY (`ofertas_idofertas`) REFERENCES `ofertas` (`idofertas`),
  CONSTRAINT `fk_Voluntarios_has_ofertas_Voluntarios1` FOREIGN KEY (`Voluntarios_idVoluntarios`) REFERENCES `voluntarios` (`idVoluntarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voluntarios_has_ofertas`
--

LOCK TABLES `voluntarios_has_ofertas` WRITE;
/*!40000 ALTER TABLE `voluntarios_has_ofertas` DISABLE KEYS */;
INSERT INTO `voluntarios_has_ofertas` VALUES (4,90),(6,90),(5,91),(4,112);
/*!40000 ALTER TABLE `voluntarios_has_ofertas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'voluntarios'
--

--
-- Dumping routines for database 'voluntarios'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-05 14:22:39
