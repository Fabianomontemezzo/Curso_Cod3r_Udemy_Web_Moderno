SELECT 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Regiaão
FROM estados e, cidade c 
WHERE e.id = c.estado_id;

SELECT 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
INNER JOIN codades c on e.id = c.estado_id