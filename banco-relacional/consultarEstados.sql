select * from estados

select sigla, nome as 'Nome do Estado' from estados
WHERE regiao = 'Sul'

select nome, regiao from estados 
where populacao >=10