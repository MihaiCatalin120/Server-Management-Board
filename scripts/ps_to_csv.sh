#!/bin/bash
#now=$(date +%d.%m.%Y-%H:%M:%S)
ps -ef | sed -r 's/^([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+)/\1,\2,\3,\4,\5,\6,\7,\8/g' | tail -n +2 > /home/mihai/data/ps.csv
