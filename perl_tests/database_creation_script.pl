use DBI;

my $dbh = DBI->connect("dbi:SQLite:people_info.db");

$dbh->do("create table contacts(id integer, first_name text, last_name text, home text)");

$dbh->do("insert into contacts values(1, 'Rose', 'Tyler', 'Earth')");

$dbh->do("insert into contacts values(2, 'Zoe', 'Heriot', 'Space Station W3')");

$dbh->do("insert into contacts values(3, 'Jo', 'Grant', 'Earth')");

$dbh->do("insert into contacts values(4, 'Leela', '', 'Unspecified')");

$dbh->do("insert into contacts values(5, 'Romana', '', 'Gallifrey')");

$dbh->do("insert into contacts values(6, 'Clara', 'Oswald', 'Earth')");

$dbh->do("insert into contacts values(7, 'Adric', '', 'Alzarius')");

$dbh->do("insert into contacts values(8, 'Susan', 'Foreman', 'Gallifrey')");

my $res = $dbh->selectall_arrayref(q(select * from contacts));

foreach (@$res) {foreach $i (0..$#$_) {print "$_->[$i] ";} print "\n"; }

$dbh->disconnect;