-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Teachers` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `second_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Classes` (
  `id` INT NOT NULL,
  `Teachers_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Classes_Teachers1_idx` (`Teachers_id` ASC) VISIBLE,
  CONSTRAINT `fk_Classes_Teachers1`
    FOREIGN KEY (`Teachers_id`)
    REFERENCES `mydb`.`Teachers` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Subjects` (
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Classes_Subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Classes_Subjects` (
  `Classes_id` INT NOT NULL,
  `Subjects_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Classes_id`, `Subjects_name`),
  INDEX `fk_Classes_has_Subjects_Subjects1_idx` (`Subjects_name` ASC) VISIBLE,
  INDEX `fk_Classes_has_Subjects_Classes1_idx` (`Classes_id` ASC) VISIBLE,
  CONSTRAINT `fk_Classes_has_Subjects_Classes1`
    FOREIGN KEY (`Classes_id`)
    REFERENCES `mydb`.`Classes` (`id`),
  CONSTRAINT `fk_Classes_has_Subjects_Subjects1`
    FOREIGN KEY (`Subjects_name`)
    REFERENCES `mydb`.`Subjects` (`name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Pupils`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pupils` (
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `second_name` VARCHAR(45) NOT NULL,
  `Class` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Pupils_Classes_idx` (`Class` ASC) VISIBLE,
  CONSTRAINT `fk_Pupils_Classes`
    FOREIGN KEY (`Class`)
    REFERENCES `mydb`.`Classes` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`Teachers_Subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Teachers_Subjects` (
  `Teachers_id` INT NOT NULL,
  `Subjects_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Teachers_id`, `Subjects_name`),
  INDEX `fk_Teachers_has_Subjects_Subjects1_idx` (`Subjects_name` ASC) VISIBLE,
  INDEX `fk_Teachers_has_Subjects_Teachers1_idx` (`Teachers_id` ASC) VISIBLE,
  CONSTRAINT `fk_Teachers_has_Subjects_Subjects1`
    FOREIGN KEY (`Subjects_name`)
    REFERENCES `mydb`.`Subjects` (`name`),
  CONSTRAINT `fk_Teachers_has_Subjects_Teachers1`
    FOREIGN KEY (`Teachers_id`)
    REFERENCES `mydb`.`Teachers` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
