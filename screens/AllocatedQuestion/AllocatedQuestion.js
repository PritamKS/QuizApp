import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AllocatedQuestion = ({questionData, submitAnswer, userToken}) => {
  const [autoSubmitTime, setAutoSubmitTime] = useState(30);
  useEffect(() => {
    let autoSubmitTimer;
    if (autoSubmitTime > 0) {
      autoSubmitTimer = setInterval(() => {
        setAutoSubmitTime(autoSubmitTime - 1);
      }, 1000);
    }

    return () => clearInterval(autoSubmitTimer);
  });

  return (
    <View style={styles.centeredView}>
      <View style={styles.timerView}>
        <Text style={styles.timerText}>Auto Submit in {autoSubmitTime}s</Text>
      </View>
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
                  submitAnswer(
                    item.id,
                    userToken,
                    questionData.id,
                    autoSubmitTime,
                  )
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
    backgroundColor: '#26509e',
  },
  textInfo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  timerView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  timerText: {
    fontSize: 16,
    color: 'yellow',
  },
  topicName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  answerList: {
    marginTop: '60%',
    width: '100%',
    alignItems: 'center',
  },
  subject: {
    width: '100%',
    color: 'white',
    fontSize: 16,
  },
  options: {
    width: '90%',
    height: 60,
    backgroundColor: '#528afa',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 25,
  },
});

export default AllocatedQuestion;
