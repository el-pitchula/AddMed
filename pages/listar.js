import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { listarAtendimentos } from "../model/atendimentos";
import { styles } from "../styles/listar";

export default function Listar({ voltar }) {
  const lista = listarAtendimentos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atendimentos Cadastrados</Text>

      {lista.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>Paciente: {item.paciente}</Text>
          <Text>Data:  {item.data}</Text>
          <Text>Hora: {item.hora}</Text>
        </View>
      ))}

      <TouchableOpacity onPress={voltar}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
        
    </View>
  );
}
