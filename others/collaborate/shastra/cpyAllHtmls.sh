#!/bin/sh

outDir=$(cd ../../../jainDataBase && echo $PWD)
export dbDir=$(cd ../../../../jaindb/jainDataBase && echo $PWD)
echo "DB Dir $dbDir"

# Copy Bhajans
find $outDir/bhajans/. -name "html" -type d -exec \rm -rf {} \;
for group in $(ls -d $dbDir/bhajans/*/) 
do
  myGroup=$(basename $group)
  mkdir -p $outDir/bhajans/$myGroup/html
  cp $group/html/* $outDir/bhajans/$myGroup/html/.
done
echo "Copy Done - bhajans"

# Copy Poojas
find $outDir/poojas/. -name "html" -type d -exec \rm -rf {} \;
for group in $(ls -d $dbDir/poojas/*/) 
do
  myGroup=$(basename $group)
  for subgroup in $(ls -d $group/*/)
  do
      mySubGroup=$(basename $subgroup)
      mkdir -p $outDir/poojas/$myGroup/$mySubGroup/html
      cp $subgroup/html/* $outDir/poojas/$myGroup/$mySubGroup/html/.
  done
done
echo "Copy Done - poojas"

# Copy Shastra
/bin/rm -rf $outDir/shastra
cp -r $dbDir/shastra $outDir/shastra
echo "Copy Done - shastra"
# Copy Scripts
cp -r $dbDir/../others/collaborate/scripts/* $outDir/../others/collaborate/scripts/.
echo "Copy Done - scripts"
# Copy Downloads
cp -r $dbDir/downloads/*.pdf $outDir/downloads/.
echo "Copy Done - downloads"

# Copy Teeka
/bin/rm -rf $outDir/teeka
cp -r $dbDir/teeka $outDir/teeka
echo "Copy Done - teeka"

# Copy Gatha
/bin/rm -rf $outDir/gatha
cp -r $dbDir/gatha $outDir/gatha
echo "Copy Done - gatha"

# Copy eSharta
/bin/rm -rf $outDir/egranth
cp -r $dbDir/egranth $outDir/egranth
echo "Copy Done - english granth"

# Copy genBooks
/bin/rm -rf $outDir/genBooks
cp -r $dbDir/genBooks $outDir/genBooks
echo "Copy Done - genBooks"

# Copy Exams 
/bin/rm -rf $outDir/jainExam
cp -r $dbDir/jainExam $outDir/jainExam
echo "Copy Done - genExam"

# Copy Index
cp $dbDir/../index.html $outDir/../.
# Copy JS
cp $dbDir/../js/*.js $outDir/../js/.
cp $dbDir/../css/*.css $outDir/../css/.
# Copy Youtube
mkdir -p $outDir/youtube
mkdir -p $outDir/youtube-animation
cp $dbDir/youtube/* $outDir/youtube/.
cp $dbDir/youtube-animation/* $outDir/youtube-animation/.
# Remove Stories
\rm -rf $outDir/teeka/08_Notes/02_Stories
\rm -rf $outDir/teeka/08_Notes/03_*
\rm -rf $outDir/gatha/08_Notes/02_Stories
\rm -rf $outDir/gatha/08_Notes/03_*
\rm -rf $outDir/shastra/08_Notes/02_Stories
\rm -rf $outDir/shastra/08_Notes/03_*
# Disable HTML copy
if [ "$1" = "" ]; then
  find $outDir/. -name "*.html" -type f -exec perl -i -pe 's/<body>/<body oncopy="return false" onpaste="return false" oncut="return false">/g' {} \;
  find $outDir/. -name "*.bak" -exec rm {} \;
fi


### Update jaindb-web
#export jaindb=$(cd ../../../../jaindb && echo $PWD)
#export dbWeb=$(cd ../../../../jaindb-dev && echo $PWD)
#\rm -rf $dbWeb/jainDataBase
#\rm -rf $dbWeb/js
#\rm -rf $dbWeb/css
#\rm -rf $dbWeb/images
#\rm -rf $dbWeb/jainDataBase
#cp -r $jaindb/index.html $dbWeb/.
#cp -r $jaindb/jainDataBase $dbWeb/.
#cp -r $jaindb/js $dbWeb/.
#cp -r $jaindb/css $dbWeb/.
#cp -r $jaindb/images $dbWeb/.
#\rm -rf $dbWeb/jainDataBase/teeka/07_Notes/02_Stories
#\rm -rf $dbWeb/jainDataBase/teeka/07_Notes/03_*
#\rm -rf $dbWeb/jainDataBase/gatha/07_Notes/02_Stories
#\rm -rf $dbWeb/jainDataBase/gatha/07_Notes/03_*
#\rm -rf $dbWeb/jainDataBase/shastra/07_Notes/02_Stories
#\rm -rf $dbWeb/jainDataBase/shastra/07_Notes/03_*
## Disable HTML copy
#if [ "$1" != "" ]; then
#    mkdir -p $dbWeb/.trash
#    cp $jaindb/others/crypt.html $dbWeb/.trash/.
#    cp $jaindb/others/personal.html $dbWeb/.trash/.
#fi
