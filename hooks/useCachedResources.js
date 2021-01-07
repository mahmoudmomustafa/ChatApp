import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Mansalva_400Regular } from '@expo-google-fonts/mansalva';
import { Redressed_400Regular } from '@expo-google-fonts/redressed';
import { Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
export default function useCachedResources() {
   const [isLoadingComplete, setLoadingComplete] = useState(false);

   // Load any resources or data that we need prior to rendering the app
   useEffect(() => {
      async function loadResourcesAndDataAsync() {
         try {
            SplashScreen.preventAutoHideAsync();

            // Load fonts
            await Font.loadAsync({
               ...Ionicons.font,
               'Mansalva_Regular': Mansalva_400Regular,
               'Redressed_Regular': Redressed_400Regular,
               'Roboto_Thin': Roboto_100Thin,
               'Roboto_Light': Roboto_300Light,
               'Roboto_Regular': Roboto_400Regular,
               'Roboto_Black': Roboto_700Bold,
            });
         } catch (e) {
            // We might want to provide this error information to an error reporting service
            console.warn(e);
         } finally {
            setLoadingComplete(true);
            SplashScreen.hideAsync();
         }
      }

      loadResourcesAndDataAsync();
   }, []);

   return isLoadingComplete;
}
