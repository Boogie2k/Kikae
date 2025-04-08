export type UserProfile = {
  access: "FREE_SUBSCRIBER" | "PAID_SUBSCRIBER"; // Assuming there might be other access levels
  courseOfStudy: string | null;
  currentAge: string | null;
  currentCity: string | null;
  dateOfBirth: string | null; // YYYY-MM-DD format
  datingPreference: "male" | "female" | "other" | null;
  drinkingPreference: string | null; // Could specify possible values if known
  educationalLevel: "undergraduate" | "graduate" | "postgraduate" | null;
  email: string;
  firstName: string;
  funFactAboutYou: string | null;
  gender: "male" | "female" | "other";
  height: number | null; // Assuming height is in numeric format
  id: number;
  idealFirstDate: string | null;
  interests: Array<{ id: number; interestName: string }> | null; // Adjust fields based on actual structure
  isActive: boolean;
  isProfileBoosted: boolean;
  isProfilePrivate: boolean;
  isReadReceiptOn: boolean;
  isStudentEmailVerified: boolean | null;
  isUserDeactivated: boolean | null;
  isUserDeleted: boolean | null;
  lastActive: string | null; // Could further specify a time format
  lastName: string;
  lookingFor: string | null;
  phoneNumber: string | null;
  profileCompletionRate: number;
  religion: string | null;
  schoolName: string | null;
  smokingPreference: string | null; // Could specify possible values if known
  studentEmail: string | null;
  userBio: string | null;
  userLocationResponse: {
    userLocation: {
      latitude: number;
      longitude: number;
      city: string;
      country: string;
    };
  } | null;
  userPhoto: Array<{ imageUrl: string; isMain: boolean }> | null; // Adjust fields based on actual structure
  username: string;
  zodiacSign: string | null;
};

export type reportedUsers = {
  reportId: string;
  reportedUserId: string;
  reportedUserName: string;
  reportingUserId: string;
  reportingUserName: string;
  reportDate: string;
  reason: string;
};

export type AdminProfileType = {
  access: "ADMIN" | "SUPER_ADMIN";
  defaultPassword: null | string;
  email: string;
  firstname: string;
  id: string;
  isBlocked: boolean;
  lastname: string;
};

export type userAuditTrail = {
  userId: string;
  date: string;
  email: string;
  photos: string[];
  school: string;
  schoolEmail: string;
};
