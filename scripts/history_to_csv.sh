#!/bin/bash

nl -s, /home/mihai/.bash_history | sed -r 's/^ +//g'  > /home/mihai/data/hist.csv
