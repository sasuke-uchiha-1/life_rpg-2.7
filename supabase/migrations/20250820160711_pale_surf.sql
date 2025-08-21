/*
  # Create reflections table for Q&A system

  1. New Tables
    - `reflections`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `question` (text, the question asked)
      - `answer` (text, user's response)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `reflections` table
    - Add policies for users to manage their own reflections
*/

CREATE TABLE IF NOT EXISTS reflections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reflections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own reflections"
  ON reflections
  FOR SELECT
  TO authenticated
  USING (user_id IN (
    SELECT users.id FROM users WHERE users.auth_user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own reflections"
  ON reflections
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id IN (
    SELECT users.id FROM users WHERE users.auth_user_id = auth.uid()
  ));

CREATE POLICY "Users can update own reflections"
  ON reflections
  FOR UPDATE
  TO authenticated
  USING (user_id IN (
    SELECT users.id FROM users WHERE users.auth_user_id = auth.uid()
  ))
  WITH CHECK (user_id IN (
    SELECT users.id FROM users WHERE users.auth_user_id = auth.uid()
  ));

CREATE POLICY "Users can delete own reflections"
  ON reflections
  FOR DELETE
  TO authenticated
  USING (user_id IN (
    SELECT users.id FROM users WHERE users.auth_user_id = auth.uid()
  ));