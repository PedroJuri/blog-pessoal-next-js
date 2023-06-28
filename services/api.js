import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xvdinzelztgcnnribmhn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZGluemVsenRnY25ucmlibWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5MTI4MjIsImV4cCI6MjAwMzQ4ODgyMn0.ZZhuQQD-xm0iAT9M0z_gJ9x5XGMbzALYq5m5g8-IQ9I",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZGluemVsenRnY25ucmlibWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5MTI4MjIsImV4cCI6MjAwMzQ4ODgyMn0.ZZhuQQD-xm0iAT9M0z_gJ9x5XGMbzALYq5m5g8-IQ9I"
    }
})