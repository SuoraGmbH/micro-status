export interface Tweet extends TweetWithoutId {
  id: number;
}

export interface TweetWithoutId {
  userId: string;
  message: string;
  date: string;
}
