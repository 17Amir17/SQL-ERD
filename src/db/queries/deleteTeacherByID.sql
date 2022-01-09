DELETE FROM Teachers_Subjects WHERE Teachers_id = #ID;
UPDATE Classes SET Teachers_id = -1 WHERE Teachers_id = #ID;
DELETE FROM Teachers WHERE id = #ID;