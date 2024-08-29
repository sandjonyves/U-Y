import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from './Modal'
import Signin from '@/app/(auth)/Sign-in'

type PROPS_COMMANDE ={
    isOpen:boolean,
}

const Commande = ({isOpen}:PROPS_COMMANDE) => {
  return (
    <View>
     <Modal
     isOpen={isOpen}
     >
       <View>
            <TouchableOpacity>
                <Text>
                    X
                </Text>
            </TouchableOpacity>
       </View>
     </Modal>
    </View>
  )
}

export default Commande