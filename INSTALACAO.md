# Guia de Instalação e Uso - Calculadora Avançada

## 🚀 Instalação Rápida

### **Pré-requisitos**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Python 3.x (opcional, para servidor local)

### **Passo a Passo**

#### **1. Download dos Arquivos**
```bash
# Clone ou baixe os arquivos
git clone [url-do-repositorio]
cd Calculadora
```

#### **2. Iniciar Servidor Local**
```bash
# Usando Python
python -m http.server 8000

# Ou usando Node.js
npx http-server -p 8000

# Ou usando PHP
php -S localhost:8000
```

#### **3. Acessar a Aplicação**
```
http://localhost:8000
```

## 📖 Guia de Uso

### **Primeiros Passos**

1. **Abra a aplicação** no navegador
2. **Explore as abas** no topo da página
3. **Teste a calculadora** na primeira aba
4. **Experimente os cards** de cálculo avançado

### **Usando a Calculadora Tradicional**

#### **Operações Básicas**
- **Números**: Clique nos botões 0-9
- **Operações**: +, -, ×, ÷
- **Funções**: AC (limpar tudo), DEL (apagar), % (porcentagem)
- **Resultado**: = ou Enter

#### **Atalhos de Teclado**
- **Números**: 0-9
- **Operações**: +, -, *, /
- **Enter**: Calcular resultado
- **Escape**: Limpar tudo
- **Backspace**: Apagar último dígito

### **Usando os Cards de Cálculo**

#### **Exemplo: Teorema de Pitágoras**
1. **Navegue** para a aba "Geometria"
2. **Encontre** o card "Teorema de Pitágoras"
3. **Digite** os valores dos catetos
4. **Clique** em "Calcular"
5. **Veja** o resultado
6. **Salve** no histórico (opcional)

#### **Exemplo: Juros Compostos**
1. **Vá** para a aba "Financeiro"
2. **Selecione** "Juros Compostos"
3. **Preencha**: Capital, Taxa, Tempo
4. **Calcule** o resultado
5. **Salve** para referência futura

### **Gerenciando o Histórico**

#### **Visualizar Histórico**
- **Painel lateral**: Lista de operações realizadas
- **Detalhes**: Nome, valores, resultado, data/hora
- **Scroll**: Navegue pelos itens antigos

#### **Limpar Histórico**
- **Limpar**: Remove apenas o histórico
- **Limpar Tudo**: Remove histórico + todos os campos

#### **Limpar Cards Individuais**
- **Botão "Limpar"**: Limpa apenas o card atual
- **Campos**: Voltam ao estado inicial
- **Resultado**: É removido

## 🎯 Funcionalidades Principais

### **Calculadora Tradicional**
```
┌─────────────────┐
│     Display     │
├─────────────────┤
│ AC | DEL | % | ÷│
│ 7  | 8   | 9 | ×│
│ 4  | 5   | 6 | -│
│ 1  | 2   | 3 | +│
│ 0  | .   | =   │
└─────────────────┘
```

### **Cards de Cálculo**
```
┌─────────────────────┐
│ Nome do Cálculo     │
│ Descrição...        │
├─────────────────────┤
│ Campo 1: [_____]    │
│ Campo 2: [_____]    │
├─────────────────────┤
│ [Calcular] [Limpar] │
├─────────────────────┤
│ Resultado: 42.00    │
├─────────────────────┤
│ [Salvar no Histórico]│
└─────────────────────┘
```

## 📱 Uso em Dispositivos Móveis

### **Interface Responsiva**
- **Navegação**: Abas empilhadas verticalmente
- **Cards**: Layout de coluna única
- **Botões**: Tamanhos otimizados para touch
- **Histórico**: Posicionamento adaptativo

### **Gestos Suportados**
- **Tap**: Ativação de botões
- **Scroll**: Navegação no histórico
- **Pinch**: Zoom (se necessário)

## 🔧 Personalização

### **Modificar Cores**
```css
/* Em style.css */
:root {
    --primary-color: #667eea;    /* Cor principal */
    --success-color: #28a745;    /* Cor de sucesso */
    --danger-color: #dc3545;     /* Cor de erro */
}
```

### **Adicionar Novo Cálculo**
1. **Edite** `index.html` - adicione estrutura do card
2. **Edite** `script.js` - implemente função de cálculo
3. **Configure** limpeza no objeto `cardConfigs`
4. **Teste** a funcionalidade

### **Modificar Layout**
```css
/* Alterar grid de cards */
.cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

## 🐛 Solução de Problemas

### **Problemas Comuns**

#### **Aplicação não carrega**
- **Verifique**: Servidor está rodando
- **Teste**: `http://localhost:8000` no navegador
- **Console**: Verifique erros no F12

#### **Cálculos não funcionam**
- **Verifique**: Campos preenchidos corretamente
- **Console**: Erros JavaScript
- **Navegador**: Atualize a página

#### **Histórico não salva**
- **Verifique**: localStorage habilitado
- **Teste**: Modo privado/incógnito
- **Limpe**: Cache do navegador

#### **Layout quebrado**
- **Verifique**: Tamanho da tela
- **Teste**: Diferentes navegadores
- **Console**: Erros CSS

### **Debugging**

#### **Abrir Console**
- **Chrome/Edge**: F12 → Console
- **Firefox**: F12 → Console
- **Safari**: Cmd+Option+C

#### **Verificar Erros**
```javascript
// No console do navegador
console.log('Histórico:', historico);
console.log('Calculadora:', calculator);
```

#### **Testar Funcionalidades**
```javascript
// Testar cálculo específico
calcularPitagoras();

// Testar limpeza
limparCard('pitagoras');

// Testar histórico
salvarNoHistorico('Teste', 'pitagoras');
```

## 📊 Métricas de Uso

### **Estatísticas da Aplicação**
- **Cards disponíveis**: 15
- **Operações suportadas**: 20+
- **Limite de histórico**: 50 itens
- **Tamanho total**: ~35KB

### **Performance**
- **Tempo de carregamento**: < 1 segundo
- **Responsividade**: Adaptação instantânea
- **Persistência**: Histórico mantido entre sessões

## 🔄 Atualizações

### **Verificar Versão**
- **Console**: `console.log('Versão: 1.0.0')`
- **Código**: Verificar comentários no arquivo

### **Backup de Dados**
```javascript
// Exportar histórico
const historicoExport = JSON.stringify(historico);
console.log('Histórico para backup:', historicoExport);
```

### **Restaurar Dados**
```javascript
// Importar histórico
const historicoImport = JSON.parse(historicoExport);
localStorage.setItem('calculadoraHistorico', JSON.stringify(historicoImport));
```

## 📞 Suporte

### **Recursos de Ajuda**
- **README.md**: Documentação completa
- **DOCUMENTACAO_TECNICA.md**: Especificações técnicas
- **Console**: Logs de debug
- **Código**: Comentários explicativos

### **Problemas Conhecidos**
- **localStorage**: Pode ser desabilitado em modo privado
- **Calculadora**: Alguns navegadores podem ter diferenças de precisão
- **Responsividade**: Testado em resoluções comuns

### **Sugestões de Melhoria**
- **Temas**: Modo escuro/claro
- **Exportação**: PDF, CSV
- **Mais cálculos**: Trigonometria, álgebra
- **Gráficos**: Visualização de dados

---

**Calculadora Avançada v1.0.0 - Guia de Instalação e Uso** 