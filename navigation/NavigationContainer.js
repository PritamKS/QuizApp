import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
// import { NavigationActions } from 'react-navigation';
import { NavigationContainer } from "@react-navigation/native";

// import { ProdcutsNavigator } from "./ShopNavigator";

const NavigationConatiner = (props) => {
  // const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);

  // useEffect(() => {
  //     if (!isAuth) {
  //         navRef.current.dispatch(
  //             NavigationActions.navigate({
  //                 routeName: 'Auth'
  //             })
  //         )
  //     }
  // }, [isAuth])

  return <NavigationConatiner>
      <ProdcutsNavigator />
  </NavigationConatiner>;
};

export default NavigationConatiner;
