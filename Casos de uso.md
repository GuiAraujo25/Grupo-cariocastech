# Casos de uso

## Ver detalhes de um projeto
* Ator: Professores, alunos, empresas, etc...
* Pré condição: O usuario estar no sistema
* Fluxo principal:
  - O usuario entra na aba de projétos
  - Clica na imagem ou nome do projéto desejado
* Pós condição: O sistema vai abrir uma página contendo as descrições e detalhamentos do projeto

## Fazer login de admm
* Ator: Administrador
* Pré condição: Saber o link que leve direto para a página de login que não estará disponivel no sistema
* Fluxo principal:
  - O administrador entra na página de login
  - O administrador insere seu login e senha 
* Pós condição: O administrador estará logado e será capaz de editar e excluir projetos

## Editar projetos
* Ator: Administrador
* Pré condição: O administrador deverá estar logado no sistema
* Fluxo principal:
  - O administrador navega pela lista dos projetos cadastrados
  - O administrador seleciona o projeto que deseja editar e clica no botão "editar" associado a esse projeto
  - O sistema exibe as opções de edição disponiveis, como o nome, decrição, links e imagem
  - O adm faz as alterações e clica no botão de salvar
* Pós condição: O projeto é editado e as alterações ficam disponiveis no sistema

## Entrar na area "sobre nós"
* Ator:  Usuarios visitantes (alunos, empresas, etc) e administrador 
* Pré condição:
  - O usuario deve estar logado no site
  - O sistema deve conter um botão que leve para a aba que contém as informações dos colaboradores
* Fluxo principal:
  - O usuario entra no site
  - O sistema exibe uma opção na página principal chamada "sobre nós"
  - O usuario clica no botão para acessar a página
* Pós condição:
  - O sistema exibe a aba "sobre nós" que mostra as descrições e informações dos colaboradores
  - O usuario pode clicar no perfil de um aluno especifico para visualizar informações adicionais sobre o aluno.

## Remover projetos
* Ator: Administrador
* Pré condição: O administrador deverá estar logado no sistema
* Fluxo principal:
  - O administrador navega pela lista dos projetos cadastrados
  - O administrador seleciona o projeto que deseja editar e clica no botão "editar" associado a esse projeto
  - O administrador clica na opcão de exluir e confirma
* Pós condição: O projeto será excluido e não ficará mais disponivel no sistema

## Adm fazer logout
* Ator: Administrador 
* Pré condição:
  - O administrador deve estar logado
  - Um botão de logout deve estar disponivel no canto superior da tela de forma escondida 
* Fluxo principal:
  - O administrador deverá clicar no botão de "logout" no canto superior da tela
  - O sistema finaliza a sessão do administrador
* Pós condição:
 - O administrador estará desconectado do sistema
 - O sistema retorna a tela inicial

## Pesquisar projetos
* Ator: Usuarios visitantes (alunos, empresas, etc) e administrador 
* Pré condição:
  - O usuario deverá ter acesso ao sistema
  - O sistema deve conter os projetos
* Fluxo principal:
  - O usuario acessa o sitema
  - O usuario vai na aba de projetos e clica no botão de pesquisar
  - escolhe se deseja filtrar os projetos, como por ordem cronologica ou curso
  - o usuario clica no botão de adicionar filtro e pesquisa
* Pós condição: O sitema exibe os projetos que correspondem ao criterio de busca (filtro)

