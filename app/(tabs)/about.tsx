import * as React from 'react';
import { View, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';

export default function AboutScreen() {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView className='flex-1 bg-secondary/30'>
      <ScrollView className='flex-1'>
      <View className='flex-1 p-6 gap-4'>
        {/* App Info */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='items-center pb-4'>
            <View className='w-20 h-20 bg-blue-600 rounded-2xl items-center justify-center mb-4'>
              <Text className='text-white text-3xl font-bold'>C</Text>
            </View>
            <CardTitle className='text-center text-2xl'>COF App</CardTitle>
            <CardDescription className='text-center'>
              Version 1.0.0
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text className='text-center text-muted-foreground'>
              A modern React Native application built with Expo Router, featuring beautiful UI components and smooth animations.
            </Text>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent className='gap-3'>
            <View className='flex-row items-center gap-3'>
              <View className='w-2 h-2 bg-blue-600 rounded-full' />
              <Text>Tab-based navigation with smooth transitions</Text>
            </View>
            <View className='flex-row items-center gap-3'>
              <View className='w-2 h-2 bg-green-600 rounded-full' />
              <Text>Dark and light theme support</Text>
            </View>
            <View className='flex-row items-center gap-3'>
              <View className='w-2 h-2 bg-purple-600 rounded-full' />
              <Text>Modern UI components with NativeWind</Text>
            </View>
            <View className='flex-row items-center gap-3'>
              <View className='w-2 h-2 bg-orange-600 rounded-full' />
              <Text>Animated progress indicators</Text>
            </View>
            <View className='flex-row items-center gap-3'>
              <View className='w-2 h-2 bg-red-600 rounded-full' />
              <Text>Cross-platform compatibility</Text>
            </View>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Built With</CardTitle>
            <CardDescription>Technologies used in this project</CardDescription>
          </CardHeader>
          <CardContent className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <Text className='font-semibold'>React Native</Text>
              <Text className='text-muted-foreground'>0.79.4</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-semibold'>Expo</Text>
              <Text className='text-muted-foreground'>~53.0.9</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-semibold'>Expo Router</Text>
              <Text className='text-muted-foreground'>~5.1.1</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-semibold'>NativeWind</Text>
              <Text className='text-muted-foreground'>^4.1.23</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-semibold'>TypeScript</Text>
              <Text className='text-muted-foreground'>^5.8.3</Text>
            </View>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Support & Feedback</CardTitle>
            <CardDescription>Get help or share your thoughts</CardDescription>
          </CardHeader>
          <CardContent className='gap-3'>
            <Button 
              variant='outline'
              onPress={() => handleOpenLink('https://github.com')}
            >
              <Text>Visit GitHub Repository</Text>
            </Button>
            <Button 
              variant='outline'
              onPress={() => handleOpenLink('mailto:support@example.com')}
            >
              <Text>Contact Support</Text>
            </Button>
            <Button variant='outline'>
              <Text>Rate This App</Text>
            </Button>
            <Button variant='outline'>
              <Text>Report a Bug</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Legal */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Legal</CardTitle>
          </CardHeader>
          <CardContent className='gap-3'>
            <Button variant='outline'>
              <Text>Privacy Policy</Text>
            </Button>
            <Button variant='outline'>
              <Text>Terms of Service</Text>
            </Button>
            <Button variant='outline'>
              <Text>Open Source Licenses</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Copyright */}
        <View className='items-center py-4'>
          <Text className='text-muted-foreground text-sm text-center'>
            © 2025 COF App. All rights reserved.
          </Text>
          <Text className='text-muted-foreground text-xs text-center mt-1'>
            Made with ❤️ using React Native & Expo
          </Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
