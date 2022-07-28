# maps_using_react-native-map-clustering
React Native map with address using latitude and longitude


Installation Steps

1. create-react-native-app maps_with_address
2. react-native run-android

To Install React Native maps and react native map clsutering

npm install react-native-map-clustering react-native-maps --save


After that navigate to AndroidManifest.xml at android/app/src/main

Add the below code at last node just before closing of application and manifest

<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyC-V3J1Wz4wqgHqrqffIeZqhVM0gDfTsIg"/> <!-- Your key goes here. -->
 
   <!-- You will also only need to add this uses-library tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
   
   Run the project by react-native run-android and you will get below output screen
   ![image](https://user-images.githubusercontent.com/4814456/181439610-80b7f592-740d-4c5a-a231-188c6aa192d1.png)
