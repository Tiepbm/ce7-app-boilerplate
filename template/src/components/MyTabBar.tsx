import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tabbar from 'components/TabBarInteraction/TabBar';

function MyTabBar(props: any) {
  const {state, descriptors, navigation} = props;
  const [tabs, setTabs] = useState<any>([]);
  useEffect(() => {
    let temp: any = [];
    state.routes.map((route: any, index: number) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      // const isFocused = state.index === index;
      let name = getName(label);
      let icon: string = getIcon(label);
      temp.push({
        name: label,
        title: name,
        activeIcon: <Icon name={icon} color="#ffffff" size={25} />,
        inactiveIcon: <Icon name={icon} color="#ffffff" size={25} />,
      });
    });
    setTabs(temp);
  }, [state]);
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return 'home';
      case 'Notification':
        return 'notifications';
      case 'Account':
        return 'account-circle';
      case 'Settings':
        return 'settings';
      default:
        return '';
    }
  };
  const getName = (name: string) => {
    switch (name) {
      case 'Home':
        return 'Trang chủ';
      case 'Notification':
        return 'Thông báo';
      case 'Account':
        return 'Tài khoản';
      case 'Settings':
        return 'Cài đặt';
      default:
        return '';
    }
  };
  return (
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground="#6699ff"
      tabBarBackground="#fff"
      activeTabBackground="#6699ff"
      labelStyle={{color: '#ffffff', fontWeight: '600', fontSize: 11}}
      onTabChange={tab => {
        navigation.navigate({name: tab.name, merge: true});
      }}
    />
  );
  // return (
  //   <View style={{flexDirection: 'row'}}>
  //     {state.routes.map((route: any, index: number) => {
  //       const {options} = descriptors[route.key];
  //       const label =
  //         options.tabBarLabel !== undefined
  //           ? options.tabBarLabel
  //           : options.title !== undefined
  //           ? options.title
  //           : route.name;
  //
  //       const isFocused = state.index === index;
  //
  //       const onPress = () => {
  //         const event = navigation.emit({
  //           type: 'tabPress',
  //           target: route.key,
  //           canPreventDefault: true,
  //         });
  //
  //         if (!isFocused && !event.defaultPrevented) {
  //           // The `merge: true` option makes sure that the params inside the tab screen are preserved
  //           navigation.navigate({name: route.name, merge: true});
  //         }
  //       };
  //
  //       const onLongPress = () => {
  //         navigation.emit({
  //           type: 'tabLongPress',
  //           target: route.key,
  //         });
  //       };
  //
  //       return (
  //         <TouchableOpacity
  //           accessibilityRole="button"
  //           accessibilityState={isFocused ? {selected: true} : {}}
  //           accessibilityLabel={options.tabBarAccessibilityLabel}
  //           testID={options.tabBarTestID}
  //           onPress={onPress}
  //           onLongPress={onLongPress}
  //           style={{flex: 1}}>
  //           <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
  //         </TouchableOpacity>
  //       );
  //     })}
  //   </View>
  // );
}
export default MyTabBar;
