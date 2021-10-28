#!/bin/bash
#now=$(date +%d.%m.%Y-%H:%M:%S)
w | sed -r 's/^([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+) +([^ ]+)/null,\1,\2,\3,\4,\5,\6,\7,\8/g' | tail -n +3 > /home/mihai/data/w.csv
