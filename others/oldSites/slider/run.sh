perl -i -pe 's/<li id="">(.*)?#(.*)? |/<li id="$2">$1#$2 |/g' 1.html
