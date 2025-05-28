<template>
    <div class="h-full bg-gray-100 dark:bg-gray-900 flex items-start justify-center px-4 py-8">
      <div class="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow font-sans">
        <h1 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">My Todo List</h1>
  
        <div class="flex items-center mb-4 gap-2">
            <input
                v-model="newTodo"
                @keyup.enter="addTodo"
                placeholder="Add a new task"
                class="flex-1 px-4 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                @click="addTodo"
                class="p-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
        </div>

  
        <div class="flex justify-center gap-2 mb-4">
          <button
            @click="filter = 'all'"
            :class="filter === 'all' ? activeTabClass : inactiveTabClass"
          >
            全部
          </button>
          <button
            @click="filter = 'active'"
            :class="filter === 'active' ? activeTabClass : inactiveTabClass"
          >
            未完成
          </button>
          <button
            @click="filter = 'completed'"
            :class="filter === 'completed' ? activeTabClass : inactiveTabClass"
          >
            已完成
          </button>
        </div>
  
        <div class="overflow-y-auto max-h-[50vh] mb-4 pr-1">
            <ul>
                <li
                v-for="(todo, index) in filteredTodos"
                :key="index"
                class="mb-2 flex justify-between items-center"
                >
                <span
                    :class="{ 'line-through text-gray-500': todo.completed }"
                    class="cursor-pointer"
                    @click="toggleComplete(index)"
                >
                    {{ todo.text }}
                </span>
                <button
                    @click="removeTodo(index)"
                    class="text-red-500 hover:text-red-700 text-base transition-all duration-200 transform hover:scale-125"
                >
                    <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
                </li>
            </ul>
        </div>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const newTodo = ref('');
  const todos = ref([]);
  
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push({ text: newTodo.value, completed: false });
      newTodo.value = '';
    }
  };
  
  const toggleComplete = (index) => {
    todos.value[index].completed = !todos.value[index].completed;
  };
  
  const removeTodo = (index) => {
    todos.value.splice(index, 1);
  };
  
  const filter = ref('all');
  const filteredTodos = computed(() => {
    if (filter.value === 'completed') {
      return todos.value.filter((todo) => todo.completed);
    } else if (filter.value === 'active') {
      return todos.value.filter((todo) => !todo.completed);
    } else {
      return todos.value;
    }
  });
  
  const activeTabClass =
    'bg-blue-600 text-white font-medium px-4 py-1.5 rounded-full shadow transition';
  const inactiveTabClass =
    'bg-transparent border border-gray-400 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1.5 rounded-full transition';
  </script>
  