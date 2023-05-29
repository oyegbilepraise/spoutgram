export const URL = {
  // Auth
  auth: "/auth/welcome",
  login: "/auth/login",
  register: "/auth/register",
  generateEmailOTP: "/auth/generate-email-verification-token",
  verifyEmail: "/auth/verify-email",
  forgotPassword: "/auth/generate-forgotpassword-token",
  changePassword: "/auth/reset-password",

  // Users
  createProfile: "/users/create-profile",
  verifyUsername: "/users/verify-username",
  updateProfile: "/users/user/update",
  updateProfilePicture: "/users/user/profile-photo/upload",
  getAllUsers: "/users/all-users",
  getSingleUser: "/users/user/",
  // Posts
createPost:"/posts/create",
getPosts:"/posts/all-posts",
getSinglePost:"/posts/post/",
likePost:"/posts/post/like",
dislikePost:"/posts/post/unlike",
getUserPost: "/users/posts/",
repost:"/posts/repost/",
  // Category

  // Comment
createComment:"/comments/create",
getParticularPostComments:"/comments/",
replyComment:"/comments/reply",
likeComment:"/comments/like/",
likeReply:"/comments/like/reply/",
getOneComment:"/comments/comment/",
getParticularCommentReplies:"/comments/all_reply/",

  // Link

  // Profile.

  // Follow 
  follow: '/users/user/follow',

  // Boomarks
  boomarks: '/posts/bookmarks',

  // Views
  views: '/posts/view_post/',

  //MESSAGES
  suggestedUsers:"/message/suggested",
  friends: '/message/friends',
  sendMessage: '/message/send_message',

  //Notifications
  socialNotification: "/notification/social",
  unreadNotification: "/notification/unread"
};


