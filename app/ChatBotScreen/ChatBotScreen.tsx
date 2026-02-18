// ChatBotScreen.tsx
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatBotScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    let botText = "I didn't understand that.";
    const text = input.toLowerCase();
    if (text.includes('hello')) botText = 'Hello! How are you?';
    else if (text.includes('how are you')) botText = "I'm just a bot, but I'm doing fine!";
    else if (text.includes('bye')) botText = 'Goodbye! Have a nice day!';

    const botMessage: Message = { id: (Date.now() + 1).toString(), text: botText, sender: 'bot' };
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 500); // small delay to simulate typing

    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.message, item.sender === 'user' ? styles.user : styles.bot]}>
            <Text style={{ color: item.sender === 'user' ? 'white' : 'blue' }}>
              {item.sender === 'user' ? 'You: ' : 'Bot: '}
              {item.text}
            </Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f0f0' },
  message: { padding: 10, borderRadius: 8, marginVertical: 4, maxWidth: '80%' },
  user: { backgroundColor: 'green', alignSelf: 'flex-end' },
  bot: { backgroundColor: '#e0e0e0', alignSelf: 'flex-start' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginRight: 10 },
});
