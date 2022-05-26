package GRID;

use strict;
use Term::ANSIColor;

sub new {
  my $class = shift;
  my $self = { 
    description => "",        # Question Description
    number => 0,              # Que Number
    qType => "",              # Type of question
    horizontal => {},         # Horizontal row
    hTitle => "",             # Horizontal title
    vertical => {},           # Vertical column
    vTitle => "",             # Vertical title
	solveDir => "vertical",	  # Solving direction (vertical or horizontal)
    line_no => 0,             # Line number on which rdb is defined
  };
  COMMON::incrQueCnt;
  bless $self, $class;
}

sub number {
  my $self=shift;
  if (@_) { $self->{number}=shift };
  return $self->{number};
}
sub line_no {
  my $self=shift;
  if (@_) { $self->{line_no}=shift };
  return $self->{line_no};
}
sub description {
  my $self=shift;
  if (@_) { $self->{description}=shift; $self->{number}=COMMON::getQueCnt; }
  return $self->{description}
}
sub solveDir {
  my $self = shift;
  if (@_) { $self->{solveDir}=shift }
  return $self->{solveDir}
}
sub qType {
  my $self = shift;
  if (@_) { $self->{qType}=shift }
  return $self->{qType}
}
sub hTitle {
  my $self = shift;
  if (@_) { $self->{hTitle}=shift }
  return $self->{hTitle}
}
sub vTitle {
  my $self = shift;
  if (@_) { $self->{vTitle}=shift }
  return $self->{vTitle}
}
sub horizontal {
  my $self = shift;
  $self->{horizontal}{keys %{$self->{horizontal}}}=shift if (@_);
  return $self->{horizontal};
}
sub vertical {
  my $self = shift;
  $self->{vertical}{keys %{$self->{vertical}}}=shift if (@_);
  return $self->{vertical};
}


# #####################################
# || Convert to HTML ||#
# #####################################
sub convert2html {
  my $self = shift;
  my $FILE = shift;
  print $FILE "      <p>$self->{number}) Select all right answers. $self->{description}<BR><BR>\n";
  print $FILE "      <script>
        document.write(\"<table BORDER=1 RULES=NONE FRAME=BOX align=center font-size:5>\");
        var i; var j; var horizontal=new Array(); var vertical=new Array();\n        ";
  for (my $i=0; $i<keys %{$self->{horizontal}}; $i++) {
    print $FILE "horizontal[$i]=\"$self->{horizontal}{$i}\"; ";
  }
  print $FILE "\n        ";
  for (my $i=0; $i<keys %{$self->{vertical}}; $i++) {
    print $FILE "vertical[$i]=\"$self->{vertical}{$i}\"; ";
  }
  print $FILE <<EOS

        document.write(\"<tr class=\\\"d1\\\"><td></td>\");
        for (i=0; i<horizontal.length;i++) {
          document.write(\"<td>\" + horizontal[i] + \"</td>\");
        }
        for(i=0;i<vertical.length;i++) {
          document.write(\"<tr class=\\\"d\" + i%2 + \"\\\"><td>\" + vertical[i] + \"</td>\");
          for(j=0;j<horizontal.length;j++) { var k=i*10+j; document.write(\"<td><input type=\\\"checkbox\\\" name=\\\"$self->{number}__\" + k + \"\\\" value=\\\"$self->{number}__\" + k + \"\\\"</td>\");};
          document.write(\"</td></tr>\");
		};
        document.write(\"</table>\");
      </script>
EOS
}

1;
