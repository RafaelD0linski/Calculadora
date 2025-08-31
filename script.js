// Variáveis globais
let historico = [];
let currentTab = 'calculadora';

// Variáveis da calculadora
let calculator;

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    inicializarNavegacao();
    carregarHistorico();
    inicializarCalculadora();
});

// Sistema de navegação por abas
function inicializarNavegacao() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            trocarAba(tabId);
        });
    });
}

function trocarAba(tabId) {
    // Remove classe active de todas as abas e botões
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Adiciona classe active na aba selecionada
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    
    currentTab = tabId;
}

// Funções de cálculo - Básico
function calcularRegraDeTres() {
    const valor1 = parseFloat(document.getElementById('regra-tres-valor1').value);
    const valor2 = parseFloat(document.getElementById('regra-tres-valor2').value);
    const valor3 = parseFloat(document.getElementById('regra-tres-valor3').value);
    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        mostrarResultado('regra-tres-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (valor2 === 0) {
        mostrarResultado('regra-tres-resultado', 'Valor 2 não pode ser zero', true);
        return;
    }
    
    const resultado = (valor1 * valor3) / valor2;
    mostrarResultado('regra-tres-resultado', `Resultado: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Regra de Três',
        valores: `Valor1: ${valor1}, Valor2: ${valor2}, Valor3: ${valor3}`,
        resultado: resultado.toFixed(2)
    };
}

function calcularVelocidadeMedia() {
    const distancia = parseFloat(document.getElementById('velocidade-distancia').value);
    const tempo = parseFloat(document.getElementById('velocidade-tempo').value);
    
    if (isNaN(distancia) || isNaN(tempo)) {
        mostrarResultado('velocidade-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (tempo === 0) {
        mostrarResultado('velocidade-resultado', 'Tempo não pode ser zero', true);
        return;
    }
    
    const resultado = distancia / tempo;
    mostrarResultado('velocidade-resultado', `Velocidade: ${resultado.toFixed(2)} km/h`);
    
    return {
        operacao: 'Velocidade Média',
        valores: `Distância: ${distancia} km, Tempo: ${tempo} h`,
        resultado: `${resultado.toFixed(2)} km/h`
    };
}

function calcularConsumoCombustivel() {
    const litros = parseFloat(document.getElementById('consumo-litros').value);
    const distancia = parseFloat(document.getElementById('consumo-distancia').value);
    
    if (isNaN(litros) || isNaN(distancia)) {
        mostrarResultado('consumo-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (distancia === 0) {
        mostrarResultado('consumo-resultado', 'Distância não pode ser zero', true);
        return;
    }
    
    const resultado = litros / distancia;
    mostrarResultado('consumo-resultado', `Consumo: ${resultado.toFixed(2)} L/km`);
    
    return {
        operacao: 'Consumo de Combustível',
        valores: `Litros: ${litros} L, Distância: ${distancia} km`,
        resultado: `${resultado.toFixed(2)} L/km`
    };
}

// Funções de cálculo - Geometria
function calcularPitagoras() {
    const a = parseFloat(document.getElementById('pitagoras-a').value);
    const b = parseFloat(document.getElementById('pitagoras-b').value);
    
    if (isNaN(a) || isNaN(b)) {
        mostrarResultado('pitagoras-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (a <= 0 || b <= 0) {
        mostrarResultado('pitagoras-resultado', 'Valores devem ser positivos', true);
        return;
    }
    
    const resultado = Math.sqrt(a * a + b * b);
    mostrarResultado('pitagoras-resultado', `Hipotenusa: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Teorema de Pitágoras',
        valores: `Cateto A: ${a}, Cateto B: ${b}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById('triangulo-base').value);
    const altura = parseFloat(document.getElementById('triangulo-altura').value);
    
    if (isNaN(base) || isNaN(altura)) {
        mostrarResultado('triangulo-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (base <= 0 || altura <= 0) {
        mostrarResultado('triangulo-resultado', 'Valores devem ser positivos', true);
        return;
    }
    
    const resultado = (base * altura) / 2;
    mostrarResultado('triangulo-resultado', `Área: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Área do Triângulo',
        valores: `Base: ${base}, Altura: ${altura}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularAreaCirculo() {
    const raio = parseFloat(document.getElementById('circulo-raio').value);
    
    if (isNaN(raio)) {
        mostrarResultado('circulo-resultado', 'Preencha o campo', true);
        return;
    }
    
    if (raio <= 0) {
        mostrarResultado('circulo-resultado', 'Raio deve ser positivo', true);
        return;
    }
    
    const resultado = Math.PI * raio * raio;
    mostrarResultado('circulo-resultado', `Área: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Área do Círculo',
        valores: `Raio: ${raio}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularCircunferencia() {
    const raio = parseFloat(document.getElementById('circunferencia-raio').value);
    
    if (isNaN(raio)) {
        mostrarResultado('circunferencia-resultado', 'Preencha o campo', true);
        return;
    }
    
    if (raio <= 0) {
        mostrarResultado('circunferencia-resultado', 'Raio deve ser positivo', true);
        return;
    }
    
    const resultado = 2 * Math.PI * raio;
    mostrarResultado('circunferencia-resultado', `Circunferência: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Circunferência',
        valores: `Raio: ${raio}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularAreaRetangulo() {
    const base = parseFloat(document.getElementById('retangulo-base').value);
    const altura = parseFloat(document.getElementById('retangulo-altura').value);
    
    if (isNaN(base) || isNaN(altura)) {
        mostrarResultado('retangulo-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (base <= 0 || altura <= 0) {
        mostrarResultado('retangulo-resultado', 'Valores devem ser positivos', true);
        return;
    }
    
    const resultado = base * altura;
    mostrarResultado('retangulo-resultado', `Área: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Área do Retângulo',
        valores: `Base: ${base}, Altura: ${altura}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularVolumeParalelepipedo() {
    const comprimento = parseFloat(document.getElementById('volume-comprimento').value);
    const largura = parseFloat(document.getElementById('volume-largura').value);
    const altura = parseFloat(document.getElementById('volume-altura').value);
    
    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura)) {
        mostrarResultado('volume-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (comprimento <= 0 || largura <= 0 || altura <= 0) {
        mostrarResultado('volume-resultado', 'Valores devem ser positivos', true);
        return;
    }
    
    const resultado = comprimento * largura * altura;
    mostrarResultado('volume-resultado', `Volume: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Volume do Paralelepípedo',
        valores: `Comprimento: ${comprimento}, Largura: ${largura}, Altura: ${altura}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularVolumeEsfera() {
    const raio = parseFloat(document.getElementById('esfera-raio').value);
    
    if (isNaN(raio)) {
        mostrarResultado('esfera-resultado', 'Preencha o campo', true);
        return;
    }
    
    if (raio <= 0) {
        mostrarResultado('esfera-resultado', 'Raio deve ser positivo', true);
        return;
    }
    
    const resultado = (4/3) * Math.PI * Math.pow(raio, 3);
    mostrarResultado('esfera-resultado', `Volume: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Volume da Esfera',
        valores: `Raio: ${raio}`,
        resultado: `${resultado.toFixed(2)}`
    };
}

// Funções de cálculo - Porcentagem
function calcularPorcentagem() {
    const valor = parseFloat(document.getElementById('porcentagem-valor').value);
    const percentual = parseFloat(document.getElementById('porcentagem-percentual').value);
    
    if (isNaN(valor) || isNaN(percentual)) {
        mostrarResultado('porcentagem-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    const resultado = (valor * percentual) / 100;
    mostrarResultado('porcentagem-resultado', `Resultado: ${resultado.toFixed(2)}`);
    
    return {
        operacao: 'Porcentagem',
        valores: `Valor: ${valor}, Percentual: ${percentual}%`,
        resultado: `${resultado.toFixed(2)}`
    };
}

function calcularVariacaoPercentual() {
    const inicial = parseFloat(document.getElementById('variacao-inicial').value);
    const final = parseFloat(document.getElementById('variacao-final').value);
    
    if (isNaN(inicial) || isNaN(final)) {
        mostrarResultado('variacao-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (inicial === 0) {
        mostrarResultado('variacao-resultado', 'Valor inicial não pode ser zero', true);
        return;
    }
    
    const resultado = ((final - inicial) / inicial) * 100;
    const sinal = resultado >= 0 ? '+' : '';
    mostrarResultado('variacao-resultado', `Variação: ${sinal}${resultado.toFixed(2)}%`);
    
    return {
        operacao: 'Variação Percentual',
        valores: `Inicial: ${inicial}, Final: ${final}`,
        resultado: `${sinal}${resultado.toFixed(2)}%`
    };
}

// Funções de cálculo - Financeiro
function calcularJurosSimples() {
    const capital = parseFloat(document.getElementById('juros-simples-capital').value);
    const taxa = parseFloat(document.getElementById('juros-simples-taxa').value);
    const tempo = parseFloat(document.getElementById('juros-simples-tempo').value);
    
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        mostrarResultado('juros-simples-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (capital <= 0 || taxa <= 0 || tempo <= 0) {
        mostrarResultado('juros-simples-resultado', 'Valores devem ser positivos', true);
        return;
    }
    
    const juros = (capital * taxa * tempo) / 100;
    const montante = capital + juros;
    mostrarResultado('juros-simples-resultado', `Juros: R$ ${juros.toFixed(2)}<br>Montante: R$ ${montante.toFixed(2)}`);
    
    return {
        operacao: 'Juros Simples',
        valores: `Capital: R$ ${capital}, Taxa: ${taxa}%, Tempo: ${tempo} meses`,
        resultado: `Juros: R$ ${juros.toFixed(2)}, Montante: R$ ${montante.toFixed(2)}`
    };
}

function calcularJurosCompostos() {
    const capital = parseFloat(document.getElementById('juros-compostos-capital').value);
    const taxa = parseFloat(document.getElementById('juros-compostos-taxa').value);
    const tempo = parseFloat(document.getElementById('juros-compostos-tempo').value);
    
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        mostrarResultado('juros-compostos-resultado', 'Preencha todos os campos', true);
        return;
    }
    
    if (capital <= 0 || taxa <= 0 || tempo <= 0) {
        mostrarResultado('juros-compostos-resultado', 'Valores devem ser positivos', true);
        return;
    }
    
    const montante = capital * Math.pow(1 + taxa/100, tempo);
    const juros = montante - capital;
    mostrarResultado('juros-compostos-resultado', `Juros: R$ ${juros.toFixed(2)}<br>Montante: R$ ${montante.toFixed(2)}`);
    
    return {
        operacao: 'Juros Compostos',
        valores: `Capital: R$ ${capital}, Taxa: ${taxa}%, Tempo: ${tempo} meses`,
        resultado: `Juros: R$ ${juros.toFixed(2)}, Montante: R$ ${montante.toFixed(2)}`
    };
}

// Funções de cálculo - Estatística
function calcularMediaAritmetica() {
    const numerosStr = document.getElementById('media-numeros').value;
    
    if (!numerosStr.trim()) {
        mostrarResultado('media-resultado', 'Preencha o campo', true);
        return;
    }
    
    const numeros = numerosStr.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    
    if (numeros.length === 0) {
        mostrarResultado('media-resultado', 'Digite números válidos', true);
        return;
    }
    
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    mostrarResultado('media-resultado', `Média: ${media.toFixed(2)}`);
    
    return {
        operacao: 'Média Aritmética',
        valores: `Números: ${numeros.join(', ')}`,
        resultado: `${media.toFixed(2)}`
    };
}

// Função auxiliar para mostrar resultados
function mostrarResultado(elementId, texto, isError = false) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = texto;
    elemento.className = isError ? 'result error' : 'result';
}

// Sistema de histórico
function salvarNoHistorico(nomeOperacao, tipoCalculo) {
    let dadosCalculo;
    
    // Chama a função de cálculo correspondente
    switch(tipoCalculo) {
        case 'regra-tres':
            dadosCalculo = calcularRegraDeTres();
            break;
        case 'velocidade':
            dadosCalculo = calcularVelocidadeMedia();
            break;
        case 'consumo':
            dadosCalculo = calcularConsumoCombustivel();
            break;
        case 'pitagoras':
            dadosCalculo = calcularPitagoras();
            break;
        case 'triangulo':
            dadosCalculo = calcularAreaTriangulo();
            break;
        case 'circulo':
            dadosCalculo = calcularAreaCirculo();
            break;
        case 'circunferencia':
            dadosCalculo = calcularCircunferencia();
            break;
        case 'retangulo':
            dadosCalculo = calcularAreaRetangulo();
            break;
        case 'volume':
            dadosCalculo = calcularVolumeParalelepipedo();
            break;
        case 'esfera':
            dadosCalculo = calcularVolumeEsfera();
            break;
        case 'porcentagem':
            dadosCalculo = calcularPorcentagem();
            break;
        case 'variacao':
            dadosCalculo = calcularVariacaoPercentual();
            break;
        case 'juros-simples':
            dadosCalculo = calcularJurosSimples();
            break;
        case 'juros-compostos':
            dadosCalculo = calcularJurosCompostos();
            break;
        case 'media':
            dadosCalculo = calcularMediaAritmetica();
            break;
        default:
            return;
    }
    
    if (dadosCalculo) {
        adicionarAoHistorico(dadosCalculo);
    }
}

function adicionarAoHistorico(dados) {
    const item = {
        ...dados,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    historico.unshift(item); // Adiciona no início
    
    // Limita o histórico a 50 itens
    if (historico.length > 50) {
        historico = historico.slice(0, 50);
    }
    
    salvarHistorico();
    atualizarExibicaoHistorico();
}

function atualizarExibicaoHistorico() {
    const historyList = document.getElementById('history-list');
    
    if (historico.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #666; font-style: italic;">Nenhum cálculo no histórico</p>';
        return;
    }
    
    historyList.innerHTML = historico.map(item => `
        <div class="history-item">
            <h4>${item.operacao}</h4>
            <div class="values">${item.valores}</div>
            <div class="result-history">${item.resultado}</div>
            <small style="color: #999; font-size: 0.8rem;">${item.timestamp}</small>
        </div>
    `).join('');
}

function limparHistorico() {
    historico = [];
    salvarHistorico();
    atualizarExibicaoHistorico();
}

function salvarHistorico() {
    localStorage.setItem('calculadoraHistorico', JSON.stringify(historico));
}

function carregarHistorico() {
    const historicoSalvo = localStorage.getItem('calculadoraHistorico');
    if (historicoSalvo) {
        historico = JSON.parse(historicoSalvo);
        atualizarExibicaoHistorico();
    }
}

// Classe da Calculadora
class Calculator {
    constructor() {
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operation = undefined;
        this.shouldResetScreen = false;
        
        this.previousOperandElement = document.getElementById('previous-operand');
        this.currentOperandElement = document.getElementById('current-operand');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Event listeners para números
        document.querySelectorAll('.calculator .btn.number').forEach(button => {
            button.addEventListener('click', () => {
                this.appendNumber(button.dataset.number);
            });
        });
        
        // Event listeners para operadores
        document.querySelectorAll('.calculator .btn.operator').forEach(button => {
            button.addEventListener('click', () => {
                this.handleOperator(button.dataset.action);
            });
        });
        
        // Event listener para igual
        document.querySelectorAll('.calculator .btn.equals').forEach(button => {
            button.addEventListener('click', () => {
                this.compute();
            });
        });
        
        // Event listener para teclado
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });
    }
    
    appendNumber(number) {
        if (this.shouldResetScreen) {
            this.currentOperand = '';
            this.shouldResetScreen = false;
        }
        
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number;
        } else {
            this.currentOperand += number;
        }
        this.updateDisplay();
    }
    
    handleOperator(action) {
        switch(action) {
            case 'clear':
                this.clear();
                break;
            case 'delete':
                this.delete();
                break;
            case 'percent':
                this.percent();
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                this.chooseOperation(action);
                break;
        }
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }
    
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case 'add':
                computation = prev + current;
                break;
            case 'subtract':
                computation = prev - current;
                break;
            case 'multiply':
                computation = prev * current;
                break;
            case 'divide':
                if (current === 0) {
                    this.currentOperand = 'Erro';
                    this.updateDisplay();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        this.currentOperand = computation.toString();
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetScreen = true;
        this.updateDisplay();
    }
    
    percent() {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        this.currentOperand = (current / 100).toString();
        this.updateDisplay();
    }
    
    delete() {
        if (this.currentOperand === '0') return;
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === '') {
            this.currentOperand = '0';
        }
        this.updateDisplay();
    }
    
    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('pt-BR', {
                maximumFractionDigits: 0
            });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }
    
    updateDisplay() {
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
        
        if (this.operation != null) {
            const operationSymbols = {
                'add': '+',
                'subtract': '−',
                'multiply': '×',
                'divide': '÷'
            };
            this.previousOperandElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${operationSymbols[this.operation]}`;
        } else {
            this.previousOperandElement.innerText = '';
        }
    }
    
    handleKeyboard(e) {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            this.appendNumber(e.key);
        } else if (e.key === '+' || e.key === '-') {
            this.chooseOperation(e.key === '+' ? 'add' : 'subtract');
        } else if (e.key === '*') {
            this.chooseOperation('multiply');
        } else if (e.key === '/') {
            e.preventDefault();
            this.chooseOperation('divide');
        } else if (e.key === 'Enter' || e.key === '=') {
            this.compute();
        } else if (e.key === 'Backspace') {
            this.delete();
        } else if (e.key === 'Escape') {
            this.clear();
        }
    }
}

// Funções da calculadora
function inicializarCalculadora() {
    calculator = new Calculator();
}

function salvarCalculadoraNoHistorico() {
    const currentValue = calculator.currentOperand;
    const previousValue = calculator.previousOperand;
    const operation = calculator.operation;
    
    if (currentValue === '0' || currentValue === 'Erro') {
        alert('Nenhum cálculo para salvar');
        return;
    }
    
    let operacaoCompleta = '';
    let valores = '';
    
    if (operation && previousValue) {
        const operationSymbols = {
            'add': '+',
            'subtract': '−',
            'multiply': '×',
            'divide': '÷'
        };
        
        operacaoCompleta = `${previousValue} ${operationSymbols[operation]} ${currentValue}`;
        valores = `Valores: ${previousValue} ${operationSymbols[operation]} ${currentValue}`;
    } else {
        operacaoCompleta = `Valor: ${currentValue}`;
        valores = `Valor: ${currentValue}`;
    }
    
    const dados = {
        operacao: 'Calculadora',
        valores: valores,
        resultado: currentValue,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    historico.unshift(dados);
    
    if (historico.length > 50) {
        historico = historico.slice(0, 50);
    }
    
    salvarHistorico();
    atualizarExibicaoHistorico();
    alert('Cálculo salvo no histórico!');
}

// Função para limpar todas as operações
function limparTodasOperacoes() {
    if (confirm('Tem certeza que deseja limpar todas as operações? Esta ação não pode ser desfeita.')) {
        // Limpa o histórico
        historico = [];
        salvarHistorico();
        atualizarExibicaoHistorico();
        
        // Limpa a calculadora
        if (calculator) {
            calculator.clear();
        }
        
        // Limpa todos os campos de input dos cards
        document.querySelectorAll('input[type="number"], input[type="text"]').forEach(input => {
            input.value = '';
        });
        
        // Limpa todos os resultados
        document.querySelectorAll('.result').forEach(result => {
            result.innerHTML = '';
            result.className = 'result';
        });
        
        alert('Todas as operações foram limpas!');
    }
}

// Função para limpar card específico
function limparCard(tipoCard) {
    const cardConfigs = {
        'regra-tres': {
            inputs: ['regra-tres-valor1', 'regra-tres-valor2', 'regra-tres-valor3'],
            resultado: 'regra-tres-resultado'
        },
        'velocidade': {
            inputs: ['velocidade-distancia', 'velocidade-tempo'],
            resultado: 'velocidade-resultado'
        },
        'consumo': {
            inputs: ['consumo-litros', 'consumo-distancia'],
            resultado: 'consumo-resultado'
        },
        'pitagoras': {
            inputs: ['pitagoras-a', 'pitagoras-b'],
            resultado: 'pitagoras-resultado'
        },
        'triangulo': {
            inputs: ['triangulo-base', 'triangulo-altura'],
            resultado: 'triangulo-resultado'
        },
        'circulo': {
            inputs: ['circulo-raio'],
            resultado: 'circulo-resultado'
        },
        'circunferencia': {
            inputs: ['circunferencia-raio'],
            resultado: 'circunferencia-resultado'
        },
        'retangulo': {
            inputs: ['retangulo-base', 'retangulo-altura'],
            resultado: 'retangulo-resultado'
        },
        'volume': {
            inputs: ['volume-comprimento', 'volume-largura', 'volume-altura'],
            resultado: 'volume-resultado'
        },
        'esfera': {
            inputs: ['esfera-raio'],
            resultado: 'esfera-resultado'
        },
        'porcentagem': {
            inputs: ['porcentagem-valor', 'porcentagem-percentual'],
            resultado: 'porcentagem-resultado'
        },
        'variacao': {
            inputs: ['variacao-inicial', 'variacao-final'],
            resultado: 'variacao-resultado'
        },
        'juros-simples': {
            inputs: ['juros-simples-capital', 'juros-simples-taxa', 'juros-simples-tempo'],
            resultado: 'juros-simples-resultado'
        },
        'juros-compostos': {
            inputs: ['juros-compostos-capital', 'juros-compostos-taxa', 'juros-compostos-tempo'],
            resultado: 'juros-compostos-resultado'
        },
        'media': {
            inputs: ['media-numeros'],
            resultado: 'media-resultado'
        }
    };
    
    const config = cardConfigs[tipoCard];
    if (!config) {
        console.error('Tipo de card não encontrado:', tipoCard);
        return;
    }
    
    // Limpa os campos de input
    config.inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.value = '';
        }
    });
    
    // Limpa o resultado
    const resultado = document.getElementById(config.resultado);
    if (resultado) {
        resultado.innerHTML = '';
        resultado.className = 'result';
    }
}
