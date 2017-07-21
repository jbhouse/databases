use DBI;

my $dbh = DBI->connect("dbi:SQLite:people_info.db") or die $DBI::errstr;

my $res = $dbh->selectall_arrayref("SELECT * from contacts");

my $sth = $dbh->prepare("SELECT id, first_name FROM contacts where home = 'Gallifrey'");
$sth->execute();

my $row;
while ($row = $sth->fetchrow_arrayref()) {
    print "@$row[0] @$row[1] @$row[2]\n";
}

$sth->finish();
$dbh->disconnect();

print " ^ selecting specific attributes based on the value of the home column ^ " . "\n";

foreach (@$res) {foreach $i (0..$#$_) {print "$_->[$i] ";} print "\n"; }

print " ^ selecting all ^ " . "\n";