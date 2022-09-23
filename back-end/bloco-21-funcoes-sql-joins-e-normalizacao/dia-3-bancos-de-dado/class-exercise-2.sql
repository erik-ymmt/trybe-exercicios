INSERT INTO normalization.`employees`
(first_name,
last_name,
email,
phone)
VALUES
('Alex', 'Rodrigues', 'joh@email.com', 88988998),
('Mariah', 'Freeman', 'mah@email.com', 77988998),
('Cintia', 'Duval', 'cih@email.com', 66988998),
('Fernanda', 'Mendes', 'feh@email.com', 56988922);

INSERT INTO normalization.sector
(`name`)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO normalization.employees_sector
(employee_id, sector_id)
VALUES
(1,1),
(1,2),
(2,3),
(3,4),
(3,2),
(4,5);
