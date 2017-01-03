#!/bin/sh

for fileName in `\find . -maxdepth 1 -name '*.md'`; do
    texName="${fileName%.*}.tex"
    pandoc $fileName -o $texName --listings
    node fixTexFile.js $texName
done

platex report.tex
platex report.tex
dvipdfmx report.dvi
