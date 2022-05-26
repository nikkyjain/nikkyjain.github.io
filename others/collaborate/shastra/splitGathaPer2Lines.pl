#!/usr/bin/perl

open(DATA, "<a.txt");
$cnt=0;
$fcnt=152;
$out="";

while(<DATA>) {
  $out.="$_";
  $cnt++;
  if($cnt%2==0) {
    open(OUT, ">>try/$fcnt.txt");
    chomp $out;
    printf OUT "$out";
    $fcnt++;
    $out="";
    if($fcnt==492) {
      exit;
    }
  }
}
