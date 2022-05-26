#!/bin/sh


# Add Header
outFile=myXML.txt

echo "<book>" > $outFile

while read cFile; do
  #q=`echo $p | sed 's/.txt//'`
  cFile=$(echo "$cFile" | tr -d '\r')
  sFile=`echo $cFile | sed 's/.txt//'`
  curFile=main/$cFile
  [ ! -f "$curFile" ] && echo "Didnt find $curFile" && exit 1
  dos2unix $curFile
  echo "  <page>" >> $outFile
  echo "    <name>$sFile</name>" >> $outFile
  echo -e "    <main>`cat $curFile`\n</main>" >> $outFile
  unix2dos $curFile
  curFile=bottom/$cFile
  if [ -f "$curFile" ]; then
    dos2unix $curFile
    echo "    <bottom>`cat $curFile`</bottom>" >> $outFile
    unix2dos $curFile
  fi
  curFile=tooltip/$cFile
  if [ -f "$curFile" ]; then
    dos2unix $curFile
    echo "    <tooltip>`cat $curFile`</tooltip>" >> $outFile
    unix2dos $curFile
  fi
  echo "  </page>" >> $outFile
  echo "Processed $cFile"
done < "index.txt"

# Add Footer
echo "</book>" >> $outFile
