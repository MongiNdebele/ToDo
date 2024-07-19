import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import View, {SafeAreaView} from 'react-native';

export default function Tick({complete}: {complete: boolean}) {
  return (
    <SafeAreaView>
      {complete ? (
        <Icon
          name="checkbox-multiple-marked-circle"
          size={30}
          color="rgb(0,109,249)"
          style={{paddingRight: 10}}
        />
      ) : (
        <Icon
          name="checkbox-multiple-blank-circle-outline"
          size={30}
          color="rgb(0,109,249)"
          style={{paddingRight: 10}}
        />
      )}
    </SafeAreaView>
  );
}
