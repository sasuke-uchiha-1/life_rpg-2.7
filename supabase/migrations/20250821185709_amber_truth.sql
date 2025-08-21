/*
  # Add profile questions to users table

  1. New Columns
    - Add profile question fields to users table for AI quest generation
    - Each question gets its own field for clean data structure
    
  2. Security
    - Users can update their own profile data
*/

DO $$
BEGIN
  -- Add profile question columns if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'mission_statement'
  ) THEN
    ALTER TABLE users ADD COLUMN mission_statement text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'biggest_dream'
  ) THEN
    ALTER TABLE users ADD COLUMN biggest_dream text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'daily_routine'
  ) THEN
    ALTER TABLE users ADD COLUMN daily_routine text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'greatest_strength'
  ) THEN
    ALTER TABLE users ADD COLUMN greatest_strength text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'biggest_weakness'
  ) THEN
    ALTER TABLE users ADD COLUMN biggest_weakness text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'ideal_day'
  ) THEN
    ALTER TABLE users ADD COLUMN ideal_day text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'biggest_challenge'
  ) THEN
    ALTER TABLE users ADD COLUMN biggest_challenge text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'motivation_source'
  ) THEN
    ALTER TABLE users ADD COLUMN motivation_source text;
  END IF;
END $$;