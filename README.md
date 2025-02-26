# **Day Off - Agenda de Escala de Trabalho**

O **Day Off** é um aplicativo web que permite aos usuários selecionar e visualizar suas escalas de trabalho, oferecendo uma visão interativa do calendário de folgas. O aplicativo suporta duas escalas de trabalho populares: **5x3x1** e **6x2**.

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

- **Selecionar a Escala de Trabalho**: Escolha entre as opções de escala **5x3x1** ou **6x2**.
  
- **Visualizar o Calendário**: Dependendo da escala selecionada, o calendário será atualizado para refletir os dias de folga com base na escala escolhida. Clicar em um dia do calendário marca as folgas da semana.

- **Escalas Suportadas**:
  - **5x3x1**: Trabalho 5 dias, folga 3, trabalho 1.
  - **6x2**: Trabalho 6 dias, folga 2.
