//
//  PLRNViewManager.m
//  pili_startkit
//
//  Created by 何云旗 on 2019/12/3.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "PLRNViewManager.h"
#import <MapKit/MapKit.h>

@implementation PLRNViewManager
RCT_EXPORT_MODULE(PLRNMediaStreaming)

- (UIView *)view {
  return [[MKMapView alloc] init];
}

@end
