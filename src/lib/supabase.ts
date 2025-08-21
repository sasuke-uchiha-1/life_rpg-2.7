import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface User {
  id: string;
  auth_user_id: string;
  email: string;
  username?: string;
  character_class?: string;
  avatar_emoji?: string;
  created_at: string;
  updated_at: string;
  mission_statement?: string;
  biggest_dream?: string;
  daily_routine?: string;
  greatest_strength?: string;
  biggest_weakness?: string;
  ideal_day?: string;
  biggest_challenge?: string;
  motivation_source?: string;
}

export interface Quest {
  id: string;
  user_id: string;
  title: string;
  category: string;
  status: 'pending' | 'completed';
  xp_reward: number;
  completed_at?: string;
  created_at: string;
}

export interface UserXP {
  id: string;
  user_id: string;
  total_xp: number;
  level: number;
  updated_at: string;
}

export interface UserStreak {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_quest_date?: string;
  updated_at: string;
}

export interface SkillProgress {
  id: string;
  user_id: string;
  skill_name: string;
  level: number;
  xp: number;
  updated_at: string;
}

export interface Reflection {
  id: string;
  user_id: string;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}