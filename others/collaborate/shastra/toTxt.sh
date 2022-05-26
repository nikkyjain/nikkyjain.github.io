#!/bin/sh

/bin/rm -f a.txt

for i in $(/bin/ls main); do
  if [[ ${i} != *"0000"* ]]; then
    cat header/$i >> a.txt
    echo "" >> a.txt
    cat main/$i >> a.txt
    echo "" >> a.txt
    cat teeka00*/$i >> a.txt
    echo "" >> a.txt
    cat arth/$i >> a.txt
    echo "" >> a.txt
  fi
done
#sed '1s/^\xEF\xBB\xBF//' a.txt
perl -pi~ -CSD -e 's/\x{feff}//g' a.txt
