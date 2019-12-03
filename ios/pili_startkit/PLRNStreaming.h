//
//  PLRNStreaming.h
//  pili_startkit
//
//  Created by 何云旗 on 2019/12/3.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTView.h>
#import <PLMediaStreamingKit/PLMediaStreamingKit.h>
#import "Reachability.h"
#import <asl.h>

@class RCTEventDispatcher;

NS_ASSUME_NONNULL_BEGIN

@interface PLRNStreaming : UIView<PLMediaStreamingSessionDelegate,PLStreamingSendingBufferDelegate>

@property (nonatomic, strong) PLMediaStreamingSession  *session;
@property (nonatomic, strong) Reachability *internetReachability;
@property (nonatomic, strong) NSDictionary  *profile;
@property (nonatomic, strong) NSString *rtmpURL;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end

NS_ASSUME_NONNULL_END
