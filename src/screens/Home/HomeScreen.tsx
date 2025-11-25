import React from "react";
import { View, Button, FlatList, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { AppointmentService } from "../../services/AppointmentService";
import { Appointment } from "../../models/Appointment";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const appointments = AppointmentService.getAll();

  function handleSchedule() {
    navigation.navigate("Schedule");
  }

  function handleCancel(id: string) {
    AppointmentService.remove(id);
    // para forçar re-render, pode usar estado local ou hook effect – para começo simples, deixar simples
  }

  return (
    <View style={styles.container}>
      <Button title="Agendar Consulta" onPress={handleSchedule} />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.doctor}</Text>
            <Text>{item.date} {item.time}</Text>
            <Button title="Cancelar" onPress={() => handleCancel(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { marginVertical: 8, padding: 8, borderWidth: 1, borderRadius: 4 },
});
