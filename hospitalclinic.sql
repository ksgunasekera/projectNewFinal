-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2017 at 12:44 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hospitalclinic`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE IF NOT EXISTS `doctor` (
  `doc_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(75) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `qualifications` text NOT NULL,
  `telNo` int(11) NOT NULL,
  `email` varchar(75) NOT NULL,
  `possession` varchar(20) NOT NULL,
  PRIMARY KEY (`doc_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1003 ;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doc_id`, `firstName`, `lastName`, `gender`, `qualifications`, `telNo`, `email`, `possession`) VALUES
(1001, 'DocfirstName', 'DoclastName', 'male', 'aaaaaaaaaaaaaaaaaaaaaaaaaa', 771234567, 'abc@gmail.com', 'doctor'),
(1002, 'DocfirstName', 'DoclastName', 'male', 'aaaaaaaaaaaaaaaaaaaaaaaaaa', 771234567, 'abc@gmail.com', 'doctor');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE IF NOT EXISTS `medicine` (
  `med_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`med_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5011 ;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`med_id`, `Name`) VALUES
(5001, 'Aspirin--75mg'),
(5002, 'Atovastatin--20mg'),
(5003, 'Captopril--25mg'),
(5004, 'Clopidogrel--75mg'),
(5005, 'Dypiradoml--100mg'),
(5006, 'Enalapril--2.5mg'),
(5007, 'Ismn(SR)--30mg'),
(5008, 'Ismn(SR)--60mg'),
(5009, 'Losaratan--2.5mg'),
(5010, 'Warfarin--5mg');

-- --------------------------------------------------------

--
-- Table structure for table `oppointment`
--

CREATE TABLE IF NOT EXISTS `oppointment` (
  `reg_no` int(11) NOT NULL DEFAULT '0',
  `date` date NOT NULL,
  PRIMARY KEY (`reg_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oppointment`
--

INSERT INTO `oppointment` (`reg_no`, `date`) VALUES
(2001, '2017-12-10'),
(2002, '2017-12-10');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE IF NOT EXISTS `patient` (
  `reg_no` int(11) NOT NULL DEFAULT '0',
  `firstName` varchar(75) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `type` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` text NOT NULL,
  PRIMARY KEY (`reg_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`reg_no`, `firstName`, `lastName`, `age`, `gender`, `type`, `email`, `address`) VALUES
(2001, 'patFirstName', 'patLastName', 56, 'female', 'xxxxx', 'bnbj@gmail.com', 'hkhdhkdcbcbkascbkBskcbkcbjk'),
(2002, 'patFirstName', 'patLastName', 56, 'female', 'xxxxx', 'bnbj@gmail.com', 'hkhdhkdcbcbkascbkBskcbkcbjk');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `status` int(1) DEFAULT '0',
  `registrationId` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10004 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `status`, `registrationId`) VALUES
(10001, 'kavinda', '$2a$10$vOpG.miwfsaktej0uI5YCe0xZKL6fkx/9LGB2djmmOW45HF/n0aLy', NULL, 0, 15000000),
(10002, 'hirushan', '$2a$10$f5F7rhWJfxpODI18y.k7c.Gjoc4q.pMDaH0DRr84CmUa9895QLH0G', NULL, 0, 10000000),
(10003, 'sahan', '$2a$10$.i6KV8EwwR81iQ87XXSrV.aG4imWUbe1blXo4l17novM6fp8LDKGi', NULL, 0, 19000000);

-- --------------------------------------------------------

--
-- Stand-in structure for view `waitinglist`
--
CREATE TABLE IF NOT EXISTS `waitinglist` (
`reg_no` int(11)
);
-- --------------------------------------------------------

--
-- Structure for view `waitinglist`
--
DROP TABLE IF EXISTS `waitinglist`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `waitinglist` AS select `oppointment`.`reg_no` AS `reg_no` from `oppointment` where (`oppointment`.`date` = '2017-12-10');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
