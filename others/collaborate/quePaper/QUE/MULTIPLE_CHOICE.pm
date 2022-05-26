package MULTIPLE_CHOICE;

use strict;
use Term::ANSIColor;

sub new {
  my $class = shift;
  my $self = { 
    que => "",                # Question
    number => 0,              # Que Number
    qType => "",              # Type of question
    choice => {},             # Options for answer
    answer => 0,              # Answer
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
sub que {
  my $self=shift;
  if (@_) { $self->{que}=shift; $self->{number}=COMMON::getQueCnt; }
  return $self->{que}
}
sub qType {
  my $self = shift;
  if (@_) { $self->{qType}=shift }
  return $self->{qType}
}
sub answer {
  my $self = shift;
  $self->{answer}=shift if @_;
  return $self->{answer}
}
sub choice {
  my $self = shift;
  $self->{choice}{keys %{$self->{choice}}}=shift if (@_);
  return $self->{choice};
}


# #####################################
# || Convert to HTML ||#
# #####################################
sub convert2html {
  my $self = shift;
  my $FILE = shift;
  my $choices="[";
  for (my $i=0; $i<keys %{$self->{choice}}; $i++) { $choices.="\"$self->{choice}{$i}\", "; }
  $choices=~s/, $/]/g;
  print $FILE <<"EOS";
      var choice=$choices;
      createMultipleChoice($self->{answer}, \"$self->{que}\", choice);
EOS
}

1;
