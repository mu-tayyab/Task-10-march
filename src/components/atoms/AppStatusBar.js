import React from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';

import colors from '../../theme/color';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

function AppStatusBar({color, translucent, barStyle, hidden, ...props}) {
  return (
    <>
      <StatusBar
        backgroundColor={color ? color : colors.primary}
        barStyle={barStyle ? barStyle : 'dark-content'}
        translucent={translucent ? translucent : false}
      />
      {/* change top bar color for ios */}
      <SafeAreaView
        style={{flex: 0, backgroundColor: color ? color : colors.primary}}
      />

      {/* change bottom bar color for ios */}
      <SafeAreaView
        style={{flex: 1, backgroundColor: color ? color : colors.primary}}>
        <View style={styles.mainContainer}>{props.children}</View>
      </SafeAreaView>
    </>
  );
}

export default React.memo(AppStatusBar);
const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
