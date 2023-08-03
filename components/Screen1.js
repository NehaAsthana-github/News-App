import { View, Text, Dimensions, FlatList, Image, ScrollView, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Smile from '../assets/smily.jpeg'
const { height, width } = Dimensions.get('window')
import axios from 'axios';
import moment from 'moment';

const Screen1 = ({navigation,source}) => {

    const [data, setData] = useState([1, 1, 1, 1, 1, 1])
    const [currentidx, setCurrentidx] = useState(0)
    const [apidata, setApiData] = useState()
    const resfun = useRef(null)

    const apiUrl = 
    source? `https://newsapi.org/v2/top-headlines?country=in&category=${source}&apiKey=652bd15beb184f9dba95271018ad72ec`:'https://newsapi.org/v2/top-headlines?country=in&apiKey=652bd15beb184f9dba95271018ad72ec'

    
    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setApiData(response.data.articles);

        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };
    console.log(apidata)
    useEffect(() => {
        fetchData();
    }, []);


    const ViewableItemsscreen = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentidx(viewableItems[0].index)
        }
    })

    const listItem = ({ item, index }) => (
        <Pressable onPress={()=>navigation.navigate("Details",{item})}>

        <View style={{ flex: 1, height: '100%', elevation: 7, backgroundColor: 'white', height: 95, flexDirection: 'row', padding: 10, marginTop: 9, width: '95%', alignSelf: 'center', borderRadius: 7 }}>
{

         item.urlToImage?<Image source={{ uri: item.urlToImage }} style={{ width: "20%", height: "100%", borderRadius: 5 }} />:<Image source={Smile} style={{ width: "20%", height: "100%", borderRadius: 5 }} />
}
            <View >
                <View style={{ width: '80%', alignSelf: 'center' }}>
                    <Text numberOfLines={2} style={{ fontSize: 17, fontWeight: 'bold', marginLeft: -15 }}>{item.title}</Text>
                </View>
                <Text numberOfLines={1} style={{ padding: 10, color: 'gray', fontSize: 13, marginTop: 5 }}>{moment(item.publishedAt).format('HH:mm:ss')}</Text>
            </View>
        </View>
        </Pressable>
    )


    return <>

        <View >
            <View style={{ height: height / 2 - 100, marginTop: -29 }}>
                <FlatList
                    data={apidata}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    onViewableItemsChanged={ViewableItemsscreen.current}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}>
                                <Pressable
                                    style={{ width: '90%', height: '70%' }}>
                                    <Image source={{ uri: item.urlToImage }}
                                        style={{ width: "100%", height: "80%", borderRadius: 10 }}
                                        resizeMode='contain'
                                    />

                                </Pressable>

                            </View>
                        )
                    }}


                />
            </View>

            <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center', marginTop: 7 }}>

                {data.map((item, index) => {
                    return (

                        <View
                            style={{
                                width: index === currentidx ? 13 : 8, height: index === currentidx ? 13 : 8, borderRadius: index === currentidx ? 6 : 4,
                                backgroundColor: index === currentidx ? 'gray' : 'orange', marginLeft: 5
                            }}
                        >

                        </View>
                    )
                })}
            </View>

        </View>

        {apidata && (
            <FlatList
                data={apidata}
                renderItem={listItem}
                keyExtractor={(item, index) => index.toString()}
            />
        )}


    </>
}

export default Screen1