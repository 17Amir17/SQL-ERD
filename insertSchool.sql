INSERT INTO Subjects VALUES 
("English"),
("Math"),
("Science"),
("Sport"),
("Bioligy");

INSERT INTO Teachers Values
(1, "Rahel", "Ben Ami"),
(2, "Yafim", "Kushner"),
(3, "Itzik", "Zohar"),
(4, "Bracha", "Horen"),
(5, "Zehava", "Maron"),
(6, "Ariela", "Siyamti");

INSERT INTO Classes Values
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6);

INSERT INTO Pupils Values
(1, "Amir", "Angel", 6),
(2, "Yaron", "Chinitz", 6),
(3, "Roee", "Sharabi", 4),
(4, "Liav", "Baron", 1),
(5, "Edi", "Shteinberg", 1),
(6, "Shalev", "Gabay", 3),
(7, "Itzik", "Cohen", 2),
(8, "Ram", "Natan", 5);

INSERT INTO Classes_Subjects VALUES
(1, "Math"),(2, "Math"),(3, "Math"),(4, "Math"),(5, "Math"),(6, "Math"),
(1, "Science"),(2, "Science"),(4, "Science"),(6, "Science"),
(3, "Sport"),(5, "Sport"),(6, "Sport"),
(6, "English"),
(5, "Bioligy");

INSERT INTO Teachers_Subjects VALUES
(1, "Math"),(1, "Science"),
(2, "Sport"), (2, "English"),
(3, "Sport"),
(4, "Bioligy"), (4, "Math"),
(5, "Bioligy"),
(6, "English");