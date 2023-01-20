create database product;

create table women(
    id serial primary key ,
    nameProduc varchar(255) not null,
    descriptionProduct varchar(255) not null,
    price decimal(10,2) not null,
    imag varchar(255)
);

insert into product(namePrueba, descriptionPrueba, price,imag) values('My Product', 'My description',211.1);
select * from product

/*comando para interuactuar con el contenedor de doker
-sudo docker exec -it shor bash
-psql -U postgres --password
-\c shor

*/

sudo docker exec -it shor-prueba  bash
mysql -u root -password
use product
show table

describe women;

