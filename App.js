import React from "react";
import { Stylesheet, Text, View } from "react-native";

const Flex = () => {
return(
<View style={[styles.container, {
flexDirection: "column"
    }]}>
<View style={{ flex: 1, backgroudColor: "red"}} />
<View style={{ flex: 1, backgroudColor: "darkorange"}} />
<View style={{ flex: 1, backgroudColor: "green"}} />
</View>
);
};

const styles = Stylesheet.create({

container: {
flex: 1,
padding: 20, 
},
});

export default Flex;