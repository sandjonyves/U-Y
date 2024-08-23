import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form'


type FormData = {
    username: String,
    matricule: String,
    password: string,
    confirmPassword: String

}

const Signin = () => {
    const { handleSubmit, control } = useForm<FormData>()

    const verifPassword = (data:FormData)=>{
        return data.password ===data.confirmPassword
    }
    const onSubmit = (data: FormData) => {
        if (verifPassword){
            Alert.alert('ok')
        }else{
            Alert.alert('bard')
        }
       
        console.log(data)
    }
    return (
        // <KeyboardAvoidingView
        // style={{ flex: 1 }}
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // >
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0} // ajuste la valeur selon tes besoins
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar style='light' />
                <Animated.Image entering={FadeInUp.delay(200).duration(3000)} className="h-[90%] w-full absolute" source={require('@/assets/images/background.png')} />


                <View className='flex-row justify-around w-full absolute'>
                    <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-[110] w-[43]' source={require('@/assets/images/light.png')} />
                    <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-40 w-40 ' source={require('@/assets/images/logo.png')} />
                    <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-[160] w-[65]' source={require('@/assets/images/light.png')} />

                </View>

                <View className='h-full w-full flex flex-col gap-y-20 mt-24'>
                    <View className='flex items-center'>
                        <Animated.Text entering={FadeInUp.delay(1000).springify()} className='text-white font-bold tracking-wider text-2xl'>
                            Signin
                        </Animated.Text>
                    </View>

                    <View className='flex items-center mx-4 space-y-2'>

                        <Controller
                            control={control}
                            name="usename"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Animated.View
                                    entering={FadeInDown.duration(1000).springify()}
                                    className='bg-black/5 p-3 rounded-2xl w-full'
                                >
                                    <TextInput
                                        placeholder='username'
                                        placeholderTextColor={'gray'}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </Animated.View>
                            )}
                        />

                        <Controller
                            control={control}
                            name="matricule"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Animated.View
                                    entering={FadeInDown.duration(1000).springify()}
                                    className='bg-black/5 p-3 rounded-2xl w-full'
                                >
                                    <TextInput
                                        placeholder='Matricule'
                                        placeholderTextColor={'gray'}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </Animated.View>
                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 mt-2  p-2 rounded-2xl w-full'>
                                    <TextInput
                                        placeholder='Password'
                                        placeholderTextColor={'gray'}
                                        secureTextEntry={true}
                                    />
                                </Animated.View>
                            )}
                        />
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field: { onChange, onBlur, value } }) => (

                                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 mt-2 p-2 rounded-2xl w-full'>
                                    <TextInput
                                        placeholder='Confirm password'
                                        placeholderTextColor={'gray'}
                                        secureTextEntry={true}
                                    />
                                </Animated.View>
                            )}
                        />




                        <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full'>
                            <TouchableOpacity className='flex items-center p-4 rounded-full bg-sky-500 w-full'>
                                <Text className='text-white text-bold text-xl'
                                    onPress={handleSubmit(onSubmit)}
                                >
                                    Signin
                                </Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <View className='flex-row gap-x-3 justify-center'>
                            <Text>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity onPress={() => router.push('/Sign-up')}>
                                <Text className='text-sky-400'>
                                    Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );

}

export default Signin;