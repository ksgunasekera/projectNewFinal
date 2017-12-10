-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2017 at 09:51 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `clinic2`
--

-- --------------------------------------------------------

--
-- Table structure for table `addmision`
--

CREATE TABLE IF NOT EXISTS `addmision` (
  `reg_no` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addmision`
--

INSERT INTO `addmision` (`reg_no`) VALUES
(10005),
(10003),
(10002),
(10004);

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE IF NOT EXISTS `appointment` (
  `reg_no` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`reg_no`, `date`) VALUES
(10002, '2017-12-11'),
(10003, '2017-12-12'),
(10004, '2017-12-11'),
(10005, '2017-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE IF NOT EXISTS `medicine` (
  `Number` int(3) NOT NULL,
  `Tablet` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`Number`, `Tablet`) VALUES
(1, 'Aspirin 75mg'),
(2, 'Clopidogrel 75mg'),
(3, 'Dypiradoml 100mg'),
(4, 'Atovastatin 20mg'),
(5, 'Warfarin 5mg'),
(6, 'Ismn(SR) 30mg'),
(7, 'Ismn(SR) 60mg'),
(8, 'S/L GTN 20 tablets'),
(9, 'Captopril 25mg'),
(10, 'Enalapril 2.5mg'),
(11, 'Losaratan 2.5mg'),
(12, 'Panadol'),
(21, 'ghj'),
(30, 'aaaaaaaaaaa');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE IF NOT EXISTS `patient` (
  `reg_no` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `type` varchar(30) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `tel_no` int(10) NOT NULL,
  PRIMARY KEY (`reg_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`reg_no`, `firstName`, `lastName`, `type`, `age`, `gender`, `address`, `tel_no`) VALUES
(10002, 'Sahan', 'Adeesha', 'hhh', 30, 'Male', '51A,jddpasa', 119),
(10003, 'kasun', 'sameera', 'dddd', 34, 'Male', 'ssssssssss', 763423456),
(10004, 'samalka', 'nishadi', 'dddd', 34, 'Female', 'ssssssssss', 762423456),
(10005, 'nuwan', 'perera', 'ddff', 33, 'Male', 'ssssssssss', 712423456);

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE IF NOT EXISTS `prescription` (
  `reg_no` int(11) NOT NULL,
  `date` date NOT NULL,
  `prescription` text,
  PRIMARY KEY (`reg_no`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE IF NOT EXISTS `staff` (
  `staff_Id` varchar(10) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contactNo` int(11) NOT NULL,
  `Designation` varchar(100) NOT NULL,
  PRIMARY KEY (`staff_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_Id`, `firstName`, `lastName`, `email`, `contactNo`, `Designation`) VALUES
('7294639037', 'Yasara', 'Jayaweera', 'yasara.jayaweera@gmail.com', 119, 'Doctor'),
('8216752012', 'Hasith', 'Perera', 'ksgunasekera@gmail.com', 123456789, 'Doctor');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `registrationId` varchar(15) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `registrationId`) VALUES
('hirushan', '$2a$10$f5F7rhWJfxpODI18y.k7c.Gjoc4q.pMDaH0DRr84CmUa9895QLH0G', '10000000'),
('kavinda', '$2a$10$vOpG.miwfsaktej0uI5YCe0xZKL6fkx/9LGB2djmmOW45HF/n0aLy', '15000000'),
('sahan', '$2a$10$.i6KV8EwwR81iQ87XXSrV.aG4imWUbe1blXo4l17novM6fp8LDKGi', '19000000'),
('Yasara', '$2a$10$XEUq37kPxEltCIKSiX6REex6/gIPAAAASoDnVUK3xUOt0X0.xsm5.', '729463903789695');

-- --------------------------------------------------------

--
-- Table structure for table `waiting`
--

CREATE TABLE IF NOT EXISTS `waiting` (
  `reg_no` int(11) NOT NULL,
  KEY `fk` (`reg_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `waiting`
--
ALTER TABLE `waiting`
  ADD CONSTRAINT `fk` FOREIGN KEY (`reg_no`) REFERENCES `patient` (`reg_no`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
