import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';

const PROFILE_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <SafeAreaView className='flex-1 bg-secondary/30'>
      <ScrollView className='flex-1'>
      <View className='flex-1 p-6 gap-4'>
        {/* Profile Header */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='items-center pb-4'>
            <Avatar alt="User Avatar" className='w-32 h-32'>
              <AvatarImage source={{ uri: PROFILE_AVATAR_URI }} />
              <AvatarFallback>
                <Text className='text-2xl'>RS</Text>
              </AvatarFallback>
            </Avatar>
            <View className='p-2' />
            <CardTitle className='text-center text-2xl'>Rick Sanchez</CardTitle>
            <CardDescription className='text-center text-base'>
              rick.sanchez@citadel.com
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Personal Information */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-muted-foreground'>Full Name</Text>
              <Text className='font-semibold'>Rick Sanchez</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-muted-foreground'>Profession</Text>
              <Text className='font-semibold'>Scientist</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-muted-foreground'>Dimension</Text>
              <Text className='font-semibold'>C-137</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-muted-foreground'>Age</Text>
              <Text className='font-semibold'>70</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-muted-foreground'>Species</Text>
              <Text className='font-semibold'>Human</Text>
            </View>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Activity Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <View className='flex-row justify-around'>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-blue-600'>127</Text>
                <Text className='text-muted-foreground text-sm'>Inventions</Text>
              </View>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-green-600'>89</Text>
                <Text className='text-muted-foreground text-sm'>Adventures</Text>
              </View>
              <View className='items-center'>
                <Text className='text-2xl font-bold text-purple-600'>42</Text>
                <Text className='text-muted-foreground text-sm'>Portals</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Actions */}
        <View className='gap-3'>
          <Button
            variant={isEditing ? 'default' : 'outline'}
            onPress={() => setIsEditing(!isEditing)}
          >
            <Text>{isEditing ? 'Save Changes' : 'Edit Profile'}</Text>
          </Button>
          <Button variant='outline'>
            <Text>Share Profile</Text>
          </Button>
        </View>        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
