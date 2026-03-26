export interface QuizQuestion {
  id: number;
  sentence: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizVersion {
  name: string;
  label: string;
  description: string;
  questions: QuizQuestion[];
}

export const quizVersions: Record<string, QuizVersion> = {
  pretest: {
    name: 'pretest',
    label: '前測 (Pretest)',
    description: '第二週課程開始前 - 10 分鐘內完成',
    questions: [
      {
        id: 1,
        sentence: "The sunset over the ocean was absolutely (1)_____.",
        options: ["beautiful", "dangerous", "boring", "simple"],
        correctAnswer: "beautiful"
      },
      {
        id: 2,
        sentence: "My best (2)_____ and I have known each other since elementary school.",
        options: ["teacher", "friend", "family", "neighbor"],
        correctAnswer: "friend"
      },
      {
        id: 3,
        sentence: "She felt (3)_____ when she received the good news about her promotion.",
        options: ["sad", "angry", "happy", "tired"],
        correctAnswer: "happy"
      },
      {
        id: 4,
        sentence: "The volunteers worked together to (4)_____ the elderly people in the community.",
        options: ["hurt", "avoid", "ignore", "help"],
        correctAnswer: "help"
      },
      {
        id: 5,
        sentence: "It is (5)_____ to eat healthy food and exercise regularly.",
        options: ["difficult", "impossible", "important", "unusual"],
        correctAnswer: "important"
      },
      {
        id: 6,
        sentence: "Children (6)_____ new things every day at school.",
        options: ["forget", "learn", "ignore", "avoid"],
        correctAnswer: "learn"
      },
      {
        id: 7,
        sentence: "She (7)_____ spending time with her family more than anything else.",
        options: ["hate", "dislike", "love", "avoid"],
        correctAnswer: "love"
      },
      {
        id: 8,
        sentence: "He plays (8)_____ every evening and dreams of becoming a professional musician.",
        options: ["sports", "games", "music", "dance"],
        correctAnswer: "music"
      },
      {
        id: 9,
        sentence: "The (9)_____ in this national park is breathtaking with its mountains and forests.",
        options: ["building", "city", "nature", "street"],
        correctAnswer: "nature"
      },
      {
        id: 10,
        sentence: "She loves to (10)_____ to different countries and experience new cultures.",
        options: ["stay", "work", "travel", "study"],
        correctAnswer: "travel"
      }
    ]
  },

  immediate_posttest: {
    name: 'immediate_posttest',
    label: '立即後測 (Immediate Posttest)',
    description: '第二週課程最後 - 10 分鐘內完成',
    questions: [
      {
        id: 1,
        sentence: "The (1)_____ garden in the park attracts visitors from all over the city.",
        options: ["beautiful", "dangerous", "boring", "simple"],
        correctAnswer: "beautiful"
      },
      {
        id: 2,
        sentence: "My (2)_____ invited me to join his book club next month.",
        options: ["teacher", "friend", "family", "neighbor"],
        correctAnswer: "friend"
      },
      {
        id: 3,
        sentence: "The team felt (3)_____ after winning the championship game.",
        options: ["sad", "angry", "happy", "tired"],
        correctAnswer: "happy"
      },
      {
        id: 4,
        sentence: "The organization aims to (4)_____ people in need through various programs.",
        options: ["hurt", "avoid", "ignore", "help"],
        correctAnswer: "help"
      },
      {
        id: 5,
        sentence: "Good communication skills are (5)_____ for success in any career.",
        options: ["difficult", "impossible", "important", "unusual"],
        correctAnswer: "important"
      },
      {
        id: 6,
        sentence: "Students (6)_____ about different cultures through international exchange programs.",
        options: ["forget", "learn", "ignore", "avoid"],
        correctAnswer: "learn"
      },
      {
        id: 7,
        sentence: "He (7)_____ reading books and often spends his weekends in the library.",
        options: ["hate", "dislike", "love", "avoid"],
        correctAnswer: "love"
      },
      {
        id: 8,
        sentence: "The concert featured (8)_____ from famous composers around the world.",
        options: ["sports", "games", "music", "dance"],
        correctAnswer: "music"
      },
      {
        id: 9,
        sentence: "Protecting the (9)_____ is everyone's responsibility for future generations.",
        options: ["building", "city", "nature", "street"],
        correctAnswer: "nature"
      },
      {
        id: 10,
        sentence: "Many people (10)_____ abroad to broaden their horizons and gain new experiences.",
        options: ["stay", "work", "travel", "study"],
        correctAnswer: "travel"
      }
    ]
  }
};

export function getQuizVersion(testType: string): QuizVersion | undefined {
  return quizVersions[testType];
}
