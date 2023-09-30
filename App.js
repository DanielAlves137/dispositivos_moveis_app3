import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';

function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMultiplicacao = () => {
    // Converte os valores de texto para números
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const multiplicacao = num1 * num2;
      setResultado(`Resultado: ${multiplicacao}`);
    } else {
      setResultado('Certifique-se de inserir números válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>MULTIPLICADOR DE NÚMEROS</Text>
      </View>
      <View>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        onChangeText={(text) => setNumero1(text)}
        keyboardType="numeric"
        value={numero1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        onChangeText={(text) => setNumero2(text)}
        keyboardType="numeric"
        value={numero2}
      />
      </View>
      <View>
      <TouchableOpacity style={styles.calcular} onPress={calcularMultiplicacao}>
          <Text>CALCULAR</Text>
        </TouchableOpacity>
      </View>
      <View>
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
      </View>
    </View>
  );
}

export default App;