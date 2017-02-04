#!bin/sh

fileName="$1"
mdName="md/${fileName}"
texName="tex/${fileName%.*}.tex"
pandoc -M "crossrefYaml=crossref_config.yaml" --filter pandoc-crossref $mdName -o $texName --listings 
node bin/fixTexFile.js $texName
