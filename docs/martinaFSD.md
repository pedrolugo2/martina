# Functional Specification Document: Site de Doação Martina 1 Ano

**Autor**: Manus AI
**Versão**: 1.0
**Data**: 28 de Fevereiro de 2026

---

## 1. Introdução

Este documento detalha as especificações funcionais para a criação de um website de doação para comemorar o primeiro aniversário da Martina. O projeto tem como objetivo principal converter a tradicional troca de presentes de aniversário em uma ação de solidariedade, incentivando os convidados a doarem fundos para a compra de um kit de tratamento para um bebê com Fenda Lábio-Palatina, a mesma condição com a qual Martina nasceu.

### 1.1. Contexto do Projeto

A Martina, ao nascer com Fenda Lábio-Palatina, teve a oportunidade de utilizar o kit **NoseAlign® / LipAlign™**, um tratamento pré-cirúrgico inovador que melhora significativamente os resultados da cirurgia primária e a qualidade de vida do paciente [1]. Este kit, com um custo aproximado de **USD 1.200**, não é acessível para muitas famílias. O tratamento da Martina é realizado pelo **RIRE (Núcleo Avançado em Fissura Labiopalatina)**, uma instituição de referência na área [2].

### 1.2. Objetivos do Site

- **Conscientizar**: Educar os convidados sobre a Fenda Lábio-Palatina de forma sensível e informativa, sem o uso de imagens que possam chocar.
- **Inspirar**: Contar a história da Martina como um caso de sucesso e esperança, motivando a doação.
- **Arrecadar**: Coletar doações para atingir a meta de **R$ 6.000**, valor necessário para a compra e doação de um kit NoseAlign® / LipAlign™ para outro bebê.
- **Facilitar**: Oferecer um processo de doação simples, rápido e seguro através de PIX.

### 1.3. Público-Alvo

O público-alvo primário são os convidados para a festa de aniversário de 1 ano da Martina. O acesso ao site será exclusivo através de um link no convite, caracterizando uma audiência engajada e com conexão emocional com a causa.

---

## 2. Design Visual e Identidade

A identidade visual do site será diretamente inspirada no convite de aniversário da Martina, que apresenta um tema de abelhas, com uma paleta de cores alegre e acolhedora. O design deve ser leve, moderno e transmitir otimismo.

### 2.1. Paleta de Cores

A paleta de cores principal seguirá o *color code* do convite, garantindo consistência e uma experiência visual coesa.

| Cor               | Código Hexadecimal | Aplicação Principal                                  |
|-------------------|--------------------|------------------------------------------------------|
| **Amarelo Primário**  | `#FDD835`          | Fundo de seções principais, elementos de destaque.   |
| **Laranja Secundário**| `#FF9800`          | Botões de chamada para ação (CTA), links, destaques. |
| **Azul Acento**     | `#87CEEB`          | Detalhes, ícones, elementos decorativos sutis.       |
| **Branco**          | `#FFFFFF`          | Áreas de respiro, fundo de texto para legibilidade.  |
| **Preto/Cinza Escuro**| `#1A1A1A`          | Corpo de texto, títulos, para garantir alto contraste.|

### 2.2. Tipografia

A fonte deve ser amigável e de alta legibilidade. Recomenda-se uma fonte sem serifa, como **Nunito** ou **Poppins**, que são modernas e funcionam bem em dispositivos móveis e desktop.

- **Títulos**: Fonte principal, em peso **Bold** ou **ExtraBold**.
- **Corpo de Texto**: Fonte principal, em peso **Regular**.

### 2.3. Tom e Estilo de Comunicação

A comunicação será pessoal e emotiva, mas sempre positiva. A narrativa será construída em primeira pessoa, como se a própria Martina estivesse contando sua história e convidando a todos para ajudarem outra criança. O tom deve ser de gratidão e esperança.

---

## 3. Requisitos Funcionais

O site será uma *single-page application* (SPA) para garantir leveza e uma navegação fluida.

### 3.1. Estrutura da Página

1.  **Seção Herói (Topo)**
    - **Conteúdo**: Uma mensagem de boas-vindas da Martina, com uma ilustração delicada (ex: a abelhinha do convite). Título: "Meu primeiro aninho pode transformar uma vida". Subtítulo: "Ao invés de presentes, que tal espalharmos sorrisos?"
    - **CTA Primário**: Botão "Quero doar agora" que rola a página para a seção de doação.

2.  **A História da Martina**
    - **Conteúdo**: Um texto curto e afetuoso contando sobre o nascimento da Martina, o diagnóstico da Fenda Lábio-Palatina e a importância do tratamento que ela pôde receber. Deve mencionar o privilégio de sua família em ter acesso ao kit NoseAlign®.

3.  **A Causa: Um Novo Sorriso**
    - **Conteúdo**: Explicação sobre o que é a Fenda Lábio-Palatina e o impacto do tratamento pré-cirúrgico. Apresentar o objetivo da campanha: doar um kit completo para um bebê que não teria a mesma oportunidade. Mencionar que o tratamento completo é longo e multidisciplinar, citando o **RIRE** como referência de excelência [2].
    - **Links Externos**: Incluir links para os sites `fissuralabiopalatina.com` e `cleftalign.com` para quem desejar se aprofundar, com um aviso de que os sites podem conter imagens clínicas.

4.  **Seção de Doação**
    - **Título**: "Faça parte desta corrente de amor!"
    - **Meta de Arrecadação**: Um termômetro ou barra de progresso visual (opcional, mas recomendado) mostrando o valor arrecadado em tempo real e a meta de R$ 6.000.
    - **Opções de Valor**: Botões pré-definidos com os valores: **R$ 25**, **R$ 50**, **R$ 100**.
    - **Valor Livre**: Um campo de formulário para que o doador possa inserir um valor customizado.
    - **Método de Pagamento**: Ao selecionar um valor, o sistema deve apresentar duas opções claras:
        1.  **Pagar com PIX (Mercado Pago)**: Um botão que inicia o fluxo de pagamento integrado com o Mercado Pago.
        2.  **QR Code / Copia e Cola**: Exibir um QR Code dinâmico gerado para o valor selecionado e um botão para copiar o código PIX. A chave PIX de destino será `pedrolugo2+ml@gmail.com`.

5.  **Agradecimento e Rodapé**
    - **Conteúdo**: Uma mensagem de agradecimento da Martina e sua família.
    - **Informações**: Links para os sites de referência e créditos do desenvolvimento.

### 3.2. Especificações do Sistema de Doação

| Funcionalidade              | Descrição                                                                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Seleção de Valor**        | O usuário pode clicar em um dos três botões de valor pré-definido ou digitar um valor no campo "Outro valor". O valor selecionado deve ficar visualmente destacado. |
| **Geração de PIX**          | O sistema deve gerar um QR Code e um código "copia e cola" para o valor exato selecionado pelo usuário, associado à chave PIX `pedrolugo2+ml@gmail.com`.             |
| **Integração Mercado Pago** | Para a opção de pagamento direto, o site deve se integrar à API do Mercado Pago para processar a transação PIX de forma segura e transparente.                   |
| **Confirmação de Doação**   | Após a conclusão da doação (seja via Mercado Pago ou confirmação manual), uma mensagem de sucesso e agradecimento deve ser exibida ao usuário.                 |

---

## 4. Requisitos Não-Funcionais

- **Performance**: O site deve ser extremamente leve e ter um tempo de carregamento rápido (inferior a 3 segundos em conexões 3G), considerando que será acessado principalmente por dispositivos móveis.
- **Responsividade**: O layout deve ser totalmente adaptável a diferentes tamanhos de tela (desktop, tablet e mobile).
- **Segurança**: Todas as transações de pagamento devem ocorrer em um ambiente seguro, utilizando os protocolos de segurança do Mercado Pago. Nenhuma informação sensível do doador deve ser armazenada no site.
- **Usabilidade**: A jornada do usuário, desde a leitura da história até a conclusão da doação, deve ser intuitiva, clara e com o mínimo de passos possível.

---

## 5. Fora do Escopo

- Sistema de login ou contas de usuário.
- Blog ou seção de notícias.
- Múltiplos idiomas.
- Painel de gerenciamento de conteúdo (CMS). O conteúdo será estático.

---

## 6. Referências

[1] CleftAlign. (2026). *PLANA, Cleft Lip, NoseAlign, CleftAlign*. Disponível em: https://cleftalign.com/

[2] Rire – Núcleo Avançado em Fissura Labiopalatina. (2026). *Linha de cuidado*. Disponível em: https://fissuralabiopalatina.com/linha-de-cuidado/