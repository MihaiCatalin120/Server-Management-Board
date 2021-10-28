#!/bin/bash

#flush previous data
mysql -uroot -pRoot@1234 monitoringPex -e "delete from df"

#insert data from local file into table
mysql -uroot -pRoot@1234 monitoringPex -e "LOAD DATA LOCAL INFILE '/home/mihai/data/df.csv' INTO TABLE df FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'"
