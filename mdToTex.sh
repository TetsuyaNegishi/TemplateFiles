#!bin/sh

fileName=$1
texName="${fileName%.*}.tex"
pandoc $fileName -o $texName --listings
node fixTexFile.js $texName
