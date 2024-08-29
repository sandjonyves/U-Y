import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link ,router} from 'expo-router'
import CustomNavbar from '@/components/NavBar'
import Restaurant1 from '@/components/Restaurant1'
import CustomButton from '@/components/CustomButton'

const Restaurant = () => {
  const [changePage,setChangePage] = useState<boolean>(true)

  return (

    
    <View className='mt-6'>
      <CustomNavbar setChangePage={setChangePage} ></CustomNavbar>
      {/* <Text>Restaurant</Text>
      <Link className='mt-12 bg-red-400' href={'/Sign-in'}>ihdjdhjhsajhdjashdjash </Link>
      <TouchableOpacity
      onPress={()=> console.log(changePage)}
      >
        <Text>
          got to Order
        </Text>
      </TouchableOpacity> */}

      {
        changePage?<Restaurant1></Restaurant1>:null
      }
                     <View className='mt-2'>
                     <CustomButton padding={2}  variant='secondary' label='Valider votre commande'></CustomButton>
                     </View>

    </View>
  )
}

export default Restaurant