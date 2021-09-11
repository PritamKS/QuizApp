import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  textArea: {
    width: '100%',
    height: '40%',
    backgroundColor: '#0066cc',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  heading: {
    paddingTop: '10%',
    paddingLeft: '10%',
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  message: {
    paddingTop: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
    color: 'white',
    fontSize: 17,
    color: '#91b4ed',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  loginBtn: {
    width: "40%",
    borderRadius: 15,
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "10%",
    backgroundColor: "orange",
  },
  loginTxt: {
    color: "white",
  }
});
