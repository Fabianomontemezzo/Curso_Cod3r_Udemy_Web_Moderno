UPDATE estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

update estados 
set nome = 'Paraná',
    populacao = 11.32
where sigla  = 'PR'

SELECT est.nome, sigla, populacao
FROM estados est 
WHERE sigla = 'PR'