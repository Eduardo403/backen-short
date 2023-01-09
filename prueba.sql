create table product(
    id serial primary key ,
    name varchar(255) not null,
    description varchar(255) not null,
    price decimal(10,2) not null,
    image varchar(255)
);

insert into product(name, description, price) values('My Product', 'My description',211.1);
select * from product

/*comando para interuactuar con el contenedor de doker
-sudo docker exec -it shor bash
-psql -U postgres --password
-\c shor

*/
