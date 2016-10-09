/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import <Smooch/Smooch.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  //jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"smooch"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:0.93f green:0.13f blue:0.18f alpha:1.0f];
//  UIImage *image = [UIImage imageNamed:@"splash.png"];
//  if (image) {
//    UIImageView *launchView = [[UIImageView alloc] initWithImage: image];
//    launchView.contentMode = UIViewContentModeScaleAspectFit;
//    launchView.image = image;
//    rootView.loadingView = launchView;
//  }
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  // Initialize Smooch - these instructions are also available on [app.smooch.io](https://app.smooch.io)
  [Smooch initWithSettings:
   [SKTSettings settingsWithAppToken:@"buyfepbz4gbr2bc3m2uz8jatt"]];
  return YES;
}

@end
