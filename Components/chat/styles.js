import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
       paddingLeft:20,
       paddingRight:20,
       alignItems:'center',
       backgroundColor:'#ffffff',

    },
    card:{
        width:'100%'
    },
    userInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    imgwrapper:{
        paddingBottom:15,
        paddingTop:15,
    },
    UserImg:{
        width:50,
        height:50,
        borderRadius:25,
    },
    TextSection:{
        flexDirection:'column',
        justifyContent:'center',
        padding:15,
        paddingLeft:0,
        marginLeft:10,
        width:300,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
    },
    UserInfoText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5,

    },
    UserName:{
        fontSize:14,
        fontWeight:'bold',
        fontFamily:'Lato-Regular'
    },
    PostTime:{
        fontSize:12,
        color:'#666',
        fontFamily:'Lato-Regular',
    },
    MessageText:{
        fontSize:14,
        color:'#333',
    }
})

export {style}

// import styled from 'styled-components';

// export const Container = styled.View`
//   flex: 1;
//   padding-left: 20px;
//   padding-right: 20px;
//   align-items: center;
//   background-color: #ffffff;
// `;

// export const Card = styled.TouchableOpacity`
//   width: 100%;
// `;

// export const UserInfo = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const UserImgWrapper = styled.View`
//   padding-top: 15px;
//   padding-bottom: 15px;
// `;

// export const UserImg = styled.Image`
//   width: 50px;
//   height: 50px;
//   border-radius: 25px;
// `;

// export const TextSection = styled.View`
//   flex-direction: column;
//   justify-content: center;
//   padding: 15px;
//   padding-left: 0;
//   margin-left: 10px;
//   width: 300px;
//   border-bottom-width: 1px;
//   border-bottom-color: #cccccc;
// `;

// export const UserInfoText = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 5px;
// `;

// export const UserName = styled.Text`
//   font-size: 14px;
//   font-weight: bold;
//   font-family: 'Lato-Regular';
// `;

// export const PostTime = styled.Text`
//   font-size: 12px;
//   color: #666;
//   font-family: 'Lato-Regular';
// `;

// export const  = styled.Text`
//   font-size: 14px;
//   color: #333333;
// `;