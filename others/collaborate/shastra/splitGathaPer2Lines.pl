#!/usr/bin/perl

open(DATA, "<gatha.txt");
$cnt=0;
$fcnt=1;
$out="";

while(<DATA>) {
  $out.="$_";
  $cnt++;
  if($cnt%2==0) {
    open(OUT, ">>main/".sprintf("%03d", $fcnt).".txt");
    chomp $out;
    printf OUT "$out";
    $fcnt++;
    $out="";
    if($fcnt==189) {
      exit;
    }
  }
}
