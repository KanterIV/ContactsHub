export const getCurrentAvatarUrl = url => {
  if (url.includes('www.gravatar.com')) {
    return url;
  } else {
    return `https://contacts-reader-02va.onrender.com/${url}`;
  }
};
