#!/bin/bash
#now=$(date +%d.%m.%Y-%H:%M:%S)
df -h | sed -r 's/^([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+)/null,\1,\2,\3,\4,\5,\6/g' | tail -n +2 > /home/mihai/data/df.csv
