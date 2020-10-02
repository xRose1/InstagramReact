import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    console.log(this.props.item);
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageSelection =
      this.props.item % 2 == 0
        ? "https://lh3.googleusercontent.com/mYoLOyTRBLE3WH794AZrCam8TbCbuRwWMP_8jWpPfO_yOFh3PntwYOAFFA6xkzDPYhQKgiOlM21tj27KRXpLkKoi"
        : "https://lh3.googleusercontent.com/NmTQ_Do5hEBru8zyyXEgHUqHYJPxJVgbAHL_NZteJs5XiPRdWEB1bvxDJgNComNGEhGSEj-wAaLcVCJBcRCYtkvuRaE";
    const imageUri = imageSelection + "=s" + imageHeight + "-c";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

    return (
      <View style={{ flex: 1, width: 100 + "%" }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/sDdl0aIJ5vAiubqq8ALw1o8_XbdmXEsEi80iu3AHSWGV2nRUTSm8mTim2OC0BtJHBaI33-hRIJQixCRPK1pTo_K9dQ"
              }}
            />
            <Text style={{ marginLeft: 10 }}>RyanAByrne</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.likeToggled();
          }}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            style={[
              styles.icon,
              { height: 45, width: 45, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />
          <Image
            style={[styles.icon, { height: 36, width: 36 }]}
            source={config.images.bubbleIcon}
          />
          <Image
            resizeMode="stretch"
            style={[styles.icon, { height: 50, width: 40 }]}
            source={config.images.arrowIcon}
          />
        </View>
        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { height: 30, width: 30 }]}
            source={config.images.heartIcon}
          />
          <Text>128 Likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 5
  }
});

export default Post;
