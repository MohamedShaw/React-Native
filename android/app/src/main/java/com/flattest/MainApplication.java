package com.flattest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
// import com.reactnativenavigation.NavigationReactPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage; 
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; 
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.wix.interactable.Interactable;

import com.magus.fblogin.FacebookLoginPackage;


import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication  {

  
  @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }

  @Override
    public String getJSMainModuleName() {
    return "index";
    }
     protected List<ReactPackage> getPackages() {
         // Add additional packages you require here
         // No need to add RnnPackage and MainReactPackage
         return Arrays.<ReactPackage>asList(
             // eg. new VectorIconsPackage()
             new VectorIconsPackage(),
             new MapsPackage(),
             new ImagePickerPackage(),
             new RNFirebasePackage(),
             new RNFirebaseMessagingPackage(),
             new RNFirebaseNotificationsPackage(),
             new RNFirebaseDatabasePackage(),
             new RNFirebaseAuthPackage(),
             new RNFirebaseStoragePackage(),
             new LottiePackage(),
             new LinearGradientPackage(),
             new Interactable(),
             new FacebookLoginPackage()


         );
     }

     @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }

}
