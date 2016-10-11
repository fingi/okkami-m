cd android
gradlew assembleRelease
cd ..
react-native run-android --variant=release
cd android/app/build/outputs/apk/
explorer .
