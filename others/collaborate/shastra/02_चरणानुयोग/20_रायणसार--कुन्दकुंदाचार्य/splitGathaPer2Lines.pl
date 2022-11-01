#!/usr/bin/perl

open(DATA, "<Rayansar.txt");
$cnt=0;
$fcnt=1;
$out="";

while(<DATA>) {
  $out.="$_";
  $cnt++;

  if($cnt%2==0) {
    chomp $out;
    if($cnt%4==0) {
      open(OUT, ">mainS/".sprintf("%03d", $fcnt).".txt");
      printf OUT "$out";
      $out="";
      $fcnt++;
    } else {
      open(OUT, ">main/".sprintf("%03d", $fcnt).".txt");
      printf OUT "$out";
      $out="";
    }
  }
}
