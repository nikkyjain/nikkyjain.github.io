#!/bin/sh

convert=
[ "$1" = "-c" ] && convert="-c"
launchDir=$PWD

export dbDir=$(echo $PWD | perl -pe 's/(.*jaindb).*/$1/g')
curDir=$dbDir/others/collaborate/shastra
scrDir=$dbDir/others/collaborate/scripts
python3 $scrDir/createMain.py
python3 $scrDir/createBhajan.py
python3 $scrDir/createPooja.py
python3 $scrDir/genAllBhajans.py
python3 $scrDir/genAllPoojas.py

# CD to 'shastra' directory
cd $curDir

while read oDir; do
    oDir=$(echo "$oDir" | tr -d '\r')
    echo $curDir/$oDir
    cd $curDir/$oDir
    while read iDir; do
        iDir=$(echo "$iDir" | tr -d '\r')
        cd $curDir/$oDir/$iDir
        echo $PWD
        python3 $scrDir/createHtml.py
        python3 $scrDir/genFullGranth.py
        python3 $scrDir/genFullGranth.py -f
        python3 $scrDir/genFullGranth.py -e
    done < "index.txt"
    cd $curDir
done < "index.txt"

prathmanuyogDir=$dbDir/jainDataBase/gatha/05_प्रथमानुयोग
myGroup=$(basename $prathmanuyogDir)
for gDir in $(ls -d $prathmanuyogDir/*)
do
  cd $gDir/html
  rm -f index.html
  ln -s ../../../../shastra/05_प्रथमानुयोग/$(basename $gDir)/html/index.html .
done


# Go back from where you started
cd $launchDir
