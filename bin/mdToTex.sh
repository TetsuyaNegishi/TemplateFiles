#!bin/sh

fileName="$1"
mdName="md/${fileName}"
texName="tex/${fileName%.*}.tex"
pandoc $mdName -o $texName --listings
node bin/fixTexFile.js $texName
