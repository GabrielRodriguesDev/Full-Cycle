use nodedb

CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name      varchar(255), primary key(id));

delete from people;
insert into people(name) values('Adrielly');
insert into people(name) values('Olimpio');
insert into people(name) values('Edgar');
insert into people(name) values('Matheus');


SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;