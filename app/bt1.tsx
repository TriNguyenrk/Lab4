import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';

type ContactType = {
  name: string;
  email: string;
  position: string;
  photo: string;
};

const DATA: ContactType[] = [
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


const ContactItem: React.FC<{ contact: ContactType }> = ({ contact }) => {
  return (
    <View style={styles.listItem}>
      {/* <Image source={{ uri: contact.photo }} style={styles.avatar} /> //khong hien thi anh dang tim cach fix */}

      <Image source={require('../assets/images/anhme.png')} style={styles.avatar} />

      <View style={styles.bodyItem}>
        <Text style={styles.nameText}>{contact.name}</Text>
        <Text style={styles.emailText}>{contact.email}</Text>
        <Text style={styles.positionText}>{contact.position}</Text>
      </View>

      <Text style={styles.callText}>Call</Text>
    </View>
  );
};

const bt1 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => <ContactItem contact={item} />}
      />
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
    alignItems: 'center',
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
  callText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default bt1;