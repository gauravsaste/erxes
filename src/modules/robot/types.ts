export type IFeature = {
  name: string;
  text: string;
  icon: string;
  color: string;
  videoUrl: string;
  videoThumb: string;
  description: string;
  settings: string[];
  settingsDetails: { [key: string]: { name: string; url: string } };
  isComplete: boolean;
  showSettings: boolean;
};

export type StepsCompletenessQueryResponse = {
  onboardingStepsCompleteness: { [key: string]: boolean };
  subscribeToMore: any;
  loading: boolean;
  refetch: () => void;
};

export type GetAvailableFeaturesQueryResponse = {
  onboardingGetAvailableFeatures: IFeature[];
  subscribeToMore: any;
  loading: boolean;
  refetch: () => void;
};

export type CompleteShowStepMutationResponse = {
  completeShowStepMutation: (
    params: { variables: { step: string } }
  ) => Promise<any>;
};

export type ForceCompleteMutationResponse = {
  forceCompleteMutation: () => Promise<any>;
};

export type IRobotJob = {
  _id: string;
  content: string;
  isNotified: boolean;
};

export type IRobotJobDetails = {
  title: string;
  description: string;
  icon: string;
  color: string;
};
