
# ListOfCharacters

ListOfCharacters é um projeto desenvolvido para fazer a leitura de uma API e apresentar cards com as informações recebidas. Ele também possui um sistema de login com dados mocados para experimentar partes do front-end que só podem ser acessadas com autenticação.

Link para o pojeto no ar: https://felipefrancca.github.io/listOfCharacters/

![image](https://github.com/user-attachments/assets/208b2058-73d9-4a6d-bd24-5d205ff8c3f7)

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Objetivos](#objetivos)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    - git clone https://github.com/FelipeFrancca/listOfCharacters.git

2. Navegue até o diretório do projeto:
    - cd listOfCharacters

3. Instale as dependências:
    - npm install

4. Configure as variáveis de ambiente:
    - Renomeie o arquivo `.env_example` para `.env` e configure as variáveis com uma key de token válida.

5. Inicie o servidor de desenvolvimento:
    - npm start

## Uso

Após seguir os passos de instalação, você pode acessar o projeto no seu navegador através de `http://localhost:3000`.

### Funcionalidades

- **Login:** Use as credenciais mocadas no hooks para fazer login e acessar as partes privadas do projeto.
- **Usuário e senha padrão:** Utilize o usuário "admin" e a senha "123" para realizar o login.
- **Home:** Visualize os cards com informações recebidas da API.

## Objetivos

1. **Integração com API:** Consumir dados de uma API e exibi-los de forma amigável.
2. **Autenticação:** Implementar um sistema de login com dados mocados para permitir o acesso a partes privadas do projeto.
3. **Interface Interativa:** Utilizar componentes React para criar uma interface interativa e responsiva.

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4. Faça o push para a branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.
