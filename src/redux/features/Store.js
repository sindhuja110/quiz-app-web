import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/userSlice";
import { AuthApi } from "./api/AuthApi";
import { TrainApi } from "./api/TrainApi";
import { StationApi } from "./api/StationApi";
import { DashboardApi } from "./api/DashboardApi";
import { UserListApi } from "./api/UserListApi";
import { WithdrawrequestApi } from "./api/WithdrawRequestApi";
import { TransactionhistoryApi} from "./api/TransactionHistoryApi";
import { IssueApi } from "./api/IssueApi";
import { FeedbackApi } from "./api/FeedBackApi";
import { IndividualNotificationApi } from "./api/IndividualNotificationApi";
import { GroupNotificationApi } from "./api/GroupNotificationApi";
import { GroupApi } from "./api/GroupApi";
import { NewsApi } from "./api/NewsApi";
import { LocalTrainApi } from "./api/LocalTrainApi";
import { MetroTrainApi } from "./api/MetroTrainApi";
import { SettingImageApi } from "./api/SettingPageApi";
import { GeneralNotificationApi } from "./api/GeneralNotificationApi";
import { RatingsApi } from "./api/RatingsApi";
import { PnrStatusApi } from "./api/PnrStatusApi";
import { CoachPositionApi } from "./api/CoachPositionApi";
import { FareComparisonApi } from "./api/FareComparisonAPI";
import { RewardsApi } from "./api/RewardsApi";
import { PremiumUserApi } from "./api/PremiumUserApi";



export const store = configureStore({
  reducer: {
    User: UserReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserListApi.reducerPath]: UserListApi.reducer,
    [TrainApi.reducerPath]: TrainApi.reducer,
    [StationApi.reducerPath]: StationApi.reducer,
    [GeneralNotificationApi.reducerPath]: GeneralNotificationApi.reducer,
    [FeedbackApi.reducerPath]: FeedbackApi.reducer,
    [DashboardApi.reducerPath]: DashboardApi.reducer,
    [WithdrawrequestApi.reducerPath]: WithdrawrequestApi.reducer,
    [TransactionhistoryApi.reducerPath]: TransactionhistoryApi.reducer,
    [IssueApi.reducerPath]:IssueApi.reducer,
    [IndividualNotificationApi.reducerPath]:IndividualNotificationApi.reducer,
    [GroupNotificationApi.reducerPath]:GroupNotificationApi.reducer,
    [GroupApi.reducerPath]:GroupApi.reducer,
    [NewsApi.reducerPath]:NewsApi.reducer,
    [LocalTrainApi.reducerPath]:LocalTrainApi.reducer,
    [MetroTrainApi.reducerPath]:MetroTrainApi.reducer,
    [SettingImageApi.reducerPath]:SettingImageApi.reducer,
    [RatingsApi.reducerPath]:RatingsApi.reducer,
    [PnrStatusApi.reducerPath]:PnrStatusApi.reducer,
    [CoachPositionApi.reducerPath]:CoachPositionApi.reducer,
    [FareComparisonApi.reducerPath]:FareComparisonApi.reducer,
    [RewardsApi.reducerPath]:RewardsApi.reducer,
    [PremiumUserApi.reducerPath]:PremiumUserApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      AuthApi.middleware,
      UserListApi.middleware,
      TrainApi.middleware,
      StationApi.middleware,
      GeneralNotificationApi.middleware,
      FeedbackApi.middleware,
      DashboardApi.middleware,
      WithdrawrequestApi.middleware,
      TransactionhistoryApi.middleware,
      IssueApi.middleware,
      IndividualNotificationApi.middleware,
      GroupNotificationApi.middleware,
      GroupApi.middleware,
      NewsApi.middleware,
      LocalTrainApi.middleware,
      MetroTrainApi.middleware,
      SettingImageApi.middleware,
      RatingsApi.middleware,
      PnrStatusApi.middleware,
      CoachPositionApi.middleware,
      FareComparisonApi.middleware,
      RewardsApi.middleware,
      PremiumUserApi.middleware,
    ]),
});
