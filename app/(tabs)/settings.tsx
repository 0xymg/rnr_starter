import * as React from 'react';
import { View, ScrollView, Switch } from 'react-native';
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
import { ThemeToggle } from '~/components/ThemeToggle';

export default function SettingsScreen() {
  const [notifications, setNotifications] = React.useState(true);
  const [analytics, setAnalytics] = React.useState(false);
  const [autoSync, setAutoSync] = React.useState(true);
  const [biometrics, setBiometrics] = React.useState(false);

  return (
    <SafeAreaView className='flex-1 bg-secondary/30'>
      <ScrollView className='flex-1'>
      <View className='flex-1 p-6 gap-4'>
        {/* Appearance */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize your app experience</CardDescription>
          </CardHeader>
          <CardContent className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <View className='flex-1'>
                <Text className='font-semibold'>Theme</Text>
                <Text className='text-muted-foreground text-sm'>
                  Switch between light and dark mode
                </Text>
              </View>
              <ThemeToggle />
            </View>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <View className='flex-1'>
                <Text className='font-semibold'>Push Notifications</Text>
                <Text className='text-muted-foreground text-sm'>
                  Receive notifications about updates
                </Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
              />
            </View>
            <View className='flex-row justify-between items-center'>
              <View className='flex-1'>
                <Text className='font-semibold'>Analytics</Text>
                <Text className='text-muted-foreground text-sm'>
                  Help improve the app with usage data
                </Text>
              </View>
              <Switch
                value={analytics}
                onValueChange={setAnalytics}
              />
            </View>
          </CardContent>
        </Card>

        {/* Data & Sync */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Data & Sync</CardTitle>
            <CardDescription>Manage your data and synchronization</CardDescription>
          </CardHeader>
          <CardContent className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <View className='flex-1'>
                <Text className='font-semibold'>Auto Sync</Text>
                <Text className='text-muted-foreground text-sm'>
                  Automatically sync data across devices
                </Text>
              </View>
              <Switch
                value={autoSync}
                onValueChange={setAutoSync}
              />
            </View>
            <Button variant='outline'>
              <Text>Backup Data</Text>
            </Button>
            <Button variant='outline'>
              <Text>Clear Cache</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Security</CardTitle>
            <CardDescription>Protect your account and data</CardDescription>
          </CardHeader>
          <CardContent className='gap-4'>
            <View className='flex-row justify-between items-center'>
              <View className='flex-1'>
                <Text className='font-semibold'>Biometric Login</Text>
                <Text className='text-muted-foreground text-sm'>
                  Use fingerprint or face ID to unlock
                </Text>
              </View>
              <Switch
                value={biometrics}
                onValueChange={setBiometrics}
              />
            </View>
            <Button variant='outline'>
              <Text>Change Password</Text>
            </Button>
            <Button variant='outline'>
              <Text>Two-Factor Authentication</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Account */}
        <Card className='p-6 rounded-2xl'>
          <CardHeader className='pb-4'>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className='gap-3'>
            <Button variant='outline'>
              <Text>Export Data</Text>
            </Button>
            <Button variant='outline'>
              <Text>Privacy Policy</Text>
            </Button>
            <Button variant='outline'>
              <Text>Terms of Service</Text>
            </Button>
            <Button variant='destructive'>
              <Text>Delete Account</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
