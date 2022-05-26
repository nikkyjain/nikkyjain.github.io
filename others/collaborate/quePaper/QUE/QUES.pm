package QUES;

use strict;
use Term::ANSIColor;
sub new {
  my $class = shift;
  my $self = { 
    title =>"",               # Title of Question Paper
    ques => {},               # Questions
  };
  bless $self, $class;
}

sub title {
  my $self = shift;
  if (@_) { $self->{title} = shift };
  return $self->{title}
}
sub ques {
  my $self = shift;
  $self->{ques}{keys %{$self->{ques}}} = shift if (@_);
  return $self->{ques};
}


# #####################################
# || Convert to HTML ||#
# #####################################
sub convert2html {
  my $self = shift;
  my $myVars = shift;
  my $outFile = $myVars->{outFile};
  open FILE, ">$outFile.html" or die "Cannot open '$outFile.html'";
  binmode FILE, ':utf8';
  # Print HTML part
  print FILE <<"EOS";
<html>
  <head>
    <title>$self->{title}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Language" content="hi" />
    <meta name="description" content="Gunsthan Vivechan Test" />
    <meta name="author" content="Vishal Jain" />
    <style type="text/css">
      tr.d0 td {
          background-color: #66FFFF; color: black; font-size:25; padding:5px;
      }
      tr.d1 td {
          background-color: #FFCC66; color: black; font-size:25; padding:5px
      }
      div.d0 {
          background-color: #CCCCFF; color: black;
      }
      div.d1 {
          background-color: #FFFFCC; color: black;
      }
	  optgroup { font-size:20px; }
    </style>
    <script src='js/jquery.js'></script>
    <script src='js/jainExam.js'></script>
  </head>
  <body>
    <div id="para1"><h2 align=center>$self->{title}</h2>
    <script>
      var d = new Date();
	  var myStorageID="$self->{title}";
      document.write("<h5 align=right>" + d.getDate() + "-" + monthNames[d.getMonth()] + "-" + d.getFullYear() + "</align></h3>");
    </script>
    <form name=myForm>
    <table cellspacing=5>
    <tr><td>Name</td><td><input type=text name=Name id=myName></td></tr>
    <tr><td>Mobile No</td><td><input type=text name=MobileNo id=myMobile></td></tr>
    <tr><td>eMail</td><td><input type=text name=eMail id=myEmail></td></tr>
    </table>
    <div id=showGif align=center style="visibility:hidden"><img src="images/LookHere.gif" alt="HTML tutorial" width=32 height=32>
      <div id=showMarks align=center></div>
    </div>
    <button onclick="resetVals(); return false;" style="float:right;">Reset</button>
    <button onclick="calcMarks(); return false;" style="float:right;">Done</button><BR><BR></div><hr><BR>
    <script>
EOS
  for (my $i=0; $i<keys %{$self->{ques}}; $i++) {
    $self->{ques}{$i}->convert2html(\*FILE);
  }
  print FILE <<"EOS";
      </script>
      <br> <hr> <br>
      <button onclick="calcMarks(); return false;" style="float:right;">Done</button>
      <script>restoreAns();</script>
    </form>
  </body>
</html>
EOS
}

1;
