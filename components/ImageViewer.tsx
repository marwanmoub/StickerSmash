import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
};

const ImageViewer = ({ imgSource }: Props) => {
  return <Image source={imgSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
