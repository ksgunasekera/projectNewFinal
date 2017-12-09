-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2017 at 10:33 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db1`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `director`
--

CREATE TABLE IF NOT EXISTS `director` (
  `director_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`director_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Table structure for table `lab_tech`
--

CREATE TABLE IF NOT EXISTS `lab_tech` (
  `lab_tech_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`lab_tech_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
  `patient_id` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oppointment`
--

INSERT INTO `oppointment` (`patient_id`, `date`) VALUES
(2001, '2017-12-09'),
(2002, '2017-12-09');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE IF NOT EXISTS `patient` (
  `patient_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(75) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `type` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` text NOT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2003 ;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_id`, `firstName`, `lastName`, `age`, `gender`, `type`, `email`, `address`) VALUES
(2001, 'patFirstName', 'patLastName', 56, 'female', 'xxxxx', 'bnbj@gmail.com', 'hkhdhkdcbcbkascbkBskcbkcbjk'),
(2002, 'patFirstName', 'patLastName', 56, 'female', 'xxxxx', 'bnbj@gmail.com', 'hkhdhkdcbcbkascbkBskcbkcbjk');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacist`
--

CREATE TABLE IF NOT EXISTS `pharmacist` (
  `pharm_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`pharm_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `receptionist`
--

CREATE TABLE IF NOT EXISTS `receptionist` (
  `recep_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`recep_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(15) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1015 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`) VALUES
(1001, 'kavinda', '1234'),
(1003, 'gayani', 'gayani@123'),
(1005, 'vihanga', 'vihanga@123'),
(1009, 'hirushan', 'kila'),
(1010, 'ravindu', '6789'),
(1014, 'sahan', 'auncle');

-- --------------------------------------------------------

--
-- Stand-in structure for view `waitinglist`
--
CREATE TABLE IF NOT EXISTS `waitinglist` (
`patient_id` int(11)
);
-- --------------------------------------------------------

--
-- Structure for view `waitinglist`
--
DROP TABLE IF EXISTS `waitinglist`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `waitinglist` AS select `oppointment`.`patient_id` AS `patient_id` from `oppointment` where (`oppointment`.`date` = '2017-12-09');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `director`
--
ALTER TABLE `director`
  ADD CONSTRAINT `director_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `lab_tech`
--
ALTER TABLE `lab_tech`
  ADD CONSTRAINT `lab_tech_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `pharmacist`
--
ALTER TABLE `pharmacist`
  ADD CONSTRAINT `pharmacist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `receptionist`
--
ALTER TABLE `receptionist`
  ADD CONSTRAINT `receptionist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
