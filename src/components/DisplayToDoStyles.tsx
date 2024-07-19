import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    width: '100%',
    backgroundColor: 'yellow',
  },
  tick: {
    padding: 5,
    flexDirection: 'row',
  },
  alist: {
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  noteContainer: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    flex: 2,
    width: '100%',
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontSize: 20,
    color: 'rgb(43,43,43)',
    // fontWeight: 'semibold',
  },
  description: {
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: 'rgb(138,138,138)',
    // paddingTop: -8,
    paddingLeft: 46,
    fontWeight: '400',
  },
});

export default styles;
