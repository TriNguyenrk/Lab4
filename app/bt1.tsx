import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
} from 'react-native';

type ContactType = {
  name: string;
  email: string;
  position: string;
  photo: string;
};

const initialData: ContactType[] = [
  {
    name: 'Nguyễn Thị A',
    email: 'a@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Nguyễn Thị B',
    email: 'b@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Nguyễn Thị C',
    email: 'c@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Nguyễn Thị D',
    email: 'd@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Nguyễn Thị E',
    email: 'e@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Nguyễn Thị F',
    email: 'f@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    name: 'Nguyễn Thị G',
    email: 'g@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    name: 'Nguyễn Thị H',
    email: 'h@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    name: 'Nguyễn Thị I',
    email: 'i@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    name: 'Nguyễn Thị K',
    email: 'k@gmail.com',
    position: 'Developer',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];

const ContactItem: React.FC<{ contact: ContactType; onDelete: () => void; onEdit: () => void }> = ({ contact, onDelete, onEdit }) => {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: contact.photo }} style={styles.avatar} />

      <View style={styles.bodyItem}>
        <Text style={styles.nameText}>{contact.name}</Text>
        <Text style={styles.emailText}>{contact.email}</Text>
        <Text style={styles.positionText}>{contact.position}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.buttonText}>Sửa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ContactList = () => {
  const [contacts, setContacts] = useState<ContactType[]>(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingContact, setEditingContact] = useState<ContactType | null>(null);
  const [newName, setNewName] = useState('');

  // Hàm lấy chữ cuối cùng trong tên
  const generateEmail = (name: string) => {
    const nameParts = name.trim().split(' ');
    const lastName = nameParts[nameParts.length - 1].toLowerCase(); // Lấy chữ cuối cùng
    return `${lastName}@gmail.com`;
  };

  const handleEdit = (contact: ContactType) => {
    setEditingContact(contact);
    setNewName(contact.name);
    setModalVisible(true);
  };

  const handleSaveEdit = () => {
    if (editingContact) {
      const updatedContacts = contacts.map(contact =>
        contact.email === editingContact.email
          ? { ...contact, name: newName, email: generateEmail(newName) }
          : contact
      );
      setContacts(updatedContacts);
      setModalVisible(false);
      setEditingContact(null);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.email}
        renderItem={({ item }) => (
          <ContactItem contact={item} onDelete={() => setContacts(contacts.filter(c => c.email !== item.email))} onEdit={() => handleEdit(item)} />
        )}
      />

      {/* Modal chỉnh sửa */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Chỉnh sửa thông tin</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Nhập tên mới"
            />
            <Text style={styles.emailPreview}>Email mới: {generateEmail(newName)}</Text>
            <View style={styles.modalButtons}>
              <Button title="Hủy" onPress={() => setModalVisible(false)} color="red" />
              <Button title="Lưu" onPress={handleSaveEdit} color="green" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bodyItem: {
    flex: 1,
    marginLeft: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  positionText: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  emailPreview: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ContactList;