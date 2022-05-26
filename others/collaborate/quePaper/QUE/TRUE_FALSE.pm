package TRUE_FALSE;

use strict;
use Term::ANSIColor;

sub new {
  my $class = shift;
  my $self = { 
    description => "",        # question
    number => 0,              # description Number
    qType => "",              # Type of questionstion
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
sub answer {
  my $self = shift;
  $self->{answer}=shift if @_;
  return $self->{answer}
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
sub qType {
  my $self = shift;
  if (@_) { $self->{qType}=shift }
  return $self->{qType}
}


# #####################################
# || Convert to HTML ||#
# #####################################
sub convert2html {
  my $self = shift;
  my $FILE = shift;
  my $var=$self->{number}%2;
  print $FILE <<"EOS";
      createTrueFalse($self->{answer}, \"$self->{description}\");
EOS
}

1;
