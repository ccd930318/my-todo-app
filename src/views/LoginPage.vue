<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 class="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">登入</h2>
  
        <input
          v-model="username"
          type="text"
          placeholder="帳號"
          class="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <input
          v-model="password"
          type="password"
          placeholder="密碼"
          class="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <p v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</p>
  
        <button
          @click="login"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          登入
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const error = ref('');
  
  // 模擬帳號密碼驗證（後期可改接 Firebase 或後端）
  const login = () => {
    if (username.value === 'user' && password.value === '123456') {
      localStorage.setItem('user', JSON.stringify({ username: username.value }));
      router.push('/todo');
    } else {
      error.value = '帳號或密碼錯誤';
    }
  };
  </script>
  