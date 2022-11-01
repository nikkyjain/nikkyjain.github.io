#!/usr/bin/perl

open(DATA, "<TattvaSaar.txt");
$cnt=0;
$fcnt=1;
$out="";

while(<DATA>) {
  $out.="$_";
  $cnt++;
  open(OUT, ">arth/".sprintf("%02d", $fcnt).".txt");
  chomp $out;
  printf OUT "$out";
  $fcnt++;
  $out="";
  if($fcnt==75) {
    exit;
  }
}
