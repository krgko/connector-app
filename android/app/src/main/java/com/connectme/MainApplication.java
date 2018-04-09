package com.connectme;

import android.app.Application;
import com.apptentive.android.sdk.reactlibrary.RNApptentivePackage;
import com.surajit.rnrg.RNRadialGradientPackage;
import com.facebook.react.ReactApplication;
import com.rnfingerprint.FingerprintAuthPackage;
import com.horcrux.svg.SvgPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import io.sentry.RNSentryPackage;
import io.branch.rnbranch.RNBranchPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import br.com.classapp.RNSensitiveInfo.RNSensitiveInfoPackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.connectme.rnindy.RNIndyPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;


import com.BV.LinearGradient.LinearGradientPackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.wix.interactable.Interactable;
import com.oblador.vectoricons.VectorIconsPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FingerprintAuthPackage(),
            new SvgPackage(),
            new RNFetchBlobPackage(),
            new RCTCameraPackage(),
            new RNSentryPackage(MainApplication.this),
            new RNBranchPackage(),
            new VectorIconsPackage(),
            new RNSensitiveInfoPackage(),
            new FIRMessagingPackage(),
            new MainReactPackage(),
            new SplashScreenReactPackage()
            new LinearGradientPackage(),
            new ReactNativeOneSignalPackage(),
            new Interactable(),
            new VectorIconsPackage(),
            new RNIndyPackage(),
            new RNRadialGradientPackage(),
            new RNApptentivePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
