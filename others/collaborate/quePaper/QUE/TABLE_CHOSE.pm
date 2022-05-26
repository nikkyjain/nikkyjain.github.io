package TABLE_CHOSE;

use strict;
use Term::ANSIColor;

sub new {
  my $class = shift;
  my $self = { 
    description => "",        # Question Description
    number => 0,              # Que Number
    qType => "",              # Type of question
    qColumn => {},            # Question column
    aColumn => {},            # Answer column
    answers => {},            # Answers
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
sub qType {
  my $self = shift;
  if (@_) { $self->{qType}=shift }
  return $self->{qType}
}
sub qColumn {
  my $self = shift;
  $self->{qColumn}{keys %{$self->{qColumn}}}=shift if (@_);
  return $self->{qColumn};
}
sub aColumn {
  my $self = shift;
  $self->{aColumn}{keys %{$self->{aColumn}}}=shift if (@_);
  return $self->{aColumn};
}
sub answers {
  my $self = shift;
  $self->{answers}{keys %{$self->{answers}}}=shift if (@_);
  return $self->{answers};
}


# #####################################
# || Convert to HTML ||#
# #####################################
sub convert2html {
  my $self = shift;
  my $FILE = shift;
  my $myqColumn="[";
  for (my $i=0; $i<keys %{$self->{qColumn}}; $i++) { $myqColumn.="\"$self->{qColumn}{$i}\", "; }
  $myqColumn=~s/, $/]/g;
  my $myaColumn="[";
  for (my $i=0; $i<keys %{$self->{aColumn}}; $i++) { $myaColumn.="\"$self->{aColumn}{$i}\", "; }
  $myaColumn=~s/, $/]/g;
  my $myAnswers="[";
  for (my $i=0; $i<keys %{$self->{answers}}; $i++) { $myAnswers.="$self->{answers}{$i}, "; }
  $myAnswers=~s/, $/]/g;
  print $FILE <<EOS
      var qColumn=$myqColumn;
      var aColumn=$myaColumn;
      var ans=$myAnswers;
      createTableChose(\"$self->{description}\", qColumn, aColumn, ans);
EOS
}

1;
