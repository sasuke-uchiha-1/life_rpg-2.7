/*
  # Fix user creation trigger

  This migration fixes the database error that occurs when new users sign up by:
  
  1. Database Functions
     - Creates or replaces the `initialize_user_data` function to properly handle new user creation
     - Ensures all required fields are populated with appropriate defaults
     - Handles the relationship between auth.users and public.users tables
  
  2. Triggers
     - Creates the `on_auth_user_created` trigger to automatically run when new users sign up
     - Links the auth user ID to the public users table
  
  3. Security
     - Maintains existing RLS policies
     - Ensures proper data isolation between users
*/

-- Create or replace the function that initializes user data
CREATE OR REPLACE FUNCTION public.initialize_user_data()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into public.users table
  INSERT INTO public.users (
    auth_user_id,
    email,
    username,
    character_class,
    avatar_emoji,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    'warrior',
    '🎯',
    NOW(),
    NOW()
  );

  -- Initialize user XP
  INSERT INTO public.user_xp (
    user_id,
    total_xp,
    level,
    updated_at
  ) VALUES (
    (SELECT id FROM public.users WHERE auth_user_id = NEW.id),
    0,
    1,
    NOW()
  );

  -- Initialize user streaks
  INSERT INTO public.user_streaks (
    user_id,
    current_streak,
    longest_streak,
    last_quest_date,
    updated_at
  ) VALUES (
    (SELECT id FROM public.users WHERE auth_user_id = NEW.id),
    0,
    0,
    NULL,
    NOW()
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.initialize_user_data();