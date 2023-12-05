import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzhykbplsgtdrqdicjlb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6aHlrYnBsc2d0ZHJxZGljamxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MjY0MDEsImV4cCI6MjAxNzIwMjQwMX0.oaCX_2R_tiYT4vpKACldJ3VH3uD8LFwuLg5xJAtUpLk'

const supabase = createClient(supabaseUrl, supabaseKey)


function getUser() {
  const user = supabase.auth.user();
  
  return user;
}

export default getUser;
