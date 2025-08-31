# Calculadora Avançada - Documentação da Refatoração

## 📋 Visão Geral

Esta é uma calculadora avançada baseada em cards, desenvolvida em HTML, CSS e JavaScript puro. A aplicação oferece uma interface moderna e intuitiva para realizar diversos tipos de cálculos matemáticos, desde operações básicas até cálculos complexos de geometria, finanças e estatística.

## 🎯 Funcionalidades Implementadas

### 1. **Sistema de Navegação por Abas**
- **6 abas principais**: Calculadora, Básico, Geometria, Porcentagem, Financeiro, Estatística
- **Navegação intuitiva** com design responsivo
- **Transições suaves** entre abas

### 2. **Calculadora Tradicional**
- **Operações básicas**: +, -, ×, ÷, %
- **Funções especiais**: AC (limpar tudo), DEL (apagar último dígito)
- **Suporte ao teclado** completo
- **Display duplo** mostrando operação anterior e resultado atual
- **Integração com histórico**

### 3. **Cards de Cálculo Avançado (15 total)**

#### **Aba Básico:**
- **Regra de Três**: Proporções entre grandezas
- **Velocidade Média**: Cálculo baseado em distância e tempo
- **Consumo de Combustível**: Consumo médio por km

#### **Aba Geometria:**
- **Teorema de Pitágoras**: Cálculo da hipotenusa
- **Área do Triângulo**: Base × altura / 2
- **Área do Círculo**: π × r²
- **Circunferência**: 2 × π × r
- **Área do Retângulo/Quadrado**: Base × altura
- **Volume do Paralelepípedo**: Comprimento × largura × altura
- **Volume da Esfera**: (4/3) × π × r³

#### **Aba Porcentagem:**
- **Porcentagem**: X% de um valor
- **Variação Percentual**: Diferença percentual entre dois valores

#### **Aba Financeiro:**
- **Juros Simples**: J = C × i × t
- **Juros Compostos**: M = C × (1 + i)ᵗ

#### **Aba Estatística:**
- **Média Aritmética**: Média de uma lista de números

### 4. **Sistema de Histórico**
- **Persistência local** usando localStorage
- **Limite de 50 itens** no histórico
- **Exibição detalhada** com timestamp
- **Botão "Limpar"** para limpar histórico
- **Botão "Limpar Tudo"** para limpar todas as operações

### 5. **Funcionalidades de Limpeza**
- **Botão "Limpar" individual** em cada card
- **Botão "Limpar Tudo"** no painel de histórico
- **Limpeza seletiva** de campos e resultados

## 🏗️ Estrutura do Projeto

```
Calculadora/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos CSS responsivos
├── script.js           # Lógica JavaScript modular
└── README.md           # Esta documentação
```

## 📁 Estrutura de Arquivos

### **index.html**
- **Layout responsivo** com grid CSS
- **Sistema de abas** com navegação
- **Cards modulares** para cada cálculo
- **Painel de histórico** lateral
- **Calculadora tradicional** integrada

### **style.css**
- **Design moderno** inspirado na calculadora do Windows
- **Sistema de cores** consistente
- **Animações e transições** suaves
- **Responsividade** para mobile e desktop
- **Componentes reutilizáveis**

### **script.js**
- **Arquitetura modular** com funções específicas
- **Classe Calculator** para calculadora tradicional
- **Sistema de histórico** com localStorage
- **Validação de entrada** robusta
- **Tratamento de erros** abrangente

## 🔧 Arquitetura do Código

### **Padrão de Implementação**

Cada cálculo segue o padrão modular:

```javascript
function nomeDoCalculo() {
    // 1. Obter valores dos inputs
    const valor1 = parseFloat(document.getElementById('input-id').value);
    
    // 2. Validação de entrada
    if (isNaN(valor1)) {
        mostrarResultado('resultado-id', 'Erro: Preencha todos os campos', true);
        return;
    }
    
    // 3. Lógica de cálculo
    const resultado = valor1 * 2;
    
    // 4. Exibir resultado
    mostrarResultado('resultado-id', `Resultado: ${resultado.toFixed(2)}`);
    
    // 5. Retornar dados para histórico (opcional)
    return {
        operacao: 'Nome da Operação',
        valores: `Valor1: ${valor1}`,
        resultado: resultado.toFixed(2)
    };
}
```

### **Sistema de Histórico**

```javascript
// Estrutura de dados do histórico
const itemHistorico = {
    operacao: 'Nome da Operação',
    valores: 'Descrição dos valores usados',
    resultado: 'Resultado formatado',
    timestamp: 'Data/hora da operação'
};
```

### **Sistema de Limpeza**

```javascript
// Configuração para limpeza de cards
const cardConfigs = {
    'nome-card': {
        inputs: ['input-id-1', 'input-id-2'],
        resultado: 'resultado-id'
    }
};
```

## 🎨 Design System

### **Cores Principais**
- **Primária**: `#667eea` (azul gradiente)
- **Secundária**: `#764ba2` (roxo gradiente)
- **Sucesso**: `#28a745` (verde)
- **Perigo**: `#dc3545` (vermelho)
- **Neutra**: `#6c757d` (cinza)

### **Tipografia**
- **Família**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Tamanhos**: 0.9rem a 2.5rem
- **Pesos**: 500, 600

### **Componentes**
- **Cards**: Bordas arredondadas, sombra suave, hover effects
- **Botões**: Gradientes, transições, estados hover/active
- **Inputs**: Bordas, focus states, validação visual
- **Resultados**: Background colorido, destaque visual

## 📱 Responsividade

### **Breakpoints**
- **Desktop**: > 1200px (layout em grid)
- **Tablet**: 768px - 1200px (layout adaptativo)
- **Mobile**: < 768px (layout empilhado)

### **Adaptações Mobile**
- **Navegação**: Abas empilhadas verticalmente
- **Cards**: Layout de coluna única
- **Botões**: Tamanhos otimizados para touch
- **Histórico**: Posicionamento estático

## 🔄 Funcionalidades de Limpeza

### **Limpeza Individual**
- **Escopo**: Apenas o card específico
- **Ação**: Limpa inputs e resultado
- **Preserva**: Outros cards e histórico

### **Limpeza Global**
- **Escopo**: Toda a aplicação
- **Ação**: Limpa todos os cards, calculadora e histórico
- **Confirmação**: Dialog de confirmação obrigatório

## 💾 Persistência de Dados

### **localStorage**
- **Chave**: `calculadoraHistorico`
- **Formato**: JSON string
- **Limite**: 50 itens
- **Lifespan**: Persistente até limpeza manual

### **Estrutura de Dados**
```javascript
[
    {
        operacao: "Teorema de Pitágoras",
        valores: "Cateto A: 3, Cateto B: 4",
        resultado: "5.00",
        timestamp: "31/08/2025 14:30:00"
    }
]
```

## 🚀 Como Usar

### **1. Acessar a Aplicação**
```bash
# Iniciar servidor local
python -m http.server 8000

# Acessar no navegador
http://localhost:8000
```

### **2. Navegação**
- **Clique nas abas** para alternar entre categorias
- **Use a calculadora** na primeira aba
- **Explore os cards** de cálculo avançado

### **3. Realizar Cálculos**
- **Preencha os campos** com os valores necessários
- **Clique em "Calcular"** para ver o resultado
- **Clique em "Salvar"** para guardar no histórico
- **Clique em "Limpar"** para limpar o card

### **4. Gerenciar Histórico**
- **Visualize** operações no painel lateral
- **Clique em "Limpar"** para limpar histórico
- **Clique em "Limpar Tudo"** para limpar tudo

## 🛠️ Manutenção e Extensibilidade

### **Adicionar Novo Card**

1. **HTML**: Adicionar estrutura do card em `index.html`
2. **CSS**: Estilos já estão prontos (reutilizar classes)
3. **JavaScript**: Implementar função de cálculo seguindo o padrão
4. **Configuração**: Adicionar entrada no `cardConfigs` para limpeza

### **Exemplo de Novo Card**

```html
<!-- HTML -->
<div class="card">
    <h3>Novo Cálculo</h3>
    <p class="description">Descrição do cálculo.</p>
    <div class="input-group">
        <label>Valor:</label>
        <input type="number" id="novo-valor" placeholder="Ex: 10">
    </div>
    <div class="card-actions">
        <button class="btn-calculate" onclick="calcularNovo()">Calcular</button>
        <button class="btn-clear-card" onclick="limparCard('novo')">Limpar</button>
    </div>
    <div class="result" id="novo-resultado"></div>
    <button class="btn-save" onclick="salvarNoHistorico('Novo Cálculo', 'novo')">Salvar no Histórico</button>
</div>
```

```javascript
// JavaScript
function calcularNovo() {
    const valor = parseFloat(document.getElementById('novo-valor').value);
    
    if (isNaN(valor)) {
        mostrarResultado('novo-resultado', 'Preencha o campo', true);
        return;
    }
    
    const resultado = valor * 2;
    mostrarResultado('novo-resultado', `Resultado: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Novo Cálculo',
        valores: `Valor: ${valor}`,
        resultado: resultado.toFixed(2)
    };
}

// Adicionar ao cardConfigs
'novo': {
    inputs: ['novo-valor'],
    resultado: 'novo-resultado'
}
```

## 🐛 Tratamento de Erros

### **Validações Implementadas**
- **Campos obrigatórios**: Verificação de preenchimento
- **Valores numéricos**: Validação de tipo
- **Divisão por zero**: Proteção contra erro matemático
- **Valores negativos**: Validação quando necessário
- **Formato de entrada**: Validação para média aritmética

### **Feedback Visual**
- **Estados de erro**: Background vermelho, texto de erro
- **Estados de sucesso**: Background verde, resultado destacado
- **Mensagens informativas**: Alertas e confirmações

## 📊 Performance

### **Otimizações Implementadas**
- **Event delegation**: Para botões da calculadora
- **localStorage limitado**: Máximo 50 itens
- **CSS otimizado**: Reutilização de classes
- **JavaScript modular**: Funções específicas e eficientes

### **Métricas**
- **Tamanho total**: ~15KB (HTML + CSS + JS)
- **Tempo de carregamento**: < 1 segundo
- **Responsividade**: Adaptação instantânea
- **Persistência**: Histórico mantido entre sessões

## 🔮 Futuras Melhorias

### **Funcionalidades Sugeridas**
- **Exportar histórico**: PDF, CSV
- **Temas visuais**: Modo escuro/claro
- **Mais cálculos**: Trigonometria, álgebra
- **Gráficos**: Visualização de dados
- **Atalhos de teclado**: Navegação por teclado
- **PWA**: Instalação como app

### **Melhorias Técnicas**
- **TypeScript**: Tipagem estática
- **Testes unitários**: Cobertura de código
- **Build system**: Minificação e otimização
- **Service Worker**: Cache offline

## 📝 Changelog

### **Versão 1.0.0 (Atual)**
- ✅ Sistema de navegação por abas
- ✅ Calculadora tradicional funcional
- ✅ 15 cards de cálculo avançado
- ✅ Sistema de histórico persistente
- ✅ Funcionalidades de limpeza individual e global
- ✅ Design responsivo completo
- ✅ Validação de entrada robusta
- ✅ Tratamento de erros abrangente

## 📞 Suporte

Para dúvidas, sugestões ou problemas:
- **Repositório**: Documentação completa no README
- **Código**: Comentários explicativos no código
- **Estrutura**: Organização modular para fácil manutenção

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript puro** 