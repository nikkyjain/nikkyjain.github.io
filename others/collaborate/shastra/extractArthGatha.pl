#!/grid/common/bin/perl
use utf8;
use open ':std', ':encoding(UTF-8)';

#system("grep -P '॥\\\d+॥' abc.txt | grep 'अर्थ -' > vishalTmp");
#
#open my $in,  '<:encoding(UTF-8)',  "vishalTmp"  or die $!;
#
#$count = 0; 
#mkdir "arth", 0755;
#while (<$in>) {
#    my $line=$_;
#    chomp($line);
#    $fileName=$line;
#    if($fileName=~m/॥(\X+)॥/) {
#      $fileName=~s/.*?॥(\X+)॥.*/$1/g;
#      $line=~s/^\s*अर्थ -//g;
#      open my $out, '>:encoding(UTF-8)', "arth/${fileName}.txt" or die $!;
#      print $out $line;
#      close($out);
#    }
#}
#close($in);
#
#system("grep -v 'अर्थ -' abc.txt > vishalTmp");
mkdir "main", 0755;

open my $in,  '<:encoding(UTF-8)',  "vishalTmp" or die $!;
$this_line = "";
$do_next = 0;
$fileName="";
$out="";
while(<$in>) {
    $last_line = $this_line;
    $this_line = $_;
    chomp($this_line);
    if ($this_line =~ /॥(\X+)॥/) {
        $fileName=$this_line;
        chomp($fileName);
        $fileName=~s/.*॥(\X+)॥.*/$1/g;
        $fileName=~s/०/0/g;
        $fileName=~s/१/1/g;
        $fileName=~s/२/2/g;
        $fileName=~s/३/3/g;
        $fileName=~s/४/4/g;
        $fileName=~s/५/5/g;
        $fileName=~s/६/6/g;
        $fileName=~s/७/7/g;
        $fileName=~s/८/8/g;
        $fileName=~s/९/9/g;
        $fileName=sprintf "%03d", $fileName;
        open $out, '>:encoding(UTF-8)', "main/${fileName}.txt" or die $!;
        print $out "$last_line\n" if (!$do_next);
        print $out $this_line;
        close($out);
        $do_next = 1;
    } else {
        $last_line = "";
        $do_next = 0;
    }
}
close ($in);
system("rm vishalTmp");
