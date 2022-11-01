#!/usr/bin/perl

open(DATA, "<Rayansar.txt");
$cnt=0;
$fcnt=1;
$out="";

while(<DATA>) {
  $out.="$_";
  $cnt++;
  if($cnt%4==0) {
    open(OUT, ">mainH/".sprintf("%02d", $fcnt).".txt");
    chomp $out;
    printf OUT "$out";
    $fcnt++;
    $out="";
    if($fcnt==59) {
      exit;
    }
  }
}
