export interface Exam {
  id: string; // 一意のID
  name: string; // 試験名
  description?: string; // 試験の詳細説明
  subjects: Subject[]; // 試験科目
  // IPA試験を想定した追加項目（例）
  examDate?: string; // 試験日 (YYYY-MM-DD)
  passingScore?: number; // 合格基準点
  examDurationMinutes?: number; // 試験時間（分）
  officialWebsiteUrl?: string; // 公式サイトのURL
  syllabusOverview?: string; // 出題範囲の概要
}

export interface Subject {
  id: string;
  name: string;
  topics: Topic[];
  // IPA試験を想定した追加項目（例）
  weighting?: number; // 出題割合や配点
  completionRate?: number; // 学習完了率（0-100）
}

export interface Topic {
  id: string;
  name: string;
  completed: boolean; // 学習完了したか
  pastExamLinks?: string[]; // 関連する過去問へのリンク（URLの配列）
  referenceLinks?: string[]; // 関連する参考情報へのリンク（URLの配列）
  // IPA試験を想定した追加項目（例）
  importance?: 'low' | 'medium' | 'high'; // 重要度
  correctAnswerRate?: number; // 正答率（0-100）
}
