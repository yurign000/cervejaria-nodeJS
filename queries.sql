CREATE TABLE cervejas(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    abv DECIMAL(4,1) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(56) NOT NULL
);

INSERT INTO cervejas(nome,abv,tipo,nacionalidade) VALUES
('Heineken',4.5,'Loger','Holanda'),
('Corona',5.2,'Pielsen','México'),
('Patagônia',4.2,'Amber Ale','Argentina'),
('Saint’Beer',3.5,'IPA','Brasil'),
('Duff Beer',3.5,'Pielsen','EUA'),
('Coruja',3.5,'Loger','Brasil'),
('Brugse Zot',6.2,'IPA','Bélgica');