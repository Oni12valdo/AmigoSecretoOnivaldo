Projeto Amigo Secreto

Este projeto é uma aplicação web simples e intuitiva para organizar um sorteio de amigo secreto entre amigos, familiares ou colegas de trabalho. Desenvolvido com HTML, CSS e JavaScript puro, oferece uma interface moderna e responsiva para facilitar a organização do seu evento.

Funcionalidades

- Adicionar nomes dinamicamente** - Interface intuitiva para inserir participantes
- Validação de entradas** - Previne nomes duplicados e entradas vazias
- Algoritmo inteligente de sorteio** - Garante que ninguém tire a si mesmo
- Exibição clara dos resultados** - Mostra os pares de forma organizada
- Interface responsiva** - Funciona em desktop e dispositivos móveis
- Botão limpar tudo** - Permite reiniciar o processo facilmente
- Suporte a teclado** - Pressione Enter para adicionar nomes rapidamente

 Como Funciona

 Adicionar Nomes
1. Digite o nome de um participante no campo de entrada
2. Clique em **"Adicionar"** ou pressione **Enter**
3. O nome aparecerá na lista abaixo
4. Repita o processo para todos os participantes

Realizar o Sorteio
1. Certifique-se de ter pelo menos 2 participantes na lista
2. Clique no botão **"Sortear amigo"**
3. O sistema gerará automaticamente os pares
4. Os resultados serão exibidos em verde na parte inferior

### Funcionalidades Extras
- **Validação automática**: Impede nomes duplicados e entradas vazias
- **Algoritmo anti-auto-sorteio**: Garante que ninguém tire o próprio nome
- **Botão limpar**: Remove todos os dados e reinicia o processo

## 💻 Instruções de Uso

### Executar Localmente

1. **Clone ou baixe o projeto**
   ```bash
   git clone [url-do-repositorio]
   cd amigo-secreto
   ```

2. **Abra o arquivo principal**
   - Navegue até a pasta do projeto
   - Abra o arquivo `index.html` no seu navegador favorito
   - Ou use um servidor local (recomendado)

3. **Usando Live Server (Recomendado)**
   ```bash
   # Se você tem o VS Code com extensão Live Server
   # Clique com o botão direito em index.html > "Open with Live Server"
   
   # Ou use um servidor HTTP simples
   python -m http.server 8000
   # Depois acesse: http://localhost:8000
   ```

4. **Pronto!** A aplicação estará rodando e pronta para uso.

## 📸 Capturas de Tela

### Tela Inicial
![Tela inicial da aplicação](assets/screenshots/tela-inicial.png)
*Interface limpa e moderna para começar o sorteio*

### Adicionando Participantes
![Lista com nomes adicionados](assets/screenshots/nomes-adicionados.png)
*Visualização dos participantes conforme são adicionados*

### Resultado do Sorteio
![Resultado do sorteio exibido](assets/screenshots/resultado-sorteio.png)
*Pares de amigo secreto claramente organizados*

### Interface Responsiva
![Versão mobile da aplicação](assets/screenshots/mobile-view.png)
*Design adaptado para dispositivos móveis*

> **Nota:** Para adicionar capturas reais, substitua os arquivos de exemplo em `assets/screenshots/` pelas suas próprias imagens.

Estrutura do Projeto

```
amigo-secreto/
├── index.html          # Estrutura principal da aplicação
├── style.css           # Estilos e design responsivo
├── app.js              # Lógica JavaScript completa
├── assets/             # Recursos visuais
│   ├── amigo-secreto.png          # Imagem principal
│   ├── play_circle_outline.png    # Ícone do botão sortear
│   └── screenshots/               # Capturas de tela (adicionar)
│       ├── tela-inicial.png
│       ├── nomes-adicionados.png
│       ├── resultado-sorteio.png
│       └── mobile-view.png
└── README.md           # Este arquivo
```

Melhorias Implementadas e Sugeridas

Implementadas
- [x] **Validação de nomes duplicados** - Evita confusão no sorteio
- [x] **Suporte a Enter** - Agiliza a adição de nomes
- [x] **Botão "Limpar tudo"** - Facilita reiniciar o processo
- [x] **Algoritmo anti-auto-sorteio** - Garante que ninguém tire a si mesmo
- [x] **Interface responsiva** - Funciona bem em mobile
- [x] **Confirmação antes de limpar** - Evita perda acidental de dados

 Sugestões para Futuras Versões
- [ ] **Modo sigiloso**: Cada pessoa vê apenas seu próprio resultado
- [ ] **Exportar resultado em PDF** - Para imprimir ou compartilhar
- [ ] **Histórico de sorteios** - Salvar sorteios anteriores
- [ ] **Temas personalizáveis** - Diferentes paletas de cores
- [ ] **Sorteio com restrições** - Definir quem não pode tirar quem
- [ ] **Persistência com localStorage** - Manter dados após recarregar página
- [ ] **Animação no sorteio** - Efeito visual durante o processo
- [ ] **Compartilhamento via link** - Enviar resultado por WhatsApp/email

 Melhorias de UX Identificadas
- [ ] **Feedback visual melhor** - Loading spinner durante sorteio
- [ ] **Contador de participantes** - Mostrar quantos nomes foram adicionados
- [ ] **Modo escuro** - Para melhor experiência noturna
- [ ] **Undo/Redo** - Desfazer adição de nomes
- [ ] **Arrastar e soltar** - Reordenar lista de participantes

Tecnologias Utilizadas

 Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno com:
  - Variáveis CSS para cores consistentes
  - Flexbox para layout responsivo
  - Border-radius e box-shadow para visual moderno
  - Hover effects para interatividade

 JavaScript (Vanilla)
- **DOM Manipulation** - Criação dinâmica de elementos
- **Event Listeners** - Interatividade com teclado e mouse
- **Array Methods** - Manipulação eficiente de listas
- **Algorithm Design** - Lógica de sorteio com validações

 Recursos Visuais
- **Google Fonts** - Tipografia profissional (Inter + Merriweather)
- **Ícones personalizados** - Assets visuais inclusos
- **Paleta de cores coesa** - Design consistente

Características do Design

### Paleta de Cores
- **Primária**: `#4B69FD` (Azul moderno)
- **Secundária**: `#FFF9EB` (Creme suave)
- **Destaque**: `#fe652b` (Laranja vibrante)
- **Sucesso**: `#05DF05` (Verde para resultados)
- **Perigo**: `#dc3545` (Vermelho para botão limpar)

### Tipografia
- **Títulos**: Merriweather (elegante e legível)
- **Interface**: Inter (moderna e clean)

Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

Créditos

**Desenvolvido por**: Onivaldo Pereira Junior  
**Inspirado por**: Desafios de lógica de programação e eventos de confraternização  
**Finalidade**: Projeto educacional para fortalecimento de habilidades em JavaScript

 Agradecimentos
- Comunidade de desenvolvedores por inspirações de design
- Eventos de amigo secreto que motivaram a criação
- Feedback de usuários para melhorias contínuas

---

 Dica de Desenvolvedor

Para uma experiência de desenvolvimento otimizada, recomendo:

1. **VS Code** com extensões:
   - Live Server (para servidor local)
   - Prettier (formatação de código)
   - ES6 Snippets (atalhos JavaScript)

2. **Ferramentas de debug**:
   - DevTools do navegador (F12)
   - Console.log para debug de lógica

3. **Testes**:
   - Teste com diferentes quantidades de participantes (2, 3, 10+)
   - Teste a responsividade em diferentes dispositivos
   - Verifique a acessibilidade com leitores de tela

**Divirta-se organizando seu amigo secreto! 🎉** 
