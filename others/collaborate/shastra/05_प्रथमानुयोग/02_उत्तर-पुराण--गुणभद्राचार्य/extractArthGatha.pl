#!/grid/common/bin/perl
use utf8;
use open ':std', ':encoding(UTF-8)';

#system("grep -P '॥\\\d+॥' abc.txt | grep 'अर्थ -' > vishalTmp");
mkdir "main", 0755;
mkdir "arth", 0755;
mkdir "mainS", 0755;

if (@ARGV) {
    print "have parameters ".$ARGV[0]."\n";
} else {
    print q{don't have parameters};
    exit;
}

$outFileName=$ARGV[0];
$groupNo=$outFileName;
$groupNo=~s/.txt//;

open my $in,  '<:encoding(UTF-8)',  "$ARGV[0]" or die $!;
$this_line = "";
$do_next = 0;
$fileName="";
$out="";
$gatha="";
$gathaNo=0;
open $outGroup, '>:encoding(UTF-8)', "main/$groupNo.txt" or die $!;
open $outMain, '>:encoding(UTF-8)', "mainS/$groupNo.txt" or die $!;
open $outArth, '>:encoding(UTF-8)', "arth/$groupNo.txt" or die $!;
print $outGroup "पर्व - $groupNo";

while(<$in>) {
    $this_line = $_;
    chomp($this_line);
    if ($this_line =~ m/॥(\d+).*॥/) {
        $fileName=$1;
        if(!$gathaNo) {
            $gathaNo=$fileName;
            $gatha.=$this_line;
        } else {
#        $fileName=~s/.*॥(\X+)॥.*/$1/g;
#        $fileName=~s/०/0/g;
#        $fileName=~s/१/1/g;
#        $fileName=~s/२/2/g;
#        $fileName=~s/३/3/g;
#        $fileName=~s/४/4/g;
#        $fileName=~s/५/5/g;
#        $fileName=~s/६/6/g;
#        $fileName=~s/७/7/g;
#        $fileName=~s/८/8/g;
#        $fileName=~s/९/9/g;
          if ($fileName eq $gathaNo) {
            if($this_line =~ m/॥(\d+)[–-](\d+)॥/) {
              $fileName=(sprintf "%04d", $1) . "-" . (sprintf "%04d", $2);
            } else {
              $fileName=(sprintf "%04d", $fileName);
            }
            #$gatha=~s/ । / ।\n/;
            print $outMain $gatha."\n";
            print $outArth "<p>$this_line</p><br>";
            $gathaNo=0;
            $gatha="";
            #close($out);
          } else {
            $gatha.="\n".$this_line;
          }
        }
    } else {
      $gatha.=$this_line."\n";
    }
}
close ($in);
close ($outArth);
close ($outMain);
close ($outGroup);
