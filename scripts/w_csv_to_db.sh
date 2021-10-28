#!/bin/bash

#flush previous data
mysql -uroot -pRoot@1234 monitoringPex -e "delete from w"

#insert data from local file into table
mysql -uroot -pRoot@1234 monitoringPex -e "LOAD DATA LOCAL INFILE '/home/mihai/data/w.csv' INTO TABLE w FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'"
