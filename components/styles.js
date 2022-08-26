import React from "react";
import { StyleSheet,Dimensions} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:"#f5f6f7",
  },
  title_img:{
    paddingTop:25,    
  },
  title_img_style:{
    width: 370, 
    height: 190,
  },
  header_img:{
    paddingTop: 60,
    alignItems: "center",
  },
  image:{
    width: 230, 
    height: 230,
  },
  title_login:{
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
    color:'#1d1e13',
    padding: 10,
    paddingTop: 100,
  },
  textInput:{
    backgroundColor:"#e5e7eb",
    padding: 15,
    paddingLeft: 75,
    paddingRight: 75,
    borderRadius: 20,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color:"#1d1e13",
  },
  inputlabel:{
    color: "#1d1e13",
    fontSize: 13,
    textAlign: "left",
    paddingLeft: 10,
  },
  leftIcon:{
    left: 15,
    top: 38,
    paddingLeft: 5,
    position: "absolute",
    zIndex: 1,
  },
  rightIcon:{
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
  },
  button:{
    padding: 15,
    backgroundColor: "#26B23D",
    justifyContent:"center",
    borderRadius: 20,
    marginVertical: 5,
    height: 60,
    alignItems:"center",
    paddingLeft: 100,
    paddingRight: 100,
  },
  sinUpButton:{
    padding: 15,
    backgroundColor: "#3B27AF",
    justifyContent:"center",
    borderRadius: 20,
    marginVertical: 5,
    height: 60,
    alignItems:"center",
    flexDirection: "row",
  },
  buttonText:{
    color: "#FFFFFF",
    fontSize: 16,
  },
  extraView:{
    justifyContent:"center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  extraText:{
    justifyContent: "center",
    alignContent: "center",
    color:"#F19B2F",
    fontSize: 15,
  },
  textLink:{
    color: "#FF0606",
    fontSize: 15,
    paddingLeft: 5,
  },
  title:{
    fontSize: 35,
    alignItems: "center",
    fontWeight: "bold",
    color:'#26B23D',
    padding: 10,
    paddingTop: 70,
  },
  subTitle:{
    fontSize: 25,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#1d1e13",
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: "#9ca3af",
    padding: 3,
    paddingLeft: 150,
    paddingRight: 150,
  },

  
  //welcome section
  welcomeContainer:{
    flex: 1,
    width: "100%",
    alignItems:"center",
    padding: 25,
    paddingTop: 10,
    justifyContent: "center",
  },
  wlcomeTitle:{
    fontSize: 55,
    alignItems: "center",
    fontWeight: "bold",
    color:'#1d1e13',
    padding: 8,
  },
  welcomeSubTitle:{
    fontSize: 18,
    marginBottom: 5,
    letterSpacing: 1,
    color: "#1d1e13",
  },
  avatar:{
    width: 150,
    height: 150,
    margin: "auto",
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    marginBottom: 10,
    marginTop: 10,
  },
  welcomeImg:{
    height: 250,
    width: 375,
  },
  welcomeStyle:{
    backgroundColor:"#F9E346",
    alignItems: 'center',
  },

    
// navigation tab 
  navigationTab1:{
    flexDirection:"row",
  },
  navigationTab2:{
    flexDirection:"row",
  },
  navigationTab3:{
    flexDirection:"row",
  },
  tabNavigationNotification:{
    flex:1, 
    backgroundColor: "#1033E0",
    height: 95,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationDashbord:{
    flex:1, 
    backgroundColor: "#6610E0",
    height: 95,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationProfile:{
    flex:1, 
    backgroundColor: "#E0106F",
    height: 95,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationMap:{
    flex:1, 
    backgroundColor: "#DD7812",
    height: 95,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  tabNavigationsShops:{
    flex:1, 
    backgroundColor: "#14A532",
    height: 90,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  

  //home style
  home_background:{
    height: 500,
    width: 375,
  },
  homeHeader_img:{
    paddingTop:60,
    alignItems:"center",
  },
  homeNav:{
    fontSize: 20,
    fontWeight: "bold",
    color:'#ffff',
    width:375,
    padding: 10,
    textAlign: "center",
  },


  // notification styles
  notification:{
      backgroundColor:"#c1c7d3",
  },
  notif_title:{
    fontSize: 50,
    alignItems: "center",
    fontWeight: "bold",
    color:'#110A0C',
    padding: 10,
    paddingTop: 90,
    textAlign: "center",
  },
  newNotifications1:{
    fontSize: 25,
    alignItems: "center",
    fontWeight: "bold",
    color:'green',
    padding: 10,
    paddingTop: 10,
    textAlign: "center",
  },
  newNotifications2:{
    fontSize: 25,
    alignItems: "center",
    fontWeight: "bold",
    color:'red',
    padding: 10,
    paddingTop: 10,
    textAlign: "center",
  },

  
  //Dashbord section style
  dashboardHead:{
      paddingTop:50,
      paddingLeft:20,
      flexDirection: "row",
  },
  Dashbord_background:{
    backgroundColor: "#08FFFF",
    height: "100%",
    width: "100%",
  },
  listSection:{
    width:"80%",
    alignContent: "center",
    padding:30,
    backgroundColor:"#9ca3af",
    borderRadius: 70,
    marginHorizontal:35,
    marginBottom: 10,
  },
  listTitle:{
    color: "#0F912A",
    fontSize:45,
    fontWeight: "bold",
    textAlign: "center",
  },
  listHeader:{
    color: "#110A0C",
    fontSize:35,
    fontWeight: "bold",
  },
  listItems:{
    fontSize:25,
    justifyContent:"center",
    alignContent: "center",
    color: "#DD1212",
    paddingLeft: 40,
    fontWeight: "bold",
  },
  mapDashbord:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    width:230,
    height:400,
  },


  //Map section style
  mapContainer:{
    paddingTop:50,
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },


  //Profile style
  profileHeadTitle:{
    fontSize:16,
    fontWeight: "bold",
    padding:5,
  },
  profileSubTitle:{
    textAlign:"left",
    fontSize: 22,
    paddingBottom:10,
  },


  //Details selection section style
  gasIcon:{
    height:250,
    width:250,
    borderRadius:100,
  },
  detailsSelection1:{
    flex:1, 
    backgroundColor: "#1033E0",
    height: 95,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },
  detailsSelection2:{
    flex:1, 
    backgroundColor: "#FBBB17",
    height: 95,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 20,
  },

  
//Details section common style
  detailTitle:{
    fontSize: 30,
    alignItems: "center",
    fontWeight: "bold",
    color:'#ffff',
    paddingTop: 28,
  },  
  searchSection:{
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox:{
    width: "70%",
    backgroundColor: "#9ca3af",
    height: 50,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  searchIcon:{
    paddingLeft:15,
  },
  detailsTab1:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingBottom:60,
  },
  detailsTab2:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingBottom:60,
  },
  detailsTab3:{
    flexDirection:"row",
    justifyContent: "space-between",
    paddingBottom:60,
  },
  stations:{
    flex:1, 
    backgroundColor: "green",
    height: 110,
    width:110,
    alignItems:"center",
    borderRadius: 20,
    justifyContent:"center"
  },
  stationDetails:{
    fontSize: 20,
    fontWeight: "bold",
    color:'#ffff',
    padding: 10,
    textAlign: "center",
  },
  indetails:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold,",
    color:"#ffff",
  },



  //Litro section
  Litro_background:{
    backgroundColor: "#1033E0",
    height: "100%",
    width: "100%",
  },

  //Laugfs section
  Laugfs_background:{
    backgroundColor: "#af821e",
    height: "100%",
    width: "100%",
  },


});

export default styles;

