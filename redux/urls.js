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

  // Posts
createPost:"/posts/create",
getPosts:"/posts/all-posts",
getSinglePost:"/posts/post/",
likePost:"/posts/post/like",
dislikePost:"/posts/post/unlike",
  // Category

  // Comment
createComment:"/comments/create",
getParticularPostComments:"/comments/",
replyComment:"/comments/reply",
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
  sendMessage: '/message/send_message'
};


