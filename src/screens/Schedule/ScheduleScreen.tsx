import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { AppointmentService } from "../../services/AppointmentService";
import { Appointment } from "../../models/Appointment";
import { v4 as uuidv4 } from "uuid";  // pode instalar uuid para gerar id

type Props = NativeStackScreenProps<RootStackParamList, "Schedule">;

export default function ScheduleScreen({ navigation }: Props) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  function onChangeDate(event: any, selectedDate?: Date) {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  function handleConfirm() {
    const newAppointment: Appointment = {
      id: uuidv4(),
      doctor: "Dr. Fulano",  // para agora, pode deixar fixo ou usar outro picker
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    AppointmentService.add(newAppointment);
    navigation.goBack();  // volta para a Home
  }

  return (
    <View style={styles.container}>
      <Button title="Escolher Data / Hora" onPress={() => setShowDatePicker(true)} />

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Button title="Confirmar Agendamento" onPress={handleConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
});
