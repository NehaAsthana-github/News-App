import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import Smile from '../assets/smily.jpeg'
const CommonScreen = ({route}) => {

  const {item}=route.params
  return (
    <View>
      {

item.urlToImage?<Image source={{ uri: item.urlToImage }} style={{ width: "100%", height: "37%", borderRadius: 5 }} />:<Image source={Smile} style={{ width: "100%", height: "37%", borderRadius: 5 }} resizeMode='contain'/>
}
<View style={{height:75,elevation:1,backgroundColor:'white',width:'85%',alignSelf:'center',marginTop:20,borderRadius:5}}>
     <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={"yellow"} >
      <Text style={{fontSize:22,fontWeight:'bold',padding:13,textAlign:'justify'}}>{item.title}</Text>
      </ScrollView>
      </View>
      
      <View style={{padding:25}}>
        

          {
item.description?<View style={{height: '61%'}}><ScrollView><Text style={{textAlign:'justify',fontSize:20,color:'gray'}}>{item.description}</Text>
<Text style={{textAlign:'justify',fontSize:20,color:'gray',marginTop:7}}>{item.content}</Text></ScrollView></View>:<View style={{height: '61%'}}><ScrollView><Text style={{textAlign:'justify',fontSize:20,color:'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium illum esse qui incidunt totam consequatur id a modi dolores natus. Sit quaerat fugiat doloremque, eaque corrupti numquam saepe autem possimus iusto perspiciatis beatae vitae nam eius. Repudiandae, non optio minima aperiam reprehenderit consequatur. Natus distinctio asperiores vero iure officiis id, totam nesciunt, architecto quaerat, alias quidem perspiciatis? Nulla impedit, quis libero aliquid voluptate vel eligendi harum corrupti odio veniam quod illum eaque similique. Cumque autem sed minus reprehenderit at qui voluptatum dignissimos illum maiores sint tenetur quibusdam facere itaque unde ducimus laudantium recusandae dolorem fuga quia saepe quidem, neque quos natus aspernatur. Sapiente in quisquam atque iure? Facere, quibusdam soluta! Cum veritatis voluptatum eos deleniti, dolor, illum quas animi eveniet architecto corrupti quis consequatur dolore? Praesentium ut sit, ullam voluptates quisquam officiis perferendis hic quia quis accusamus. Soluta doloribus magni, ea distinctio autem officiis natus libero nihil quae accusantium maxime.</Text></ScrollView></View>
          }
    

      </View>
    </View>
  )
}

export default CommonScreen