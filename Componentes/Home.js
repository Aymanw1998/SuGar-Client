import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { getEnforcing } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import axios from "axios";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Home = ({ navigation, route }) => {
  //const token = route.params;
  const [user, setUser] = useState({});
  const [listg, setListG] = useState([]);
  const [listd, setListD] = useState([]);
  const [currG, setCurG] = useState(0);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbUBnbWFpbC5jb20iLCJfaWQiOiI2MDg0MzgzMTlmOGIwODAwMTVjYmFhZjgiLCJpYXQiOjE2MTk2MTA1NjAsImV4cCI6MTYxOTc5MDU2MH0.FvdRauEdGM3CcdBy1heiiIawIZ7FW2flI_j1iv4J528";

  React.useEffect(() => {
    getUser();
    getCurrg();
    getDalyg();
  }, []);

  const getCurrg = () => {
    axios({
      method: "GET",
      url: "https://glucosesugar.herokuapp.com/glucoselevels",
      headers: {
        "x-auth-token": token,
      },
    })
      .then((data) => {
        console.log("then data");
        console.log(data.data);
        setCurG(data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getDalyg = () => {
    axios({
      method: "GET",
      url: "https://glucosesugar.herokuapp.com/glucoselevels/dayly",
      headers: {
        "x-auth-token": token,
      },
    })
      .then((data) => {
        console.log("then data");
        console.log(data.data);
        let list = data.data.map((element) => element.glucose_level);
        //console.log("list", list);
        setListG(list);
        let list1 = data.data.map((element) =>
          element.date_time.substring(11, 16)
        );
        setListD(list1);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getUser = () => {
    axios({
      method: "GET",
      url: "https://glucosesugar.herokuapp.com/users/user",
      headers: {
        "x-auth-token": token,
      },
    })
      .then((data) => {
        console.log("then data");
        console.log(data.data);
        setUser(data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  console.log("cuur ", currG);
  console.log("listg ", listg);
  console.log("listd ", listd);

  return (
    <View>
      <Text style={styles.curent}> {currG.glucose_level}</Text>

      <LineChart
        data={{
          labels: ["12:43", "14:40", "16:80", "20:80"],
          datasets: [
            {
              data: [112, 140, 180, 137],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      {/* 
      <View style={styles.buttons}>
        <Button> Dayly </Button>
        <Button> Weekly </Button>
        <Button> Monthly </Button>
        <Button> Anual </Button>
      </View> */}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  curent: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    left: "35%",
    marginTop: 20,
  },
  body: {
    flex: 1,
    backgroundColor: "#E0FFFF",
  },
  menuicon: {
    marginTop: "-10%",
    marginLeft: "10%",
    width: 40,
    height: 40,
  },
  footer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
  },
  Title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  meta_Title: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  image: {
    marginTop: "10%",
    marginLeft: "60%",
    width: 100,
    height: 45,
  },
  usericon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  inputView: {
    backgroundColor: "#87CEFA",
    borderRadius: 20,
    width: "70%",
    height: 40,
    marginBottom: 5,
  },

  TextInput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
