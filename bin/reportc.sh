#!/bin/sh

cd tex
platex report.tex
dvipdfmx -o ../report.pdf report.dvi
