/*
# Create membership_interests table

1. New Tables
- `membership_interests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the prospective member
  - `role` (text, not null) — their role/title (e.g. paramedic, ambulance operator)
  - `city` (text, not null) — city they operate in
  - `contact` (text, not null) — phone or email
  - `service_type` (text, not null) — type of emergency service they provide
  - `message` (text, nullable) — optional additional info
  - `created_at` (timestamptz, default now)

2. Security
- Enable RLS on `membership_interests`.
- This is a no-auth ideathon prototype: the frontend uses the anon key.
- INSERT is allowed for anon + authenticated so the public form can submit.
- SELECT/UPDATE/DELETE are restricted to authenticated only (admin review), so anon submissions cannot be read back by the public client.

3. Notes
- Single-tenant prototype table. No user_id / auth.users linkage.
- The membership form does NOT process payments or emergency requests — it only records interest.
*/

CREATE TABLE IF NOT EXISTS membership_interests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  city text NOT NULL,
  contact text NOT NULL,
  service_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE membership_interests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_membership_interests" ON membership_interests;
CREATE POLICY "anon_insert_membership_interests"
ON membership_interests FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_membership_interests" ON membership_interests;
CREATE POLICY "auth_select_membership_interests"
ON membership_interests FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_membership_interests" ON membership_interests;
CREATE POLICY "auth_update_membership_interests"
ON membership_interests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_membership_interests" ON membership_interests;
CREATE POLICY "auth_delete_membership_interests"
ON membership_interests FOR DELETE
TO authenticated USING (true);
