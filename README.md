# Conversor de Câmbio
# Conversor de Câmbio
Repositório criado para o desenvolvimento do trabalho prático 1 da disciplina de Engenharia de Software do segundo semestre de 2023, turma TN. 

# Descrição do Trabalho
## Objetivo
Um programa de conversão de moedas que permite aos usuários converterem valores entre diferentes moedas usando as taxas de câmbio atualizadas. 

## Features
- Uma função de entrada que permite aos usuários digitarem ou selecionar a moeda de origem, a moeda de destino e o valor a ser convertido;
- Uma função de saída que mostra o resultado da conversão em um formato legível;
- Uma função de atualização que busca as taxas de câmbio mais recentes de uma fonte confiável e as armazena em um banco de dados local.
- Exibição de um gráfico mostrando o histórico das taxas de conversão das moedas escolhidas 

# Membros da equipe e papel
- Eduardo Tomich - Backend Developer
- Felipe Telles - Backend Developer
- Miguel Menezes - Frontend Developer
- Raphael Pedra - Frontend Developer

# Tecnologias
- Frontend - JavaScript, ReactJS, HTML, CSS
- Backend - JavaScript, Node.js, Frankfurter API
- Banco de Dados - SQLite

# Backlog
### Como um usuário, quero ver uma lista de todas as moedas disponíveis para conversão.
- Instalar Javascript e Node.Js [Felipe e Eduardo] - 2 SP
- Instalar Javascript e ReactJS [Miguel e Rafael] - 2 SP
- Implementar versão inicial da tela principal [Raphael] - 10 SP
- Implementar básico da comunicação com API [Felipe] - 3 SP
- Obter lista de todas a moedas disponíveis para conversão [Felipe] - 5 SP
- Exibir uma lista de opções [Miguel] - 5 SP
### Como um usuário, quero poder selecionar a moeda de origem e destino para a conversão de câmbio.
- Criar botões para seleção de moeda [Miguel] - 3 SP
### Como um usuário, quero ver a taxa de câmbio atual entre as moedas selecionadas.
- Criar um campo para visualização do valor da conversão das moedas [Raphael] - 3 SP
- Pegar da API o valor de câmbio entre as moedas [Felipe] - 2 SP
### Como um usuário, quero inserir o valor que desejo converter.
- Criar campo para o usuário digitar o valor que deseja converter da moeda [Miguel] - 2 SP
- Fazer a fórmula para a conversão do valor escolhido [Raphael] - 4 SP
### Como um usuário, quero que o sistema calcule automaticamente o valor convertido.
- Implementar uma fórmula para calcular o valor desejado [Raphael] - 2 SP
- Implementar lógica do sistema para calcular o valor automaticamente [Raphael] - 3 SP
### Como um usuário, quero poder filtrar a lista de moedas por nome ou código.
- Implementar lógica de filtro para nome ou código da moeda e o campo para tal [Raphael] - 5 SP
- Implementar lógica para comunicação da API que envie para o front o nome e o código da moeda em vetores separados [Felipe] - 5 SP
### Como um usuário, quero ver a data e hora da última atualização das taxas de câmbio.
- Criar campo e lógica para que o sistema pegue a data atual sempre que houver uma atualização na conversão [Raphael] - 2 SP
### Como um usuário, quero ver em um gráfico o histórico de um ano da taxa de câmbio selecionada.
- Exibir gráfico com eixo X de 1 ano e eixo Y com a comparação das moedas selecionadas [Felipe] - 6 SP
- Comunicar com a API e filtrar os dados necessários para a visualização do gráfico [Felipe] - 4 SP
### Como um usuário, quero poder fazer login na plataforma.
- Criar banco de dados em que os dados de login são armazenados [Eduardo] - 8 SP
### Como um usuário, quero visualizar meu histórico de conversão de câmbio.
- Criar campo e página para que o histórico possa ser colocado [Raphael] - 3 SP
- Armazenar no banco de dados os dados de históricos de tal usuário [Eduardo] - 5 SP
