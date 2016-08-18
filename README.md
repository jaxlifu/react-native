#react-native学习笔记
##1.问题描述
###1. 无法链接到服务器 
```
com.facebook.react.devsupport.DebugServerException: Could not connect to development server.

URL: http://localhost:8081/index.android.bundle?platform=android&dev=true&hot=false
                                                                
Try the following to fix the issue:
• Ensure that the packager server is running
• Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
• If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
• If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to your machine's IP address and the port of the local dev server - e.g. 10.0.1.1:8081
at com.facebook.react.devsupport.DevServerHelper$1.onFailure(DevServerHelper.java:203)
at com.squareup.okhttp.Call$AsyncCall.execute(Call.java:175)
at com.squareup.okhttp.internal.NamedRunnable.run(NamedRunnable.java:33)
at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112)
at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587)
at java.lang.Thread.run(Thread.java:841)
```   

+ 解决方案  
设置DEV Settings 将DEBUGGING内容设置成为当前IP+端口号,eg:18.18.19.163:8081  
如果上述方法还不生效则可能是packager server未开启, * npm start 
多数情况下在执行```react-native run-android```的时候packager server会自动开启   


###2.无法运行  
``` 
jax$  react-native run-android
Starting JS server...
Building and installing the app on the device (cd android && ./gradlew installDebug...

Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/android-setup.html

jax$ adb devices
List of devices attached
192.168.56.101:5555	device

```     

+ 解决方案  
you might check the permissions on android/gradlew  
they should be ```755``` not ```644```  
run ```chmod 755 android/gradlew``` inside your app root folder  
then run ```react-native run-android  ```
and it should work again.    

###3.Application example has not been registered.
```
 Application example has not been registered. This is either due to a require() error during initialization or failure to call AppRegistry.registerComponent.
```

+ 解决方案
1. Killing all node processes solved this one for me.  
2. 检查是否在index.android.js或index.ios.js中出错
3. 是否在android工程或这ios工程中修改出错,部分情况下可以查看```git diff```,之前出现过一个在android工程中修改的时候  
```
public class MainActivity extends ReactActivity {

    /**
     - Returns the name of the main component registered from JavaScript.
     - This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Gank";//不小心将这个地方这个改了,改成了 return "example";但是我的项目是Gank
    }
}
```

###4.[iOS 0.29.0]TypeError: Network request failed  
```
TypeError: Network request failed
    at XMLHttpRequest.xhr.onerror (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:24437:8)
    at XMLHttpRequest.dispatchEvent (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:9960:15)
    at XMLHttpRequest.setReadyState (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25890:6)
    at XMLHttpRequest.__didCompleteResponse (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25748:6)
    at http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:25823:52
    at RCTDeviceEventEmitter.emit (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:9191:23)
    at MessageQueue.__callFunction (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7279:23)
    at http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7183:8
    at guard (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7131:1)
    at MessageQueue.callFunctionReturnFlushedQueue (http://localhost:8081/index.ios.bundle?platform=ios&dev=true&minify=false:7182:1)
```
@(IOS)[模拟器, https,http]
+ 解决方案
1. 修改`Info.plist` 中的`<key>NSAppTransportSecurity</key>
	<!--See http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/ -->
	<dict>
      <key>NSAllowsArbitraryLoads</key>
      <true/>
    </dict>`  
    部分内容 
2. iOS Simulator -> Reset Contents and Settings... -> Reset
3. 重新运行react-native run-ios



