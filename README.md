# **Day Off - Agenda de Escala de Trabalho**

O **Day Off** é um aplicativo web que permite aos usuários selecionar e visualizar suas escalas de trabalho, oferecendo uma visão interativa do calendário de folgas. O aplicativo suporta diversas escalas de trabalho.

## **Tecnologias Utilizadas**

- **Next.js** (Framework React)
- **React** (Biblioteca para a criação de interfaces de usuário)
- **Tailwind CSS** (Framework CSS para estilização)
- **TypeScript** (Superset do JavaScript para tipagem estática)

## **Instalação e Execução**

### **Pré-requisitos**

Certifique-se de ter o **Node.js** instalado na sua máquina. Caso não tenha, baixe e instale-o a partir do site oficial: [Node.js](https://nodejs.org/).

### **Passos para Rodar o Projeto**

1. Clone este repositório:
    ```bash
    git clone https://github.com/valdir-alves3000/dayoff-nextjs.git
    ```
   
2. Acesse o diretório do projeto:
    ```bash
    cd dayoff-nextjs
    ```
   
3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Abra o navegador e acesse:
    ```bash
    http://localhost:3000
    ```

## **Como Funciona**

Ao acessar a aplicação, você poderá:

- **Selecionar a Escala de Trabalho**: Escolha entre as opções de escala disponíveis:
  - **5x3x1**: Trabalho 5 dias, 5x3x1: Trabalho 5 dias, folga 1 e na semana em que folga na segunda-feira também folga 3 dias (sexta, sábado e domingo).
  - **6x2**: Trabalho 6 dias, folga 2.
  - **5x1**: Trabalho 5 dias, folga 1.
  - **4x2**: Trabalho 4 dias, folga 2.
  - **12x36**: Trabalho 12 horas, folga 36 horas.
  - **18x12**: Trabalho 18 dias, folga 12 dias.
  - **24x48**: Trabalho 24 horas, folga 48 horas.
  - **14x14**: Trabalho 14 dias, folga 14 dias.
  - **6x1-Sabado-Alternado**: Trabalho 6 dias, folga 1 (com folgas alternadas aos sábados).

- **Visualizar o Calendário**: Dependendo da escala selecionada, o calendário será atualizado para refletir os dias de folga com base na escala escolhida. Clicar em um dia do calendário marca as folgas da semana.

## **Contribuição**

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça commit das suas alterações:
    ```bash
    git commit -m "feat: add new work scale"
    ```
4. Envie as alterações para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um pull request no repositório original.
