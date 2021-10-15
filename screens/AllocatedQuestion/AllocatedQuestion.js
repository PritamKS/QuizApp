import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AllocatedQuestion = ({questionData, submitAnswer, userToken}) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <View style={styles.textInfo}>
        <Text style={styles.topicName}>{questionData.question}</Text>
      </View>
      <View style={styles.answerList}>
        {questionData &&
          questionData.answeroptionlist &&
          questionData.answeroptionlist.map((item, index) => {
            return (
              <TouchableOpacity
                key={`ans-${index}`}
                index={index}
                id={item.id}
                questId={item.question_id}
                style={styles.options}
                onPress={() =>
                  submitAnswer(item.id, userToken, item.question_id)
                }>
                <View>
                  <Text style={styles.subject}>{item.question_option}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  topicName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  answerList: {
    marginTop: '60%',
    width: '100%',
    alignItems: 'center',
  },
  subject: {
    width: '100%',
    color: 'white',
  },
  options: {
    width: '90%',
    height: 60,
    backgroundColor: '#1C39BB',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default AllocatedQuestion;
