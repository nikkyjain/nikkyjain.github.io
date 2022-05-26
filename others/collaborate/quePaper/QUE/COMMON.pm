package COMMON;

use strict;
my $queCnt=0;         # Number of registers


sub incrQueCnt { $queCnt++; }
sub getQueCnt { return $queCnt }

1;
